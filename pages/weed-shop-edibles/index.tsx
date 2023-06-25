import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/MenuWeedShop';
import { Edible } from '../../components/Edible';
import { IconMenu } from '../../components/IconMenu';

const WeedShopEdibles: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Edibles Menu.</title>
        <meta
          name="description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal cookies, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Edibles Menu."
        />
        <meta
          property="og:description"
          content="Discover our delicious selection of locally sourced and organic edibles. From classic brownies and gummies to unique artisanal cookies, our edibles are carefully crafted to provide a consistent and enjoyable experience. Our products are made with high-quality ingredients and are lab tested for potency and purity. Whether you're looking for a tasty way to relax or a discreet way to medicate, our edibles have got you covered. Order now and indulge in the ultimate edible experience!"
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-edibles" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Edibles Menu."
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
        <Box display={'flex'} alignItems={'center'}>
          <Box w={'70px'} mr={4} mb={4}>
            <IconMenu />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop - Edibles Menu." />
        </Box>
        <MenuWeedShop />
        <Edible />
      </MainLayout>
    </>
  );
};

export default WeedShopEdibles;
