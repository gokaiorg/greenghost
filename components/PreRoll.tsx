import { Box, SimpleGrid } from '@chakra-ui/react';
import { PreRollItem } from './PreRollItem';
import { preroll } from '../config/dappUi';

export const PreRoll = () => {
  if (!Array.isArray(preroll)) return null;

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
        Pre Rolled
      </Box>
      <SimpleGrid columns={{ base: 1 }} spacing={5}>
        {preroll.map((prerollItem, index) => (
          <PreRollItem key={index} {...prerollItem} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
