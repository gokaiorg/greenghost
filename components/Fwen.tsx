import { FwenItem } from './FwenItem';
import { fwen } from '../config/fwens';
import { Box, Text } from '@chakra-ui/react';
import { ImgPartners } from './media/ImgPartners';

export const Fwen = () => {
  if (!Array.isArray(fwen)) return null;
  return (
    <Box
      display={'flex'}
      my={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      justifyContent={'end'}
      mx={-2}
    >
      <Box display={'flex'} flexDir={'column'} w={'100%'} alignItems={'end'}>
        <Box as={'span'} w={{ base: '80%', lg: '50%' }}>
          <ImgPartners />
        </Box>
        <Text
          as={'h3'}
          fontSize={{ base: 24, lg: 34 }}
          lineHeight={'28px'}
          fontFamily={'CubicFive12'}
          mt={{ base: 5 }}
          mb={{ base: 5 }}
          textAlign={'right'}
        >
          Our best cannabis partners
        </Text>
      </Box>
      {fwen.map((homeHeroItem, index) => (
        <FwenItem key={index} {...homeHeroItem} />
      ))}
    </Box>
  );
};
