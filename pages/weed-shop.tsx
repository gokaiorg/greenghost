import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Bud } from '../components/Bud';
import Head from 'next/head';
import { MenuWeedShop } from '../components/MenuWeedShop';
import { HomeFeature } from '../components/HomeFeatures';
import { IconMenu } from '../components/IconMenu';

const WeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Buds Menu.</title>
        <meta
          name="description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Buds Menu."
        />
        <meta
          property="og:description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-weed-shop-menu.png"
        />
        <meta property="og:image:width" content="1748" />
        <meta property="og:image:height" content="2480" />
        <meta property="og:url" content="https://green.gd/weed-shop" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Buds Menu."
        />
        <meta
          name="twitter:description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-weed-shop-menu.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box display={'flex'} alignItems={'center'}>
          <Box w={'70px'} mr={4} mb={4}>
            <IconMenu />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop - Buds Menu." />
        </Box>
        <MenuWeedShop />
        <Bud />
        <Box
          as={'h3'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          my={4}
          mx={'auto'}
          mt={'auto'}
          display={'flex'}
          width={'fit-content'}
          flexDirection={'column'}
          fontSize={20}
          textAlign={'center'}
        >
          All our products are organic
        </Box>
        <HomeFeature />
      </MainLayout>
    </>
  );
};

export default WeedShop;
