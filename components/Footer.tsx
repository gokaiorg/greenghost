import { Box, Text } from '@chakra-ui/react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { MenuFooter } from './MenuFooter';
import { Find } from './Find';

export const Footer = () => {
  return (
    <Box
      as="footer"
      aria-label="Site Footer"
      color={'ghostVerse.grey.lighter'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={{ base: '4' }}
    >
      <MenuFooter />
      <Find />
      <SocialMediaIcons />
      <Box
        fontSize={{ base: 16, lg: 16 }}
        fontWeight={'bold'}
        position={'relative'}
        zIndex={1}
        mb={1}
        display={'flex'}
        justifyContent={'center'}
        whiteSpace={'nowrap'}
        fontFamily={'vt323'}
      >
        <Text>Made with weed by</Text>
        <Text
          as="a"
          color="ghostVerse.color1.darker"
          href="https://www.gokai.org"
          mx={2}
        >
          Gokai Labs
        </Text>
      </Box>
    </Box>
  );
};
