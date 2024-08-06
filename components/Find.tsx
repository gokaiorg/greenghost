import { FindItem } from './FindItem';
import { find } from '../config/finds';

import { Box, Text } from '@chakra-ui/react';

export const Find = () => {
  if (!Array.isArray(find)) return null;
  return (
    <>
      <Text
        as={'h3'}
        fontSize={'xl'}
        mx={'auto'}
        fontFamily={'CubicFive12'}
        mt={10}
        textAlign={'center'}
        color={'ghostverse.color2.darker'}
      >
        Find Us Also On
      </Text>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        mx={'auto'}
        mb={4}
        fontSize={'3xl'}
        fontFamily={'vt323'}
      >
        {find.map((homeHeroItem, index) => (
          <FindItem key={index} {...homeHeroItem} />
        ))}
      </Box>
    </>
  );
};
