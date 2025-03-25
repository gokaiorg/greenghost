import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const BuyOnline = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Get 10% Free on Weed Orders!"
      display={'flex'}
      mb={5}
      p={5}
      pt={0}
      h={'full'}
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
        title="Get 10% Free on greenghostweed.shop Orders"
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
          borderWidth={1}
          borderColor="black"
          bgColor="black"
          color="ghostVerse.green.base"
          _hover={{
            bgColor: 'ghostVerse.green.base',
            color: 'black',
          }}
        >
          {'Schedule & Save'}
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
          title="Weed Drive Thru Phuket"
          href="/weed-drive-thru-phuket"
          passHref
        >
          Weed Drive-Thru Pickup
        </Link>
      </Box>
    </Box>
  );
};
