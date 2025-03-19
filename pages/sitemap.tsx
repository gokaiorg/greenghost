import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import { Text, Box } from '@chakra-ui/react';

interface Strain {
  slug: string;
  [key: string]: unknown;
}

const fetchSlugs = async (): Promise<string[]> => {
  try {
    const categories = [
      'locations',
      'edibles',
      'concentrates',
      'strains',
      'gadgets',
      'weed-grower',
      'nft',
    ];
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://green.gd'
        : 'http://localhost:3000';
    const fetchPromises = categories.map(async (category) => {
      const res = await fetch(`${baseUrl}/api/${category}`);
      if (!res.ok) return [];
      const data = await res.json();
      let slugs: string[] = [];
      if (Array.isArray(data)) {
        slugs = data.map((item: Strain) => item.slug);
      } else if (data.slugs && Array.isArray(data.slugs)) {
        slugs = data.slugs;
      }
      return slugs.map((slug: string) => `/${category}/${slug}`);
    });
    return (await Promise.all(fetchPromises)).flat();
  } catch (err) {
    console.error('Error fetching slugs:', err);
    return [];
  }
};

const getStaticUrls = async (): Promise<string[]> => {
  try {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://green.gd'
        : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/static-urls`);
    if (!res.ok) {
      console.error('Failed to fetch static URLs:', res.status);
      return [];
    }
    return await res.json();
  } catch (err) {
    console.error('Error fetching static URLs:', err);
    return [];
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://green.gd'
      : 'http://localhost:3000';
  const staticUrls = await getStaticUrls();
  const dynamicUrls = await fetchSlugs();
  const allLinks = [
    ...staticUrls.map(
      (path) => `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`
    ),
    ...dynamicUrls.map(
      (slug) => `${baseUrl}${slug.startsWith('/') ? '' : '/'}${slug}`
    ),
  ];
  return { props: { allLinks } };
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
            <Text>No links found.</Text>
          )}
        </Box>
      </MainLayout>
    </>
  );
};

export default SitemapPage;
