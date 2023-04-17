import { Container, Box, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      color="elvenTools.white"
      display="flex"
      alignItems="center"
      mt={{ base: '5rem', md: 'auto' }}
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box
          fontSize="xs"
          fontWeight="bold"
          mb={{ base: '2', md: '4' }}
          position="relative"
          zIndex={1}
          display="flex"
          justifyContent="center"
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
