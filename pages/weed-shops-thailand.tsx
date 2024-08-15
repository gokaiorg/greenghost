import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import { ImgShops } from '../components/media/ImgShops';
import { ThaiShop } from '../components/ThaiShop';

const CannabisShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Thailand Weed Shops Selection</title>
        <meta
          name="description"
          content="Looking for the best cannabis shops in Thailand? Look no further than the ones trusted by the Green Ghost. We've scoured the country to find the top cannabis shops that offer the highest quality products and the best prices. Whether you're looking for flower, edibles, pre-rolls, or accessories, we've got you covered. Trust us to help you find the perfect cannabis products to suit your needs."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Thailand Weed Shops Selection."
        />
        <meta
          property="og:description"
          content="Looking for the best cannabis shops in Thailand? Look no further than the ones trusted by the Green Ghost. We've scoured the country to find the top cannabis shops that offer the highest quality products and the best prices. Whether you're looking for flower, edibles, pre-rolls, or accessories, we've got you covered. Trust us to help you find the perfect cannabis products to suit your needs."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/cannabis-shop-phuket"
        />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Thailand Weed Shops Selection."
        />
        <meta
          name="twitter:description"
          content="Looking for the best cannabis shops in Thailand? Look no further than the ones trusted by the Green Ghost. We've scoured the country to find the top cannabis shops that offer the highest quality products and the best prices. Whether you're looking for flower, edibles, pre-rolls, or accessories, we've got you covered. Trust us to help you find the perfect cannabis products to suit your needs."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/cannabis-shop-phuket"
        />
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
          mt={4}
        >
          <ImgShops />
          <HomeSectionTitle title="Thailand Weed Shops Selection" />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          bgColor={'ghostVerse.dark.lighter'}
          mt={5}
          mb={6}
          p={4}
          lineHeight={1}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: 30, lg: 34 }}
            fontWeight={'black'}
            mb={4}
          >
            Looking for the best cannabis shops in Thailand?
          </Text>
          <Box fontSize={{ base: 24, lg: 30 }} fontFamily={'vt323'}>
            Look no further than the ones trusted by the Green Ghost. We&apos;ve
            scoured the country to find the top cannabis shops that offer the
            highest quality products and the best prices.
          </Box>
        </Box>
        <ThaiShop />
      </MainLayout>
    </>
  );
};

export default CannabisShop;
