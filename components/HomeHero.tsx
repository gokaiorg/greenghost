import { HomeHeroItem } from './HomeHeroItem';
import { homehero } from '../config/homeHero';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

export const HomeHero = () => {
  SwiperCore.use([Autoplay]);
  if (!Array.isArray(homehero)) return null;

  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 8000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative]}
    >
      {homehero.map((homeHeroItem, index) => (
        <SwiperSlide key={index}>
          <HomeHeroItem {...homeHeroItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
