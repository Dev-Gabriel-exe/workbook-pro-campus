"use client"

import { useLanguage } from "@/components/workbook/language-provider"
import type { Lang } from "@/lib/i18n"

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "pt", label: "PT-BR" },
]

export function LanguageToggle({ variant = "sidebar" }: { variant?: "sidebar" | "floating" }) {
  const { lang, setLang } = useLanguage()

  const base =
    variant === "floating"
      ? "border border-border bg-card/90 shadow-sm backdrop-blur"
      : "border border-sidebar-border bg-sidebar-accent/30"

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-0.5 rounded-full p-0.5 ${base}`}
    >
      {OPTIONS.map((opt) => {
        const isActive = lang === opt.value
        const activeCls =
          variant === "floating"
            ? "bg-brand-green text-white"
            : "bg-sidebar-primary text-sidebar-primary-foreground"
        const idleCls =
          variant === "floating"
            ? "text-muted-foreground hover:text-foreground"
            : "text-white/60 hover:text-white"
        return (
          <button
            key={opt.value}
            onClick={() => setLang(opt.value)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors ${
              isActive ? activeCls : idleCls
            }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
