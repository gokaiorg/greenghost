import type { NextPage } from 'next';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Bud } from '../components/Bud';
import { BuyNowLink } from '../components/BuyNowLink';
import { PreRoll } from '../components/PreRoll';
import { Bakery } from '../components/Bakery';
import Head from 'next/head';
import { MenuWeedShop } from '../components/MenuWeedShop';
import { ShopDegen } from '../components/ShopDegen';

const GhostDegenWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Degen Stuff.</title>
        <meta
          name="description"
          content="Everything we create is designed to make you feel like a true degen. Our products are made with the highest standards of craftsmanship and attention to detail, ensuring that you get the best possible experience every time you use them."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Degen Stuff."
        />
        <meta
          property="og:description"
          content="Everything we create is designed to make you feel like a true degen. Our products are made with the highest standards of craftsmanship and attention to detail, ensuring that you get the best possible experience every time you use them."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://green.gd/ghost-degen-weed-shop"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Degen Stuff."
        />
        <meta
          name="twitter:description"
          content="Everything we create is designed to make you feel like a true degen. Our products are made with the highest standards of craftsmanship and attention to detail, ensuring that you get the best possible experience every time you use them."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta
          name="twitter:url"
          content="https://green.gd/ghost-degen-weed-shop"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Degen Weed Shop - Degen Stuff." />
        <MenuWeedShop />
        <ShopDegen />
        <Box
          as="h3"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          p={4}
          my={4}
          mx="auto"
          display="flex"
          width="fit-content"
          flexDirection="column"
          fontSize={20}
        >
          All our products are organic
        </Box>
        <BuyNowLink />
      </MainLayout>
    </>
  );
};

export default GhostDegenWeedShop;
