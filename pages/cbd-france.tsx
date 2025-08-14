import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { Cbd } from '../components/shop/Cbd';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';
import { cbds } from '../config/cbds';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const Cbds: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CBD France',
    description: 'CBD France Premium Cannabis Shop Menu',
    itemListElement: cbds.map((cbd, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: cbd.name,
        image: [`/media/cbd/${cbd.slug}-cover-green-ghost.webp`],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5', // Adjust based on actual ratings
          reviewCount: '13', // Adjust based on actual review count
        },
      },
    })),
  };
  return (
    <>
      <Head>
        <title>CBD France Premium Cannabis Shop Menu - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Explore Green Ghost CBD France, your premier online shop for premium CBD flowers, oils, concentrates, and gummies. Lab-tested, THC < 0.3%, with fast, discreet delivery. For orders in France only. Join the degen vibe!"
        />
        <meta
          property="og:title"
          content="CBD France Premium Cannabis Shop Menu - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Explore Green Ghost CBD France, your premier online shop for premium CBD flowers, oils, concentrates, and gummies. Lab-tested, THC < 0.3%, with fast, discreet delivery. For orders in France only. Join the degen vibe!"
        />
        <meta
          property="og:image"
          content="https://green.gd/media/cbd/green-ghost-cbd-shopify-banner.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/cbd-france" />
        <meta
          name="twitter:title"
          content="CBD France Premium Cannabis Shop Menu - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Explore Green Ghost CBD France, your premier online shop for premium CBD flowers, oils, concentrates, and gummies. Lab-tested, THC < 0.3%, with fast, discreet delivery. For orders in France only. Join the degen vibe!"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/cbd/green-ghost-cbd-shopify-banner.webp"
        />
        <meta name="twitter:url" content="https://green.gd/cbd-france" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main">
          <Cbd />
        </Box>
      </MainLayout>
    </>
  );
};

export default Cbds;
