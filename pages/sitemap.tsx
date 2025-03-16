import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
const xml2js = require('xml2js');
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import { Box, UnorderedList, ListItem, Text } from '@chakra-ui/react';

// Function to fetch slugs dynamically
const fetchSlugs = async (type: string) => {
  try {
    const res = await fetch(`https://green.gd/api/${type}`); // Adjust API endpoint
    const data = await res.json();
    return data.map((item: any) => `https://green.gd/${type}/${item.slug}`);
  } catch (err) {
    console.error(`Error fetching ${type} slugs:`, err);
    return [];
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    // Fetch sitemap XML
    const sitemapRes = await fetch('https://greengd-main.netlify.app/sitemap-0.xml');
    const xmlData = await sitemapRes.text();
    const jsonData = await xml2js.parseStringPromise(xmlData);
    const sitemapLinks = jsonData.urlset.url.map((url: any) => url.loc[0]);

    // Fetch slugs from different categories
    const slugTypes = ['gadgets', 'concentrates', 'strains', 'edibles', 'nft', 'weed-grower'];
    const slugLinksArray = await Promise.all(slugTypes.map(fetchSlugs));

    // Merge both sets of links
    const allLinks = [...sitemapLinks, ...slugLinksArray.flat()];

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
          content="Looking for a quick and easy way to navigate the Green Ghost website? Check out our sitemap page, where you can find links to all of our main pages and subsections."
        />
        <meta property="og:title" content="Sitemap - Green Ghost 🌿👻" />
        <meta property="og:url" content="https://green.gd/sitemap" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Sitemap - All you need is links!" />
        <UnorderedList>
          {allLinks.map((link) => (
            <ListItem key={link}>
              <Link href={link} passHref>
                <Text color={'ghostVerse.green.base'} fontFamily={'vt323'} fontSize={'2xl'} _hover={{ textDecoration: 'underline' }}>
                  {link}
                </Text>
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </MainLayout>
    </>
  );
};

export default SitemapPage;
