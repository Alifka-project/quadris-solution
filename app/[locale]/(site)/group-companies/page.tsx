import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { groupContent } from "@/content/group";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Group Companies",
  description:
    "Quadris Solutions leads a family of fiduciary firms spanning Zurich, Dubai, and Singapore.",
  subtitle: "Quadris network across Zurich, Dubai, and Singapore.",
  canonical: "https://quadris.solutions/en/group-companies",
});

export default function GroupCompaniesPage() {
  return (
    <>
      <Hero
        variant="compact"
        title={groupContent.hero.title}
        subtitle={groupContent.hero.subtitle}
      />

      <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
        <SectionHeading
          eyebrow="Network"
          title="Global coverage anchored in Switzerland"
          description="Our affiliated companies extend governance, structuring, and administration services across strategic time zones."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {groupContent.entities.map((entity) => (
            <div
              key={entity.name}
              className="flex h-full flex-col justify-between rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 text-left shadow-[0_20px_60px_rgba(15,23,32,0.08)]"
            >
              <div>
                {entity.logo && (
                  <div className="mb-5 flex h-16 w-full items-center justify-center">
                    <Image
                      src={entity.logo}
                      alt={`${entity.name} logo`}
                      width={140}
                      height={60}
                      className="h-auto w-auto max-h-full object-contain"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground">
                  {entity.name}
                </h3>
                {entity.location && (
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-foreground/60">
                    {entity.location}
                  </p>
                )}
                {entity.description && (
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {entity.description}
                  </p>
                )}
              </div>
              {entity.website && (
                <Link
                  href={entity.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-primary-600)] transition hover:border-[var(--brand-primary-400)] hover:bg-[var(--brand-primary-50)] hover:text-[var(--brand-primary-700)]"
                >
                  Visit site
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
