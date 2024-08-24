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
        <title>
          Green Ghost 🌿👻 Weed Shop Premium Cannabis Pre Rolls Menu
        </title>
        <meta
          name="description"
          content="Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Pre Rolls Menu"
        />
        <meta
          property="og:description"
          content="Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly."
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
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Pre Rolls Menu"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly."
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
