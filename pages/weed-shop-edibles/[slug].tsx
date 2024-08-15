import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getEdibles, Edible } from '../../config/edibles';
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
import BoxInfoProduct from '../../components/box/BoxInfoProduct';
import BoxDescription from '../../components/box/BoxDescription';
import BoxInfoLeft from '../../components/box/BoxInfoLeft';
import BoxInfoRight from '../../components/box/BoxInfoRight';
import BoxInfoLabel from '../../components/box/BoxInfoLabel';
import { BoxInfoLabelTitle } from '../../components/box/BoxInfoLabelTitle';
import BoxInfoQuantity from '../../components/box/BoxInfoQuantity';
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
                alt={edible.imgDesc}
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
        <HomeTopInfos />
        <HomeFeature />
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
