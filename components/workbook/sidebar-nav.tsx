// components/workbook/sidebar-nav.tsx
"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/workbook/language-provider"
import { LanguageToggle } from "@/components/workbook/language-toggle"
import { Logo } from "@/components/workbook/logo"
import { ExportButton } from "@/components/workbook/export-button"

export function SidebarNav() {
  const { t } = useLanguage()
  const [active, setActive] = useState("cover")
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Progresso de leitura — scroll position relativa à altura total
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) setProgress(Math.min((scrollTop / docHeight) * 100, 100))
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Seção ativa via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )
    t.nav.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [t.nav])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="no-print sticky top-0 z-40 flex items-center justify-between border-b border-sidebar-border bg-sidebar px-4 py-3 text-sidebar-foreground lg:hidden">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-semibold text-white">Pro Campus Júnior</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50">{t.ui.workbookTitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            className="rounded-md p-2 text-white hover:bg-sidebar-accent"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <button
          aria-label={t.ui.closeMenu}
          onClick={() => setOpen(false)}
          className="no-print fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`no-print fixed z-50 flex h-screen w-72 flex-col bg-sidebar text-sidebar-foreground transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } left-0 top-0`}
      >
        {/* Barra de progresso vertical — lado direito da sidebar */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[3px] bg-white/5">
          <div
            className="w-full rounded-full bg-brand-lime origin-top"
            style={{
              height: `${progress}%`,
              transition: "height 0.15s ease-out",
              boxShadow: "0 0 6px var(--brand-lime)",
            }}
          />
        </div>

        {/* Header */}
        <div className="border-b border-sidebar-border px-6 py-7">
          <div className="flex items-center gap-3">
            <Logo size={48} />
            <div className="leading-tight">
              <p className="font-serif text-base font-semibold text-white text-balance">
                Colégio Pro Campus Júnior
              </p>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.16em] text-sidebar-primary">
                {t.ui.distinguishedSchool}
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/50">Workbook 2026 · {t.ui.locationShort}</p>
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-0.5">
            {t.nav.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-sidebar-accent text-white translate-x-0.5"
                        : "text-white/65 hover:bg-sidebar-accent/60 hover:text-white hover:translate-x-0.5"
                    }`}
                  >
                    {/* Indicador lateral ativo */}
                    <span
                      className="absolute left-0 h-6 w-[3px] rounded-r-full bg-brand-lime transition-all duration-300"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleY(1)" : "scaleY(0)",
                      }}
                    />
                    <span
                      className={`font-serif text-xs font-semibold transition-colors duration-300 ${
                        isActive ? "text-sidebar-primary" : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="leading-tight">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="border-t border-sidebar-border px-3 py-4">
          <ExportButton />
        </div>
      </aside>
    </>
  )
}