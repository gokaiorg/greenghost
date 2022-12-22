import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const GoToShopLink = () => {
  return (
    <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={20}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          mt="auto"
          mx="auto"
        >
          <Link href="/cannabis-shop-phuket">Go to the shop</Link>
        </Text>
  );
};
