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

const OGKush: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="OG Kush Strain." />
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
            55
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          Indica
          <Box color="ghostVerse.green.base" marginLeft={2}>
            45
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          THC
          <Box color="ghostVerse.green.base" marginLeft={2}>
            20/26
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-og-kush-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud OG Kush"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud OG Kush"
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
        <Box marginRight={4}>Hungry</Box>
        <Box marginRight={4}>Sleepy</Box>
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
        OG Kush, also known as "Premium OG Kush," is a popular hybrid marijuana
        strain with a unique terpene profile that was first cultivated in
        Florida in the early 1990s. It's believed to have been created by
        crossing a Northern California strain with Chemdawg, Lemon Thai, and a
        Hindu Kush plant from Amsterdam.
        <br />
        <br />
        OG Kush is a balanced hybrid strain with a high THC content that
        produces a mixed head and body effect. It's known to provide a sense of
        relaxation and is often enjoyed in the evening to ease stress.
        <br />
        <br />
        Since its introduction, OG Kush has become a worldwide staple and has
        been used to create numerous famous strains, including GSC and Headband.
        There are many different phenotypes of OG Kush, including Tahoe OG, SFV
        OG, and Ghost OG.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/og-kush"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default OGKush;
