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
      images: [],
    }
  },
  additionalPaths: async (config) => [
  await config.transform(config, '/'),
  {
    loc: 'https://green.gd',
    changefreq: 'weekly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
    images: [
      {
        url: "https://green.gd/media/green-garden-dispensary-cannabis-shop-phuket-strain-orange-velvet-cover.webp",
        caption: 'Green Garden Dispensary - Cannabis Shop Phuket - Orange Velvet',
        alt: 'Green Garden Dispensary - Cannabis Shop Phuket - Orange Velvet',
      },
      {
        url: `${process.env.SITE_URL}/media/green-garden-dispensary-cannabis-shop-phuket-strain-runtz-cover.webp`,
        caption: 'Green Garden Dispensary - Cannabis Shop Phuket - Runtz',
        alt: 'Green Garden Dispensary - Cannabis Shop Phuket - Runtz',
      },
    ],
  },
],
}