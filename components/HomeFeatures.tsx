import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ImgDelivery } from './media/ImgDelivery';

export const HomeFeature = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Weed Delivery Phuket"
      display="flex"
      my={10}
      flexWrap="wrap"
      alignItems="stretch"
    >
      <Box display="flex" w="100%" alignItems="center" mb={5}>
        <ImgDelivery />
        <Text
          as="h2"
          fontSize={{ base: 24, lg: 34 }}
          lineHeight={1}
          fontFamily="CubicFive12"
          ml={4}
        >
          Weed Delivery Phuket
        </Text>
      </Box>
      <Text
        as="p"
        fontSize={{ base: 26, lg: 44 }}
        lineHeight={1}
        fontFamily="vt323"
        w={{ base: '100%', md: '70%' }}
        mb={5}
      >
        Experience the best weed delivery service in Phuket with Green Ghost. We
        offer instant delivery, bringing top-quality cannabis straight to your
        door.
      </Text>
      <Link
        href="/weed-delivery-phuket"
        passHref
        title="Best Weed Delivery Service in Phuket"
      >
        <Text
          as="span"
          display="inline-flex"
          fontFamily="CubicFive12"
          fontSize={{ base: 'md', md: 'lg' }}
          px={6}
          py={2}
          mt={5}
          mx="auto"
          color="black"
          borderWidth={1}
          borderColor="ghostVerse.green.base"
          backgroundColor="ghostVerse.green.base"
          _hover={{
            bg: 'black',
            color: 'ghostVerse.green.base',
          }}
        >
          Order Now
        </Text>
      </Link>
    </Box>
  );
};
