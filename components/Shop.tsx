import { Box, Text } from '@chakra-ui/react';
import { shops } from '../config/shops';
import { ShopItem } from './ShopItem';

export const Shop = () => {
  return (
    <Box mt={4} mb="10">
      <Text
        as={'h2'}
        textAlign={'center'}
        fontSize={{ base: '3xl' }}
        fontFamily={'vt323'}
        mb={10}
        lineHeight={1}
      >
        Looking for a trusted and high-quality weed shop near you?
      </Text>
      <Box display={'flex'} flexWrap={'wrap'}>
        {shops.map((shop) => (
          <ShopItem key={shop.slug} shop={shop} />
        ))}
      </Box>
    </Box>
  );
};
