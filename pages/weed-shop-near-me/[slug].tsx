import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getShops, Shop } from '../../config/shops';

import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import Image from 'next/image';

interface ShopPageProps {
  shop: Shop;
}

export default function ShopPage({ shop }: ShopPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 {shop.name}</title>
        <meta name="description" content={shop.descSeo} />
        <meta property="og:title" content={`Green Ghost - ${shop.name}`} />
        <meta property="og:description" content={shop.descSeo} />
        <meta property="og:image" content={shop.images[1]} />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="1000" />
        <meta
          property="og:url"
          content={`https://green.gd/weed-shop-near-me/${shop.slug}`}
        />
        <meta name="twitter:title" content={`Green Ghost - ${shop.name}`} />
        <meta name="twitter:description" content={shop.descSeo} />
        <meta name="twitter:image" content={shop.images[1]} />
        <meta
          name="twitter:url"
          content={`https://green.gd/weed-shop-near-me/${shop.slug}`}
        />
        <meta property="og:video" content={shop.videoLink} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:secure_url" content={shop.videoLink} />
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
        <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
          <HomeSectionTitle title={`${shop.name}`} />
        </Box>
        <Box display={'flex'} flexWrap={'wrap'}>
          {shop.images.map((image, index) => (
            <Box key={index} w={'33.33333%'}>
              <Image
                src={image}
                width={500}
                height={500}
                alt={shop.name}
                quality={75}
              />
            </Box>
          ))}
        </Box>
        <Box
          bgColor={'ghostVerse.dark.lighter'}
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
          {shop.description}
        </Box>
        <Box
          width="100%"
          position="relative"
          paddingTop="56.25%" // 16:9 aspect ratio
        >
          <iframe
            src={shop.videoLink}
            title={`${shop.name} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const shops = getShops();

  const paths = shops.map((shop) => ({
    params: { slug: shop.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ShopPageProps> = async ({
  params,
}) => {
  const shops = getShops();
  const shop = shops.find((p) => p.slug === params?.slug);

  if (!shop) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      shop,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
