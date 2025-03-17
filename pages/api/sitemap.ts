import { NextApiRequest, NextApiResponse } from 'next';
import xml2js from 'xml2js';

const SITE_URL = 'https://green.gd';
// Define the expected response structure for slugs
interface SlugResponse {
  slug: string;
}

// Fetch dynamic slugs
const fetchSlugs = async (type: string): Promise<string[]> => {
  try {
    const res = await fetch(`${SITE_URL}/api/${type}`);
    const data: SlugResponse[] = await res.json();

    if (!Array.isArray(data)) {
      console.error(`Unexpected response from ${type} API:`, data);
      return [];
    }

    return data.map((item) => `${SITE_URL}/${type}/${item.slug}`);
  } catch (err) {
    console.error(`Error fetching ${type} slugs:`, err);
    return [];
  }
};

// Define XML URL structure
interface XmlUrl {
  loc: string[];
}

// Generate the sitemap XML
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch static sitemap
    const sitemapRes = await fetch(`${SITE_URL}/sitemap-0.xml`);
    const xmlData = await sitemapRes.text();
    const jsonData = (await xml2js.parseStringPromise(xmlData)) as {
      urlset: { url: XmlUrl[] };
    };

    const staticLinks = jsonData.urlset.url.map((url) => url.loc[0]);

    console.log('Fetched Static Sitemap:', staticLinks);

    // Fetch dynamic slugs
    const slugTypes = [
      'gadgets',
      'concentrates',
      'strains',
      'edibles',
      'nft',
      'weed-grower',
    ];
    const dynamicLinksArray = await Promise.all(slugTypes.map(fetchSlugs));

    // Merge all URLs
    const allLinks: string[] = [...staticLinks, ...dynamicLinksArray.flat()];

    console.log('Final Sitemap XML Links:', allLinks);

    // Build XML
    const builder = new xml2js.Builder({ headless: true });
    const xml = builder.buildObject({
      urlset: {
        $: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
        url: allLinks.map((link) => ({
          loc: link,
          lastmod: new Date().toISOString().split('T')[0],
        })),
      },
    });

    // Set headers & return XML
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  } catch (err) {
    console.error('Error generating sitemap XML:', err);
    res.status(500).send('Failed to generate sitemap');
  }
}
