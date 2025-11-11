export const DEFAULT_LOCALE = "en" as const;

export const siteRoutes = {
  home: (locale: string = DEFAULT_LOCALE) => `/${locale}`,
  about: (locale: string = DEFAULT_LOCALE) => `/${locale}/about`,
  services: (locale: string = DEFAULT_LOCALE) => `/${locale}/services`,
  serviceDetail: (slug: string, locale: string = DEFAULT_LOCALE) => `/${locale}/services/${slug}`,
  groupCompanies: (locale: string = DEFAULT_LOCALE) => `/${locale}/group-companies`,
  contact: (locale: string = DEFAULT_LOCALE) => `/${locale}/contact`,
  legal: (locale: string = DEFAULT_LOCALE) => `/${locale}/legal`,
};

