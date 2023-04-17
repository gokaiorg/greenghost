import { Box, Text } from '@chakra-ui/react';
import { ImgDollar } from './ImgDollar';
import { ImgQuestion } from './ImgQuestion';

export const Tokenized02 = () => {
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
        Ready to step into a new economic model
        <ImgQuestion />
      </Text>
      If you own an{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        href="https://ghostverse.org/mxghosts"
      >
        NFT from our collection
      </Text>{' '}
      and pay with <ImgDollar />
      EGLD using the{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        href="https://xport.al/referral/7nvae7kpo1"
      >
        xPortal app
      </Text>
      , you&apos;ll receive cashback in <ImgDollar />
      EBUD.
      <br />
      <br />
      <Text
        color="ghostVerse.green.base"
        as="a"
        target="_blank"
        href="https://linktr.ee/elrondbuds"
      >
        eBudsDAC
      </Text>{' '}
      is an experimental, autonomous, and decentralized project on the{' '}
      <Text
        color="ghostVerse.green.base"
        as="a"
        target="_blank"
        href="https://multiversx.com/"
      >
        MultiversX blockchain
      </Text>{' '}
      and centered around cannabis.
      <br />
      <br />
      The token listing is currently underway, and soon you&apos;ll be able to
      buy your cannabis directly in the Green Ghost with your accumulated{' '}
      <ImgDollar />
      EBUD.
      <br />
      <br />
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        Join us in this innovative movement and take advantage of our unique
        rewards system.
      </Text>
    </Box>
  );
};
