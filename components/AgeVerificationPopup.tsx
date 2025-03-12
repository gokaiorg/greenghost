// AgeVerification.tsx
import { useState, useEffect } from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';

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
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily={'CubicFive12'}
    >
      <Box
        px={6}
        py={8}
        width={{ base: '100%', md: '60%' }}
        maxW="400px"
        textAlign="center"
        backgroundColor="rgba(0, 0, 0, 0.8)"
        borderRadius="md"
        backdropFilter="blur(3px)"
      >
        <Box
          as={'img'}
          src="/media/green-ghost-degen-weed-shop-older-20-only.webp"
          width="200px"
          height="200px"
          margin={'auto'}
          alt="You must be 21 years or older to enter this site - Green Ghost"
          title="You must be 21 years or older to enter this site - Green Ghost"
        />
        <Text fontSize="xl" mt={4} mb={6}>
          You must be 21 years or older to enter this site.
        </Text>
        <Button
          background={'ghostVerse.green.base'}
          borderRadius={0}
          onClick={handleVerify}
          mb={4}
          w="full"
        >
          I am 21 or older
        </Button>
        <Link
          href="https://ghostverse.org/"
          color="yellow.300"
          title="GhostVerse"
          _hover={{ color: 'yellow.400' }}
          w="full"
          display="inline-block"
          textAlign="center"
        >
          Nope
        </Link>
      </Box>
    </Box>
  );
};

export default AgeVerification;
