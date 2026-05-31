// components/workbook/timeline.tsx
"use client"

import { useEffect, useRef, useState } from "react"

type TimelineItem = {
  year: string
  title: string
  detail: string
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeItems, setActiveItems] = useState<boolean[]>(
    new Array(items.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Aciona cada item com delay progressivo
          items.forEach((_, i) => {
            setTimeout(() => {
              setActiveItems((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * 120)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [items])

  return (
    <div ref={containerRef} className="relative">
      <div className="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-7 lg:gap-3 lg:overflow-visible">
        {items.map((item, i) => (
          <div
            key={item.year}
            className="relative min-w-[200px] flex-1 lg:min-w-0"
            style={{
              opacity: activeItems[i] ? 1 : 0,
              transform: activeItems[i] ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
            }}
          >
            {/* Linha + ponto */}
            <div className="flex items-center">
              <span
                className="z-10 flex size-3 shrink-0 rounded-full ring-4 ring-brand-lime/20"
                style={{
                  backgroundColor: activeItems[i] ? "var(--brand-lime, #a7d36a)" : "transparent",
                  borderWidth: 2,
                  borderColor: "#a7d36a",
                  transition: `background-color 0.3s ease ${i * 120 + 200}ms`,
                }}
              />
              {i < items.length - 1 && (
                <span
                  className="h-px flex-1 origin-left"
                  style={{
                    backgroundColor: "#a7d36a",
                    opacity: 0.3,
                    transform: activeItems[i] ? "scaleX(1)" : "scaleX(0)",
                    transition: `transform 0.4s ease ${i * 120 + 100}ms`,
                  }}
                />
              )}
            </div>

            {/* Conteúdo */}
            <div className="mt-4 pr-4">
              <p className="font-serif text-2xl font-semibold text-brand-green">
                {item.year}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}