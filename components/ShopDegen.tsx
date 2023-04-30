import { Box } from '@chakra-ui/react';

export const ShopDegen = () => {
  return (
    <Box
      as="h2"
      borderColor={'ghostVerse.color2.base'}
      bgColor={'ghostVerse.dark.lighter'}
      borderWidth={1}
      backdropFilter={'blur(3px)'}
      p={4}
      my={4}
      display={'flex'}
      width="fit-content"
      flexDirection={'column'}
      fontSize={20}
    >
      Coming Soon
    </Box>
  );
};
