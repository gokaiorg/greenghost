import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getEdibles, Edible } from '../../config/edibles';

import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import { BuyNowLink } from '../../components/BuyNowLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { ImgPercent } from '../../components/ImgPercent';
import Image from 'next/image';
interface EdiblesPageProps {
  edible: Edible;
}

export default function EdiblesPage({ edible }: EdiblesPageProps) {
  const router = useRouter();

  SwiperCore.use([Autoplay]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>Green Ghost - {edible.name} Edible</title>
        <meta name="description" content={edible.descSeo} />
        <meta
          property="og:title"
          content={`Green Ghost - ${edible.name} Edible`}
        />
        <meta property="og:description" content={edible.descSeo} />
        <meta property="og:image" content={edible.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:url" content={`https://green.gd/${edible.slug}`} />
        <meta
          name="twitter:title"
          content={`Green Ghost - ${edible.name} Edible`}
        />
        <meta name="twitter:description" content={edible.descSeo} />
        <meta name="twitter:image" content={edible.images[1]} />
        <meta name="twitter:url" content={`https://green.gd/${edible.slug}`} />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor={'pointer'}
          color={'ghostVerse.green.base'}
          onClick={handleBack}
        >
          {'< back'}
        </Box>
        <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
          <HomeSectionTitle title={`${edible.name} Edible`} />
          <BuyNowLink />
        </Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={'auto'}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
        >
          {edible.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                width={500}
                height={500}
                alt={edible.imgDesc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
          <Box order={{ base: 2, lg: 1 }} marginTop={4}>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column' }}
              fontSize={'3xl'}
              fontFamily={'vt323'}
            >
              <Box as={'h2'} color="ghostVerse.blue.base" marginRight={4}>
                {edible.packaging}
              </Box>
              <Box display={'flex'}>
                <Box marginRight={4} display={'flex'}>
                  THC
                  <Box
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    alignItems="baseline"
                    marginLeft={2}
                  >
                    {edible.THC}
                  </Box>
                </Box>
                {edible.CBD !== 'undefined' && (
                  <Box marginRight={4} display={'flex'}>
                    CBD
                    <Box
                      color={'ghostVerse.green.base'}
                      display={'flex'}
                      alignItems="baseline"
                      marginLeft={2}
                    >
                      {edible.CBD}
                      <ImgPercent />
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column', md: 'row' }}
              fontSize={'3xl'}
              fontFamily={'vt323'}
            >
              <Box marginRight={4}>
                <Box as={'h2'} color={'ghostVerse.green.base'}>
                  Feelings
                </Box>
              </Box>
              {edible.effects}
            </Box>
            {edible.ingretiens !== 'undefined' && (
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row' }}
                fontSize={'3xl'}
                marginBottom={4}
                fontFamily={'vt323'}
              >
                <Box marginRight={4}>
                  <Box as={'h2'} color={'ghostVerse.green.base'}>
                    Ingretiens
                  </Box>
                </Box>
                {edible.ingretiens}
              </Box>
            )}
          </Box>
          <Box
            order={{ base: 1, lg: 2 }}
            marginTop={6}
            marginLeft={'auto'}
            fontSize={'2xl'}
          >
            {edible.quantity !== 0 && edible.price !== 666 && (
              <>
                <Box
                  display={'flex'}
                  justifyContent="end"
                  fontSize={'xl'}
                  color="ghostVerse.red.base"
                  fontFamily={'CubicFive12'}
                >
                  {edible.quantity} in stock
                </Box>
              </>
            )}
            {edible.quantity === 0 && (
              <Box
                display={'flex'}
                fontSize={'xl'}
                justifyContent="end"
                fontFamily={'CubicFive12'}
                color="ghostVerse.red.base"
              >
                ON ORDER
              </Box>
            )}
            <Box display={'flex'} justifyContent="end">
              <Box
                fontFamily={'CubicFive12'}
                display={'flex'}
                color={'ghostVerse.green.base'}
                ml={4}
              >
                {edible.price} THB
              </Box>
            </Box>
            {/* <Link
              href="/crypto-weed-shop-relax-and-earn"
              title="Crypto Weed Shop Relax And Earn"
              passHref
            >
              <Box
                display={'flex'}
                justifyContent="end"
                mb={2}
                fontSize={'xl'}
                color="ghostVerse.grey.lighter"
                _hover={{
                  color: 'ghostVerse.green.base',
                }}
              >
                <Box>member</Box>
                <Box fontFamily={'CubicFive12'} display={'flex'} ml={4}>
                  {(edible.price * 0.69).toFixed(0)} THB
                </Box>
              </Box>
            </Link> */}
          </Box>
        </Box>
        <Box
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          width="full"
          p={4}
          my={4}
          mb={10}
          display={'inline-flex'}
          flexDirection={'column'}
          fontSize={'3xl'}
          fontFamily={'vt323'}
          whiteSpace="pre-line"
        >
          {edible.description}
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const edibles = getEdibles();

  const paths = edibles.map((edible) => ({
    params: { slug: edible.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<EdiblesPageProps> = async ({
  params,
}) => {
  const edibles = getEdibles();
  const edible = edibles.find((p) => p.slug === params?.slug);

  if (!edible) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      edible,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
