"use client"

import { useState } from "react"
import { Printer, Loader2 } from "lucide-react"
import { useLanguage } from "@/components/workbook/language-provider"

export function ExportButton() {
  const { lang, t } = useLanguage()
  const [loading, setLoading] = useState(false)

  // Só mostra em desenvolvimento local
  if (process.env.NODE_ENV !== "development") return null

  const handleExport = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/pdf?lang=${lang}`)
      if (!res.ok) throw new Error("Erro ao gerar PDF")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `procampus-workbook-2026-${lang}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } catch (err) {
      alert("Erro ao gerar PDF. Tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-sidebar-primary px-3 py-2.5 text-sm font-semibold text-sidebar-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          {lang === "pt" ? "Gerando PDF..." : "Generating PDF..."}
        </>
      ) : (
        <>
          <Printer className="size-4" />
          {t.ui.exportPrint}
        </>
      )}
    </button>
  )
}