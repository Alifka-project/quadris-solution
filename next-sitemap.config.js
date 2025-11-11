module.exports = {
  siteUrl: "https://quadris.solutions",
  generateRobotsTxt: true,
  outDir: "./public",
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === "/en" ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
      trailingSlash: false,
    };
  },
};
