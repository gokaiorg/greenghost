import { FindItem } from './FindItem';
import { find } from '../config/finds';

import { Box, Text } from '@chakra-ui/react';

export const Find = () => {
  if (!Array.isArray(find)) return null;
  return (
    <Box>
      <Text
        as={'h3'}
        fontSize={'md'}
        mx={'auto'}
        fontFamily={'CubicFive12'}
        mt={10}
        textAlign={'center'}
        color={'white'}
      >
        Find Us Also On
      </Text>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Find Us Also List"
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
    </Box>
  );
};
