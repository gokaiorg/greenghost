import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getBuds, Bud } from '../../config/buds';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import { BuyNowLink } from '../../components/shop/elements/BuyNowLink';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import Link from 'next/link';
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
import BoxInfoGrow from '../../components/box/BoxInfoGrow';
import BoxInfoLeft from '../../components/box/BoxInfoLeft';
import BoxInfoRight from '../../components/box/BoxInfoRight';
import BoxInfoLabel from '../../components/box/BoxInfoLabel';
import { BoxInfoLabelTitle } from '../../components/box/BoxInfoLabelTitle';
import BoxInfoMemberPrice from '../../components/box/BoxInfoMemberPrice';
import BoxInfoQuantity from '../../components/box/BoxInfoQuantity';

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
        <title>Green Ghost - {bud.name} Strain</title>
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
        >
          {'< back'}
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
              <Image src={image} width={500} height={500} alt={bud.imgDesc} />
            </SwiperSlide>
          ))}
          <BuyNowLink />
        </Swiper>
        <BoxInfoProduct>
          <BoxInfoLeft>
            {bud.dominance == 'Indica' && (
              <Box as={'h2'} color={'ghostVerse.blue.base'} marginRight={4}>
                {bud.dominance} {bud.indica}%
              </Box>
            )}
            {bud.dominance == 'Sativa' && (
              <Box as={'h2'} color={'ghostVerse.pink.base'} marginRight={4}>
                {bud.dominance} {bud.sativa}%
              </Box>
            )}
            {bud.dominance == 'Hybrid' && (
              <Box as={'h2'} color={'ghostVerse.orange.base'} marginRight={4}>
                {bud.dominance}
              </Box>
            )}
            <Box display={'flex'}>
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="THC" />
                <Text color={'ghostVerse.green.base'}>{bud.THC}%</Text>
              </BoxInfoLabel>
              {bud.CBD !== 'undefined' && (
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
                  {(bud.price * 0.69).toFixed(0)} THB
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
                  {((bud.price * 5 - bud.price) * 0.69).toFixed(0)} THB
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
              <BoxInfoMemberPrice>Member Only</BoxInfoMemberPrice>
            )}
          </BoxInfoRight>
        </BoxInfoProduct>
        {bud.price !== 999 && bud.grower !== 'Unknown' && (
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
        )}
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
