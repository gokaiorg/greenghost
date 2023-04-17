/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://green.gd',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: [{ loc: 'https://green.gd/green-ghost-degen-weed-shop.png' }],
    };
  },
};
