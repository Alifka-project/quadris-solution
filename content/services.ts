export type ServiceGroup = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "management-administration",
    title: "Management & Administration",
    slug: "management-and-administration",
    summary:
      "Foundational governance, entity management, and restructuring support for international holdings.",
    bullets: [
      "Founding of companies, trusts and foundations",
      "Company management and administration",
      "Restructuring",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      alt: "Corporate governance team coordinating strategy in a boardroom.",
    },
  },
  {
    id: "family-office",
    title: "Family Office Services",
    slug: "family-office-services",
    summary:
      "Dedicated stewardship for multigenerational wealth, governance, and philanthropic priorities.",
    bullets: [
      "Asset planning",
      "Administrative support",
      "Philanthropy",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1600&q=80",
      alt: "Family office advisers coordinating a multigenerational wealth meeting.",
    },
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    slug: "estate-planning",
    summary:
      "Structuring and safeguarding legacies with cross-border expertise.",
    bullets: [
      "Succession structures",
      "Last wills",
      "Foundations and trusts",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
      alt: "Private client lawyer reviewing legacy documentation with a couple.",
    },
  },
  {
    id: "reporting-controlling",
    title: "Reporting & Controlling",
    slug: "reporting-and-controlling",
    summary:
      "Financial clarity through timely reporting, consolidation, and risk oversight.",
    bullets: [
      "Finance and accounting",
      "Consolidations",
      "Risk monitoring and reporting",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
      alt: "Financial analyst reviewing dashboards and reports on a laptop.",
    },
  },
];
