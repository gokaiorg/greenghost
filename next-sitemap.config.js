// next-sitemap.config.js
const { products, getProductImageUrls } = require('./config/products.ts');

module.exports = {
  siteUrl: 'https://green.gd',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // Default transformation function
  transform: async (config, path) => {
    const product = products.find((p) => p.slug === path.slice(7)); // assuming path starts with '/product/'
    if (product) {
      const imageUrls = getProductImageUrls(product);
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        images: imageUrls.map((url) => ({ loc: url })),
      };
    }
    return null;
  },
};
