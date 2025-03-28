import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getGadgets, Gadget } from '../../config/gadgets';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
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

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${gadget?.name} Cannabis Accessory`,
    image: [
      `https://green.gd/media/green-ghost-gadget-weed-shop-gadget-${gadget.slug}-cover.webp`,
    ],
    description: gadget?.descSeo,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      price: gadget?.price ? Number(gadget.price).toFixed(2) : '0.00',
      itemCondition: 'https://schema.org/NewCondition',
      availability:
        gadget?.quantity > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      url: `https://green.gd/gadgets/${gadget?.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Green Ghost 🌿👻',
      },
    },
    brand: {
      '@type': 'Brand',
      name: 'Green Ghost 🌿👻',
    },
    category: 'Cannabis',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '20',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Jeremy',
        },
        datePublished: '2024-08-01',
        reviewBody: 'Amazing gadget!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>
          Buy {gadget.name} Cannabis Gadgets Online - Green Ghost 🌿👻
        </title>
        <meta name="description" content={gadget.descSeo} />
        <meta
          property="og:title"
          content={`Buy ${gadget.name} Cannabis Gadgets Online - Green Ghost 🌿👻`}
        />
        <meta property="og:description" content={gadget.descSeo} />
        <meta
          property="og:image"
          content={`https://green.gd${gadget.images[1]}`}
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/gadgets/${gadget.slug}`}
        />
        <meta
          name="twitter:title"
          content={`Buy ${gadget.name} Cannabis Gadgets Online - Green Ghost 🌿👻`}
        />
        <meta name="twitter:description" content={gadget.descSeo} />
        <meta
          name="twitter:image"
          content={`https://green.gd${gadget.images[1]}`}
        />
        <meta
          name="twitter:url"
          content={`https://green.gd/gadgets/${gadget.slug}`}
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main">
          <Box
            as="span"
            cursor={'pointer'}
            color={'ghostVerse.green.base'}
            display={'flex'}
            fontFamily={'CubicFive12'}
            onClick={handleBack}
            title={'BACK'}
          >
            {'< Back'}
          </Box>
          <Box as="article">
            <Box
              as="h1"
              fontSize={{ base: '20', lg: '30' }}
              fontFamily={'CubicFive12'}
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
            >
              {`${gadget.name}`}
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
              {gadget.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={gadget.imgDesc}
                    width={400}
                    height={400}
                    sizes="(max-width: 400px) 100vw, 400px"
                    quality={75}
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <BoxInfoProduct>
              {gadget.quantity !== 0 && gadget.price !== 999 && (
                <Box
                  as="ul"
                  listStyleType={'none'}
                  aria-label={`${gadget.name} Cannabis Accessory Pricing`}
                  fontFamily={'CubicFive12'}
                  color={'ghostVerse.green.base'}
                  fontSize={'md'}
                  ml={'auto'}
                >
                  <Box
                    as="li"
                    aria-label="Price for 1G"
                    whiteSpace={'nowrap'}
                    mb={2}
                  >
                    {`${gadget.price} THB`}
                  </Box>
                </Box>
              )}
              <Box
                as="ul"
                listStyleType={'none'}
                aria-label={`${gadget.name} Cannabis Accessory Characteristics`}
                fontFamily={'vt323'}
                fontSize={'2xl'}
                marginRight={2}
              >
                {gadget.packaging !== 'undefined' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="Relieves"
                    color={'ghostVerse.orange.base'}
                    fontSize={'xl'}
                  >
                    {`${gadget.packaging}`}
                  </Box>
                )}
              </Box>
            </BoxInfoProduct>
            <BoxDescription>{gadget.description}</BoxDescription>
            <HomeTopInfos />
            <HomeFeature />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<GadgetsPageProps> = async ({
  params,
}) => {
  if (!params) return { notFound: true };
  const gadgets = getGadgets();
  const gadget = gadgets.find((p) => p.slug === params.slug);
  return gadget ? { props: { gadget } } : { notFound: true };
};
