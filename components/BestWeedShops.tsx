import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { shops } from '../config/shops';
import { ShopItem } from './ShopItem';

export const BestWeedShops = () => {
  return (
    <Box display={'flex'} my={10} flexWrap={'wrap'} alignItems={'stretch'}>
      <Box display={'flex'} w={'100%'} alignItems={'center'} width={'100%'}>
        <Text
          as={'h2'}
          fontSize={{ base: 24, lg: 30 }}
          lineHeight={1}
          fontFamily={'CubicFive12'}
          my={{ base: 4 }}
          textAlign={'left'}
        >
          Best Weed Shops Phuket
        </Text>
      </Box>
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
      <Box w={'100%'} display={'flex'} flexWrap={'wrap'} mt={5}>
        {shops.map((shop) => (
          <ShopItem key={shop.slug} shop={shop} />
        ))}
      </Box>
      <Link
        href={'/weed-shop-near-me'}
        passHref
        title="Best Weed shops near me in Phuket"
      >
        <Text
          as="span"
          display={'inline-flex'}
          w={'auto'}
          fontSize={{ base: 'xl', md: '4xl' }}
          lineHeight={1}
          borderWidth={1}
          px={{ base: 4, md: 6 }}
          pb={{ base: 2, md: 2 }}
          mx={'auto'}
          fontFamily={'vt323'}
          color={'black'}
          borderColor={'ghostVerse.green.base'}
          backgroundColor={'ghostVerse.green.base'}
          _hover={{
            borderColor: 'ghostVerse.green.base',
            bgColor: 'black',
            color: 'ghostVerse.green.base',
          }}
        >
          Explore Our Locations
        </Text>
      </Link>
    </Box>
  );
};
