import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Gem,
  Layers,
  LineChart,
  ScrollText,
  type LucideIcon,
} from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { serviceGroups } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Quadris Solutions delivers management and administration, family office services, estate planning, and reporting with Swiss governance standards.",
  subtitle: "Management, family office, estate planning, and reporting.",
  canonical: "https://quadris.solutions/en/services",
});

const servicesJsonLd = serviceGroups.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.summary,
  image: service.image.src,
  provider: {
    "@type": "Organization",
    name: "Quadris Solutions Ltd",
  },
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
  },
}));

const serviceIconMap: Record<string, LucideIcon> = {
  "management-administration": Building2,
  "family-office": Gem,
  "estate-planning": ScrollText,
  "reporting-controlling": LineChart,
};

const serviceAccentGradients: Record<string, string> = {
  "management-administration": "from-[rgba(65,70,167,0.15)] to-[rgba(0,212,255,0.2)]",
  "family-office": "from-[rgba(146,81,255,0.18)] to-[rgba(65,70,167,0.12)]",
  "estate-planning": "from-[rgba(48,210,162,0.18)] to-[rgba(146,81,255,0.12)]",
  "reporting-controlling": "from-[rgba(255,182,88,0.2)] to-[rgba(0,212,255,0.15)]",
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData id="quadris-services" data={servicesJsonLd} />
      <Hero
        variant="compact"
        title="Services"
        subtitle="Structured advisory and administration for international families, entrepreneurs, and institutions."
        secondaryCtaLabel="Speak to an advisor"
        secondaryCtaHref={siteRoutes.contact()}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(65,70,167,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(0,212,255,0.08),transparent_55%)] px-4 py-20 md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-6 rounded-[48px] border border-white/35" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 rounded-[40px] border border-white/25 bg-white/75 p-8 shadow-[0_30px_90px_rgba(15,23,32,0.12)] backdrop-blur-2xl md:p-12">
        <SectionHeading
            eyebrow="Service Architecture"
            title="Tailored pods aligned to governance, liquidity, and reporting priorities"
            description="Four specialist teams collaborate as one mandate core. Each engagement layers proven operating playbooks with bespoke execution detail."
          align="center"
            className="mx-auto max-w-4xl text-center"
          />

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-[2px] bg-gradient-to-b from-[var(--brand-primary-200)] via-[var(--accent-cyan)]/30 to-transparent lg:block" />
            <div className="flex flex-col gap-10">
              {serviceGroups.map((service, index) => {
                const Icon = serviceIconMap[service.id] ?? Layers;
                const gradient = serviceAccentGradients[service.id] ?? "from-[rgba(65,70,167,0.12)] to-[rgba(0,212,255,0.1)]";

                return (
                  <div
                    key={service.id}
                    className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/85 p-8 shadow-[0_26px_70px_rgba(15,23,32,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(15,23,32,0.16)] md:p-10"
                  >
                    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                    <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-primary-500)] to-[var(--accent-cyan)] text-white shadow-[0_12px_30px_rgba(65,70,167,0.35)]">
                            <Icon className="h-6 w-6" strokeWidth={1.7} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                              {String(index + 1).padStart(2, "0")}
                            </p>
                            <h3 className="mt-1 text-2xl font-semibold text-foreground md:text-[1.75rem]">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <p className="max-w-xl text-base text-foreground/70 md:text-lg">{service.summary}</p>
                      </div>

                      <div className="relative hidden min-h-[260px] overflow-hidden rounded-[28px] border border-white/40 shadow-[0_20px_60px_rgba(15,23,32,0.12)] md:block">
                        <Image
                          src={service.image.src}
                          alt={service.image.alt}
                          fill
                          sizes="(min-width: 1024px) 360px, 50vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
                        <div className="absolute inset-6 rounded-[22px] border border-white/25 opacity-60" />
                        <div className="absolute inset-x-6 bottom-6 space-y-3 text-white">
                          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
                            Focus Areas
                          </div>
                          <ul className="space-y-2 text-sm leading-6">
                            {service.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2">
                                <span className="mt-2 h-[6px] w-[6px] rounded-full bg-white/70" />
                                <span className="text-white/90">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-8 flex items-center justify-between">
                      <Link
                        href={`/en/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary-600)] transition hover:text-[var(--brand-primary)]"
                      >
                        Explore service
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <div className="hidden text-xs uppercase tracking-[0.3em] text-foreground/40 md:inline-flex">
                        Structured Playbook
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Talk to an advisor"
        description="Share your objectives and current structure. We will outline a confidential plan for onboarding and next steps."
        ctaLabel="Start the conversation"
        ctaHref={siteRoutes.contact()}
      />
    </>
  );
}
