// HomeHero.tsx
import { HomeHeroItem } from './HomeHeroItem';
import { homehero } from '../config/homeHero';

export const HomeHero = () => {
  if (!Array.isArray(homehero)) return null;

  return (
    <div>
      {homehero.map((homeHeroItem, index) => (
        <div key={index}>
          <HomeHeroItem {...homeHeroItem} />
        </div>
      ))}
    </div>
  );
};
