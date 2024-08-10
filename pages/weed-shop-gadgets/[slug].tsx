import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getGadgets, Gadget } from '../../config/gadgets';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
import BoxInfoLeft from '../../components/box/BoxInfoLeft';
import BoxInfoRight from '../../components/box/BoxInfoRight';
import BoxInfoLabel from '../../components/box/BoxInfoLabel';
import BoxInfoQuantity from '../../components/box/BoxInfoQuantity';
import { HomeFeature } from '../../components/HomeFeatures';
import { HomeTopInfos } from '../../components/HomeTopInfos';

interface GadgetsPageProps {
  gadget: Gadget;
}

export default function GadgetsPage({ gadget }: GadgetsPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  SwiperCore.use([Autoplay]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 {gadget.name} Gadget</title>
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
                alt={gadget.imgDesc}
                width={400}
                height={400}
                sizes="(max-width: 400px) 100vw, 400px"
                quality={75}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <BoxInfoProduct>
          <BoxInfoLeft>
            <Box as={'h2'} color={'ghostVerse.blue.base'} marginRight={4}>
              {gadget.packaging}
            </Box>
          </BoxInfoLeft>
          <BoxInfoRight>
            <BoxInfoLabel>
              <Text
                color={'ghostVerse.green.base'}
                fontFamily={'CubicFive12'}
                fontSize={20}
              >
                {gadget.price} THB
              </Text>
            </BoxInfoLabel>
            {gadget.quantity !== 0 && gadget.price !== 999 && (
              <BoxInfoQuantity>{gadget.quantity} in stock</BoxInfoQuantity>
            )}
            {gadget.quantity === 0 && (
              <BoxInfoQuantity>Sold Out</BoxInfoQuantity>
            )}
          </BoxInfoRight>
        </BoxInfoProduct>
        <BoxDescription>{gadget.description}</BoxDescription>
        <HomeTopInfos />
        <HomeFeature />
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
