// components/workbook/stat-card.tsx
"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

type StatCardProps = {
  value: number
  suffix?: string
  headline: string
  note?: string
  featured?: boolean
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const startTime = performance.now()
    const isFloat = !Number.isInteger(target)

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setCount(isFloat ? Math.round(current * 10) / 10 : Math.round(current))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return count
}

export function StatCard({ value, suffix = "", headline, note, featured }: StatCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const count = useCountUp(value, inView)
  const display = Number.isInteger(value) ? count.toString() : count.toFixed(1)

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
        featured
          ? "border-transparent bg-brand-green text-white"
          : "border-border bg-card text-card-foreground"
      }`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <div className="flex items-baseline">
        <span
          className={`font-serif text-5xl font-semibold tracking-tight tabular-nums md:text-6xl ${
            featured ? "text-white" : "text-brand-green"
          }`}
        >
          {display}
        </span>
        <span
          className={`ml-1 font-serif text-3xl font-semibold ${
            featured ? "text-[#a7d36a]" : "text-brand-lime"
          }`}
        >
          {suffix}
        </span>
      </div>
      <p
        className={`mt-4 text-base font-medium leading-relaxed ${
          featured ? "text-white/90" : "text-foreground"
        }`}
      >
        {headline}
      </p>
      {note && (
        <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-white/60" : "text-muted-foreground"}`}>
          {note}
        </p>
      )}
    </div>
  )
}