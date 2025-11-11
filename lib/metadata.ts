import type { Metadata } from "next";

export function ogImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const params = new URLSearchParams({ title });
  if (subtitle) {
    params.set("subtitle", subtitle);
  }
  return `/og?${params.toString()}`;
}

export function createMetadata({
  title,
  description,
  subtitle,
  canonical,
}: {
  title: string;
  description: string;
  subtitle?: string;
  canonical?: string;
}): Metadata {
  const ogUrl = ogImage({ title, subtitle });

  return {
    title,
    description,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Quadris Solutions",
      images: [ogUrl],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}
