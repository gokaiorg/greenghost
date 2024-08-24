import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/shop/elements/MenuWeedShop';
import { Edible } from '../../components/shop/Edible';
import { HomeFeature } from '../../components/HomeFeatures';
import { BuyOnline } from '../../components/BuyOnline';

const WeedShopEdibles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Weed Shop Premium Cannabis Edibles Menu</title>
        <meta
          name="description"
          content="Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Edibles Menu"
        />
        <meta
          property="og:description"
          content="Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/weed-shop-edibles" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Edibles Menu"
        />
        <meta
          name="twitter:description"
          content="Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-edibles" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <Edible />
        <HomeFeature />
        <BuyOnline />
      </MainLayout>
    </>
  );
};

export default WeedShopEdibles;
