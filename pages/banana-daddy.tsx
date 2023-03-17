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

const BananaDaddy: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Banana Daddy Strain." />
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
            21/30
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          CBD
          <Box color="ghostVerse.green.base" marginLeft={2}>
            1/3
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-daddy-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Banana Daddy"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Banana Daddy"
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
        <Box marginRight={4}>Happy</Box>
        <Box marginRight={4}>Talktative</Box>
        <Box marginRight={4}>Relaxed</Box>
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
        With Banana Daddy, Ethos Genetics has successfully combined two fruity
        strains, Granddaddy Purp and Banana Hammock R1, to create an exceptional
        cannabis strain. The result is a visually stunning plant with large,
        dense, and dark purple buds that emit a delightful aroma of bubblegum
        and gas.
        <br />
        <br />
        Despite its high THC content, Banana Daddy provides a mellow, giggly
        high that is perfect for unwinding in the evening. This strain's
        relaxing effects are ideal for socializing and having fun with friends.
        <br />
        <br />
        If you're a fan of fruity strains and looking for a new strain to add to
        your collection, Banana Daddy is definitely worth trying. This strain is
        sure to impress with its unique terpene profile and relaxing effects.
        So, grab some Banana Daddy and enjoy a mellow evening with friends.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/banana-daddy"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default BananaDaddy;
