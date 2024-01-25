import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { HomeFeature } from '../components/HomeFeatures';
import { HomeMenu } from '../components/HomeMenu';
import { StrainWeek } from '../components/StrainWeek';
import { Review } from '../components/Review';
import { HomeHero } from '../components/HomeHero';
import { Fwen } from '../components/Fwen';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Degen Weed Shop Thailand.</title>
        <meta
          name="description"
          content="Green Ghost is a cannabis & weed shop in Thailand offering a wide variety of locally-sourced and imported products, including flowers, edibles, and accessories. We offer instant weed delivery in Phuket."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Degen Weed Shop Thailand."
        />
        <meta
          property="og:description"
          content="Green Ghost is a cannabis & weed shop in Thailand offering a wide variety of locally-sourced and imported products, including flowers, edibles, and accessories. We offer instant weed delivery in Phuket."
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
          content="Green Ghost 🌿👻 Degen Weed Shop Thailand."
        />
        <meta
          name="twitter:description"
          content="Green Ghost is a cannabis & weed shop in Thailand offering a wide variety of locally-sourced and imported products, including flowers, edibles, and accessories. We offer instant weed delivery in Phuket."
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
        <StrainWeek />
        <HomeHero />
        <HomeMenu />
        <HomeFeature />
        <Fwen />
        <Review />
      </MainLayout>
    </>
  );
};

export default Home;
