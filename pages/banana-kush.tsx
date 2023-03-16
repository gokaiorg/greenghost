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

const BananaKush: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Banana Kush Strain." />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="xl"
        marginBottom={4}
        marginTop={-4}
      >
        <Box marginRight={4} color="ghostVerse.green.base">
          Indica Dominant Hybrid
        </Box>
        <Box marginRight={4} display="flex">
          Indica
          <Box color="ghostVerse.green.base" marginLeft={2}>
            60
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          Sativa
          <Box color="ghostVerse.green.base" marginLeft={2}>
            40
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          THC
          <Box color="ghostVerse.green.base" marginLeft={2}>
            18/25
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-gelato-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Banana Kush"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Banana Kush"
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
        <Box marginRight={4}>Talkative</Box>
        <Box marginRight={4}>Sleeppy</Box>
        <Box marginRight={4}>Giggly</Box>
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
        Banana Kush, also known as "Larry Bird" and "Banana Kush #42," is a
        popular hybrid cannabis strain that offers the best of both worlds with
        its balanced indica and sativa genetics. This strain is a result of
        crossing Sunset Sherbet and Thin Mint Girl Scout Cookies, two renowned
        strains that contribute to Banana Kush's unique characteristics.
        <br />
        <br />
        Consumers who have smoked Banana Kush report that the strain's effects
        come on quickly, inducing a euphoric high accompanied by strong feelings
        of relaxation. This strain's balanced effects make it ideal for those
        seeking relief from pain, fatigue, and insomnia, while still remaining
        mentally stimulated and productive.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/banana-kush"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default BananaKush;
