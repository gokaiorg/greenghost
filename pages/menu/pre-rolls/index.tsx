import type { NextPage } from 'next';
import { MainLayout } from '../../../components/MainLayout';
import { HeaderMenu } from '../../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../../components/HeaderMenuButtons';
import { PreRoll } from '../../../components/shop/PreRoll';
import Head from 'next/head';
import { MenuWeedShop } from '../../../components/shop/elements/MenuWeedShop';
import { HomeFeature } from '../../../components/HomeFeatures';
import { BuyOnline } from '../../../components/BuyOnline';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { buds } from '../../../config/buds';

const WeedShopPreRolls: NextPage = () => {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pre Rolls Menu',
    description: 'Weed Shop Premium Cannabis Pre Rolls Menu',
    itemListElement: buds.map((bud, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: `${bud.name} Pre Roll`,
        description: bud.description,
        image: [
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-cover.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-product-01.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-product-02.webp`,
        ],
        offers: {
          '@type': 'Offer',
          price: `${bud.price + 20}`,
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
          Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻
        </title>
        <meta
          name="description"
          content="Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly."
        />
        <meta
          property="og:title"
          content="Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop-preroll-joints-menu.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/menu/pre-rolls"
        />
        <meta
          name="twitter:title"
          content="Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop-preroll-joints-menu.webp"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/menu/pre-rolls"
        />
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
          <PreRoll />
          <HomeFeature />
          <BuyOnline />
          <Box w={{ base: '100%' }}>
            <Image
              src="/media/green-ghost-degen-weed-shop-preroll-joints-menu.webp"
              alt="Weed Shop Premium Cannabis Pre-Roll Joints Menu"
              title="Weed Shop Premium Cannabis Pre-Roll Joints Menu"
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

export default WeedShopPreRolls;
