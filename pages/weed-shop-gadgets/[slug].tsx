import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getGadgets, Gadget } from '../../config/gadgets';

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

import Image from 'next/image';
import Link from 'next/link';

interface GadgetsPageProps {
  gadget: Gadget;
}

export default function GadgetsPage({ gadget }: GadgetsPageProps) {
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
        <title>Green Ghost - {gadget.name} Gadget</title>
        <meta name="description" content={gadget.descSeo} />
        <meta property="og:title" content={`Green Ghost - ${gadget.name}`} />
        <meta property="og:description" content={gadget.descSeo} />
        <meta property="og:image" content={gadget.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/weed-shop-gadgets/${gadget.slug}`}
        />
        <meta name="twitter:title" content={`Green Ghost - ${gadget.name}`} />
        <meta name="twitter:description" content={gadget.descSeo} />
        <meta name="twitter:image" content={gadget.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/weed-shop-gadgets/${gadget.slug}`}
        />
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
        <HomeSectionTitle title={`${gadget.name}`} />
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
          {gadget.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                width={500}
                height={500}
                alt={gadget.imgDesc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          lineHeight={1}
        >
          <Box order={{ base: 2, lg: 1 }} marginTop={4}>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column' }}
              fontSize={'3xl'}
              fontFamily={'vt323'}
            >
              <Box as={'h2'} color={'ghostVerse.blue.base'} marginRight={4}>
                {gadget.packaging}
              </Box>
            </Box>
          </Box>
          <Box
            order={{ base: 1, lg: 2 }}
            marginTop={6}
            marginLeft={'auto'}
            fontSize={'2xl'}
          >
            {gadget.quantity !== 0 && gadget.price !== 999 && (
              <>
                <BuyNowLink />
                <Box
                  display={'flex'}
                  justifyContent="end"
                  fontSize={'xl'}
                  color="ghostVerse.red.base"
                  fontFamily={'CubicFive12'}
                >
                  {gadget.quantity} in stock
                </Box>
              </>
            )}
            {gadget.quantity === 0 && (
              <Box
                display={'flex'}
                fontSize={'xl'}
                justifyContent="end"
                fontFamily={'CubicFive12'}
                color="ghostVerse.red.base"
              >
                Sold Out
              </Box>
            )}
            <Box display={'flex'} justifyContent="end">
              <Box
                fontFamily={'CubicFive12'}
                display={'flex'}
                color={'ghostVerse.green.base'}
                ml={4}
              >
                {gadget.price} THB
              </Box>
            </Box>
            <Link
              href="/crypto-weed-shop-relax-and-earn"
              title="Crypto Weed Shop Relax And Earn"
              passHref
            >
              <Box
                display={'flex'}
                fontFamily={'CubicFive12'}
                justifyContent="end"
                mb={2}
                fontSize={16}
                color="ghostVerse.grey.lighter"
                _hover={{
                  color: 'ghostVerse.green.base',
                }}
              >
                <Box>member</Box>
                <Box display={'flex'} ml={4}>
                  {(gadget.price * 0.69).toFixed(0)} THB
                </Box>
              </Box>
            </Link>
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
          lineHeight={1}
        >
          {gadget.description}
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const gadgets = getGadgets();

  const paths = gadgets.map((gadget) => ({
    params: { slug: gadget.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<GadgetsPageProps> = async ({
  params,
}) => {
  const gadgets = getGadgets();
  const gadget = gadgets.find((p) => p.slug === params?.slug);

  if (!gadget) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      gadget,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
