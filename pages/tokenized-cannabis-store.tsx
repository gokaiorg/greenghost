import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const CryptoNft: NextPage = () => {
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
          We are excited to introduce our unique smoke and earn concept, where
          customers can earn promotions and cashback when using crypto payments
          in our shop. Our shop accepts multiple crypto currencies such as EGLD,
          Bitcoin, Ethereum and more as a method of payment for our wide
          selection of marijuana, weed and ganja products.
          <br />
          <br />
          To get started, customers need to download a cryptocurrency wallet on
          their phone and set it up to store the crypto currency they want to
          use. Once the wallet is set up, customers can use it to make purchases
          in our shop, and earn rewards and discounts on future purchases. Our
          shop also utilizes blockchain technology to ensure that your
          transactions are secure and transparent.
          <br />
          <br />
          With our tokenized shop, customers will have control over their
          transactions, and all transactions will be recorded on blockchain,
          providing an additional layer of security. We believe that our
          tokenized shop will provide a more convenient and secure experience
          for our customers.
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
            href="https://xport.al/referral/7nvae7kpo1"
          >
            xPortal Wallet
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

export default CryptoNft;
