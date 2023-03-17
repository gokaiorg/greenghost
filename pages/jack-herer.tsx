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

const JackHerer: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Jack Herer Strain." />
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        fontSize="3xl"
        marginBottom={4}
        marginTop={-4}
        fontFamily="vt323"
      >
        <Box marginRight={4} color="ghostVerse.green.base">
          Sativa Dominant Hybrid
        </Box>
        <Box marginRight={4} display="flex">
          Sativa
          <Box color="ghostVerse.green.base" marginLeft={2}>
            80
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          Indica
          <Box color="ghostVerse.green.base" marginLeft={2}>
            20
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          THC
          <Box color="ghostVerse.green.base" marginLeft={2}>
            18/24
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-jack-herer-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Jack Herer"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Jack Herer"
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
        <Box marginRight={4}>Energetic</Box>
        <Box marginRight={4}>Creative</Box>
        <Box marginRight={4}>Uplifted</Box>
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
        Jack Herer, also known as "JH," "The Jack," "Premium Jack," and
        "Platinum Jack" is a sativa-dominant hybrid marijuana strain named after
        the marijuana activist and author of The Emperor Wears No Clothes.
        <br />
        Jack Herer is a balanced hybrid strain with a high THC content that
        produces a mixed head and body effect. It's known to provide a sense of
        relaxation and is often enjoyed in the evening to ease stress.
        <br />
        <br />
        Jack Herer was first created in the Netherlands in the mid-1990s and was
        later distributed by Dutch pharmacies as a recognized medical-grade
        strain. Its spicy, pine-scented aroma has won numerous awards for its
        quality and potency.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/jack-herer"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default JackHerer;
