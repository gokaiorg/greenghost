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

const Runtz: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Runtz Strain." />
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
            19/29
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-runtz-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Runtz"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Runtz"
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
        <Box marginRight={4}>Happy</Box>
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
        Runtz, also referred to as "Runtz OG," is a rare and highly sought-after
        hybrid marijuana strain created by the Cookies Fam by crossing Zkittlez
        with Gelato. It's recognized for its exceptional fruity flavor profile
        that mimics the aroma of sugary candy we all love.
        <br />
        <br />
        Its popularity has been rising steadily, and it was named Leafly Strain
        of the Year in 2020. According to growers, Runtz has resinous buds that
        range in color from deep purple to vibrant lime green.
        <br />
        <br />
        It boasts a smooth and creamy smoke that is easy to inhale. This strain
        is famous for its long-lasting uplifting effects and euphoric highs.
        Purple Caper Seeds also produced the same cross and marketed it as
        Gelato Zkittlez.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/runtz"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default Runtz;
