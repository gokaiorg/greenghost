import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Green Ghost - Phuket Cannabis Shop ร้าน ขาย กัญชา.
        </title>
        <meta
          name="description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta
          property="og:title"
          content="Green Ghost - Phuket Cannabis Shop ร้าน ขาย กัญชา."
        />
        <meta
          property="og:description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1895" />
        <meta property="og:image:height" content="898" />
        <meta property="og:url" content="https://green.gd" />
        <meta
          name="twitter:title"
          content="Green Ghost - Phuket Cannabis Shop ร้าน ขาย กัญชา."
        />
        <meta
          name="twitter:description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Green Ghost - Degen Weed Shop ร้าน ขาย กัญชา." />
        <Box
          display="flex"
          flexDirection="column"
          fontWeight="black"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          color="ghostVerse.color2.darker"
          fontFamily="vt323"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr={50}
        >
          <Text as="h2" fontSize="4xl" marginBottom={4}>
            Welcome to Green Ghost, Phuket&apos;s premier
            destination for high-quality marijuana, weed, and ganja.
          </Text>
          <Text as="p" fontSize="3xl">
            Our cannabis shop in Phuket offers a wide variety of locally-sourced
            and organic products, including flowers, edibles, and accessories.
            Our experienced staff is always on hand to help you find the perfect
            product and answer any questions. Visit us today and discover the
            best selection of cannabis products in Phuket.
          </Text>
        </Box>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize="4xl"
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          mr="auto"
        >
          <Link href="/cannabis-shop-phuket">Shop Now</Link>
        </Text>
        <Box display="flex" flexDirection="column">
          <Text
            as="h2"
            color="ghostVerse.color2.darker"
            fontSize="3xl"
            fontFamily="vt323"
            fontWeight="black"
            display="inline-flex"
            p={4}
            mt={5}
            mb={6}
            ml="auto"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
          >
            Buy and try the best ganja in Phuket NOW!
          </Text>
          <Text
            display="inline-flex"
            color="ghostVerse.green.base"
            borderColor="ghostVerse.green.base"
            fontSize="4xl"
            borderWidth={1}
            bgColor="ghostVerse.dark.lighter"
            backdropFilter="blur(3px)"
            py={2}
            px={6}
            mb={2}
            ml={{ base: '0', md: 'auto' }}
            mr={{ base: 'auto', md: '0' }}
          >
            <Link href="/contact-us-buy-weed-online">Contact Us</Link>
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          fontWeight="black"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          color="ghostVerse.color2.darker"
          fontFamily="vt323"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr={50}
        >
          <Text as="h2" fontSize="4xl" marginBottom={4}>
            Experience the future of cannabis shopping with our tokenized shop.
          </Text>
          <Text as="p" fontSize="3xl">
            Earn rewards and discounts using crypto payments. Secure and
            transparent transactions with blockchain technology. Try it now!
          </Text>
        </Box>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize="4xl"
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          mr="auto"
        >
          <Link href="/tokenized-cannabis-store">Relax and earn</Link>
        </Text>
      </MainLayout>
    </>
  );
};

export default Home;
