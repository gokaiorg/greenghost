import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { PreRoll } from '../components/PreRoll';
import Head from 'next/head';
import { MenuWeedShop } from '../components/MenuWeedShop';
import { IconMenu } from '../components/IconMenu';

const WeedShopMember: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Pre Rolled.</title>
        <meta
          name="description"
          content="Looking for high-quality pre-rolled joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Pre Rolled Menu."
        />
        <meta
          property="og:description"
          content="Looking for high-quality pre-rolled joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/weed-shop-pre-rolled"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Pre Rolled Menu."
        />
        <meta
          name="twitter:description"
          content="Looking for high-quality pre-rolled joints made with locally sourced, organic cannabis? Look no further than our pre-rolled shop! We offer a wide selection of pre-rolls made with only the best, all-natural ingredients. Our products are carefully crafted to ensure a consistent, high-quality experience every time. Try our pre-rolls today and taste the difference that local, organic products can make."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/weed-shop-pre-rolled"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box display={'flex'} alignItems={'center'}>
          <Box w={'70px'} mr={4} mb={4}>
            <IconMenu />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop - Pre Rolled Menu." />
        </Box>
        <MenuWeedShop />
        <PreRoll />
        <Box
          as={'h3'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          my={4}
          mx={'auto'}
          mt={'auto'}
          display={'flex'}
          width={'fit-content'}
          flexDirection={'column'}
          fontSize={20}
          textAlign={'center'}
        >
          All our products are organic
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedShopMember;
