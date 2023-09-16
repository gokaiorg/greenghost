import { ReviewItem } from './ReviewItem';
import { review } from '../config/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Review = () => {
  SwiperCore.use([Autoplay]);
  if (!Array.isArray(review)) return null;
  return (
    <>
      <Box display={'flex'} flexDir={'column'} alignItems={'center'} mt={20}>
        <Box w={'160px'}>
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Image
              src={'/media/green-ghost-degen-weed-shop-cannabis-leaf.png'}
              width={478}
              height={475}
              alt={'Green Ghost - Degen Weed Shop - Cannabis Leaf.'}
            />
          </motion.div>
        </Box>
        <Text
          as={'h3'}
          fontSize={{ base: 24, lg: 34 }}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={5}
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
