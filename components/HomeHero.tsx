// HomeHero.tsx
import { HomeHeroItem } from './HomeHeroItem';
import { homehero } from '../config/homeHero';
import { Box } from '@chakra-ui/react';

export const HomeHero = () => {
  if (!Array.isArray(homehero)) return null;

  return (
    <>
      {homehero.map((homeHeroItem, index) => (
        <Box as="section" key={index}>
          <HomeHeroItem {...homeHeroItem} />
        </Box>
      ))}
    </>
  );
};
