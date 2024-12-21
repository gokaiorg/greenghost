import { Box, Text } from '@chakra-ui/react';
import { BudItemWholesale } from './shop/BudItemWholesale';
import { buds } from '../config/buds';

const selectedStrains = [
  'Hawaiian',
  'Orange Sherbert',
  'Super Lemon Haze',
  'Cherry Z',
  'Master OG',
];

export const WholesaleWeed = () => {
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
        Top Wholesale Cannabis in Phuket
      </Text>
      <Text
        as={'p'}
        fontSize={{ base: 26, lg: 36 }}
        lineHeight={1}
        fontFamily={'vt323'}
        mb={4}
      >
        Discover premium cannabis strains available for wholesale, starting at
        just 50 THB per gram with a minimum purchase of 100g. Perfect for bulk
        buyers!
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
            <BudItemWholesale key={bud.slug} bud={bud} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
