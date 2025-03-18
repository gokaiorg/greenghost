import { Box, Text } from '@chakra-ui/react';
import { shops } from '../config/shops';
import { ShopItem } from './ShopItem';

export const Shop = () => {
  return (
    <Box mt={4} mb="10">
      <Text
        as={'p'}
        textAlign={'center'}
        fontSize={{ base: '3xl' }}
        fontFamily={'vt323'}
        mb={10}
        lineHeight={1}
      >
        Looking for a trusted and high-quality weed shop near you?
      </Text>
      <Text
        as="h2"
        fontSize="xl"
        mb={2}
        fontFamily="CubicFive12"
        textAlign={'center'}
      >
        Find us
      </Text>
      <Box
        as="ul"
        aria-label="Weed Shops Phuket Contact List"
        display={'flex'}
        flexWrap={'wrap'}
      >
        {shops.map((shop) => (
          <ShopItem key={shop.slug} shop={shop} />
        ))}
      </Box>
    </Box>
  );
};
