import type { Metadata } from "next";

import { HomePageClient } from "@/components/home-page-client";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Quadris Solutions",
  description:
    "Quadris Solutions is an international trust company delivering management, family office, estate planning, and reporting services from Zurich.",
  subtitle: "International trust, family office, and reporting services.",
  canonical: "https://quadris.solutions/en",
});

export default function HomePage() {
  return <HomePageClient />;
}
