import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { PreRoll } from '../components/shop/PreRoll';
import Head from 'next/head';
import { MenuWeedShop } from '../components/shop/elements/MenuWeedShop';

const WeedShopPreRolls: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Degen Weed Shop - Pre Rolls Menu</title>
        <meta
          name="description"
          content="Looking for high-quality pre-roll joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Pre Rolls Menu"
        />
        <meta
          property="og:description"
          content="Looking for high-quality pre-roll joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/weed-shop-pre-rolls"
        />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Pre Rolls Menu"
        />
        <meta
          name="twitter:description"
          content="Looking for high-quality pre-roll joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/weed-shop-pre-rolls"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <PreRoll />
      </MainLayout>
    </>
  );
};

export default WeedShopPreRolls;
