import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { MainLayout } from '../../../components/MainLayout';
import { HeaderMenu } from '../../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../../components/HeaderMenuButtons';
import { Bud } from '../../../components/shop/Bud';
import Head from 'next/head';
import { MenuWeedShop } from '../../../components/shop/elements/MenuWeedShop';
import { HomeFeature } from '../../../components/HomeFeatures';
import { BuyOnline } from '../../../components/BuyOnline';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { buds } from '../../../config/buds';

const Buds: NextPage = () => {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Buds Menu',
    description: 'Weed Shop Premium Cannabis Buds Menu',
    itemListElement: buds.map((bud, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: bud.name,
        description: bud.description,
        image: [
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-cover.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-bud-01.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-bud-02.webp`,
        ],
        offers: {
          '@type': 'Offer',
          price: bud.price.toFixed(2),
          priceCurrency: 'THB',
        },
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
        <title>Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Explore Green Ghost's premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction."
        />
        <meta
          property="og:title"
          content="Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Explore Green Ghost's premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-buds-menu.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/menu/buds" />
        <meta
          name="twitter:title"
          content="Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Explore Green Ghost's premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-buds-menu.webp"
        />
        <meta name="twitter:url" content="https://green.gd/menu/buds" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <Box as="main">
          <Bud />
          <HomeFeature />
          <BuyOnline />
          <Box w={{ base: '100%' }}>
            <Image
              src="/media/green-ghost-degen-weed-shop-buds-menu.webp"
              alt="Weed Shop Premium Cannabis Buds Menu"
              title="Weed Shop Premium Cannabis Buds Menu"
              width={2048}
              height={1366}
              sizes="100%"
              quality={75}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default Buds;
