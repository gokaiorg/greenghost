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
        <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
          <HomeSectionTitle title={`${shop.name}`} />
        </Box>
        <Box display={'flex'} flexWrap={'wrap'}>
          {shop.images.map((image, index) => (
            <Box key={index} w={'33.33333%'}>
              <Image src={image} width={500} height={500} alt={shop.name} />
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
