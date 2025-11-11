import { siteRoutes } from "@/lib/routes";

export const homeContent = {
  hero: {
    title: "Trust is our business – and your trust in us is our success",
    subtitle:
      "Advanced, practical fiduciary solutions for families and entrepreneurs navigating complex jurisdictions.",
    ctaLabel: "Explore Our Services",
    ctaHref: siteRoutes.services(),
  },
  introduction: [
    "Regulatory radar covering key wealth jurisdictions keeps structures compliant.",
    "Cross-border strategies tuned for liquidity, succession, and governance continuity.",
    "Execution pods embed with family offices to activate decisions quickly.",
  ],
  trustMetrics: [
    {
      label: "Years of cross-border expertise",
      value: "30+",
    },
    {
      label: "Jurisdictions served",
      value: "40",
    },
    {
      label: "Families & enterprises supported",
      value: "200+",
    },
  ],
  featuredLocations: [
    {
      name: "Zurich",
      description: "Global headquarters, governance, and client advisory centre.",
      imageSrc: "/images/locations/zurich.png",
      imageAlt: "Zurich Altstadt overlooking the Limmat River",
    },
    {
      name: "Dubai",
      description: "Gateway to the Middle East with on-the-ground structuring expertise.",
      imageSrc: "/images/locations/dubai.png",
      imageAlt: "Burj Khalifa and Downtown Dubai skyline",
    },
    {
      name: "Singapore",
      description: "APAC hub for family office and fiduciary administration.",
      imageSrc: "/images/locations/singapore.png",
      imageAlt: "Marina Bay Sands and Gardens by the Bay in Singapore",
    },
  ],
  callToAction: {
    title: "Talk to an advisor",
    description:
      "Every engagement begins with a discreet conversation to understand objectives, jurisdictions, and governance priorities.",
    ctaLabel: "Schedule a consultation",
    ctaHref: siteRoutes.contact(),
  },
};
