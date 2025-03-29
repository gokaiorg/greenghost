import type { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { HomeMenu } from '../components/HomeMenu';
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
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            gap={2}
          >
            <Box w={{ base: '100%', md: '60%' }}>
              <Text
                as="h2"
                fontSize={{ base: '20', md: '30' }}
                fontFamily={'CubicFive12'}
              >
                How to Enjoy Weed (Legally and Safely)
              </Text>
              <Text
                as="p"
                fontSize={{ base: '2xl' }}
                lineHeight={1}
                fontFamily="vt323"
                mb={10}
              >
                {
                  'Ready to enjoy weed in Thailand the right way? Since 2022, cannabis has been decriminalized here, but there’s a catch—keep it legal and safe! First, buy from licensed dispensaries, in some spots like Bangkok or Chiang Mai—street vendors are a no-go. Stick to buds or edibles with under 0.2% THC unless you’ve got a medical prescription for the strong stuff.'
                }
              </Text>
              <Text
                as="p"
                fontSize={{ base: '2xl' }}
                lineHeight={1}
                fontFamily="vt323"
                mb={10}
              >
                {
                  'Smoking? Take it private—puffing in public, like on Khao San or Bangla Road, can land you a 25,000 baht fine under nuisance laws. Edibles are a tasty bet—try cannabis-infused mango sticky rice from a legit cafe—but start low, as effects hit slow and hard. Growing your own? Register on the Plook Ganja app first. Age 20+ only, no preggo or breastfeeding folks allowed. Bonus tip: pair your buzz with a Thai massage for ultimate vibes—just don’t drive after. Stay smart, respect the rules, and enjoy the green scene!'
                }
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '40%' }}>
              <Image
                src="/media/enjoy-legal-cannabis-weed-shop-green-ghost.webp"
                width={1366}
                height={1366}
                alt="Enjoy Legal Cannabis Weed Shop Green Ghost"
                title="Enjoy Legal Cannabis Weed Shop Green Ghost"
                quality={75}
              />
            </Box>
          </Box>
          <HomeMenu />
        </Box>
      </MainLayout>
    </>
  );
};

export default Weed;
