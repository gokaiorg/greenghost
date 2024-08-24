import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/shop/elements/MenuWeedShop';
import { Degen } from '../../components/shop/Degen';
import { HomeFeature } from '../../components/HomeFeatures';
import { BuyOnline } from '../../components/BuyOnline';

const GhostDegenWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Weed Shop Premium Cannabis Degen Menu</title>
        <meta
          name="description"
          content="Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Degen Menu"
        />
        <meta
          property="og:description"
          content="Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/weed-shop-degen" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Weed Shop Premium Cannabis Degen Menu"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-degen" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <Degen />
        <HomeFeature />
        <BuyOnline />
      </MainLayout>
    </>
  );
};

export default GhostDegenWeedShop;
