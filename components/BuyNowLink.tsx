import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const BuyNowLink = () => {
  return (
    <Text
      color="ghostVerse.green.base"
      borderColor="ghostVerse.green.base"
      fontSize={40}
      borderWidth={1}
      bgColor="ghostVerse.dark.lighter"
      backdropFilter="blur(3px)"
      py={2}
      px={6}
      mb={10}
      mt="auto"
      mx="auto"
      display="flex"
      width="fit-content"
    >
      <Link href="/buy-weed-online-phuket">Buy Now</Link>
    </Text>
  );
};
