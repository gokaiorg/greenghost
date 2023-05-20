import { Container, Box, Text } from '@chakra-ui/react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { MenuFooter } from './MenuFooter';

export const Footer = () => {
  return (
    <Box
      color="elvenTools.white"
      display={'flex'}
      alignItems={'center'}
      mt={{ base: '5rem', md: 'auto' }}
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign={'center'}
      >
        <Text as="h2" fontSize="2xl" fontFamily={'CubicFive12'}>
          Follow Us
        </Text>
        <Box
          as={'h3'}
          display={'flex'}
          justifyContent={'center'}
          fontSize="3xl"
          marginBottom={4}
          w={'full'}
          color="ghostVerse.green.base"
          fontFamily={'vt323'}
        >
          @greenghostdegen
        </Box>
        <SocialMediaIcons />
        <MenuFooter />
        <Box
          fontSize="xs"
          fontWeight="bold"
          mb={{ base: '2', md: '4' }}
          position="relative"
          zIndex={1}
          display={'flex'}
          justifyContent={'center'}
          whiteSpace="nowrap"
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
