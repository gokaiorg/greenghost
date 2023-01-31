import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import { BuyNowLink } from '../components/BuyNowLink';
import { GoToShopLink } from '../components/GoToShopLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css';

const GrandDaddyPurple: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <GoToShopLink />
      <HomeSectionTitle title="Grand Daddy Purple - Cannabis Shop Phuket." />
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <Box
            as="img"
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-grand-daddy-purple-01.jpeg"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Grand Daddy Purple"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Grand Daddy Purple"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            as="img"
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-grand-daddy-purple-02.jpeg"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Grand Daddy Purple"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Grand Daddy Purple"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            as="img"
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-grand-daddy-purple-03.jpeg"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Grand Daddy Purple"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Grand Daddy Purple"
          />
        </SwiperSlide>
      </Swiper>
      <Box
        borderColor="ghostVerse.color2.base"
        bgColor="ghostVerse.dark.lighter"
        borderWidth={1}
        backdropFilter="blur(3px)"
        p={4}
        my={4}
        display="inline-flex"
        flexDirection="column"
        fontSize={20}
      >
        Indulge in the sweet and potent Grand Daddy Purple (GDP) - a beloved
        cannabis strain known for its distinct grape and berry aroma. With high
        THC levels, GDP packs a powerful punch, providing a strong and
        long-lasting body high. Ideal for stress relief, chronic pain, insomnia,
        and anxiety, GDP is a go-to choice for many.
        <br />
        <br />
        Grown in a greenhouse, GDP boasts deep purple buds and a thick coat of
        trichomes, making it a visually stunning strain. Whether smoked or
        vaporized, this strain delivers a relaxing and euphoric experience,
        perfect for unwinding after a long day or socializing with friends.
        <br />
        <br />
        Experience the unique flavor and potent effects of GDP for yourself.
        Whether you're a seasoned smoker or a beginner, this strain is sure to
        impress with its calming and uplifting effects. Order now and discover
        the magic of Grand Daddy Purple.
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default GrandDaddyPurple;
