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

const WeedShopMember: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Pre Rolled.</title>
        <meta
          name="description"
          content="Looking for high-quality pre-rolled joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Pre Rolled."
        />
        <meta
          property="og:description"
          content="Looking for high-quality pre-rolled joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://green.gd/weed-shop-pre-rolled"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Pre Rolled."
        />
        <meta
          name="twitter:description"
          content="Looking for high-quality pre-rolled joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta
          name="twitter:url"
          content="https://green.gd/weed-shop-pre-rolled"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Degen Weed Shop - Pre Rolled." />
        <MenuWeedShop />
        <PreRoll />
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

export default WeedShopMember;
