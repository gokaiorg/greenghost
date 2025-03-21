import type { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { WholesaleWeed } from '../components/WholesaleWeed';
import { ImgWholesale } from '../components/media/ImgWholesale';
import { motion, useScroll, useTransform } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const BuyWholesaleWeed: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
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
        <Box as="main" my={4}>
          <Box
            as="section"
            aria-label="Banner"
            position="relative"
            height="100%"
            width="100%"
            overflow="hidden"
            mb={10}
          >
            <motion.div
              style={{
                y,
                position: 'absolute',
                top: '-65%',
                left: 0,
                width: '100%',
                height: '200%',
                zIndex: -1,
              }}
            >
              <Image
                src="/media/green-ghost-degen-weed-shop-wholesale-cannabis.webp"
                alt="Wholesale Cannabis Premium Strains in Phuket"
                title="Wholesale Cannabis Premium Strains in Phuket"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
              />
            </motion.div>
            <Box
              bg="rgba(0, 0, 0, 0.8)"
              p={2}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'100%'}
              minHeight={{ base: 'auto', md: '400px' }}
            >
              <ImgWholesale />
              <HomeSectionTitle title="Wholesale" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                Partner with Green Ghost to experience the finest Premium
                Cannabis Wholesale services in Thailand. Our dedicated team is
                committed to providing you with top-quality cannabis products,
                sourced responsibly and tailored to meet your specific needs.
              </Text>
            </Box>
          </Box>
          <WholesaleWeed />
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWholesaleWeed;
