// AgeVerification.tsx
import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const AgeVerification = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified) {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  if (isVerified) {
    return null;
  }

  return (
    <Box
      pos="fixed"
      zIndex="100"
      top={0}
      bottom={0}
      left={0}
      right={0}
      backgroundColor="black"
      fontFamily={'CubicFive12'}
    >
      <Box
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        margin="auto"
        px={6}
        width={{ base: '100%', md: '60%' }}
        height={'fit-content'}
      >
        <Box
          as={'img'}
          src="/media/green-ghost-degen-weed-shop-older-20-only.webp"
          width="300px"
          height="300px"
          maxW={'inherit'}
          alt="Green Ghost - Degen Weed Shop - 20 or older only"
          title="Green Ghost - Degen Weed Shop - 20 or older only"
        />
        <Text fontSize="xl" mb={4}>
          You must be 21 years or older to enter this site.
        </Text>
        <Box
          display={'inline-flex'}
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          fontSize={'xl'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          py={2}
          px={6}
          mb={2}
          cursor={'pointer'}
          onClick={handleVerify}
        >
          I am 21 or older
        </Box>
        <br />
        <Link href={'https://ghostverse.org/'} title={'GhostVerse'} passHref>
          <Box
            as={'span'}
            display={'inline-flex'}
            color="#FFE12B"
            borderColor="#FFE12B"
            fontSize={'xl'}
            borderWidth={1}
            bgColor={'ghostVerse.dark.lighter'}
            backdropFilter={'blur(3px)'}
            py={2}
            px={6}
            mb={2}
            mr={'auto'}
          >
            Nope
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default AgeVerification;
