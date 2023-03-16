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

const ChemDog: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Chem Dog Strain." />
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
            55
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          Sativa
          <Box color="ghostVerse.green.base" marginLeft={2}>
            45
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          THC
          <Box color="ghostVerse.green.base" marginLeft={2}>
            15/20
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-chem-dog-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Chem Dog"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Chem Dog"
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
        <Box marginRight={4}>Euphoric</Box>
        <Box marginRight={4}>Uplifted</Box>
        <Box marginRight={4}>Creative</Box>
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
        Chemdawg, also known as "Chemdog," is a legendary hybrid cannabis strain
        created and distributed by breeder Chemdog since 1991.
        <br />
        <br />
        Chemdawg has become a staple strain in the cannabis world and has been
        responsible for some of the most famous strains, including Sour Diesel
        and OG Kush. It has a diesel-like aroma that is strong and pungent,
        making it easily recognizable from afar. However, new users should use
        caution as it can be very potent. Chemdawg typically produces a cerebral
        experience, coupled with a strong heavy-bodied feeling.
        <br />
        <br />
        Medical marijuana patients often choose this strain to help alleviate
        symptoms associated with stress, anxiety, and pain. Overall, Chemdawg is
        a versatile strain that is a favorite among cannabis enthusiasts, with
        its unique history and powerful effects.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/chemdawg"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default ChemDog;
