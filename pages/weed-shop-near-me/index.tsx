import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Head from 'next/head';
import { IconMap } from '../../components/media/IconMap';
import { Shop } from '../../components/Shop';
import { Find } from '../../components/Find';

const WeedShopNearMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Degen Weed Shop - Near Me</title>
        <meta
          name="description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Near Me"
        />
        <meta
          property="og:description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-near-me" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Near Me"
        />
        <meta
          name="twitter:description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-near-me" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          my={4}
          lineHeight={1}
        >
          <Box w={{ base: '70px', lg: '100px' }} mb={1}>
            <IconMap />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop Near Me" />
        </Box>
        <Shop />
        <Find />
      </MainLayout>
    </>
  );
};

export default WeedShopNearMe;
