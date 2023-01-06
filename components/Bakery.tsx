import { Box, SimpleGrid } from '@chakra-ui/react';
import { BakeryItem } from './BakeryItem';
import { bakery } from '../config/dappUi';

export const Bakery = () => {
  if (!Array.isArray(bakery)) return null;

  return (
    <Box mt={10} mb="10">
      <Box
        as="h2"
        borderColor="ghostVerse.color2.base"
        bgColor="ghostVerse.dark.lighter"
        borderWidth={1}
        backdropFilter="blur(3px)"
        p={4}
        mb={4}
        display="inline-flex"
        flexDirection="column"
        fontSize={30}
      >
        Bakery
      </Box>
      <SimpleGrid columns={{ base: 1 }} spacing={5}>
        {bakery.map((bakeryItem, index) => (
          <BakeryItem key={index} {...bakeryItem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
