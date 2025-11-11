import type { Metadata } from "next";

import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { legalContent } from "@/content/legal";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: legalContent.metadata.title,
  description: legalContent.metadata.description,
  subtitle: "Regulatory information and privacy notice.",
  canonical: "https://quadris.solutions/en/legal",
});

export default function LegalPage() {
  return (
    <>
      <Hero
        variant="compact"
        title={legalContent.metadata.title}
        subtitle="Legal notice, regulatory disclosures, and data protection." 
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 md:px-8">
        <SectionHeading
          eyebrow="Quadris Solutions Ltd"
          title="Legal & Privacy"
        />
        <div className="mt-10 space-y-12">
          {legalContent.sections.map((section) => (
            <article key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <div className="space-y-3 text-sm text-foreground/80">
                {section.body.map((paragraph) => (
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
