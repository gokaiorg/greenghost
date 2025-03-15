import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getBuds, Bud } from '../../config/buds';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { Box, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import Link from 'next/link';
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
import { HomeFeature } from '../../components/HomeFeatures';
import { HomeTopInfos } from '../../components/HomeTopInfos';
import { IconIndica } from '../../components/media/IconIndica';
import { IconSativa } from '../../components/media/IconSativa';
import { IconHybrid } from '../../components/media/IconHybrid';

interface BudPageProps {
  bud: Bud;
}

export default function BudPage({ bud }: BudPageProps) {
  SwiperCore.use([Autoplay]);

  const handleBack = () => {
    window.history.back();
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${bud?.name} Strain`,
    image: [
      `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-cover.webp`,
      `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-bud-01.webp`,
      `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-bud-02.webp`,
    ],
    description: bud?.descSeo,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'THB',
      price: bud?.price ? Number(bud.price).toFixed(2) : '0.00',
      itemCondition: 'https://schema.org/NewCondition',
      availability:
        bud?.quantity > 0
          ? 'https://schema.org/InStock'
          : 'https://schema.org/OutOfStock',
      url: `https://green.gd/strains/${bud?.slug}`,
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
      ratingValue: '5', // Example rating value
      reviewCount: '20', // Example review count
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Jeremy', // Example reviewer name
        },
        datePublished: '2024-08-01', // Example review date
        reviewBody: 'Great product, highly recommended!', // Example review content
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5', // Example review rating
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{`${bud.imgDesc} - Green Ghost 🌿👻`}</title>
        <meta name="description" content={bud.descSeo} />
        <meta
          property="og:title"
          content={`${bud.imgDesc} - Green Ghost 🌿👻`}
        />
        <meta property="og:description" content={bud.descSeo} />
        <meta property="og:image" content={bud.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/strains/${bud.slug}`}
        />
        <meta
          name="twitter:title"
          content={`${bud.imgDesc} - Green Ghost 🌿👻`}
        />
        <meta name="twitter:description" content={bud.descSeo} />
        <meta name="twitter:image" content={bud.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/strains/${bud.slug}`}
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
            <Box as="header" mb={2}>
              <Box
                as="h1"
                fontSize={{ base: '20', lg: '30' }}
                fontFamily={'CubicFive12'}
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
              >
                {`${bud.name} Strain`}
              </Box>
              {/* Ensure `bud.images` is defined and has at least one image */}
              {bud?.images?.length > 0 && (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={'auto'}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                  }}
                  loop
                  autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 25,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  modules={[EffectCoverflow]}
                  aria-label="Cannabis buds slider"
                >
                  {bud.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={image}
                        alt={bud.imgDesc || 'Image'}
                        title={bud.imgDesc || 'Image'}
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
              )}
            </Box>

            <BoxInfoProduct>
              {bud.quantity !== 0 && bud.price !== 999 && (
                <Box
                  as="ul"
                  listStyleType={'none'}
                  aria-label={`${bud.name} Strain Pricing`}
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
                    <Box
                      as="span"
                      color={'white'}
                      mr={2}
                      display={'inline-flex'}
                      w={10}
                    >
                      1G
                    </Box>
                    {`${bud.price} THB`}
                  </Box>
                  <Box
                    as="li"
                    aria-label="Price for 5G"
                    whiteSpace={'nowrap'}
                    mb={2}
                  >
                    <Box
                      as="span"
                      color={'white'}
                      mr={2}
                      display={'inline-flex'}
                      w={10}
                    >
                      5G
                    </Box>
                    {`${(bud.price * 5 - bud.price).toFixed(0)} THB`}
                  </Box>
                  <Box
                    as="li"
                    aria-label="Price for 30G"
                    whiteSpace={'nowrap'}
                    mb={2}
                  >
                    <Box
                      as="span"
                      color={'white'}
                      mr={2}
                      display={'inline-flex'}
                      w={10}
                    >
                      30G
                    </Box>
                    {`${(bud.price * 30 * 0.7).toFixed(0)} THB`}
                  </Box>
                </Box>
              )}
              {bud.quantity === 0 && (
                <Box
                  as="span"
                  fontFamily={'CubicFive12'}
                  color={'ghostVerse.red.base'}
                  fontSize={'md'}
                  ml={'auto'}
                >
                  SOLD OUT
                </Box>
              )}
              {bud.price === 999 && (
                <Box
                  as="span"
                  fontFamily={'CubicFive12'}
                  color={'ghostVerse.yellow.base'}
                  fontSize={'md'}
                  ml={'auto'}
                >
                  COMING SOON
                </Box>
              )}
              <Box
                as="ul"
                listStyleType={'none'}
                aria-label={`${bud.name} Strain Characteristics`}
                fontFamily={'vt323'}
                fontSize={'2xl'}
                marginRight={2}
              >
                {bud.dominance === 'Indica' && (
                  <Box
                    as="li"
                    aria-label="Dominance"
                    color={'ghostVerse.dominance.indica'}
                    display={'flex'}
                    alignItems={'center'}
                  >
                    <IconIndica />
                    &nbsp;
                    {`${bud.dominance} ${bud.indica}%`}
                  </Box>
                )}
                {bud.dominance === 'Sativa' && (
                  <Box
                    as="li"
                    aria-label="Dominance"
                    color={'ghostVerse.dominance.sativa'}
                    display={'flex'}
                    alignItems={'center'}
                  >
                    <IconSativa />
                    &nbsp;
                    {`${bud.dominance} ${bud.sativa}%`}
                  </Box>
                )}
                {bud.dominance === 'Hybrid' && (
                  <Box
                    as="li"
                    aria-label="Dominance"
                    color={'ghostVerse.dominance.hybrid'}
                    display={'flex'}
                    alignItems={'center'}
                  >
                    <IconHybrid />
                    &nbsp;
                    {`${bud.dominance}`}
                  </Box>
                )}
                <Box
                  as="li"
                  listStyleType={'none'}
                  aria-label="THC Level"
                  color={'ghostVerse.grey.base'}
                >
                  {`THC ${bud.THC}%`}
                </Box>
                {bud.CBD !== '0' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="CBD Level"
                    color={'ghostVerse.grey.base'}
                  >
                    {`CBD ${bud.CBD}%`}
                  </Box>
                )}
                <Box
                  as="li"
                  listStyleType={'none'}
                  aria-label="Grade"
                  color={'ghostVerse.pink.base'}
                  fontSize={'xl'}
                >
                  {bud.grade}
                </Box>

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
                  {`${bud.effects}`}
                </Box>
                {bud.relieves !== 'undefined' && (
                  <Box
                    as="li"
                    listStyleType={'none'}
                    aria-label="Relieves"
                    color={'ghostVerse.orange.base'}
                    fontSize={'xl'}
                  >
                    <Box as="span" mr={2} color={'white'}>
                      Relieves:
                    </Box>
                    {`${bud.relieves}`}
                  </Box>
                )}
              </Box>
            </BoxInfoProduct>
            <BoxDescription>
              {bud.description}
              {bud.source !== 'undefined' && (
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  color={'ghostVerse.green.base'}
                  as="a"
                  mr={4}
                  target="_blank"
                  href={bud.source}
                >
                  Source
                </Box>
              )}
            </BoxDescription>
          </Box>
          <HomeFeature />

          {bud.quantity > 0 && (
            <Box
              as="section"
              aria-labelledby="Get 10% Free on Weed Orders!"
              display={'flex'}
              mb={5}
              p={5}
              pt={0}
              flexWrap={'wrap'}
              alignItems={'stretch'}
              backgroundColor={'ghostVerse.green.base'}
              color={'black'}
            >
              <Text
                as={'h3'}
                fontSize={{ base: 30, lg: 50 }}
                lineHeight={1}
                fontWeight={'bold'}
                fontFamily={'vt323'}
                mt={{ base: 5 }}
                mb={{ base: 5 }}
                textAlign={'left'}
              >
                Get 10% Free on Weed Orders!
              </Text>

              <Text
                as={'p'}
                fontSize={{ base: 20, lg: 36 }}
                lineHeight={1}
                fontFamily={'vt323'}
                w={{ base: '60%', md: '70%' }}
                mr={4}
                textAlign={'left'}
              >
                {`Schedule your delivery on greenghostweed.shop to enjoy 10% free on ${bud.name}.`}
              </Text>
              <Link
                href={`https://greenghostweed.shop/products/${bud.slug}`}
                passHref
                title={`Buy ${bud.name} Cannabis Strain Online`}
              >
                <Text
                  as="span"
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  borderColor={'black'}
                  backgroundColor={'black'}
                  fontSize={{ base: 'xl', lg: '4xl' }}
                  lineHeight={1}
                  borderWidth={1}
                  px={{ base: 4, md: 6 }}
                  pt={{ base: 2, md: 0 }}
                  pb={{ base: 2, md: 2 }}
                  mt={5}
                  mx={'auto'}
                  fontFamily={'vt323'}
                  _hover={{
                    borderColor: 'black',
                    bgColor: 'ghostVerse.green.base',
                    color: 'black',
                  }}
                >
                  {'Schedule & Save 10%'}
                </Text>
              </Link>
            </Box>
          )}

          <HomeTopInfos />
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const buds = getBuds();

  const paths = buds.map((bud) => ({
    params: { slug: bud.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BudPageProps> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const buds = getBuds();

  const bud = buds.find((p) => p.slug === params?.slug);

  if (!bud) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      bud,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
