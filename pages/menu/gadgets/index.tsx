import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { MainLayout } from '../../../components/MainLayout';
import { HeaderMenu } from '../../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../../../components/shop/elements/MenuWeedShop';
import { Gadget } from '../../../components/shop/Gadget';
import { HomeFeature } from '../../../components/HomeFeatures';
import { BuyOnline } from '../../../components/BuyOnline';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { gadgets } from '../../../config/gadgets';

const WeedShopGadgets: NextPage = () => {
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cannabis Accessories Menu',
    description: 'Weed Shop Premium Cannabis Accessories Menu',
    itemListElement: gadgets.map((gadget, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: gadget.name,
        description: gadget.description,
        image: [
          `https://green.gd/media/green-ghost-degen-weed-shop-menu-gadget-${gadget.slug}-cover.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-menu-gadget-${gadget.slug}-01.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-menu-gadget-${gadget.slug}-02.webp`,
        ],
        offers: {
          '@type': 'Offer',
          price: gadget.price.toFixed(2),
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
          Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻
        </title>
        <meta
          name="description"
          content="Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today."
        />
        <meta
          property="og:title"
          content="Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/menu/gadgets" />
        <meta
          name="twitter:title"
          content="Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/menu/gadgets" />
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
          <Gadget />
          <HomeFeature />
          <BuyOnline />
          <Box w={{ base: '100%' }}>
            <Image
              src="/media/green-ghost-degen-weed-shop-buds-menu.webp"
              alt="Weed Shop Premium Cannabis Gadgets Menu"
              title="Weed Shop Premium Cannabis Gadgets Menu"
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

export default WeedShopGadgets;
