import { ReviewItem } from './ReviewItem';
import { review } from '../config/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import the necessary CSS files
import 'swiper/css/autoplay'; // Ensure autoplay CSS is imported

import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

// Initialize Swiper modules globally
SwiperCore.use([Autoplay, EffectCoverflow]);

export const Review = () => {
  // Ensure 'review' is a valid array and not empty
  if (!Array.isArray(review) || review.length === 0) return null;

  return (
    <Box
      as="section"
      aria-labelledby="Cannabis Customer Reviews"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Image */}
      <Box w="120px" mb={4}>
        <Image
          src="/media/green-ghost-degen-weed-shop-cannabis-leaf.webp"
          width={256}
          height={262}
          alt="Best Degen Weed Shop Cannabis Reviews"
          title="Best Degen Weed Shop Cannabis Reviews"
          sizes="(max-width: 600px) 120px, (max-width: 1200px) 120px, 120px"
          quality={75}
        />
      </Box>

      {/* Heading */}
      <Text
        as="h3"
        fontSize={{ base: 20, lg: 28 }}
        lineHeight={1}
        fontFamily="CubicFive12"
        my={2}
        textAlign="center"
      >
        Green Ghosted Peeps
      </Text>

      {/* Swiper Slider */}
      <Box w="100%">
        <Swiper
          autoHeight={true}
          spaceBetween={10}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          autoplay={{
            delay: 8000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {review.map((homeHeroItem, index) => (
            <SwiperSlide key={index}>
              <ReviewItem {...homeHeroItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
