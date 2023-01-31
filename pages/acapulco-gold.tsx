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

const AcapulcoGold: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <GoToShopLink />
      <HomeSectionTitle title="Acapulco Gold - Cannabis Shop Phuket." />
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-acapulco-gold-01.jpeg"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Acapulco Gold"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Acapulco Gold"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            as="img"
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-acapulco-gold-02.jpeg"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Acapulco Gold"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Acapulco Gold"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            as="img"
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-acapulco-gold-03.jpeg"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Acapulco Gold"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Acapulco Gold"
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
        Discover the legendary Acapulco Gold, a rare sativa marijuana strain
        renowned for its exceptional quality and potent effects. Hailing from
        the stunning surroundings of Acapulco, Mexico, this strain has gained a
        reputation as one of the most sought-after cannabis varieties in the
        world.
        <br />
        <br />
        Famous for its unique, golden appearance and distinctive aroma of burnt
        toffee, Acapulco Gold is an unforgettable sensory experience. With
        energizing and motivating effects, this strain is often compared to a
        gourmet meal at a five-star restaurant. The buds are abundant with resin
        and boast a range of golden, green and brown hues, making them truly a
        sight to behold.
        <br />
        <br />
        As one of the most famous strains of all time, Acapulco Gold is becoming
        increasingly difficult to find, making it an even more prized possession
        for cannabis connoisseurs. Don't miss out on the chance to experience
        this remarkable strain for yourself.
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default AcapulcoGold;
