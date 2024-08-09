import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const BuyOnline = () => {
  return (
    <Box
      display={'flex'}
      mb={5}
      p={5}
      pt={0}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      backgroundColor={'ghostVerse.green.base'}
      color={'black'}
    >
      <Box display={'flex'} w={'100%'} alignItems={'left'}>
        <Text
          as={'h3'}
          fontSize={{ base: 30, lg: 50 }}
          lineHeight={1}
          fontWeight={'bold'}
          fontFamily={'vt323'}
          mt={{ base: 5 }}
          mb={{ base: 5 }}
          textAlign={'left'}
        >
          Get 10% Free on Weed Orders!
        </Text>
      </Box>
      <Text
        as={'p'}
        fontSize={{ base: 20, lg: 36 }}
        lineHeight={1}
        fontFamily={'vt323'}
        w={{ base: '60%', md: '70%' }}
        mr={4}
        textAlign={'left'}
      >
        Schedule your delivery for later on{' '}
        <Link
          href={'https://greenghostweed.shop'}
          passHref
          title="Green Ghost Weed Shop"
        >
          <Text as={'span'} textDecoration={'underline'}>
            greenghostweed.shop
          </Text>
        </Link>{' '}
        to enjoy an extra 10% free on all buds.
      </Text>
      <Link
        href={
          'https://greenghostweed.shop/collections/buds?filter.v.availability=1&filter.v.price.gte=&filter.v.price.lte=&sort_by=price-ascending'
        }
        passHref
        title="Green Ghost Weed Shop - Buds Menu"
      >
        <Text
          as="span"
          display={'inline-flex'}
          color={'ghostVerse.green.base'}
          borderColor={'black'}
          backgroundColor={'black'}
          fontSize={{ base: 'xl', lg: '4xl' }}
          lineHeight={1}
          borderWidth={1}
          px={{ base: 4, md: 6 }}
          pt={{ base: 2, md: 0 }}
          pb={{ base: 2, md: 2 }}
          mt={5}
          mx={'auto'}
          fontFamily={'vt323'}
          _hover={{
            borderColor: 'black',
            bgColor: 'ghostVerse.green.base',
            color: 'black',
          }}
        >
          {'Schedule & Save 10%'}
        </Text>
      </Link>
      <Box
        mx={2}
        fontFamily={'vt323'}
        fontSize={{ base: 'xl' }}
        lineHeight={1}
        px={{ base: 0, md: 6 }}
        py={{ base: 2, md: 2 }}
        ml={'auto'}
      >
        <Link
          title="Green Ghost - Weed Drive Thru Phuket"
          href="/weed-drive-thru-phuket"
          passHref
        >
          Weed Drive-Thru Pickup
        </Link>
      </Box>
    </Box>
  );
};
