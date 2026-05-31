import { NextRequest, NextResponse } from "next/server"

export const maxDuration = 60

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lang = searchParams.get("lang") ?? "pt"

  const isLocal = process.env.NODE_ENV === "development"
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  const browserlessToken = process.env.BROWSERLESS_TOKEN

  let browser: any
  try {
    if (isLocal) {
      // ── LOCAL: puppeteer completo, screenshots por seção ──────────
      const puppeteer = (await import("puppeteer")).default

      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
      })

      const page = await browser.newPage()
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 })

      await page.goto(`${baseUrl}?lang=${lang}`, {
        waitUntil: "networkidle0",
        timeout: 60000,
      })

      await page.evaluate(() => {
        document.querySelectorAll(".no-print").forEach((el) => {
          ;(el as HTMLElement).style.display = "none"
        })
        const main = document.querySelector("main") as HTMLElement
        if (main) main.style.marginLeft = "0"
        document.documentElement.style.scrollBehavior = "auto"
      })

      const sectionIds: string[] = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("main > section, main > [id]"))
          .map((el) => (el as HTMLElement).id)
          .filter(Boolean)
      })

      const { PDFDocument } = await import("pdf-lib")
      const finalPdf = await PDFDocument.create()

      for (const id of sectionIds) {
        await page.evaluate((sectionId: string) => {
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView()
        }, id)

        // Aguarda animações (contadores, fade-ins)
        await new Promise((r) => setTimeout(r, 1500))

        await page.evaluate(() => {
          return new Promise<void>((resolve) => {
            let running = false
            document.querySelectorAll("*").forEach((el) => {
              const style = window.getComputedStyle(el)
              if (
                style.animationPlayState === "running" ||
                style.transitionDuration !== "0s"
              ) running = true
            })
            if (!running) resolve()
            else setTimeout(resolve, 1000)
          })
        })

        const element = await page.$(`#${id}`)
        if (!element) continue

        const screenshot = await element.screenshot({ type: "png", omitBackground: false })
        const box = await element.boundingBox()
        if (!box) continue

        const scale = 0.75
        const pdfPage = finalPdf.addPage([box.width * scale, box.height * scale])
        const img = await finalPdf.embedPng(screenshot as Buffer)
        pdfPage.drawImage(img, { x: 0, y: 0, width: box.width * scale, height: box.height * scale })
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

    } else {
      // ── VERCEL: puppeteer-core + Browserless, page.pdf() ─────────
      if (!browserlessToken) {
        return NextResponse.json({ error: "BROWSERLESS_TOKEN não configurado" }, { status: 500 })
      }

      const puppeteer = (await import("puppeteer-core")).default

      browser = await puppeteer.connect({
        browserWSEndpoint: `wss://production-sfo.browserless.io?token=${browserlessToken}`,
      })

      const page = await browser.newPage()
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })

      await page.goto(`${baseUrl}?lang=${lang}`, {
        waitUntil: "networkidle0",
        timeout: 45000,
      })

      await page.evaluate(() => {
        document.querySelectorAll(".no-print").forEach((el) => {
          ;(el as HTMLElement).style.display = "none"
        })
        const main = document.querySelector("main") as HTMLElement
        if (main) main.style.marginLeft = "0"
        document.documentElement.style.scrollBehavior = "auto"
      })

      // Scrolla para disparar todas as animações
      await page.evaluate(async () => {
        await new Promise<void>((resolve) => {
          let totalHeight = 0
          const distance = 400
          const timer = setInterval(() => {
            window.scrollBy(0, distance)
            totalHeight += distance
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer)
              window.scrollTo(0, 0)
              resolve()
            }
          }, 80)
        })
      })

      await new Promise((r) => setTimeout(r, 2000))

      const pdfBytes = await page.pdf({
        format: "A4",
        landscape: true,
        printBackground: true,
        margin: { top: "0", right: "0", bottom: "0", left: "0" },
      })

      await browser.close()

      return new NextResponse(pdfBytes, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="procampus-workbook-2026-${lang}.pdf"`,
        },
      })
    }

  } catch (err) {
    if (browser) await browser.close()
    console.error("PDF generation error:", err)
    return NextResponse.json({ error: "Falha ao gerar PDF" }, { status: 500 })
  }
}