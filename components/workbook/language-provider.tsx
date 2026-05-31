"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { content, type Content, type Lang } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "pcj-workbook-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    // 1. Prioridade: parâmetro ?lang= na URL (usado pelo Puppeteer)
    const urlParams = new URLSearchParams(window.location.search)
    const urlLang = urlParams.get("lang") as Lang | null
    if (urlLang === "en" || urlLang === "pt") {
      setLangState(urlLang)
      window.localStorage.setItem(STORAGE_KEY, urlLang)
      return
    }

    // 2. localStorage
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored === "en" || stored === "pt") {
      setLangState(stored)
      return
    }

    // 3. Idioma do navegador
    if (navigator.language.toLowerCase().startsWith("pt")) {
      setLangState("pt")
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en"
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const toggle = () => setLang(lang === "en" ? "pt" : "en")

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}