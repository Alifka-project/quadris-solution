import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { StructuredData } from "@/components/structured-data";
import { serviceGroups } from "@/content/services";
import { createMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export function generateStaticParams() {
  return serviceGroups.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceGroups.find((item) => item.slug === params.slug);

  if (!service) {
    return createMetadata({
      title: "Service",
      description: "Quadris Solutions service details.",
      canonical: `https://quadris.solutions/en/services/${params.slug}`,
    });
  }

  return createMetadata({
    title: service.title,
    description: service.summary,
    subtitle: "Quadris Solutions service detail",
    canonical: `https://quadris.solutions/en/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceGroups.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: "Quadris Solutions Ltd",
    },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
  } as const;

  return (
    <>
      <StructuredData id={`service-${service.slug}`} data={serviceJsonLd} />
      <section className="mx-auto w-full max-w-4xl px-4 py-24 md:px-8">
        <SectionHeading
          eyebrow="Offering"
          title={service.title}
          description={service.summary}
        />
        <div className="relative mt-12 overflow-hidden rounded-[32px] border border-[var(--border)] shadow-[0_24px_60px_rgba(15,23,32,0.08)]">
          <div className="relative h-[280px] w-full md:h-[360px]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/40 bg-black/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/85 backdrop-blur-md">
                Focus Areas
              </div>
              <ul className="space-y-2 text-sm leading-6 text-white/85 md:text-base">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-[6px] w-[6px] rounded-full bg-white/80" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-3 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_60px_rgba(15,23,32,0.08)]">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground/60">
            Core capabilities
          </h3>
          <ul className="space-y-3 text-base text-foreground/80">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-[6px] w-[6px] rounded-full bg-[var(--brand-primary-400)]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Schedule a confidential discussion"
        description="Share the jurisdictions and family or corporate governance goals involved. We will advise on the appropriate service line and onboarding path."
        ctaLabel="Request a consultation"
        ctaHref={siteRoutes.contact()}
      />
    </>
  );
}
