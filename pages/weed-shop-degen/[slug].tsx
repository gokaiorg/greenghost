import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getDegens, Degen } from '../../config/degens';
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
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
import BoxInfoLeft from '../../components/box/BoxInfoLeft';
import BoxInfoRight from '../../components/box/BoxInfoRight';
import BoxInfoLabel from '../../components/box/BoxInfoLabel';
import { BoxInfoLabelTitle } from '../../components/box/BoxInfoLabelTitle';
import BoxInfoQuantity from '../../components/box/BoxInfoQuantity';

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

  return (
    <>
      <Head>
        <title>Green Ghost - {degen.name} Degen</title>
        <meta name="description" content={degen.descSeo} />
        <meta property="og:title" content={`Green Ghost - ${degen.name}`} />
        <meta property="og:description" content={degen.descSeo} />
        <meta property="og:image" content={degen.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/weed-shop-degen/${degen.slug}`}
        />
        <meta name="twitter:title" content={`Green Ghost - ${degen.name}`} />
        <meta name="twitter:description" content={degen.descSeo} />
        <meta name="twitter:image" content={degen.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/weed-shop-degen/${degen.slug}`}
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
        <HomeSectionTitle title={`${degen.name}`} />
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
              <Image src={image} width={500} height={500} alt={degen.imgDesc} />
            </SwiperSlide>
          ))}
          <BuyNowLink />
        </Swiper>
        <BoxInfoProduct>
          <BoxInfoLeft>
            <Text as={'h2'} color={'ghostVerse.blue.base'} marginRight={4}>
              {degen.packaging}
            </Text>
            <Box display={'flex'}>
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="THC" />
                <Text color={'ghostVerse.green.base'}>{degen.THC}</Text>
              </BoxInfoLabel>
              {degen.CBD !== 'undefined' && (
                <BoxInfoLabel>
                  <BoxInfoLabelTitle title="CBD" />
                  <Text color={'ghostVerse.green.base'}>{degen.CBD}</Text>
                </BoxInfoLabel>
              )}
            </Box>
            {degen.ingretiens !== 'undefined' && (
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="Ingretiens" />
                <Text color={'ghostVerse.grey.base'}>{degen.ingretiens}</Text>
              </BoxInfoLabel>
            )}
          </BoxInfoLeft>
          <BoxInfoRight>
            <BoxInfoLabel>
              <Text
                color={'ghostVerse.green.base'}
                fontFamily={'CubicFive12'}
                fontSize={20}
              >
                {degen.price} THB
              </Text>
            </BoxInfoLabel>
            {degen.quantity !== 0 && degen.price !== 999 && (
              <>
                <BoxInfoQuantity>{degen.quantity} in stock</BoxInfoQuantity>
              </>
            )}
            {degen.quantity === 0 && (
              <BoxInfoQuantity>ON ORDER</BoxInfoQuantity>
            )}
          </BoxInfoRight>
        </BoxInfoProduct>
        <BoxDescription>{degen.description}</BoxDescription>
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

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<DegensPageProps> = async ({
  params,
}) => {
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
