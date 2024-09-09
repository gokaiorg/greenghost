import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/shop/elements/MenuWeedShop';
import { Gadget } from '../../components/shop/Gadget';
import { HomeFeature } from '../../components/HomeFeatures';
import { BuyOnline } from '../../components/BuyOnline';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const WeedShopGadgets: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Weed Shop Premium Cannabis Gadgets Menu</title>
        <meta
          name="description"
          content="Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Gadgets Menu"
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
        <meta property="og:url" content="https://green.gd/weed-shop-gadgets" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Gadgets Menu"
        />
        <meta
          name="twitter:description"
          content="Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-gadgets" />
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

export default WeedShopGadgets;
