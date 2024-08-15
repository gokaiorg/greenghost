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
        <title>Green Ghost 🌿👻 Degen Weed Shop - Edibles Menu</title>
        <meta
          name="description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal cookies, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Edibles Menu"
        />
        <meta
          property="og:description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal cookies, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
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
          content="Green Ghost 🌿👻 Degen Weed Shop - Edibles Menu"
        />
        <meta
          name="twitter:description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal cookies, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
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
