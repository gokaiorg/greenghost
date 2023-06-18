import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { HomeSlider } from '../components/HomeSlider';
import { HomeFeature } from '../components/HomeFeatures';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { HomeMenu } from '../components/HomeMenu';
import { HomeFwens } from '../components/HomeFwens';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dispensary',
    name: 'Green Ghost',
    url: 'https://green.gd',
    logo: 'https://green.gd/green-ghost-degen-weed-shop.png',
  };

  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: 'json-ld',
            content: JSON.stringify(jsonLdSchema),
          },
        ]}
      />
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
        <HomeSlider />
        <HomeMenu />
        <HomeFeature />
        <HomeFwens />
        <TestimonialSlider />
      </MainLayout>
    </>
  );
};

export default Home;
