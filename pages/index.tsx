import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Green Garden Dispensary - Cannabis Shop ร้าน ขาย กัญชา." />
      <Box display="flex" flexDirection="column">
        <Text
          as="h2"
          color="white"
          fontSize="lg"
          fontWeight="black"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr={50}
        >
          Welcome to Green Garden Dispensary, Phuket&apos;s premier destination
          for high-quality marijuana, weed, and ganja. Our dispensary offers a
          wide variety of locally-sourced and organic products, including
          flower, edibles, and accessories. Our experienced staff is always on
          hand to help you find the perfect product and answer any questions.
          Visit us today and discover the best selection of cannabis products in
          Phuket.
        </Text>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={40}
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
      </Box>
      <Box display="flex" flexDirection="column">
        <Text
          as="h2"
          color="ghostVerse.color2.darker"
          fontSize="xl"
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
          fontSize={40}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          ml={{ base: '0', md: 'auto' }}
          mr={{ base: 'auto', md: '0' }}
        >
          <Link href="/buy-weed-online-phuket">Contact Us</Link>
        </Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Text
          as="h2"
          color="white"
          fontSize="lg"
          fontWeight="black"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr={50}
        >
          We are Phuket&apos;s first tokenized weed shop. Cryptocurrency is used
          to store a percentage of the shop&apos;s profits and is then
          distributed to our members.
        </Text>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={40}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          mr="auto"
        >
          <Link href="/crypto-nft-cannabis-store">Learn More</Link>
        </Text>
      </Box>
    </MainLayout>
  );
};

export default Home;
