import { ReviewItem } from './ReviewItem';
import { review } from '../config/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Review = () => {
  SwiperCore.use([Autoplay]);
  if (!Array.isArray(review)) return null;
  return (
    <>
      <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
        <Box w={'120px'}>
          <Image
            src="/media/green-ghost-degen-weed-shop-cannabis-leaf.webp"
            width={256} // Original width
            height={262} // Original height
            alt="Green Ghost - Degen Weed Shop - Cannabis Reviews"
            sizes="(max-width: 600px) 120px, (max-width: 1200px) 120px, 120px"
            quality={75}
          />
        </Box>
        <Text
          as={'h3'}
          fontSize={{ base: 20, lg: 28 }}
          lineHeight={1}
          fontFamily={'CubicFive12'}
          my={{ base: 2 }}
          textAlign={'center'}
        >
          Green Ghosted Peeps
        </Text>
      </Box>
      <Swiper
        autoHeight={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        loop
        autoplay={{
          delay: 8000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        {review.map((homeHeroItem, index) => (
          <SwiperSlide key={index}>
            <ReviewItem {...homeHeroItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
