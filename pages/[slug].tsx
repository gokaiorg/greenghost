import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getProducts, Product } from '../config/products';

import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import { BuyNowLink } from '../components/BuyNowLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { ImgPercent } from '../components/ImgPercent';
import Image from 'next/image';

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter();

  SwiperCore.use([Autoplay]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Green Garden Dispensary - {product.name} Strain</title>
        <meta name="description" content={product.descSeo} />
        <meta
          property="og:title"
          content={`Green Garden Dispensary - ${product.name} Strain`}
        />
        <meta property="og:description" content={product.descSeo} />
        <meta property="og:image" content={product.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:url" content={`https://green.gd/${product.slug}`} />
        <meta
          name="twitter:title"
          content={`Green Garden Dispensary - ${product.name} Strain`}
        />
        <meta name="twitter:description" content={product.descSeo} />
        <meta name="twitter:image" content={product.images[1]} />
        <meta name="twitter:url" content={`https://green.gd/${product.slug}`} />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title={`${product.name} Strain`} />
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
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
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                width={500}
                height={500}
                alt={product.imgDesc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          fontSize="3xl"
          marginTop={4}
          fontFamily="vt323"
        >
          {product.dominance == 'Indica Dominant' && (
            <Box as="h4" color="ghostVerse.blue.base" marginRight={4}>
              {product.dominance}
            </Box>
          )}
          {product.dominance == 'Sativa Dominant' && (
            <Box as="h4" color="ghostVerse.pink.base" marginRight={4}>
              {product.dominance}
            </Box>
          )}
          {product.dominance == 'Hybrid' && (
            <Box as="h4" color="ghostVerse.orange.base" marginRight={4}>
              {product.dominance}
            </Box>
          )}
          <Box marginRight={4} display="flex">
            Indica
            <Box
              color="ghostVerse.green.base"
              display="flex"
              alignItems="baseline"
              marginLeft={2}
            >
              {product.indica}
              <ImgPercent />
            </Box>
          </Box>
          <Box marginRight={4} display="flex">
            Sativa
            <Box
              color="ghostVerse.green.base"
              display="flex"
              alignItems="baseline"
              marginLeft={2}
            >
              {product.sativa}
              <ImgPercent />
            </Box>
          </Box>
          <Box marginRight={4} display="flex">
            THC
            <Box
              color="ghostVerse.green.base"
              display="flex"
              alignItems="baseline"
              marginLeft={2}
            >
              {product.THC}
              <ImgPercent />
            </Box>
          </Box>
          {product.CBD !== 'undefined' && (
            <Box marginRight={4} display="flex">
              CBD
              <Box
                color="ghostVerse.green.base"
                display="flex"
                alignItems="baseline"
                marginLeft={2}
              >
                {product.CBD}
                <ImgPercent />
              </Box>
            </Box>
          )}
        </Box>
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
          {product.effects}
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
          whiteSpace="pre-line"
        >
          {product.description}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          color="ghostVerse.green.base"
          as="a"
          mx={4}
          mb={10}
          target="_blank"
          href={product.source}
        >
          Source
        </Box>
        <BuyNowLink />
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const products = getProducts();

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const products = getProducts();
  const product = products.find((p) => p.slug === params?.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
