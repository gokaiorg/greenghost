import { Box, Text } from '@chakra-ui/react';
import { ImgPercent } from './ImgPercent';
import { ImgQuestion } from './ImgQuestion';

export const Tokenized03 = () => {
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
        Are you from another universe in MultiversX
        <ImgQuestion />
      </Text>
      We also offer privileges to our partners in cannabis, art, gaming,
      community and of course, web3.
      <br />
      <br />
      If you own an NFT from one of our partners, you can enjoy a 10
      <ImgPercent /> discount on every order made at the Green Ghost cannabis
      store.
      <br />
      <br />
      <Box display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          target="_blank"
          href="https://linktr.ee/elrondbuds"
        >
          <Box
            as="img"
            src="/media/green-ghost-degen-weed-shop-partner-ebudsdac.webp"
            width={{ base: '80px' }}
            height={{ base: '80px' }}
            maxW="inherit"
            alt="Green Ghost - Degen Weed Shop - eBudsDAC Partner"
            title="Green Ghost - Degen Weed Shop - eBudsDAC Partner"
          />
          eBudsDAC
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          target="_blank"
          href="https://power.plata.network/"
        >
          <Box
            as="img"
            src="/media/green-ghost-degen-weed-shop-partner-plata.webp"
            width={{ base: '80px' }}
            height={{ base: '80px' }}
            maxW="inherit"
            alt="Green Ghost - Degen Weed Shop - Plata Partner"
            title="Green Ghost - Degen Weed Shop - Plata Partner"
          />
          Plata
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          target="_blank"
          href="https://www.instagram.com/faintart.x/"
        >
          <Box
            as="img"
            src="/media/green-ghost-degen-weed-shop-partner-fainart.webp"
            width={{ base: '80px' }}
            height={{ base: '80px' }}
            maxW="inherit"
            alt="Green Ghost - Degen Weed Shop - Fainart Partner"
            title="Green Ghost - Degen Weed Shop - Fainart Partner"
          />
          Fainart
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          target="_blank"
          href="https://linktr.ee/gccmmxxi"
        >
          <Box
            as="img"
            src="/media/green-ghost-degen-weed-shop-partner-gcc.webp"
            width={{ base: '80px' }}
            height={{ base: '80px' }}
            maxW="inherit"
            alt="Green Ghost - Degen Weed Shop - GCC Partner"
            title="Green Ghost - Degen Weed Shop - GCC Partner"
          />
          GCC
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          target="_blank"
          href="https://efforteconomy.io/"
        >
          <Box
            as="img"
            src="/media/green-ghost-degen-weed-shop-partner-effort-economy.webp"
            width={{ base: '80px' }}
            height={{ base: '80px' }}
            maxW="inherit"
            alt="Green Ghost - Degen Weed Shop - Effort Economy Partner"
            title="Green Ghost - Degen Weed Shop - Effort Economy Partner"
          />
          Effort
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          target="_blank"
          href="https://peerme.io/"
        >
          <Box
            as="img"
            src="/media/green-ghost-degen-weed-shop-partner-peerme.webp"
            width={{ base: '80px' }}
            height={{ base: '80px' }}
            maxW="inherit"
            alt="Green Ghost - Degen Weed Shop - Peerme Partner"
            title="Green Ghost - Degen Weed Shop - Peerme Partner"
          />
          Peerme
        </Box>
      </Box>
      <br />
      <br />
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        Join us now and take advantage of these exclusive perks!
      </Text>
    </Box>
  );
};
