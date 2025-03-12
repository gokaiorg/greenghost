import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getDegens, Degen } from '../../config/degens';
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
import { HomeTopInfos } from '../../components/HomeTopInfos';
import { HomeFeature } from '../../components/HomeFeatures';

interface DegensPageProps {
  degen: Degen;
}

export default function DegensPage({ degen }: DegensPageProps) {
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
    name: `${degen?.name} Cannabis Concentrate`,
    image: [
      `https://green.gd/media/green-ghost-degen-weed-shop-degen-${degen.slug}-cover.webp`,
    ],
    description: degen?.descSeo,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      price: degen?.price ? Number(degen.price).toFixed(2) : '0.00',
      itemCondition: 'https://schema.org/NewCondition',
      availability:
        degen?.quantity > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      url: `https://green.gd/concentrates/${degen?.slug}`,
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
        reviewBody: 'Amazing degen!',
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
          Weed Shop {degen.name} Cannabis Concentrate - Green Ghost 🌿👻
        </title>
        <meta name="description" content={degen.descSeo} />
        <meta
          property="og:title"
          content={`Weed Shop ${degen.name} Cannabis Concentrate - Green Ghost 🌿👻`}
        />
        <meta property="og:description" content={degen.descSeo} />
        <meta property="og:image" content={degen.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/concentrates/${degen.slug}`}
        />
        <meta
          name="twitter:title"
          content={`Weed Shop ${degen.name} Cannabis Concentrate - Green Ghost 🌿👻`}
        />
        <meta name="twitter:description" content={degen.descSeo} />
        <meta name="twitter:image" content={degen.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/concentrates/${degen.slug}`}
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
            onClick={handleBack}
            title={'BACK'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#13DE00"
              width="30px"
              height="30px"
            >
              <path
                fillRule="evenodd"
                d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
                clipRule="evenodd"
              />
            </svg>
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
              {`${degen.name} Concentrate`}
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
              {degen.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={degen.imgDesc}
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
              {degen.quantity !== 0 && degen.price !== 999 && (
                <Box
                  as="ul"
                  listStyleType={'none'}
                  aria-label={`${degen.name} Concentrate Cannabis Pricing`}
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
                    {`${degen.price} THB`}
                  </Box>
                </Box>
              )}
              <Box
                as="ul"
                listStyleType={'none'}
                aria-label={`${degen.name} Cannabis Concentrate Characteristics`}
                fontFamily={'vt323'}
                fontSize={'2xl'}
                marginRight={2}
              >
                {degen.packaging !== 'undefined' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="Relieves"
                    color={'ghostVerse.orange.base'}
                    fontSize={'xl'}
                  >
                    {`${degen.packaging}`}
                  </Box>
                )}
                <Box
                  as="li"
                  listStyleType={'none'}
                  aria-label="THC Level"
                  color={'ghostVerse.grey.base'}
                >
                  {`THC ${degen.THC}%`}
                </Box>
                {degen.CBD !== '0' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="CBD Level"
                    color={'ghostVerse.grey.base'}
                  >
                    {`CBD ${degen.CBD}%`}
                  </Box>
                )}
                {/* <Box
                  as="li"
                  listStyleType={'none'}
                  aria-label="Effects"
                  color={'ghostVerse.orange.base'}
                  fontSize={'xl'}
                >
                  <Box as="span" mr={2} color={'white'}>
                    Ingredients:
                  </Box>
                  {`${degen.ingretiens}`}
                </Box>*/}
              </Box>
            </BoxInfoProduct>
            <BoxDescription>{degen.description}</BoxDescription>
          </Box>
          <HomeTopInfos />
          <HomeFeature />
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const degens = getDegens();

  const paths = degens.map((degen) => ({
    params: { slug: degen.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DegensPageProps> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const degens = getDegens();
  const degen = degens.find((p) => p.slug === params?.slug);

  if (!degen) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      degen,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
