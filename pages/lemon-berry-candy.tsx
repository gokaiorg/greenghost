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

const LemonBerryCandy: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Lemon Berry Candy Strain." />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="3xl"
        marginBottom={4}
        marginTop={-4}
        fontFamily="vt323"
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
            25
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          CBD
          <Box color="ghostVerse.green.base" marginLeft={2}>
            3
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-lemon-berry-candy-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Lemon Berry Candy"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Lemon Berry Candy"
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
        <Box marginRight={4}>Creative</Box>
        <Box marginRight={4}>Energetic</Box>
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
        fontSize="3xl"
        fontFamily="vt323"
      >
        Lemon Berry Candy OG, a strain from Ethos Genetics, is a cross between
        Las Vegas Lemon Skunk and LGBT (Lemon Grape Bubba Temple).
        <br />
        <br />
        This unique hybrid boasts trichome-rich buds with a flavor profile that
        includes candied lemons, sweet berries, and subtle gassy undertones.
        <br />
        <br />
        Lemon Berry Candy OG is a favorite among concentrate enthusiasts due to
        its high resin production. Users have reported feeling elevated,
        energized, and engaged after just one puff.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/lemon-berry-candy-og"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default LemonBerryCandy;
