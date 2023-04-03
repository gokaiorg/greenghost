import React from 'react';
import { Box } from '@chakra-ui/react';
import { ImgQuestion } from './ImgQuestion';
import Link from 'next/link';

const AgeVerificationPopup = ({ onVerify }) => {
  const handleVerify = () => {
    onVerify();
  };

  return (
    <Box
      pos="fixed"
      top={0}
      bottom={0}
      left={0}
      right={0}
      backgroundColor="black"
    >
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        margin="auto"
        width={{ base: '100%', md: '60%' }}
        height="50%"
      >
        <Box as="h2" fontSize="2xl">
          Are you 20 or older
          <ImgQuestion />
        </Box>
        <button onClick={handleVerify}>
          <Box
            as="span"
            display="inline-flex"
            color="ghostVerse.green.base"
            borderColor="ghostVerse.green.base"
            fontSize="xl"
            borderWidth={1}
            bgColor="ghostVerse.dark.lighter"
            backdropFilter="blur(3px)"
            py={2}
            px={6}
            mb={2}
            mr="auto"
          >
            Yes, I am over 20
          </Box>
        </button>
        <br />
        <Link href="https://ghostverse.org/">
          <Box
            as="span"
            display="inline-flex"
            color="ghostVerse.green.base"
            borderColor="ghostVerse.green.base"
            fontSize="xl"
            borderWidth={1}
            bgColor="ghostVerse.dark.lighter"
            backdropFilter="blur(3px)"
            py={2}
            px={6}
            mb={2}
            mr="auto"
          >
            No, NFTs are better for me
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default AgeVerificationPopup;
