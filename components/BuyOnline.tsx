import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const BuyOnline = () => {
  return (
    <Box mr={{ base: 'auto', md: '2' }} ml={{ base: 'auto' }}>
      <Link
        href="https://greenghostweed.shop/collections/buds?filter.v.availability=1&filter.v.price.gte=&filter.v.price.lte=&sort_by=price-ascending"
        title="Green Ghost Weed Shop"
        passHref
      >
        <Text
          display={'inline-flex'}
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          fontSize={{ base: 'xl' }}
          borderWidth={1}
          bgColor="transparent"
          backdropFilter={'blur(3px)'}
          p={3}
          mb={2}
          fontFamily={'CubicFive10'}
          _hover={{
            borderColor: 'ghostVerse.green.base',
            color: 'ghostVerse.green.base',
          }}
        >
          Buy weed online and get 10% off on all flowers
        </Text>
      </Link>
    </Box>
  );
};
