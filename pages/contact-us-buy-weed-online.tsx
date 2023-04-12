import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import Head from 'next/head';

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Green Garden Dispensary - Phuket Cannabis Shop ร้าน ขาย กัญชา.
        </title>
        <meta
          name="description"
          content="Green Garden Dispensary is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta
          property="og:title"
          content="Green Garden Dispensary - Phuket Cannabis Shop ร้าน ขาย กัญชา."
        />
        <meta
          property="og:description"
          content="Green Garden Dispensary is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1895" />
        <meta property="og:image:height" content="898" />
        <meta property="og:url" content="https://green.gd" />
        <meta
          name="twitter:title"
          content="Green Garden Dispensary - Phuket Cannabis Shop ร้าน ขาย กัญชา."
        />
        <meta
          name="twitter:description"
          content="Green Garden Dispensary is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Contact us - Buy weed online." />
        <Box display="flex" flexDirection="column">
          <Text
            as="h2"
            color="white"
            fontSize={{ base: 'xl', md: 'lg' }}
            fontWeight="black"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            mt={5}
            mb={6}
            p={4}
            mr="auto"
          >
            Call the shop
          </Text>
          <Text
            display="inline-flex"
            color="ghostVerse.green.base"
            borderColor="ghostVerse.green.base"
            fontSize={{ base: '3xl', md: '40' }}
            borderWidth={1}
            whiteSpace="nowrap"
            bgColor="ghostVerse.dark.lighter"
            backdropFilter="blur(3px)"
            py={2}
            px={6}
            mb={2}
            mr="auto"
          >
            <Link href="tel:+66918485848">+66 93 645 9898</Link>
          </Text>
        </Box>
        <Box display="flex" flexDirection="column">
          <Text
            as="h2"
            color="white"
            fontSize={{ base: 'xl', md: 'lg' }}
            fontWeight="black"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            mt={5}
            mb={6}
            p={4}
            mr="auto"
          >
            Contact us to order online
          </Text>
          <SocialMediaIcons />
          <Box
            as="h3"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            p={4}
            mx="auto"
            mt={10}
            display="flex"
            width="fit-content"
            flexDirection="column"
            fontSize={20}
          >
            Immediate delivery in Phuket & Worldwide shipping
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
