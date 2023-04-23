import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const BuyNowLink = () => {
  return (
    <Box ml="auto" display="flex">
      <Link href="/contact-us-buy-weed-online">
        <Text
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={20}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={4}
          display="flex"
          width="fit-content"
          _hover={{
            bgColor: 'ghostVerse.green.base',
            color: 'black',
          }}
        >
          Buy Now
        </Text>
      </Link>
    </Box>
  );
};
