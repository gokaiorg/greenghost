import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { WholesaleWeed } from '../components/WholesaleWeed';
import { ImgWholesale } from '../components/media/ImgWholesale';

const BuyWholesaleWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Wholesale Cannabis Premium Strains in Phuket - Green Ghost 🌿👻
        </title>
        <meta
          name="description"
          content="Order premium cannabis wholesale from Green Ghost 🌿👻. Strains start at 50 THB/gram for 100g minimum. Quality and variety for your business in Phuket!"
        />
        <meta
          property="og:title"
          content="Wholesale Cannabis Premium Strains in Phuket - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Order premium cannabis wholesale from Green Ghost 🌿👻. Strains start at 50 THB/gram for 100g minimum. Quality and variety for your business in Phuket!"
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-wholesale-cannabis.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/wholesale" />
        <meta
          name="twitter:title"
          content="Wholesale Cannabis Premium Strains in Phuket - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Order premium cannabis wholesale from Green Ghost 🌿👻. Strains start at 50 THB/gram for 100g minimum. Quality and variety for your business in Phuket!"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-wholesale-cannabis.webp"
        />
        <meta name="twitter:url" content="https://green.gd/wholesale" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="section" my={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            my={4}
            lineHeight={1}
          >
            <ImgWholesale />
            <HomeSectionTitle title="Wholesale" />
          </Box>
          <Text
            as="p"
            fontSize={{ base: '3xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
            textAlign={'center'}
          >
            Partner with Green Ghost for your Premium Cannabis Wholesale in
            Phuket.
          </Text>
          <WholesaleWeed />
          <Box>
            <Image
              src="/media/green-ghost-degen-weed-shop-wholesale-cannabis.webp"
              alt="Wholesale Cannabis Premium Strains in Phuket"
              title="Wholesale Cannabis Premium Strains in Phuket"
              width={2048}
              height={1366}
              sizes="100%"
              quality={75}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWholesaleWeed;
