import { Box } from '@chakra-ui/react';
import { BudItem } from './BudItem';
import { bud } from '../config/dappUi';

export const Bud = () => {
  if (!Array.isArray(bud)) return null;

  return (
    <Box mt={4} mb="10">
      <Box
        as="h2"
        borderColor="ghostVerse.color2.base"
        bgColor="ghostVerse.dark.lighter"
        borderWidth={1}
        backdropFilter="blur(3px)"
        p={4}
        mb={4}
        display="inline-flex"
        flexWrap="wrap"
        fontSize={30}
      >
        Buds price for 1 gram.
      </Box>
      <Box display="flex" flexWrap="wrap">
        {bud.map((budItem, index) => (
          <BudItem key={index} {...budItem} />
        ))}
      </Box>
    </Box>
  );
};
