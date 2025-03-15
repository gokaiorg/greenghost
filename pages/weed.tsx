import type { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { HomeMenu } from '../components/HomeMenu';
import { BestWeed } from '../components/BestWeed';
import { Dominances } from '../components/Dominances';
import { BudAll } from '../components/shop/BudAll';
import { ImgWeed } from '../components/media/ImgWeed';
import { motion, useScroll, useTransform } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const Weed: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <>
      <Head>
        <title>Your Weed Guide to Cannabis Excellence - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Explore the world of cannabis with Green Ghost, your weed source for premium strains, educational resources, and crypto community connection. Discover the art and science of cannabis here."
        />
        <meta
          property="og:title"
          content="Your Weed Guide to Cannabis Excellence - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Explore the world of cannabis with Green Ghost, your weed source for premium strains, educational resources, and crypto community connection. Discover the art and science of cannabis here."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-guide-premium-cannabis.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/weed" />
        <meta
          name="twitter:title"
          content="Your Weed Guide to Cannabis Excellence - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Explore the world of cannabis with Green Ghost, your weed source for premium strains, educational resources, and crypto community connection. Discover the art and science of cannabis here."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-guide-premium-cannabis.webp"
        />
        <meta name="twitter:url" content="https://green.gd/weed" />
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
                src="/media/green-ghost-degen-weed-guide-premium-cannabis.webp"
                alt="Your Weed Guide to Cannabis Excellence"
                title="Your Weed Guide to Cannabis Excellence"
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
              <ImgWeed />
              <HomeSectionTitle title="Weed" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                {
                  "Welcome to the wild world of weed, where every bud tells a story! Whether you're a cannabis connoisseur or just dipping your toes into the green sea, get ready for a ride full of good vibes and giggles."
                }
              </Text>
            </Box>
          </Box>
          <Dominances />
          <BudAll />
          <HomeMenu />
          <BestWeed />
        </Box>
      </MainLayout>
    </>
  );
};

export default Weed;
