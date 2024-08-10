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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Green Ghost 🌿👻 Best Degen Weed Shop and Delivery in Thailand
        </title>
        <meta
          name="description"
          content="Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Best Degen Weed Shop and Delivery in Thailand"
        />
        <meta
          property="og:description"
          content="Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Best Degen Weed Shop and Delivery in Thailand"
        />
        <meta
          name="twitter:description"
          content="Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
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
      </MainLayout>
    </>
  );
};

export default Home;
