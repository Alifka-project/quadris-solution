'use client';

import type { JSX } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TrustStrip } from "@/components/trust-strip";
import { homeContent } from "@/content/home";
import { serviceGroups } from "@/content/services";
import { siteRoutes } from "@/lib/routes";

export function HomePageClient(): JSX.Element {
  return (
    <>
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        ctaLabel={homeContent.hero.ctaLabel}
        ctaHref={homeContent.hero.ctaHref}
        secondaryCtaLabel="Meet the team"
        secondaryCtaHref={siteRoutes.about()}
        imageSrc="/images/finance-consult.jpg"
        imageAlt="Financial consultant meeting with clients over a strategy report"
        scrollTarget="#intro"
      />

      <main className="space-y-16 bg-[var(--bg)] px-4 pt-8 md:space-y-24 md:px-6 md:pt-12 lg:px-10">
        <section
          id="intro"
          className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[44px] border border-white/15 bg-white/70 px-6 py-24 shadow-[0_40px_120px_rgba(15,23,32,0.1)] backdrop-blur-2xl md:px-12 lg:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--brand-primary)]/20 bg-[var(--brand-primary-100)]/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-primary)]">
              Fiduciary Perspective
            </div>
            <h2
              className="bg-gradient-to-br from-[var(--text)] via-[var(--text)] to-[var(--brand-primary)] bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2.4rem, 5vw, var(--text-3xl))", lineHeight: 1.1 }}
            >
              Precision stewardship for complex wealth
            </h2>
            <p className="text-foreground/70" style={{ fontSize: "var(--text-md)", lineHeight: 1.7 }}>
              Swiss governance discipline paired with agile execution keeps every mandate decisive amid global shifts.
              We coordinate structures, governance, and reporting to make capital resilient across jurisdictions.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-3">
            {homeContent.introduction.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/85 p-7 text-left shadow-[0_26px_70px_rgba(15,23,32,0.1)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_36px_90px_rgba(15,23,32,0.16)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary-100)]/35 via-transparent to-[var(--accent-cyan)]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[var(--brand-primary)]/20 bg-[var(--brand-primary-100)]/60 text-[var(--brand-primary)]">
                    <span className="text-sm font-semibold">0{index + 1}</span>
                  </span>
                  <p className="text-sm text-foreground/75" style={{ lineHeight: 1.75 }}>
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 mt-12 overflow-hidden rounded-[32px] border border-white/25 bg-gradient-to-br from-white/90 via-white/80 to-white/60 p-10 text-center shadow-[0_32px_80px_rgba(15,23,32,0.12)] backdrop-blur-xl md:mt-16"
          >
            <div className="mx-auto flex max-w-3xl flex-col gap-6 text-sm text-foreground/70">
              <h3 className="text-lg font-semibold text-[var(--brand-primary)]">Quadris Advantage</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  "Swiss-anchored, multi-jurisdictional structuring.",
                  "Senior fiduciaries aligning planning, reporting, and compliance.",
                  "Adaptive playbooks converting macro shifts into strategy.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--brand-primary-100)]/40 bg-[var(--brand-primary-100)]/20 px-4 py-6 text-foreground/80"
                    style={{ lineHeight: 1.6 }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-white px-4 py-28 md:px-8 md:py-32">
          <div className="mx-auto w-full max-w-6xl space-y-12 text-center">
            <SectionHeading
              eyebrow="Track Record"
              title="Trusted across generations and jurisdictions"
              description="Key figures that demonstrate the resilience and breadth of our client partnerships."
              align="center"
            />
            <TrustStrip items={homeContent.trustMetrics} />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Expertise"
            title="Four service lines, one cohesive team"
            description="Every mandate is led by senior partners who coordinate structuring, governance, and reporting across domiciles."
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceGroups.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Locations"
            title="Presence where our clients need us"
            description="Zurich anchors the group while Dubai and Singapore extend our reach across growth markets and time zones."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {homeContent.featuredLocations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex h-full min-h-[320px] flex-col justify-between rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_60px_rgba(15,23,32,0.08)] transition-shadow duration-300 hover:shadow-[0_30px_80px_rgba(15,23,32,0.12)]"
              >
                <div
                  className="relative mb-5 overflow-hidden rounded-[20px]"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  {location.imageSrc && (
                    <Image
                      src={location.imageSrc}
                      alt={location.imageAlt ?? `${location.name} skyline illustration`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
                <div className="mt-auto space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                    {location.name}
                  </p>
                  <p className="text-sm text-foreground/70">{location.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection
          title={homeContent.callToAction.title}
          description={homeContent.callToAction.description}
          ctaLabel={homeContent.callToAction.ctaLabel}
          ctaHref={homeContent.callToAction.ctaHref}
        />
      </main>
    </>
  );
}
