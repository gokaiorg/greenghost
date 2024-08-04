import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { Bud } from '../../components/shop/Bud';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/shop/elements/MenuWeedShop';
import { HomeFeature } from '../../components/HomeFeatures';
import { BuyOnline } from '../../components/BuyOnline';

const WeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Degen Weed Shop - Buds Menu</title>
        <meta
          name="description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Buds Menu"
        />
        <meta
          property="og:description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-buds-menu.webp"
        />
        <meta property="og:image:width" content="1748" />
        <meta property="og:image:height" content="2480" />
        <meta property="og:url" content="https://green.gd/weed-shop" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Buds Menu"
        />
        <meta
          name="twitter:description"
          content="Looking for a dispensary that prioritizes organic, locally sourced cannabis products? Look no further than Green Ghost Degen Weed Shop. Our shop is stocked with a wide range of flower, edibles, and concentrates, all of which are carefully curated from the best growers in the area."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-buds-menu.webp"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <Bud />
        <HomeFeature />
        <BuyOnline />
      </MainLayout>
    </>
  );
};

export default WeedShop;
