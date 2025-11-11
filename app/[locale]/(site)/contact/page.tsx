import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { contactContent } from "@/content/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Quadris Solutions Ltd in Zurich for confidential fiduciary, family office, and reporting enquiries.",
  subtitle: "Connect with the Quadris Solutions Zurich office.",
  canonical: "https://quadris.solutions/en/contact",
});

export default function ContactPage() {
  const { address, mapDescription } = contactContent;

  const mapsSrc = "https://www.openstreetmap.org/export/embed.html?bbox=8.5297%2C47.3680%2C8.5417%2C47.3760&layer=mapnik&marker=47.37241%2C8.535712";

  return (
    <>
      <Hero
        variant="compact"
        title={contactContent.hero.title}
        subtitle={contactContent.hero.subtitle}
      />

      <section className="mx-auto w-full max-w-5xl px-4 py-16 md:px-8">
        <SectionHeading
          eyebrow="Zurich headquarters"
          title="Quadris Solutions Ltd"
        />
        <div className="mt-6 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="space-y-4 text-base text-foreground/80">
            <p>
              <strong>{address.company}</strong>
              <br />
              {address.street}
              <br />
              {address.poBox}
              <br />
              {address.postalCodeCity}
              <br />
              {address.country}
            </p>
            <p>
              Tel. <a href={`tel:${address.phone.replace(/\s+/g, "")}`}>{address.phone}</a>
              <br />
              Fax {address.fax}
              <br />
              <a href={`mailto:${address.email}`}>{address.email}</a>
            </p>
            <p className="text-sm text-foreground/60">{mapDescription}</p>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_70px_rgba(15,23,32,0.08)]">
            <iframe
              title="Quadris Solutions Ltd on Google Maps"
              src={mapsSrc}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Enquiry"
            title="Send us a message"
            description="Complete the form below and an advisor will respond within one business day."
            align="center"
            className="mb-10"
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
