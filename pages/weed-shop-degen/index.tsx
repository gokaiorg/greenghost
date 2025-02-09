import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/shop/elements/MenuWeedShop';
import { Degen } from '../../components/shop/Degen';
import { HomeFeature } from '../../components/HomeFeatures';
import { BuyOnline } from '../../components/BuyOnline';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { degens } from '../../config/degens';

const GhostDegenWeedShop: NextPage = () => {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cannabis Concentrate Menu',
    description: 'Weed Shop Premium Cannabis Concentrate Menu',
    itemListElement: degens.map((degen, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: degen.name,
        description: degen.description,
        image: [
          `https://green.gd/media/green-ghost-degen-weed-shop-menu-degen-${degen.slug}-cover.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-menu-degen-${degen.slug}-photo-01.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-menu-degen-${degen.slug}-photo-02.webp`,
        ],
        offers: {
          '@type': 'Offer',
          price: degen.price.toFixed(2),
          priceCurrency: 'THB',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '13',
        },
      },
    })),
  };

  return (
    <>
      <Head>
        <title>
          Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻
        </title>
        <meta
          name="description"
          content="Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection."
        />
        <meta
          property="og:title"
          content="Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/weed-shop-degen" />
        <meta
          name="twitter:title"
          content="Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-degen" />
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
          <Degen />
          <HomeFeature />
          <BuyOnline />
          <Box w={{ base: '100%' }}>
            <Image
              src="/media/green-ghost-degen-weed-shop-buds-menu.webp"
              alt="Green Ghost 🌿👻 Weed Shop Premium Cannabis Buds Menu"
              title="Green Ghost 🌿👻 Weed Shop Premium Cannabis Buds Menu"
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

export default GhostDegenWeedShop;
