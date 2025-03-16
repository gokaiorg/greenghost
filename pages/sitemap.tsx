import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
const xml2js = require('xml2js');
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import { Text, Box } from '@chakra-ui/react';

// Function to fetch slugs dynamically
const fetchSlugs = async (type: string) => {
  try {
    const res = await fetch(`https://green.gd/api/${type}`); // Adjust API endpoint
    const data = await res.json();

    console.log(`Fetched ${type} slugs:`, data); // DEBUG LOG

    if (!Array.isArray(data)) {
      console.error(`Unexpected response from ${type} API:`, data);
      return [];
    }

    return data.map((item: any) => `https://green.gd/${type}/${item.slug}`);
  } catch (err) {
    console.error(`Error fetching ${type} slugs:`, err);
    return [];
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch sitemap XML
    const sitemapRes = await fetch('https://green.gd/sitemap-0.xml');
    const xmlData = await sitemapRes.text();
    const jsonData = await xml2js.parseStringPromise(xmlData);
    const sitemapLinks = jsonData.urlset.url.map((url: any) => url.loc[0]);

    console.log('Fetched XML Sitemap:', sitemapLinks); // DEBUG LOG

    // Fetch slugs from different categories
    const slugTypes = [
      'gadgets',
      'concentrates',
      'strains',
      'edibles',
      'nft',
      'weed-grower',
    ];
    const slugLinksArray = await Promise.all(slugTypes.map(fetchSlugs));

    // Merge both sets of links
    const allLinks = [...sitemapLinks, ...slugLinksArray.flat()];

    console.log('Final Merged Sitemap Links:', allLinks); // DEBUG LOG

    return { props: { allLinks } };
  } catch (err) {
    console.error('Error generating sitemap:', err);
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
          content="Looking for a quick and easy way to navigate the Green Ghost website? Check out our sitemap page, where you can find links to all of our main pages and subsections. From our cannabis products to our membership program and more, our sitemap makes it easy to find what you're looking for. Browse through our website with ease and discover all that Green Ghost has to offer."
        />
        <meta property="og:title" content="Sitemap - Green Ghost 🌿👻" />
        <meta
          property="og:description"
          content="Looking for a quick and easy way to navigate the Green Ghost website? Check out our sitemap page, where you can find links to all of our main pages and subsections. From our cannabis products to our membership program and more, our sitemap makes it easy to find what you're looking for. Browse through our website with ease and discover all that Green Ghost has to offer."
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
          content="Looking for a quick and easy way to navigate the Green Ghost website? Check out our sitemap page, where you can find links to all of our main pages and subsections. From our cannabis products to our membership program and more, our sitemap makes it easy to find what you're looking for. Browse through our website with ease and discover all that Green Ghost has to offer."
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
        <Box as="ul" listStyleType="none" p={0} aria-label="Sitemap links list" mt={5}>
          {allLinks.length > 0 ? (
            allLinks.map((link) => (
              <Box as="li" aria-label={link} key={link}>
                <Link href={link} passHref>
                  <Text
                    as={'span'}
                    color={'ghostVerse.green.base'}
                    fontFamily={'vt323'}
                    fontSize={'2xl'}
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {link}
                  </Text>
                </Link>
              </Box>
            ))
          ) : (
            <Text>No links found. Check console logs.</Text>
          )}
        </Box>
      </MainLayout>
    </>
  );
};

export default SitemapPage;
