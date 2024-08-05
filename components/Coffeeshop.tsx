import { Box, Text } from '@chakra-ui/react';
import { ImgCoffeeshop } from './media/ImgCoffeeshop';

export const Coffeeshop = () => {
  return (
    <Box
      display={'flex'}
      my={10}
      p={{ base: 5, lg: 10 }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={'flex-start'}
      bgColor={'ghostVerse.dark.lighter'}
      backdropFilter={'blur(3px)'}
    >
      <ImgCoffeeshop />
      <Box
        display={'flex'}
        flexDirection={'column'}
        mr={{ base: '0', md: '4' }}
      >
        <Text
          as={'h2'}
          fontSize={{ base: 24, lg: 30 }}
          lineHeight={'28px'}
          fontFamily={'CubicFive12'}
          mt={{ base: 5 }}
          textAlign={'left'}
        >
          Coffeeshop
        </Text>
        <Text
          as={'p'}
          fontSize={{ base: 26, md: 36 }}
          lineHeight={1}
          fontFamily={'vt323'}
        >
          Our coffeeshop offers a selection of expertly brewed espresso,
          americano, and café latte. Perfect for a quick pick-me-up or a
          relaxing break.
        </Text>
      </Box>
      <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column' }}
          alignItems={{ base: 'flex-start' }}
          mt={{ base: 5, md: 0 }}
          fontFamily={'vt323'}
          fontSize={{ base: 24, md: 30 }}
        >
          <Text
            as={'h3'}
            fontSize={{ base: 20 }}
            lineHeight={'28px'}
            fontFamily={'CubicFive12'}
            mt={{ base: 5 }}
            textAlign={'left'}
          >
            Coffee menu
          </Text>
          <Text whiteSpace={'nowrap'}>Espresso: 50 THB</Text>
          <Text whiteSpace={'nowrap'}>Americano: 50 THB</Text>
          <Text whiteSpace={'nowrap'}>Café Latte: 60 THB</Text>
        </Box>
      </Box>
    </Box>
  );
};
