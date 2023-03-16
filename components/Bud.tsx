import { Box, SimpleGrid } from '@chakra-ui/react';
import { BudItem } from './BudItem';
import { bud } from '../config/dappUi';

export const Bud = () => {
  if (!Array.isArray(bud)) return null;

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
        Buds 1G
      </Box>
      <SimpleGrid
        gridTemplateRows="repeat(6, 50px)"
        gridAutoFlow="column"
        gridTemplateColumns="repeat(3, 33%)"
        gridGap={5}
      >
        {bud.map((budItem, index) => (
          <BudItem key={index} {...budItem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
