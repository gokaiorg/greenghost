import { Box, Text } from '@chakra-ui/react';
import { BudItemBest } from './shop/BudItemBest';
import { buds } from '../config/buds';
import Link from 'next/link';

const selectedStrains = [
  'Slaphappy',
  'Mango Sticky Rice',
  'Popanonymous',
  "Ben & Gary's",
  'Thai Stick',
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
    <Box as="section" aria-labelledby="Top 5 Must-Try Weed Strains" mb="10">
      <Text
        as={'h2'}
        fontSize={{ base: 24, lg: 30 }}
        lineHeight={1}
        fontFamily={'CubicFive12'}
        my={{ base: 2 }}
        textAlign={'left'}
      >
        Top 5 Must-Try Weed Strains
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
      <Link
        href="/weed"
        passHref
        title="Your Weed Guide to Cannabis Excellence"
        aria-label="Learn about weed"
      >
        <Text
          as="span"
          display="inline-flex"
          fontFamily="CubicFive12"
          fontSize={{ base: 'md', md: 'lg' }}
          px={6}
          py={2}
          my={5}
          mx="auto"
          borderWidth={1}
          borderColor="ghostVerse.green.base"
          bgColor="black"
          whiteSpace={'nowrap'}
          color="ghostVerse.green.base"
          _hover={{
            bgColor: 'ghostVerse.green.base',
            color: 'black',
          }}
        >
          {'Dive Into Weed'}
        </Text>
      </Link>
    </Box>
  );
};
