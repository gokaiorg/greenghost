import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const BuyNowLink = () => {
  return (
    <>
      <Link
        href={'/weed-delivery-phuket'}
        title={'Contact Us to buy weed online'}
        passHref
      >
        <Text
          ml={'auto'}
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          fontSize={18}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          py={1}
          px={3}
          mb={4}
          display={'block'}
          width={'fit-content'}
          _hover={{
            bgColor: 'ghostVerse.green.base',
            color: 'black',
          }}
        >
          Buy Now
        </Text>
      </Link>
    </>
  );
};
