import { NextApiRequest, NextApiResponse } from 'next';
import xml2js from 'xml2js';

const BASE_URL = 'https://green.gd';

/**
 * Fetch dynamic slugs from different categories.
 */
const fetchSlugs = async (): Promise<string[]> => {
  try {
    const categories = [
      'gadgets',
      'concentrates',
      'strains',
      'edibles',
      'nft',
      'weed-grower',
    ];

    const fetchPromises = categories.map(async (category) => {
      const res = await fetch(`${BASE_URL}/api/${category}/slugs`);
      const data = await res.json();
      return data.slugs.map((slug: string) => `/${category}/${slug}`);
    });

    const slugs = await Promise.all(fetchPromises);
    return slugs.flat(); // Flatten array to a single list of slugs
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return [];
  }
};

/**
 * Generate XML for a given list of URLs.
 */
const generateSitemapXml = (urls: { loc: string; lastmod: string }[]) => {
  const builder = new xml2js.Builder({ headless: true, rootName: 'urlset' });
  return builder.buildObject({
    $: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
    url: urls.map(({ loc, lastmod }) => ({
      loc,
      lastmod,
    })),
  });
};

/**
 * API Handler for generating the sitemap dynamically.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slugs = await fetchSlugs();

    const staticUrls = [
      '/',
      '/about',
      '/contact',
      '/membership',
      '/shop',
    ].map((path) => ({
      loc: `${BASE_URL}${path}`,
      lastmod: new Date().toISOString(),
    }));

    const dynamicUrls = slugs.map((slug) => ({
      loc: `${BASE_URL}${slug}`,
      lastmod: new Date().toISOString(),
    }));

    const allUrls = [...staticUrls, ...dynamicUrls];

    console.log('Total URLs in Sitemap:', allUrls.length);

    const sitemapXml = generateSitemapXml(allUrls);

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
}
