import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import { BuyNowLink } from '../components/BuyNowLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Head from 'next/head';

import 'swiper/css';
import { GoToShopLink } from '../components/GoToShopLink';

const SpaceCakeBrownie: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Head>
        <title>Green Ghost - Phuket Cannabis Shop ร้าน ขาย กัญชา.</title>
        <meta
          name="description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta
          property="og:title"
          content="Green Ghost - Phuket Cannabis Shop ร้าน ขาย กัญชา."
        />
        <meta
          property="og:description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1895" />
        <meta property="og:image:height" content="898" />
        <meta property="og:url" content="https://green.gd" />
        <meta
          name="twitter:title"
          content="Green Ghost - Phuket Cannabis Shop ร้าน ขาย กัญชา."
        />
        <meta
          name="twitter:description"
          content="Green Ghost is a cannabis shop in Phuket offering a wide variety of locally-sourced and organic products, including flowers, edibles, and accessories."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <GoToShopLink />
        <HomeSectionTitle title="Brownie Space Cake - Cannabis Shop Phuket." />
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
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-cover.webp"
              width={{ base: '100%' }}
              height={{ base: '100%' }}
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="img"
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-02.webp"
              width={{ base: '100%' }}
              height={{ base: '100%' }}
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="img"
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-03.webp"
              width={{ base: '100%' }}
              height={{ base: '100%' }}
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="img"
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-04.webp"
              width={{ base: '100%' }}
              height={{ base: '100%' }}
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
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
          fontSize="3xl"
          fontFamily="vt323"
        >
          Introducing the ultimate indulgence for cannabis lovers, our Brownie
          Space Cake made with OG kush marijuana butter, Switzerland flour and
          Belgium chocolate. This delicious treat is the perfect way to enjoy
          the full benefits of marijuana in a delectable and decadent form.
          <br />
          <br />
          Our Brownie Space Cake is made with only the finest ingredients,
          including premium OG kush marijuana butter, which is known for its
          strong and relaxing effects. The Switzerland flour and Belgium
          chocolate add a rich and indulgent flavor to the brownie.
          <br />
          <br />
          Each bite of this heavenly treat will transport you to a new level of
          taste and relaxation. Perfect for any occasion, from a special treat
          for yourself or as a gift for your friends, this Brownie Space Cake is
          sure to be a hit.
        </Box>
        <BuyNowLink />
      </MainLayout>
    </>
  );
};

export default SpaceCakeBrownie;
