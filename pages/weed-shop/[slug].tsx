import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getBuds, Bud } from '../../config/buds';
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
import Link from 'next/link';
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
import BoxInfoLeft from '../../components/box/BoxInfoLeft';
import BoxInfoRight from '../../components/box/BoxInfoRight';
import BoxInfoLabel from '../../components/box/BoxInfoLabel';
import { BoxInfoLabelTitle } from '../../components/box/BoxInfoLabelTitle';
import BoxInfoMemberPrice from '../../components/box/BoxInfoMemberPrice';
import BoxInfoQuantity from '../../components/box/BoxInfoQuantity';
import { HomeFeature } from '../../components/HomeFeatures';
import { HomeTopInfos } from '../../components/HomeTopInfos';

interface BudPageProps {
  bud: Bud;
}

export default function BudPage({ bud }: BudPageProps) {
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
        <title>Green Ghost 🌿👻 {bud.name} Strain</title>
        <meta name="description" content={bud.descSeo} />
        <meta
          property="og:title"
          content={`Green Ghost - ${bud.name} Strain`}
        />
        <meta property="og:description" content={bud.descSeo} />
        <meta property="og:image" content={bud.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/weed-shop/${bud.slug}`}
        />
        <meta
          name="twitter:title"
          content={`Green Ghost - ${bud.name} Strain`}
        />
        <meta name="twitter:description" content={bud.descSeo} />
        <meta name="twitter:image" content={bud.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/weed-shop/${bud.slug}`}
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
        <HomeSectionTitle title={`${bud.name} Strain`} />
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
          {bud.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={bud.imgDesc}
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
            {bud.dominance == 'Indica' && (
              <Box
                as={'h2'}
                color={'ghostVerse.dominance.indica'}
                marginRight={4}
              >
                {bud.dominance} {bud.indica}%
              </Box>
            )}
            {bud.dominance == 'Sativa' && (
              <Box
                as={'h2'}
                color={'ghostVerse.dominance.sativa'}
                marginRight={4}
              >
                {bud.dominance} {bud.sativa}%
              </Box>
            )}
            {bud.dominance == 'Hybrid' && (
              <Box
                as={'h2'}
                color={'ghostVerse.dominance.hybrid'}
                marginRight={4}
              >
                {bud.dominance}
              </Box>
            )}
            <Box display={'flex'}>
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="THC" />
                <Text color={'ghostVerse.green.base'} mr={4}>
                  {bud.THC}%
                </Text>
              </BoxInfoLabel>
              {bud.CBD !== '0' && (
                <BoxInfoLabel>
                  <BoxInfoLabelTitle title="CBD" />
                  <Text color={'ghostVerse.green.base'}>{bud.CBD}%</Text>
                </BoxInfoLabel>
              )}
            </Box>
            <BoxInfoLabel>
              <BoxInfoLabelTitle title="Feelings" />
              <Text color={'ghostVerse.grey.base'}>{bud.effects}</Text>
            </BoxInfoLabel>
            {bud.relieves !== 'undefined' && (
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="Relieves" />
                <Text color={'ghostVerse.grey.base'}>{bud.relieves}</Text>
              </BoxInfoLabel>
            )}
          </BoxInfoLeft>
          <BoxInfoRight>
            {bud.quantity !== 0 && bud.price !== 999 && (
              <>
                <BoxInfoLabel>
                  <BoxInfoLabelTitle title="1G" />
                  <Text
                    color={'ghostVerse.green.base'}
                    fontFamily={'CubicFive12'}
                    fontSize={20}
                  >
                    {bud.price} THB
                  </Text>
                </BoxInfoLabel>
                <BoxInfoMemberPrice>
                  {' '}
                  <Box mr={2}>member</Box>
                  {(bud.price * 0.8).toFixed(0)} THB
                </BoxInfoMemberPrice>
                <BoxInfoLabel>
                  <BoxInfoLabelTitle title="5G" />
                  <Text
                    color={'ghostVerse.green.base'}
                    fontFamily={'CubicFive12'}
                    fontSize={20}
                  >
                    {(bud.price * 5 - bud.price).toFixed(0)} THB
                  </Text>
                </BoxInfoLabel>
                <BoxInfoMemberPrice>
                  {' '}
                  <Box mr={2}>member</Box>
                  {((bud.price * 5 - bud.price) * 0.8).toFixed(0)} THB
                </BoxInfoMemberPrice>
                <BoxInfoQuantity>{bud.quantity} grams left</BoxInfoQuantity>
              </>
            )}

            {bud.quantity === 0 && (
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

            {bud.price === 999 && (
              <Text
                display={'flex'}
                fontFamily={'CubicFive12'}
                justifyContent="end"
                fontSize={14}
                color="ghostVerse.green.base"
              >
                Coming soon
              </Text>
              // <BoxInfoMemberPrice>Member Only</BoxInfoMemberPrice>
            )}
          </BoxInfoRight>
        </BoxInfoProduct>
        {/* {bud.price !== 999 && bud.grower !== 'Unknown' && (
          <BoxInfoGrow>
            <Box display={'flex'} flexDirection={{ base: 'column', xl: 'row' }}>
              <Box as={'h3'} mr={2}>
                Grower
              </Box>
              <Link
                href={`/weed-grower${bud.growerSlug}`}
                title={bud.grower}
                passHref
              >
                <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                  {bud.grower}
                </Box>
              </Link>
            </Box>
            <Box display={'flex'} flexDirection={{ base: 'column', xl: 'row' }}>
              <Box as={'h3'} mr={2}>
                Origin
              </Box>
              <Link
                href="/weed-grower"
                title="Weed Growers in Thailand"
                passHref
              >
                <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                  {bud.origin}
                </Box>
              </Link>
            </Box>
            <Box display={'flex'} flexDirection={{ base: 'column', xl: 'row' }}>
              <Box as={'h3'} mr={2}>
                Environment
              </Box>
              <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                {bud.environment}
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={{ base: 'column', xl: 'row' }}>
              <Box as={'h3'} mr={2}>
                Harvest
              </Box>
              <Box display={'flex'} color={'ghostVerse.green.base'} mr={4}>
                {bud.harvest}
              </Box>
            </Box>
          </BoxInfoGrow>
        )} */}
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
        <HomeFeature />
        <Box
          display={'flex'}
          mb={5}
          p={5}
          pt={0}
          flexWrap={'wrap'}
          alignItems={'stretch'}
          backgroundColor={'ghostVerse.green.base'}
          color={'black'}
        >
          <Box display={'flex'} w={'100%'} alignItems={'left'}>
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
          </Box>
          <Text
            as={'p'}
            fontSize={{ base: 20, lg: 36 }}
            lineHeight={1}
            fontFamily={'vt323'}
            w={{ base: '60%', md: '70%' }}
            mr={4}
            textAlign={'left'}
          >
            {`Schedule your delivery to enjoy 10% free on ${bud.name}.`}
          </Text>
          <Link
            href={`https://greenghostweed.shop/products/${bud.slug}`}
            passHref
            title={`Green Ghost Weed Shop - Buy ${bud.name} Cannabis Strain Online`}
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
        <HomeTopInfos />
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const buds = getBuds();

  const paths = buds.map((bud) => ({
    params: { slug: bud.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<BudPageProps> = async ({
  params,
}) => {
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
