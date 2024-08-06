import { Box, Text } from '@chakra-ui/react';
import { BudItem } from './shop/BudItem';
import { buds } from '../config/buds';

const selectedStrains = [
  'Scotty 2 Hotty',
  'Thai Stick',
  'Forbidden Fruit',
  'El Chapo OG',
  'Mango Sticky Rice',
];

export const BestWeed = () => {
  const bestBuds = buds
    .filter((bud) => selectedStrains.includes(bud.name))
    .sort(
      (a, b) =>
        selectedStrains.indexOf(a.name) - selectedStrains.indexOf(b.name)
    );

  return (
    <Box mb="10">
      <Text
        as={'h2'}
        fontSize={{ base: 24, lg: 30 }}
        lineHeight={1}
        fontFamily={'CubicFive12'}
        my={{ base: 2 }}
        textAlign={'left'}
      >
        The best weed in Phuket
      </Text>
      <Text
        as={'p'}
        fontSize={{ base: 26, lg: 36 }}
        lineHeight={1}
        fontFamily={'vt323'}
        mb={4}
      >
        Explore the best weed in Phuket with our curated selection of
        top-quality strains. Handpicked for their superior effects and flavors,
        these strains include a variety of Sativa, Hybrid, and Indica
        dominances, each chosen to elevate your experience.
      </Text>
      <Box display={'flex'} flexWrap={'wrap'} mx={-0.5}>
        {bestBuds.map((bud) => (
          <BudItem key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
