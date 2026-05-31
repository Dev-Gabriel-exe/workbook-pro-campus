import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer-core"

export const maxDuration = 60 // Vercel: permite até 60s nessa rota

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lang = searchParams.get("lang") ?? "pt"

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://workbook-pro-campus.vercel.app"
  const browserlessToken = process.env.BROWSERLESS_TOKEN

  if (!browserlessToken) {
    return NextResponse.json({ error: "BROWSERLESS_TOKEN não configurado" }, { status: 500 })
  }

  let browser
  try {
    // Conecta ao Browserless.io em vez de lançar Puppeteer local
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://production-sfo.browserless.io?token=${browserlessToken}`,
    })

    const page = await browser.newPage()

    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 })

    await page.goto(`${baseUrl}?lang=${lang}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    })

    // Oculta sidebar, remove margem, desativa scroll suave
    await page.evaluate(() => {
      document.querySelectorAll(".no-print").forEach((el) => {
        ;(el as HTMLElement).style.display = "none"
      })
      const main = document.querySelector("main") as HTMLElement
      if (main) main.style.marginLeft = "0"
      document.documentElement.style.scrollBehavior = "auto"
    })

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

      // Aguarda animações (contadores, fade-ins)
      await new Promise((r) => setTimeout(r, 1500))

      // Verifica se ainda há animações rodando
      await page.evaluate(() => {
        return new Promise<void>((resolve) => {
          let running = false
          document.querySelectorAll("*").forEach((el) => {
            const style = window.getComputedStyle(el)
            if (
              style.animationPlayState === "running" ||
              style.transitionDuration !== "0s"
            ) {
              running = true
            }
          })
          if (!running) resolve()
          else setTimeout(resolve, 1000)
        })
      })

      const element = await page.$(`#${id}`)
      if (!element) continue

      const screenshot = await element.screenshot({
        type: "png",
        omitBackground: false,
      })

      const box = await element.boundingBox()
      if (!box) continue

      const scale = 0.75
      const pdfPage = finalPdf.addPage([box.width * scale, box.height * scale])
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