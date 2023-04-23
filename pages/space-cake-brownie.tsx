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

const SpaceCakeBrownie: NextPage = () => {
  SwiperCore.use([Autoplay]);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <Head>
        <title>Green Ghost - Edibles - Brownie.</title>
        <meta
          name="description"
          content="Indulge in the delicious and potent Space Cake Brownie from Green Ghost's edibles collection. Made with high-quality ingredients and expertly infused with premium cannabis, this brownie delivers a heavenly experience that will elevate your mind and body. Perfect for sharing with friends or enjoying on your own, order now and experience the magic of Green Ghost's edibles."
        />
        <meta property="og:title" content="Green Ghost - Edibles - Brownie." />
        <meta
          property="og:description"
          content="Indulge in the delicious and potent Space Cake Brownie from Green Ghost's edibles collection. Made with high-quality ingredients and expertly infused with premium cannabis, this brownie delivers a heavenly experience that will elevate your mind and body. Perfect for sharing with friends or enjoying on your own, order now and experience the magic of Green Ghost's edibles."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/space-cake-brownie" />
        <meta name="twitter:title" content="Green Ghost - Edibles - Brownie." />
        <meta
          name="twitter:description"
          content="Indulge in the delicious and potent Space Cake Brownie from Green Ghost's edibles collection. Made with high-quality ingredients and expertly infused with premium cannabis, this brownie delivers a heavenly experience that will elevate your mind and body. Perfect for sharing with friends or enjoying on your own, order now and experience the magic of Green Ghost's edibles."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/space-cake-brownie"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor="pointer"
          color="ghostVerse.green.base"
          onClick={handleBack}
        >
          Go back
        </Box>
        <HomeSectionTitle title="Green Ghost - Brownie." />
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
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-01.webp"
              width="100%"
              height="100%"
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="img"
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-02.webp"
              width="100%"
              height="100%"
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="img"
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-03.webp"
              width="100%"
              height="100%"
              maxW="inherit"
              alt="Green Ghost - Degen Weed Shop - Brownie OG Kush"
              title="Green Ghost - Degen Weed Shop - Brownie OG Kush"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              as="img"
              src="/media/green-ghost-degen-weed-shop-edible-brownie-og-kush-04.webp"
              width="100%"
              height="100%"
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
