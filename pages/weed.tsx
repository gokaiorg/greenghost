import type { NextPage } from 'next';
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

const Weed: NextPage = () => {
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
        <Box as="section" my={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            my={4}
            lineHeight={1}
          >
            <ImgWeed />
            <HomeSectionTitle title="Weed" />
          </Box>
          <Text
            as="p"
            fontSize={{ base: '3xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
            textAlign={'center'}
          >
            {
              "Welcome to the wild world of weed, where every bud tells a story! Whether you're a cannabis connoisseur or just dipping your toes into the green sea, get ready for a ride full of good vibes and giggles."
            }
          </Text>
          <Dominances />
          <BudAll />
          <HomeMenu />
          <BestWeed />
          <Box>
            <Image
              src="/media/green-ghost-degen-weed-guide-premium-cannabis.webp"
              alt="Your Weed Guide to Cannabis Excellence"
              title="Your Weed Guide to Cannabis Excellence"
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

export default Weed;
