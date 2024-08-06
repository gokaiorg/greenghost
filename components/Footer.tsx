import { Container, Box, Text } from '@chakra-ui/react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { MenuFooter } from './MenuFooter';

export const Footer = () => {
  return (
    <Box
      color="elvenTools.white"
      display={'flex'}
      alignItems={'center'}
      mt={{ base: '4' }}
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign={'center'}
      >
        <SocialMediaIcons />
        <MenuFooter />
        <Box
          fontSize={{ base: 11, lg: 14 }}
          fontWeight={'bold'}
          position={'relative'}
          zIndex={1}
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
      </Container>
    </Box>
  );
};
