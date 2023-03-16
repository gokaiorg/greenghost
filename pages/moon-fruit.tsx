import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import { BuyNowLink } from '../components/BuyNowLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css';
import { ImgPercent } from '../components/ImgPercent';

const MoonFruit: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Moon Fruit Strain." />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="xl"
        marginBottom={4}
        marginTop={-4}
      >
        <Box marginRight={4} color="ghostVerse.green.base">
          Hybrid
        </Box>
        <Box marginRight={4} display="flex">
          Indica
          <Box color="ghostVerse.green.base" marginLeft={2}>
            50
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          Sativa
          <Box color="ghostVerse.green.base" marginLeft={2}>
            50
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          THC
          <Box color="ghostVerse.green.base" marginLeft={2}>
            20/22
            <ImgPercent />
          </Box>
        </Box>
      </Box>
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
        <Box maxWidth={{ base: '100%', lg: '50%' }}>
          <Box
            as="img"
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-moon-fruit-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Moon Fruit"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Moon Fruit"
          />
        </Box>
      </Swiper>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="xl"
        marginBottom={4}
        marginTop={4}
      >
        <Box marginRight={4}>
          <Box as="h2" color="ghostVerse.green.base">
            Feelings
          </Box>
        </Box>
        <Box marginRight={4}>Relaxed</Box>
        <Box marginRight={4}>Happy</Box>
        <Box marginRight={4}>Talkative</Box>
      </Box>
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
        Moon Fruit is a highly sought-after cannabis strain that boasts a
        tantalizing taste profile and visually stunning appearance. Its unique
        blend of hard candy, exotic passion fruit, lavender, blueberry, and
        vanilla/raspberry zingers make for a deluxe connoisseur experience that
        is all about flexing on taste and smell.
        <br />
        <br />
        This strain has an impressive lineage, derived from the crossing of
        Cherry Pie, Tangie, and a rare Indica-dominant version of the famous
        Girl Scout Cookies. As a result, Moon Fruit grows with a symmetrical
        structure, producing medium-sized, ultra-dense flowers that are simply
        drop-dead gorgeous.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/brands/gardeners/products/gardeners-moonfruit-flower"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default MoonFruit;
