// components/workbook/section.tsx
"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type SectionProps = {
  id: string
  index: string
  eyebrow?: string
  title: string
  children: ReactNode
  dark?: boolean
}

export function Section({ id, index, eyebrow, title, children, dark }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-4 border-b border-border px-6 py-16 md:px-16 md:py-24 ${
        dark ? "bg-brand-green text-white" : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow animado */}
        <div
          className="flex items-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0ms, transform 0.5s ease 0ms",
          }}
        >
          <span className="font-serif text-sm font-semibold text-brand-lime">{index}</span>
          <span
            className="h-px bg-brand-lime origin-left"
            style={{
              width: visible ? "3rem" : "0",
              transition: "width 0.5s ease 0.1s",
            }}
          />
          {eyebrow && (
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                dark ? "text-white/60" : "text-muted-foreground"
              }`}
            >
              {eyebrow}
            </span>
          )}
        </div>

        {/* Título animado */}
        <h2
          className={`mt-5 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${
            dark ? "text-white" : "text-brand-green"
          }`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          {title}
        </h2>

        {/* Conteúdo animado */}
        <div
          className="mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.22s, transform 0.7s ease 0.22s",
          }}
        >
          {children}
        </div>
      </div>
    </section>
  )
}