import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { shops } from '../config/shops';
import { ShopItem } from './ShopItem';

export const BestWeedShops = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Best Weed Shops Phuket"
      display={'flex'}
      my={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
    >
      <Text
        as={'h2'}
        fontSize={{ base: 24, lg: 30 }}
        lineHeight={1}
        fontFamily={'CubicFive12'}
        my={{ base: 4 }}
        textAlign={'left'}
        display={'flex'}
        w={'100%'}
        alignItems={'center'}
        width={'100%'}
      >
        Best Weed Shops Phuket
      </Text>
      <Text
        as={'p'}
        fontSize={{ base: 26, lg: 36 }}
        lineHeight={1}
        fontFamily={'vt323'}
      >
        Explore our locations on Google Maps to find the nearest Green Ghost
        store. Experience premium quality cannabis and exceptional service at
        our convenient Phuket locations.
      </Text>
      <Box
        as="ul"
        aria-label="Best Weed Shops Phuket"
        listStyleType={'none'}
        w={'100%'}
        display={'flex'}
        flexWrap={'wrap'}
        mt={5}
      >
        {shops.map((shop) => (
          <ShopItem key={shop.slug} shop={shop} />
        ))}
      </Box>
      <Link
        href={'/locations'}
        passHref
        title="Best Weed shops near me in Phuket"
      >
        <Text
          as="span"
          display="inline-flex"
          fontFamily="CubicFive12"
          fontSize={{ base: 'md', md: 'lg' }}
          px={6}
          py={2}
          mt={0}
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
          Visit our locations
        </Text>
      </Link>
      <Box
        mx={2}
        fontFamily={'vt323'}
        fontSize={{ base: 'xl' }}
        lineHeight={1}
        px={{ base: 0, md: 6 }}
        py={{ base: 2, md: 2 }}
        color={'ghostVerse.green.base'}
      >
        <Link
          title="Best Weed Shops Thailand"
          href="/best-weed-shops-thailand"
          passHref
        >
          Best weed shops in Thailand
        </Link>
      </Box>
    </Box>
  );
};
