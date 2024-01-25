import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getEdibles, Edible } from '../../config/edibles';
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

  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 {edible.name} Edible</title>
        <meta name="description" content={edible.descSeo} />
        <meta
          property="og:title"
          content={`Green Ghost - ${edible.name} Edible`}
        />
        <meta property="og:description" content={edible.descSeo} />
        <meta property="og:image" content={edible.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/weed-shop-edibles/${edible.slug}`}
        />
        <meta
          name="twitter:title"
          content={`Green Ghost - ${edible.name} Edible`}
        />
        <meta name="twitter:description" content={edible.descSeo} />
        <meta name="twitter:image" content={edible.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/weed-shop-edibles/${edible.slug}`}
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
        <HomeSectionTitle title={`${edible.name} Edible`} />
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
                width={500}
                height={500}
                alt={edible.imgDesc}
              />
            </SwiperSlide>
          ))}
          <BuyNowLink />
        </Swiper>
        <BoxInfoProduct>
          <BoxInfoLeft>
            <Text as={'h2'} color={'ghostVerse.blue.base'} marginRight={4}>
              {edible.packaging}
            </Text>
            <Box display={'flex'}>
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="THC" />
                <Text color={'ghostVerse.green.base'}>{edible.THC}</Text>
              </BoxInfoLabel>
              {edible.CBD !== 'undefined' && (
                <BoxInfoLabel>
                  <BoxInfoLabelTitle title="CBD" />
                  <Text color={'ghostVerse.green.base'}>{edible.CBD}%</Text>
                </BoxInfoLabel>
              )}
            </Box>
            <BoxInfoLabel>
              <BoxInfoLabelTitle title="Feelings" />
              <Text color={'ghostVerse.grey.base'}>{edible.effects}</Text>
            </BoxInfoLabel>
            {edible.ingretiens !== 'undefined' && (
              <BoxInfoLabel>
                <BoxInfoLabelTitle title="Relieves" />
                <Text color={'ghostVerse.grey.base'}>{edible.ingretiens}</Text>
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
                {edible.price} THB
              </Text>
            </BoxInfoLabel>
            {edible.quantity !== 0 && edible.price !== 999 && (
              <>
                <BoxInfoQuantity>{edible.quantity} in stock</BoxInfoQuantity>
              </>
            )}
            {edible.quantity === 0 && (
              <BoxInfoQuantity>ON ORDER</BoxInfoQuantity>
            )}
          </BoxInfoRight>
        </BoxInfoProduct>
        <BoxDescription>{edible.description}</BoxDescription>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const edibles = getEdibles();

  const paths = edibles.map((edible) => ({
    params: { slug: edible.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<EdiblesPageProps> = async ({
  params,
}) => {
  const edibles = getEdibles();
  const edible = edibles.find((p) => p.slug === params?.slug);

  if (!edible) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      edible,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
