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

const Mimosa: NextPage = () => {
  SwiperCore.use([Autoplay]);
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <GoToShopLink />
      <HomeSectionTitle title="Mimosa Strain." />
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
            20
            <ImgPercent />
          </Box>
        </Box>
        <Box marginRight={4} display="flex">
          CBD
          <Box color="ghostVerse.green.base" display="flex" alignItems="baseline" marginLeft={2}>
            1
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
            src="/media/green-garden-dispensary-cannabis-shop-phuket-strain-mimosa-01.webp"
            width={{ base: '100%' }}
            height={{ base: '100%' }}
            maxW="inherit"
            alt="Green Garden Dispensary - Cannabis Shop Phuket - Bud Mimosa"
            title="Green Garden Dispensary - Cannabis Shop Phuket - Bud Mimosa"
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
        <Box marginRight={4}>Focused</Box>
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
        Mimosa, also known as "Purple Mimosa," is a popular hybrid cannabis
        strain that offers a balanced high and a delicious taste profile. This
        strain is a result of crossing Clementine with Purple Punch, two
        well-regarded strains that contribute to Mimosa's unique
        characteristics.
        <br />
        In small doses, Mimosa produces happy and level-headed effects that
        leave you feeling uplifted and motivated to tackle any mundane task.
        <br />
        <br />
        Mimosa's strong aroma and flavor are reminiscent of its namesake, with
        notes of fruity and citrusy flavors bursting through. This strain's
        flavors and effects have made it a popular choice among medical
        marijuana patients seeking relief from symptoms associated with
        depression and stress.
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        color="ghostVerse.green.base"
        as="a"
        mx={4}
        mb={10}
        target="_blank"
        href="https://www.leafly.com/strains/mimosa"
      >
        Source
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default Mimosa;
