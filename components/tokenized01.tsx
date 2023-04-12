import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ImgDollar } from './ImgDollar';
import { ImgPercent } from './ImgPercent';
import { ImgQuestion } from './ImgQuestion';

export const Tokenized01 = () => {
  return (
    <Box
      as="div"
      color="white"
      fontSize={{ base: '3xl' }}
      borderColor="ghostVerse.color2.base"
      bgColor="ghostVerse.dark.lighter"
      borderWidth={1}
      backdropFilter="blur(3px)"
      mt={5}
      mb={6}
      p={4}
      mr="auto"
      fontFamily="vt323"
    >
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        Join the new generation in love for weed, art and crypto.
      </Text>
      Green Ghost is a contributor to the{' '}
      <Text color="ghostVerse.green.base" as="a" href="https://ghostverse.org/">
        GhostVerse DAO
      </Text>
      , providing exclusive privileges to NFT holders as members of the Ghost
      Clan.
      <br />
      <br />
      MxGhosts pixel and voxel NFTs holders receive a 20
      <ImgPercent /> discount and{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        target="_blank"
        href="https://linktr.ee/elrondbuds"
      >
        <ImgDollar />
        EBUD
      </Text>{' '}
      cashback on all orders, in addition to earning{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        href="https://ghostverse.org/play-and-earn"
      >
        passive income in <ImgDollar />
        EGLD
      </Text>{' '}
      on{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        target="_blank"
        href="https://multiversx.com/"
      >
        MultiversX blockchain
      </Text>
      .
      <br />
      <br />
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        Looking to get your hands on a unique Mr. Ghost NFT
        <ImgQuestion />
      </Text>
      Head over to{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        href="https://ghostverse.org/mxghosts"
      >
        MxGhosts
      </Text>{' '}
      and keep an eye out for our upcoming public sales or purchase one on the
      secondary market. Make sure to follow our links to avoid scams.
      <br />
      <br />
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        New to the world of blockchain and NFTs
        <ImgQuestion />
      </Text>
      <Link href="/install-xportal-app">
        <Box as="span" color="ghostVerse.green.base">
          Install xPortal Wallet on your phone
        </Box>
      </Link>{' '}
      and join the revolution.
    </Box>
  );
};
