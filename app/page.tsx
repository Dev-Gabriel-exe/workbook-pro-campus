"use client"

import {
  Apple, Building2, Code2, Languages, Palette, Sigma,
  FlaskConical, Atom, Sparkles, BookOpen, GraduationCap,
  Users, MonitorSmartphone, Boxes, CalendarClock, Lightbulb,
  Rocket, BookMarked, HeartHandshake, MapPin,
} from "lucide-react"
import { useLanguage } from "@/components/workbook/language-provider"
import { SidebarNav } from "@/components/workbook/sidebar-nav"
import { Section } from "@/components/workbook/section"
import { StatCard } from "@/components/workbook/stat-card"
import { FamilyChart } from "@/components/workbook/family-chart"
import { Timeline } from "@/components/workbook/timeline"
import { Logo } from "@/components/workbook/logo"
import { RichText } from "@/components/workbook/rich-text"
import { AnimatedImage } from "@/components/workbook/animated-image"

const elementIcons = [Sparkles, Users, GraduationCap, HeartHandshake, Building2, Sigma]
const disciplineIcons = [Code2, Languages, Palette, Sigma, FlaskConical, Atom, Sparkles, BookOpen]
const profileIcons = [GraduationCap, MonitorSmartphone, Apple, Users]
const featureIcons = [MonitorSmartphone, Users, Boxes, Building2, CalendarClock, GraduationCap]
const roadmapIcons = [Rocket, Sparkles, BookMarked, HeartHandshake]

export default function Page() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <main className="print-full lg:ml-72">

        {/* ─── COVER ─────────────────────────────────────────────── */}
        <section
          id="cover"
          className="relative flex min-h-screen flex-col justify-between overflow-hidden text-white"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/cover-hero.png')" }}
          />
          <div className="absolute inset-0 bg-brand-green/80" />
          

          <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 py-16 md:px-16">
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                {t.cover.eyebrow}
              </span>
            </div>
            <div className="max-w-4xl">
              <div className="mb-8 h-1.5 w-24 bg-brand-lime" />
              <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Colégio Pro Campus Júnior
              </h1>
              <p className="mt-4 font-serif text-2xl font-medium text-[#a7d36a] md:text-3xl">
                {t.cover.subtitle}
              </p>
              <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
                {t.cover.intro}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <MapPin className="size-4 text-brand-lime" />
              {t.ui.locationFull}
            </div>
          </div>
        </section>

        {/* ─── SCHOOL PROFILE ────────────────────────────────────── */}
        <Section id="profile" index="01" eyebrow={t.profile.eyebrow} title={t.profile.title}>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-5 leading-relaxed text-foreground lg:col-span-3">
              {t.profile.paragraphs.map((p, i) => (
                <p key={i}><RichText text={p} /></p>
              ))}
            </div>
            <div className="space-y-4 lg:col-span-2">
              {t.profile.facts.map((fact, i) => (
                <ProfileFact key={i} icon={profileIcons[i % profileIcons.length]} label={fact.label} value={fact.value} />
              ))}
            </div>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl">
            <img
              src="/images/profile-school.jpg"
              alt="Colégio Pro Campus Júnior"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
        </Section>

        {/* ─── VISION & LEADERSHIP ───────────────────────────────── */}
        <Section id="vision" index="02" eyebrow={t.vision.eyebrow} title={t.vision.title}>

          {/* Foto com frase curta e impactante */}
          <div className="relative mb-10 overflow-hidden rounded-3xl">
            <img
              src="/images/vision-leadership.jpg"
              alt={t.vision.eyebrow}
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-serif text-2xl font-semibold text-white md:text-3xl">
                {t.ui.langLabel === "Idioma"
                  ? "Liderança que transforma."
                  : "Leadership that transforms."}
              </p>
            </div>
          </div>

          {/* Texto completo no corpo */}
          <div className="space-y-5 leading-relaxed text-foreground">
            {t.vision.intro.map((p, i) => (
              <p key={i}><RichText text={p} /></p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.vision.elements.map((el, i) => {
              const Icon = elementIcons[i % elementIcons.length]
              return (
                <div key={el.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-green/5 text-brand-green">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-brand-green">{el.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{el.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.vision.milestones.map((m) => (
              <LeadershipMilestone key={m.year} year={m.year} title={m.title} detail={m.detail} />
            ))}
          </div>

          <p className="mt-8 leading-relaxed text-foreground">
            <RichText text={t.vision.closing} />
          </p>
        </Section>

        {/* ─── TEACHER DEVELOPMENT ───────────────────────────────── */}
        <Section id="teachers" index="03" eyebrow={t.teachers.eyebrow} title={t.teachers.title}>
          <div className="relative mb-10 overflow-hidden rounded-3xl">
            <img
              src="/images/teachers-training.jpg"
              alt={t.teachers.eyebrow}
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="rounded-full bg-brand-lime px-4 py-1.5 text-sm font-bold text-white">
                100% Apple Teachers
              </span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">
            <div className="space-y-5 leading-relaxed text-foreground lg:col-span-3">
              <p><RichText text={t.teachers.lead} /></p>
              <ul className="space-y-2">
                {t.teachers.bullets.map((b, i) => (
                  <BulletItem key={i}>{b}</BulletItem>
                ))}
              </ul>
              <div className="rounded-2xl border-l-4 border-brand-lime bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-green">{t.teachers.cbl.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <RichText text={t.teachers.cbl.detail} />
                </p>
              </div>
              <div className="rounded-2xl border-l-4 border-brand-green bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-green">{t.teachers.ai.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <RichText text={t.teachers.ai.detail} />
                </p>
              </div>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/images/teachers-classroom.jpg"
                  alt={t.teachers.eyebrow}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-green">{t.teachers.appsTitle}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.teachers.apps.map((app) => (
                    <span key={app} className="rounded-full bg-brand-green/5 px-3 py-1.5 text-sm font-medium text-brand-green">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── INFRASTRUCTURE ────────────────────────────────────── */}
        <Section id="infrastructure" index="04" eyebrow={t.infrastructure.eyebrow} title={t.infrastructure.title}>
          <div className="relative mb-10 overflow-hidden rounded-3xl">
            <AnimatedImage
              src="/images/infra-room.jpg"
              alt={t.infrastructure.eyebrow}
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/85 to-brand-green/30" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">
                {t.infrastructure.eyebrow}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-white md:text-3xl">
                {t.infrastructure.features[3].title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                {t.infrastructure.features[3].detail}
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.infrastructure.features.map((f, i) => (
              <FeatureCard key={i} icon={featureIcons[i % featureIcons.length]} title={f.title} detail={f.detail} />
            ))}
          </div>

          <div className="mt-12">
            <h3 className="mb-8 font-serif text-xl font-semibold text-brand-green">
              {t.infrastructure.timelineTitle}
            </h3>
            <Timeline items={t.infrastructure.timeline} />
          </div>
        </Section>

        {/* ─── INSPIRE ───────────────────────────────────────────── */}
        <Section id="inspire" index="05" eyebrow={t.inspire.eyebrow} title={t.inspire.title}>
          <p className="max-w-3xl leading-relaxed text-foreground">{t.inspire.intro}</p>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {t.inspire.disciplines.slice(0, 4).map((d, i) => {
              const imgs = [
                "/images/inspire-coding.jpg",
                "/images/inspire-art.jpg",
                "/images/inspire-math.jpg",
                "/images/inspire-science.jpg",
              ]
              return (
                <div key={d.subject} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={imgs[i]}
                    alt={d.subject}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">{d.subject}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.inspire.disciplines.map((d, i) => {
              const Icon = disciplineIcons[i % disciplineIcons.length]
              return (
                <div key={d.subject} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-brand-lime/10 text-brand-lime">
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-full bg-brand-green/5 px-3 py-1 text-xs font-semibold text-brand-green">
                      {d.app}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-brand-green">{d.subject}</h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{d.teacher}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{d.description}</p>
                </div>
              )
            })}
          </div>
        </Section>

        {/* ─── IMAGINE ───────────────────────────────────────────── */}
        <Section id="imagine" index="06" eyebrow={t.imagine.eyebrow} title={t.imagine.title}>
          <div className="relative mb-10 overflow-hidden rounded-3xl">
            <img
              src="/images/imagine-fair.jpg"
              alt={t.imagine.eyebrow}
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">{t.imagine.eyebrow}</p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-white md:text-3xl">
                {t.imagine.projects[6].name}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">
                {t.imagine.projects[6].result}
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.imagine.projects.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-green/5 text-brand-green">
                  <Lightbulb className="size-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-brand-green text-balance">{p.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wide text-brand-lime">{p.student}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{p.result}</p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-brand-green/5 px-3 py-1 text-xs font-semibold text-brand-green">
                  {p.app}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-brand-lime bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-brand-green">{t.imagine.callouts[0].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.imagine.callouts[0].detail}</p>
            </div>
            <div className="rounded-2xl border-l-4 border-brand-green bg-card p-6">
              <h3 className="font-serif text-lg font-semibold text-brand-green">{t.imagine.callouts[1].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.imagine.callouts[1].detail}</p>
            </div>
          </div>
        </Section>

        {/* ─── CAUSE IMPACT ──────────────────────────────────────── */}
        <Section id="impact" index="07" eyebrow={t.impact.eyebrow} title={t.impact.title}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.impact.stats.map((s, i) => (
              <StatCard key={i} {...s} featured={i === 0} />
            ))}
          </div>

          {/* Foto de impacto com evidência sobreposta */}
          <div className="relative mt-10 overflow-hidden rounded-3xl">
            <img
              src="/images/impact-students.jpg"
              alt={t.impact.eyebrow}
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/85 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="max-w-sm">
                <h3 className="font-serif text-2xl font-semibold text-white md:text-3xl">
                  {t.impact.evidenceTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {t.impact.evidenceText}
                </p>
              </div>
            </div>
          </div>

          {/* Gráfico + foto das famílias */}
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <FamilyChart />
            <div className="flex flex-col gap-6">
              {/* Foto das famílias */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/impact-survey.jpg"
                  alt={t.impact.chartTitle}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">{t.impact.chartSubtitle}</p>
                </div>
              </div>
              {/* Mini stats */}
              <div className="flex flex-col justify-center space-y-3">
                {t.impact.stats.slice(0, 3).map((s, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-2xl bg-brand-green/5 p-4">
                    <span className="font-serif text-3xl font-bold text-brand-green">
                      {s.value}{s.suffix}
                    </span>
                    <p className="text-sm font-medium text-foreground">{s.headline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="mb-8 font-serif text-xl font-semibold text-brand-green">{t.impact.timelineTitle}</h3>
            <Timeline items={t.infrastructure.timeline} />
          </div>
        </Section>

        {/* ─── ACCESSIBILITY ─────────────────────────────────────── */}
        <Section id="accessibility" index="08" eyebrow={t.accessibility.eyebrow} title={t.accessibility.title}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="leading-relaxed text-foreground">{t.accessibility.intro}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.accessibility.features.map((f) => (
                  <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-serif text-lg font-semibold text-brand-green">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                ))}
              </div>
              <blockquote className="mt-8 border-l-4 border-brand-lime pl-6 font-serif text-xl font-medium italic text-brand-green md:text-2xl">
                {`"${t.accessibility.quote}"`}
              </blockquote>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="/images/accessibility-student.jpg"
                alt={t.accessibility.eyebrow}
                className="h-full min-h-[400px] w-full object-cover"
                style={{ objectPosition: "70% center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="rounded-full bg-brand-lime px-4 py-1.5 text-sm font-bold text-white">
                  {t.accessibility.eyebrow}
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* ─── WHAT'S NEXT ───────────────────────────────────────── */}
        <Section id="next" index="09" eyebrow={t.next.eyebrow} title={t.next.title}>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.next.cards.map((c, i) => (
              <RoadmapCard key={i} icon={roadmapIcons[i % roadmapIcons.length]} title={c.title} detail={c.detail} />
            ))}
          </div>
          <div className="relative mt-6 overflow-hidden rounded-3xl">
            <img
              src="/images/next-fieldtrip.jpg"
              alt={t.next.fieldStudiesTitle}
              className="h-72 w-full object-cover md:h-96"
            />
            <div className="absolute inset-0 bg-brand-green/75" />
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-brand-lime" />
                <h3 className="font-serif text-xl font-semibold text-white">{t.next.fieldStudiesTitle}</h3>
              </div>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/80">{t.next.fieldStudiesText}</p>
            </div>
          </div>
        </Section>

        {/* ─── CLOSING ───────────────────────────────────────────── */}
        <section
          id="closing"
          className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden text-white"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/closing-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-brand-green/85" />
          
          <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:px-16">
            <div className="flex items-center gap-4">
              <span className="font-serif text-sm font-semibold text-[#a7d36a]">10</span>
              <span className="h-px w-12 bg-brand-lime" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.closing.eyebrow}
              </span>
            </div>
            <h2 className="mt-6 text-balance font-serif text-3xl font-semibold leading-tight md:text-5xl">
              {t.closing.title}
            </h2>
            <blockquote className="mt-10 text-pretty font-serif text-xl font-medium leading-relaxed text-white/85 md:text-2xl">
              {`"${t.closing.quote}"`}
            </blockquote>
            <div className="mt-12 flex items-center gap-3">
              <Logo size={28} />
              <span className="text-sm text-white/60">{t.closing.signature}</span>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

/* ── helpers ── */

function ProfileFact({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="font-medium text-brand-green">{value}</p>
      </div>
    </div>
  )
}

function LeadershipMilestone({ year, title, detail }: { year: string; title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <span className="font-serif text-3xl font-semibold text-brand-lime">{year}</span>
      <h3 className="mt-2 font-serif text-lg font-semibold text-brand-green">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, detail }: { icon: React.ElementType; title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-green/5 text-brand-green">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-brand-green">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  )
}

function RoadmapCard({ icon: Icon, title, detail }: { icon: React.ElementType; title: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-lime/10 text-brand-lime">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-brand-green">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  )
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-foreground/80">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-lime" />
      {children}
    </li>
  )
}