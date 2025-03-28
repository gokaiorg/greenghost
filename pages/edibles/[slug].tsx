import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getEdibles, Edible } from '../../config/edibles';
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

interface EdiblesPageProps {
  edible: Edible;
}

export default function EdiblesPage({ edible }: EdiblesPageProps) {
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
    name: `${edible?.name} Edible`,
    image: [
      `https://green.gd/media/green-ghost-degen-weed-shop-edible-${edible.slug}-cover.webp`,
    ],
    description: edible?.descSeo,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      price: edible?.price ? Number(edible.price).toFixed(2) : '0.00',
      itemCondition: 'https://schema.org/NewCondition',
      availability:
        edible?.quantity > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      url: `https://green.gd/s/${edible?.slug}`,
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
        reviewBody: 'Amazing Edible!',
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
          Order Online Best {edible.name} Cannabis Edible - Green Ghost 🌿👻
        </title>
        <meta name="description" content={edible.descSeo} />
        <meta
          property="og:title"
          content={`Order Online Best ${edible.name} Cannabis Edible - Green Ghost 🌿👻`}
        />
        <meta property="og:description" content={edible.descSeo} />
        <meta
          property="og:image"
          content={`https://green.gd${edible.images[1]}`}
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/edibles/${edible.slug}`}
        />
        <meta
          name="twitter:title"
          content={`Order Online Best ${edible.name} Cannabis Edible - Green Ghost 🌿👻`}
        />
        <meta name="twitter:description" content={edible.descSeo} />
        <meta
          name="twitter:image"
          content={`https://green.gd${edible.images[1]}`}
        />
        <meta
          name="twitter:url"
          content={`https://green.gd/edibles/${edible.slug}`}
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
              {`${edible.name} Edible`}
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
                    alt={edible.imgDesc}
                    title={edible.imgDesc}
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
              {edible.quantity !== 0 && edible.price !== 999 && (
                <Box
                  as="ul"
                  listStyleType={'none'}
                  aria-label={`${edible.name} Strain Pricing`}
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
                    {`${edible.price} THB`}
                  </Box>
                </Box>
              )}
              <Box
                as="ul"
                listStyleType={'none'}
                aria-label={`${edible.name} Edible Characteristics`}
                fontFamily={'vt323'}
                fontSize={'2xl'}
                marginRight={2}
              >
                {edible.packaging !== 'undefined' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="Relieves"
                    color={'ghostVerse.orange.base'}
                    fontSize={'xl'}
                  >
                    {`${edible.packaging}`}
                  </Box>
                )}
                <Box
                  as="li"
                  listStyleType={'none'}
                  aria-label="THC Level"
                  color={'ghostVerse.grey.base'}
                >
                  {`THC ${edible.THC}mg`}
                </Box>
                {edible.CBD !== '0' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="CBD Level"
                    color={'ghostVerse.grey.base'}
                  >
                    {`CBD ${edible.CBD}mg`}
                  </Box>
                )}
                <Box
                  as="li"
                  listStyleType={'none'}
                  aria-label="Effects"
                  color={'ghostVerse.orange.base'}
                  fontSize={'xl'}
                >
                  <Box as="span" mr={2} color={'white'}>
                    Feelings:
                  </Box>
                  {`${edible.effects}`}
                </Box>
              </Box>
            </BoxInfoProduct>
            <BoxDescription>{edible.description}</BoxDescription>
          </Box>
          <HomeTopInfos />
          <HomeFeature />
        </Box>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<EdiblesPageProps> = async ({
  params,
}) => {
  if (!params) return { notFound: true };
  const edibles = getEdibles();
  const edible = edibles.find((p) => p.slug === params.slug);
  return edible ? { props: { edible } } : { notFound: true };
};
