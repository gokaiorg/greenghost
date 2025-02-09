import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { HomeFeature } from '../components/HomeFeatures';
import { HomeMenu } from '../components/HomeMenu';
import { Review } from '../components/Review';
import { HomeHero } from '../components/HomeHero';
import { Fwen } from '../components/Fwen';
import { BuyOnline } from '../components/BuyOnline';
import { BestWeedShops } from '../components/BestWeedShops';
import { Coffeeshop } from '../components/Coffeeshop';
import { BestWeed } from '../components/BestWeed';
import { HomeTopInfos } from '../components/HomeTopInfos';
import { StrainWeek } from '../components/StrainWeek';
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Best Degen Weed Shop and Delivery - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery."
        />
        <meta
          property="og:title"
          content="Best Degen Weed Shop and Delivery - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-delivery-phuket-thailand.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/" />
        <meta
          name="twitter:title"
          content="Best Degen Weed Shop and Delivery - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-delivery-phuket-thailand.webp"
        />
        <meta name="twitter:url" content="https://green.gd/" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main" aria-label="Main Content">
          <HomeHero />
          <HomeTopInfos />
          <HomeMenu />
          <BestWeed />
          <Coffeeshop />
          <HomeFeature />
          <BuyOnline />
          <BestWeedShops />
          <Fwen />
          <Review />
          <StrainWeek />
        </Box>
      </MainLayout>
    </>
  );
};

export default Home;
