// HomeHero.tsx
import { HomeHeroItem } from './HomeHeroItem';
import { homehero } from '../config/homeHero';

export const HomeHero = () => {
  if (!Array.isArray(homehero)) return null;

  return (
    <>
      {homehero.map((homeHeroItem, index) => (
        <span key={index}>
          <HomeHeroItem {...homeHeroItem} />
        </span>
      ))}
    </>
  );
};
