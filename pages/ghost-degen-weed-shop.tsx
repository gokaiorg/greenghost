import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuWeedShop } from '../components/MenuWeedShop';
import { ShopDegen } from '../components/ShopDegen';

const GhostDegenWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Degen Stuff.</title>
        <meta
          name="description"
          content="Everything we create is designed to make you feel like a true degen. Our products are made with the highest standards of craftsmanship and attention to detail, ensuring that you get the best possible experience every time you use them."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Degen Stuff."
        />
        <meta
          property="og:description"
          content="Everything we create is designed to make you feel like a true degen. Our products are made with the highest standards of craftsmanship and attention to detail, ensuring that you get the best possible experience every time you use them."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/ghost-degen-weed-shop"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Degen Stuff."
        />
        <meta
          name="twitter:description"
          content="Everything we create is designed to make you feel like a true degen. Our products are made with the highest standards of craftsmanship and attention to detail, ensuring that you get the best possible experience every time you use them."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/ghost-degen-weed-shop"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Degen Weed Shop - Degen Stuff." />
        <MenuWeedShop />
        <ShopDegen />
      </MainLayout>
    </>
  );
};

export default GhostDegenWeedShop;