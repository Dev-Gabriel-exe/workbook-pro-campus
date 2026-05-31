import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lang = searchParams.get("lang") ?? "pt"

  // URL base — em dev é localhost:3000, em produção é a URL do site
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

  let browser
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    })

    const page = await browser.newPage()

    // Viewport largo para simular desktop
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 })

    // Abre o site
    await page.goto(`${baseUrl}?lang=${lang}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    })

    // Injeta JS para:
    // 1. Ocultar sidebar/no-print
    // 2. Remover margem do main
    // 3. Desabilitar scroll-behavior
    await page.evaluate(() => {
      // Remove elementos de UI
      document.querySelectorAll(".no-print").forEach((el) => {
        ;(el as HTMLElement).style.display = "none"
      })
      // Remove margem do main causada pelo sidebar
      const main = document.querySelector("main") as HTMLElement
      if (main) main.style.marginLeft = "0"

      // Desabilita scroll suave
      document.documentElement.style.scrollBehavior = "auto"
    })

    // Pega todas as seções
    const sectionIds = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("main > section, main > [id]"))
        .map((el) => el.id)
        .filter(Boolean)
    })

    const PDFDocument = (await import("pdf-lib")).PDFDocument

    const finalPdf = await PDFDocument.create()

    for (const id of sectionIds) {
      // Scrolla até a seção
      await page.evaluate((sectionId) => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView()
      }, id)

      // Aguarda 1.5s para animações terminarem (contadores, fade-ins, etc.)
      await new Promise((r) => setTimeout(r, 1500))

      // Aguarda qualquer animação CSS/JS terminar
      await page.evaluate(() => {
        return new Promise<void>((resolve) => {
          // Verifica se há animações em andamento
          const animated = document.querySelectorAll("*")
          let running = false
          animated.forEach((el) => {
            const style = window.getComputedStyle(el)
            if (
              style.animationPlayState === "running" ||
              style.transitionDuration !== "0s"
            ) {
              running = true
            }
          })
          if (!running) {
            resolve()
          } else {
            // Espera mais um pouco se ainda houver animações
            setTimeout(resolve, 1000)
          }
        })
      })

      // Captura a seção
      const element = await page.$(`#${id}`)
      if (!element) continue

      const screenshot = await element.screenshot({
        type: "png",
        omitBackground: false,
      })

      // Pega dimensões da seção
      const box = await element.boundingBox()
      if (!box) continue

      // Cria página no PDF com dimensões exatas da seção (em pontos, 1px ≈ 0.75pt)
      const scale = 0.75
      const pdfPage = finalPdf.addPage([box.width * scale, box.height * scale])

      // Embute o screenshot
      const img = await finalPdf.embedPng(screenshot as Buffer)
      pdfPage.drawImage(img, {
        x: 0,
        y: 0,
        width: box.width * scale,
        height: box.height * scale,
      })
    }

    const pdfBytes = await finalPdf.save()

    await browser.close()

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="procampus-workbook-2026-${lang}.pdf"`,
      },
    })
  } catch (err) {
    if (browser) await browser.close()
    console.error("PDF generation error:", err)
    return NextResponse.json({ error: "Falha ao gerar PDF" }, { status: 500 })
  }
}