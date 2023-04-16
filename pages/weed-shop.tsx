import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Bud } from '../components/Bud';
import { BuyNowLink } from '../components/BuyNowLink';
import Head from 'next/head';
import { MenuWeedShop } from '../components/MenuWeedShop';

const WeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Buds.</title>
        <meta
          name="description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Buds."
        />
        <meta
          property="og:description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://green.gd/weed-shop" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Buds."
        />
        <meta
          name="twitter:description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd/weed-shop" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Degen Weed Shop - Buds." />
        <MenuWeedShop />
        <Bud />
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

export default WeedShop;
