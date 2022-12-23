import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Crypto & NFT - Cannabis Shop Phuket." />
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
          Smoke and Earn! We are Phuket&apos;s first tokenized weed shop.
          Cryptocurrency is used to get promotion, cashback and to store a
          percentage of the shop&apos;s profits and is then distributed to our
          members.
        </Text>
        <Text
          as="h3"
          color="white"
          borderColor="ghostVerse.green.base"
          fontSize={{ base: 'lg' }}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
        >
          Receive an immediate 5
          <Text as="span" fontFamily="Arial" mr={2}>
            %
          </Text>
          discount on your order when you{' '}
          <Text ml={1} color="ghostVerse.green.base" as="span">
            <Link href="/buy-weed-online-phuket">pay in cryptocurrency</Link>
          </Text>
          .
        </Text>
        <Text
          as="h3"
          color="white"
          borderColor="ghostVerse.green.base"
          fontSize={{ base: 'lg' }}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
        >
          Receive 10
          <Text as="span" fontFamily="Arial" mr={2}>
            %
          </Text>
          cashback when using the{' '}
          <Text
            mx={1}
            color="ghostVerse.green.base"
            as="a"
            href="https://get.maiar.com/referral/7nvae7kpo1"
          >
            Maiar Wallet
          </Text>
          to make an EGLD payment.
        </Text>
        <Text
          as="h3"
          color="white"
          borderColor="ghostVerse.green.base"
          fontSize={{ base: 'lg' }}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
        >
          GreenGarden is a contributor of the{' '}
          <Text
            ml={1}
            color="ghostVerse.green.base"
            as="a"
            href="https://ghostverse.org/"
          >
            GhostVerse DAO
          </Text>
          . Own 5 MxGhosts NFTs and earn EGLD passive income.
        </Text>
      </Box>
    </MainLayout>
  );
};

export default Home;
