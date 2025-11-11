import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { StructuredData } from "@/components/structured-data";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Quadris Solutions Ltd",
  url: "https://quadris.solutions",
  logo: "https://quadris.solutions/brand/logo-quadris.svg",
  telephone: "+41 44 224 61 11",
  email: "office@quadris.solutions",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nüschelerstrasse 31",
    postalCode: "8022",
    addressLocality: "Zurich",
    addressCountry: "CH",
  },
  sameAs: ["https://quadris.solutions"],
};

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <StructuredData id="quadris-organization" data={organizationJsonLd} />
      <SkipLink href="#main-content" />
      <SiteHeader />
      <main
        id="main-content"
        className="flex-1 scroll-mt-24 bg-[var(--bg)] text-foreground"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
