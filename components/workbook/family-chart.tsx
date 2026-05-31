//  components/workbook/family-chart.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import {
  Bar, BarChart, CartesianGrid, Cell,
  LabelList, ResponsiveContainer, XAxis, YAxis,
} from "recharts"
import { useLanguage } from "@/components/workbook/language-provider"

const COLORS = ["var(--brand-green)", "var(--brand-lime)"]

export function FamilyChart() {
  const { t } = useLanguage()
  const { chartTitle, chartSubtitle, chartData } = t.impact

  const ref = useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Pequeno delay para o card terminar de aparecer antes das barras
          setTimeout(() => setAnimate(true), 150)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <h3 className="font-serif text-xl font-semibold text-brand-green">{chartTitle}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{chartSubtitle}</p>
      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 24, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="label"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 13 }}
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              tickFormatter={(v) => `${v}%`}
              width={44}
            />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              barSize={96}
              isAnimationActive={animate}
              animationBegin={0}
              animationDuration={900}
              animationEasing="ease-out"
            >
              {chartData.map((_: unknown, i: number) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                formatter={(v: number) => `${v}%`}
                fill="var(--brand-green)"
                fontSize={16}
                fontWeight={700}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}