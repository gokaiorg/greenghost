import { NextApiRequest, NextApiResponse } from 'next';
import xml2js from 'xml2js';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://green.gd';

interface Strain {
  slug: string;
  [key: string]: unknown;
}

const fetchSlugs = async (): Promise<string[]> => {
  try {
    const categories = [
      'gadgets',
      'concentrates',
      'strains',
      'edibles',
      'locations',
      'nft',
      'weed-grower',
    ];

    const fetchPromises = categories.map(async (category) => {
      const url = `${BASE_URL}/api/${category}`;
      const res = await fetch(url);
      if (!res.ok) {
        return [];
      }
      const data = await res.json();

      let slugs: string[] = [];
      if (Array.isArray(data)) {
        slugs = data.map((item: Strain) => item.slug);
      } else if (data.slugs && Array.isArray(data.slugs)) {
        slugs = data.slugs;
      } else {
        return [];
      }

      return slugs.map((slug: string) => `/${category}/${slug}`);
    });

    const slugs = await Promise.all(fetchPromises);
    const flatSlugs = slugs.flat();
    return flatSlugs;
  } catch (error) {
    return [];
  }
};

const getStaticUrls = (): string[] => {
  const pagesDir = path.join(process.cwd(), 'pages');
  const staticUrls: string[] = [];

  const scanDirectory = (dir: string, prefix: string = '') => {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    items.forEach((item) => {
      if (item.isDirectory() && item.name !== 'api') {
        scanDirectory(path.join(dir, item.name), `${prefix}${item.name}/`);
      } else if (
        item.name.endsWith('.tsx') &&
        !item.name.startsWith('[') &&
        !item.name.startsWith('_')
      ) {
        const route =
          item.name === 'index.tsx'
            ? prefix || '/'
            : `${prefix}${item.name.replace('.tsx', '')}`;
        staticUrls.push(route);
      }
    });
  };

  scanDirectory(pagesDir);
  return staticUrls;
};

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slugs = await fetchSlugs();
    const staticPaths = getStaticUrls();
    const staticUrls = staticPaths.map((path) => ({
      loc: `${BASE_URL}${path.startsWith('/') ? '' : '/'}${path}`,
      lastmod: new Date().toISOString(),
    }));
    const dynamicUrls = slugs.map((slug) => ({
      loc: `${BASE_URL}${slug.startsWith('/') ? '' : '/'}${slug}`,
      lastmod: new Date().toISOString(),
    }));
    const allUrls = [...staticUrls, ...dynamicUrls];
    const sitemapXml = generateSitemapXml(allUrls);

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXml);
  } catch (error) {
    res.status(500).end();
  }
}
