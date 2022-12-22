import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { SocialMediaIcons } from '../components/SocialMediaIcons';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Buy weed online - Phuket delivery - Contact us and get your strain now." />
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
          Contact Us
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
          <Link href="tel:+66949486177">+66 94 948 6177</Link>
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
          Send a message
        </Text>
        <SocialMediaIcons />
      </Box>
    </MainLayout>
  );
};

export default Home;
