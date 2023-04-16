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

const WeedShopEdibles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Edibles.</title>
        <meta
          name="description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal treats, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Edibles."
        />
        <meta
          property="og:description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal treats, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://green.gd/weed-shop-edibles" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Edibles."
        />
        <meta
          name="twitter:description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal treats, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd/weed-shop-edibles" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Degen Weed Shop - Edibles." />
        <MenuWeedShop />
        <Bakery />
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

export default WeedShopEdibles;
