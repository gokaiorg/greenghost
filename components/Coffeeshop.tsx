import { Box, Text } from '@chakra-ui/react';
import { ImgCoffeeshop } from './media/ImgCoffeeshop';

export const Coffeeshop = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Coffee shop section"
      display="flex"
      my={10}
      p={{ base: 5, lg: 10 }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="flex-start"
      bg="ghostVerse.dark.lighter"
    >
      <ImgCoffeeshop />
      <Box display="flex" flexDirection="column" mr={{ base: 0, md: 4 }}>
        <Text
          as="h2"
          fontSize={{ base: '24px', lg: '30px' }}
          lineHeight="1"
          fontFamily="CubicFive12"
          mt={{ base: 5 }}
          textAlign="left"
        >
          Coffee shop Rawai
        </Text>
        <Text
          as="p"
          fontSize={{ base: '26px', lg: '36px' }}
          lineHeight="1"
          fontFamily="vt323"
        >
          Our coffee shop offers a selection of expertly brewed espresso,
          americano, and café latte. Perfect for a quick pick-me-up or a
          relaxing break.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        mt={{ base: 5, md: 0 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          fontFamily="vt323"
          fontSize={{ base: '24px', md: '30px' }}
        >
          <Text
            as="h3"
            fontSize="20px"
            lineHeight="1"
            fontFamily="CubicFive12"
            mt={{ base: 5 }}
            textAlign="left"
          >
            Coffee Menu
          </Text>
          <Text whiteSpace={'nowrap'}>Espresso: 50 THB</Text>
          <Text whiteSpace={'nowrap'}>Americano: 50 THB</Text>
          <Text whiteSpace={'nowrap'}>Café Latte: 60 THB</Text>
        </Box>
      </Box>
    </Box>
  );
};
