import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getProducts, Product } from '../../config/products';

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

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
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
        <title>Green Ghost - {product.name} Strain</title>
        <meta name="description" content={product.descSeo} />
        <meta
          property="og:title"
          content={`Green Ghost - ${product.name} Strain`}
        />
        <meta property="og:description" content={product.descSeo} />
        <meta property="og:image" content={product.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:url" content={`https://green.gd/${product.slug}`} />
        <meta
          name="twitter:title"
          content={`Green Ghost - ${product.name} Strain`}
        />
        <meta name="twitter:description" content={product.descSeo} />
        <meta name="twitter:image" content={product.images[1]} />
        <meta name="twitter:url" content={`https://green.gd/${product.slug}`} />
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
          <HomeSectionTitle title={`${product.name} Strain`} />

          {product.quantity !== 0 && <BuyNowLink />}
          {product.quantity === 0 && (
            <Box
              display={'flex'}
              ml={'auto'}
              fontSize={'xl'}
              fontFamily={'CubicFive12'}
              color="ghostVerse.red.base"
            >
              SOLD OUT
            </Box>
          )}
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

        <Box display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
          <Box order={{ base: 2, lg: 1 }} marginTop={4}>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column' }}
              fontSize={'3xl'}
              fontFamily={'vt323'}
            >
              <Box>
                {product.dominance == 'Indica' && (
                  <Box as={'h2'} color={'ghostVerse.blue.base'} marginRight={4}>
                    {product.dominance}
                  </Box>
                )}
                {product.dominance == 'Sativa' && (
                  <Box as={'h2'} color={'ghostVerse.pink.base'} marginRight={4}>
                    {product.dominance}
                  </Box>
                )}
                {product.dominance == 'Hybrid' && (
                  <Box
                    as={'h2'}
                    color={'ghostVerse.orange.base'}
                    marginRight={4}
                  >
                    {product.dominance}
                  </Box>
                )}
              </Box>
              <Box display={'flex'}>
                <Box marginRight={4} display={'flex'}>
                  Indica
                  <Box
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    alignItems={'baseline'}
                    marginLeft={2}
                  >
                    {product.indica}%
                  </Box>
                </Box>
                <Box marginRight={4} display={'flex'}>
                  Sativa
                  <Box
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    alignItems={'baseline'}
                    marginLeft={2}
                  >
                    {product.sativa}%
                  </Box>
                </Box>
              </Box>
              <Box display={'flex'}>
                <Box marginRight={4} display={'flex'}>
                  THC
                  <Box
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    alignItems={'baseline'}
                    marginLeft={2}
                  >
                    {product.THC}%
                  </Box>
                </Box>
                {product.CBD !== 'undefined' && (
                  <Box marginRight={4} display={'flex'}>
                    CBD
                    <Box
                      color={'ghostVerse.green.base'}
                      display={'flex'}
                      alignItems={'baseline'}
                      marginLeft={2}
                    >
                      {product.CBD}%
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
              {product.effects}
            </Box>
            {product.relieves !== 'undefined' && (
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row' }}
                fontSize={'3xl'}
                marginBottom={4}
                fontFamily={'vt323'}
              >
                <Box marginRight={4}>
                  <Box as={'h2'} color={'ghostVerse.green.base'}>
                    Relieves
                  </Box>
                </Box>
                {product.relieves}
              </Box>
            )}
          </Box>
          <Box
            order={{ base: 1, lg: 2 }}
            marginTop={6}
            marginLeft={'auto'}
            fontSize={'2xl'}
          >
            {product.quantity !== 0 && product.price !== 999 && (
              <>
                <Box
                  display={'flex'}
                  justifyContent="end"
                  fontSize={'xl'}
                  color="ghostVerse.red.base"
                  fontFamily={'CubicFive12'}
                >
                  {product.quantity} grams left
                </Box>
                <Box display={'flex'} justifyContent="end">
                  <Box as={'h3'}>1G</Box>
                  <Box
                    fontFamily={'CubicFive12'}
                    display={'flex'}
                    color={'ghostVerse.green.base'}
                    ml={4}
                  >
                    {product.price} THB
                  </Box>
                </Box>
                <Link
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
                      {(product.price * 0.69).toFixed(0)} THB
                    </Box>
                  </Box>
                </Link>

                <Box display={'flex'} justifyContent="end">
                  <Box as={'h3'}>10G</Box>
                  <Box
                    fontFamily={'CubicFive12'}
                    display={'flex'}
                    color={'ghostVerse.green.base'}
                    ml={4}
                  >
                    {(product.price * 10 - product.price).toFixed(0)} THB
                  </Box>
                </Box>
                <Link
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
                      {((product.price * 10 - product.price) * 0.69).toFixed(0)}{' '}
                      THB
                    </Box>
                  </Box>
                </Link>
                <Link
                  href={'/contact-us-buy-weed-online'}
                  title={'Contact Us to buy weed online'}
                  passHref
                >
                  <Box
                    display={'flex'}
                    justifyContent="end"
                    mb={2}
                    fontSize={'xl'}
                    color={'ghostVerse.green.base'}
                  >
                    Wholesale
                  </Box>
                </Link>
              </>
            )}

            {product.price === 999 && (
              <Link
                href="/crypto-weed-shop-relax-and-earn"
                title="Crypto Weed Shop Relax And Earn"
                passHref
              >
                <Box
                  display={'flex'}
                  justifyContent="end"
                  fontSize={'xl'}
                  fontFamily={'CubicFive12'}
                  color="ghostVerse.red.base"
                  _hover={{
                    color: 'ghostVerse.green.base',
                  }}
                >
                  MEMBER ONLY
                </Box>
              </Link>
            )}
          </Box>
        </Box>
        {product.price !== 999 && product.grower !== 'Unknown' && (
          <>
            <Box
              display={'flex'}
              borderColor={'ghostVerse.color2.base'}
              bgColor={'ghostVerse.dark.lighter'}
              borderWidth={1}
              backdropFilter={'blur(3px)'}
              width="full"
              p={4}
              flexDirection={{ base: 'column', md: 'row' }}
              my={5}
              fontFamily={'CubicFive12'}
              justifyContent={'center'}
            >
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', xl: 'row' }}
              >
                <Box as={'h3'} mr={2}>
                  Grower
                </Box>
                <Link href={product.growerSlug} title={product.grower} passHref>
                  <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                    {product.grower}
                  </Box>
                </Link>
              </Box>
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', xl: 'row' }}
              >
                <Box as={'h3'} mr={2}>
                  Origin
                </Box>
                <Link
                  href="/cannabis-grower-phuket"
                  title="Cannabis Grower Phuket"
                  passHref
                >
                  <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                    {product.origin}
                  </Box>
                </Link>
              </Box>
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', xl: 'row' }}
              >
                <Box as={'h3'} mr={2}>
                  Environment
                </Box>
                <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                  {product.environment}
                </Box>
              </Box>
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', xl: 'row' }}
              >
                <Box as={'h3'} mr={2}>
                  Harvest
                </Box>
                <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                  {product.harvest}
                </Box>
              </Box>
            </Box>
          </>
        )}
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
          {product.description}
          {product.source !== 'undefined' && (
            <Box
              display={'flex'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mr={4}
              target="_blank"
              href={product.source}
            >
              Source
            </Box>
          )}
        </Box>
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
