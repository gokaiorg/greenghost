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
import { GoToShopLink } from '../components/GoToShopLink';

const WhiteRuntz: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <GoToShopLink />
      <HomeSectionTitle title="White Runtz Strain." />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="3xl"
        marginBottom={4}
        marginTop={-4}
        fontFamily="vt323"
      >
        <Box marginRight={4} color="ghostVerse.orange.base">
          Hybrid
        </Box>
        <Box marginRight={4} display="flex">
          Indica
          <Box color="ghostVerse.green.base" display="flex" alignItems="baseline" marginLeft={2}>
            50
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          Sativa
          <Box color="ghostVerse.green.base" display="flex" alignItems="baseline" marginLeft={2}>
            50
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          THC
          <Box color="ghostVerse.green.base" display="flex" alignItems="baseline" marginLeft={2}>
            23/24
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-white-runtz-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud White Runtz"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud White Runtz"
          />
        </Box>
      </Swiper>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="3xl"
        marginBottom={4}
        marginTop={4}
        fontFamily="vt323"
      >
        <Box marginRight={4}>
          <Box as="h2" color="ghostVerse.green.base">
            Feelings
          </Box>
        </Box>
        <Box marginRight={4}>Tingly</Box>
        <Box marginRight={4}>Relaxed</Box>
        <Box marginRight={4}>Euphoric</Box>
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
        fontSize="3xl"
        fontFamily="vt323"
      >
        White Runtz is a highly potent hybrid marijuana strain, resulting from
        the crossbreeding of Gelato and Zkittlez. Its strong effects are
        long-lasting, and leave you feeling relaxed and tingly.
        <br />
        <br />
        White Runtz is famous for its sweet taste that tingles your senses with
        every puff. The strain's buds are distinctively white, resembling a
        snowy landscape, due to the abundance of trichomes.
        <br />
        <br />
        White Runtz is a popular choice among medical marijuana patients who use
        it to alleviate chronic pain, stress, and anxiety.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/white-runtz"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default WhiteRuntz;
