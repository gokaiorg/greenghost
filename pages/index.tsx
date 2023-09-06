import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { HomeFeature } from '../components/HomeFeatures';
import { HomeMenu } from '../components/HomeMenu';
import { HomeFwens } from '../components/HomeFwens';
import { StrainWeek } from '../components/StrainWeek';
import { HomeHero } from '../components/HomeHero';
import { Review } from '../components/Review';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop ร้าน ขาย กัญชา.</title>
        <meta
          name="description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop ร้าน ขาย กัญชา."
        />
        <meta
          property="og:description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
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
          content="Green Ghost - Degen Weed Shop ร้าน ขาย กัญชา."
        />
        <meta
          name="twitter:description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
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
        <HomeFwens />
        <Review /> 
      </MainLayout>
    </>
  );
};

export default Home;
