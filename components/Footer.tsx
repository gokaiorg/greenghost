import { Container, Box, Text } from '@chakra-ui/react';
import { SocialMediaIcons } from './SocialMediaIcons';
import { MenuFooter } from './MenuFooter';
import Image from 'next/image';

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
        <SocialMediaIcons />
        <MenuFooter />
        <Box
          fontSize="xs"
          fontWeight={'bold'}
          position={'relative'}
          zIndex={1}
          display={'flex'}
          justifyContent={'center'}
          whiteSpace={'nowrap'}
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
          <Text>for</Text>
          <Text
            as="a"
            color="ghostVerse.color1.darker"
            href="https://ghostverse.org/"
            mx={2}
          >
            GhostVerse DAO
          </Text>
        </Box>
        <Text
          as="a"
          color="ghostVerse.color1.darker"
          href="https://ghostverse.org/"
          mx={2}
          width={'100%'}
        >
          <Box w={'200px'} mx={'auto'}>
            <Image
              src="/media/green-ghost-degen-weed-shop-ghostverse-dao.png"
              width={256}
              height={91}
              alt="Green Ghost - Degen Weed Shop - Weed Menu."
            />
          </Box>
        </Text>
      </Container>
    </Box>
  );
};
