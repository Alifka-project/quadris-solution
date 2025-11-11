import { siteRoutes } from "@/lib/routes";

export type NavItem = {
  href: string;
  label: string;
};

export type LocaleItem = {
  code: string;
  label: string;
  available: boolean;
};

export const locales: LocaleItem[] = [
  {
    code: "en",
    label: "EN",
    available: true,
  },
  {
    code: "de",
    label: "DE",
    available: false,
  },
  {
    code: "es",
    label: "ES",
    available: false,
  },
];

export const primaryNav: NavItem[] = [
  { href: siteRoutes.home(), label: "Home" },
  { href: siteRoutes.about(), label: "About" },
  { href: siteRoutes.services(), label: "Services" },
  { href: siteRoutes.groupCompanies(), label: "Group Companies" },
  { href: siteRoutes.contact(), label: "Contact" },
];

export const footerNav: NavItem[] = [
  { href: siteRoutes.services(), label: "Services" },
  { href: siteRoutes.about(), label: "About" },
  { href: siteRoutes.legal(), label: "Legal" },
  { href: siteRoutes.contact(), label: "Contact" },
];
