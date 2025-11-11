import type { Metadata } from "next";
import Image from "next/image";

import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { aboutContent } from "@/content/about";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Quadris Solutions Ltd combines three decades of fiduciary experience with Swiss regulatory discipline and independent ownership.",
  subtitle: "Swiss fiduciary expertise since 1995.",
  canonical: "https://quadris.solutions/en/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="compact"
        title="About Quadris Solutions"
        subtitle={aboutContent.hero.subtitle}
        secondaryCtaLabel="Download company profile"
        secondaryCtaHref="#company-profile"
      />

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="md:pr-12">
            <SectionHeading
              eyebrow="Who we are"
              title={aboutContent.whoWeAre.title}
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
              {aboutContent.whoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative h-[260px] w-full overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_70px_rgba(15,23,32,0.12)] md:h-[360px]">
            <Image
              src="/swiss.png"
              alt="Matterhorn peak rising over alpine forest in Switzerland"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative order-2 h-[260px] w-full overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_70px_rgba(15,23,32,0.12)] md:order-1 md:h-[360px]">
            <Image
              src="/swissbank.png"
              alt="Swiss Federal Palace and National Bank building at blue hour"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
              className="object-cover object-center"
            />
          </div>
          <div className="order-1 md:order-2 md:pl-12">
            <SectionHeading
              eyebrow="Governance"
              title={aboutContent.regulatoryStandards.title}
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
              {aboutContent.regulatoryStandards.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Values"
            title="Principles that define every mandate"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutContent.values.map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_60px_rgba(15,23,32,0.08)]"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-foreground/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="company-profile"
        className="mx-auto w-full max-w-6xl px-4 py-20 md:px-8"
      >
        <SectionHeading
          eyebrow="Leadership"
          title="Management"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {aboutContent.management.map((leader) => (
            <article
              key={leader.name}
              className="flex flex-col gap-6 rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_22px_70px_rgba(15,23,32,0.08)]"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[var(--border)]">
                  <Image
                    src={
                      leader.name === "Francesco Castellazzi"
                        ? "/images/francesco-castellazzi.png"
                        : "/images/raphael-de-stefano.png"
                    }
                    alt={leader.name}
                    fill
                    sizes="(max-width:768px) 96px, 120px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
                    {leader.role}
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-foreground/80">
                {leader.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
