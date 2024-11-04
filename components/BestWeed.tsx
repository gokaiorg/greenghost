import { Box, Text } from '@chakra-ui/react';
import { BudItemBest } from './shop/BudItemBest';
import { buds } from '../config/buds';

const selectedStrains = [
  'Scotty 2 Hotty',
  'Thai Stick',
  'Northern Lights',
  'Drippin’ Aint Eazy',
  'Mango Sticky Rice',
];

export const BestWeed = () => {
  const bestBuds = buds
    .filter((bud) => selectedStrains.includes(bud.name))
    .sort(
      (a, b) =>
        selectedStrains.indexOf(a.name) - selectedStrains.indexOf(b.name)
    );

  // Create an aria-label string including the selected strains
  const ariaLabel = `Best weed strains list: ${bestBuds
    .map((bud) => bud.name)
    .join(', ')}`;

  return (
    <Box as="section" aria-labelledby="The best weed in Phuket" mb="10">
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
      <Box as="nav" aria-label="Best Weed Navigation">
        <Box
          as="ul"
          aria-label={ariaLabel}
          display={'flex'}
          flexWrap={'wrap'}
          mx={-0.5}
        >
          {bestBuds.map((bud) => (
            <BudItemBest key={bud.slug} bud={bud} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
