import { NextRequest, NextResponse } from "next/server"
import puppeteer from "puppeteer-core"

export const maxDuration = 60

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
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://production-sfo.browserless.io?token=${browserlessToken}`,
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })

    await page.goto(`${baseUrl}?lang=${lang}`, {
      waitUntil: "networkidle0",
      timeout: 45000,
    })

    // Oculta sidebar, remove margem
    await page.evaluate(() => {
      document.querySelectorAll(".no-print").forEach((el) => {
        ;(el as HTMLElement).style.display = "none"
      })
      const main = document.querySelector("main") as HTMLElement
      if (main) main.style.marginLeft = "0"
      document.documentElement.style.scrollBehavior = "auto"
    })

    // Scrolla a página inteira para disparar todas as animações
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

    // Aguarda animações terminarem após o scroll
    await new Promise((r) => setTimeout(r, 2000))

    // Gera PDF direto pelo Puppeteer (muito mais rápido que screenshots)
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
  } catch (err) {
    if (browser) await browser.close()
    console.error("PDF generation error:", err)
    return NextResponse.json({ error: "Falha ao gerar PDF" }, { status: 500 })
  }
}