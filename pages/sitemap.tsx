import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import { Text, Box } from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://green.gd';

const fetchSlugs = async (category: string): Promise<string[]> => {
  try {
    const res = await fetch(`${BASE_URL}/api/${category}`);
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    let slugs: string[] = [];
    if (Array.isArray(data)) {
      slugs = data.map((item: any) => item.slug);
    } else if (data.slugs && Array.isArray(data.slugs)) {
      slugs = data.slugs;
    } else {
      return [];
    }
    return slugs.map((slug: string) => `${BASE_URL}/${category}/${slug}`);
  } catch (err) {
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
        const baseRoute =
          item.name === 'index.tsx'
            ? prefix || '/'
            : `${prefix}${item.name.replace('.tsx', '')}`;
        const route = baseRoute.endsWith('/')
          ? baseRoute.slice(0, -1)
          : baseRoute;
        staticUrls.push(
          `${BASE_URL}${route.startsWith('/') ? '' : '/'}${route}`
        );
      }
    });
  };

  scanDirectory(pagesDir);
  return staticUrls;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const staticUrls = getStaticUrls();
    const categories = [
      'gadgets',
      'concentrates',
      'strains',
      'edibles',
      'locations',
      'nft',
      'weed-grower',
    ];
    const slugPromises = categories.map((category) => fetchSlugs(category));
    const slugLinksArray = await Promise.all(slugPromises);
    const dynamicUrls = slugLinksArray.flat();
    const allLinks = [...staticUrls, ...dynamicUrls];
    return { props: { allLinks } };
  } catch (err) {
    return { props: { allLinks: [] } };
  }
};

const SitemapPage: NextPage<{ allLinks: string[] }> = ({ allLinks }) => {
  return (
    <>
      <Head>
        <title>Sitemap - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Navigate the Green Ghost website easily with our sitemap. Find links to all main pages and dynamic content like gadgets, strains, edibles, and more."
        />
        <meta property="og:title" content="Sitemap - Green Ghost 🌿👻" />
        <meta
          property="og:description"
          content="Navigate the Green Ghost website easily with our sitemap. Find links to all main pages and dynamic content like gadgets, strains, edibles, and more."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/sitemap" />
        <meta name="twitter:title" content="Sitemap - Green Ghost 🌿👻" />
        <meta
          name="twitter:description"
          content="Navigate the Green Ghost website easily with our sitemap. Find links to all main pages and dynamic content like gadgets, strains, edibles, and more."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/sitemap" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Sitemap - All you need is links!" />
        <Box
          as="ul"
          listStyleType="none"
          p={0}
          aria-label="Sitemap links list"
          mt={5}
        >
          {allLinks.length > 0 ? (
            allLinks.map((link) => (
              <Box as="li" aria-label={link} key={link}>
                <Link href={link} passHref>
                  <Text
                    as="span"
                    color="ghostVerse.green.base"
                    fontFamily="vt323"
                    fontSize="2xl"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {link}
                  </Text>
                </Link>
              </Box>
            ))
          ) : (
            <Text>No links found. Check server logs for details.</Text>
          )}
        </Box>
      </MainLayout>
    </>
  );
};

export default SitemapPage;
