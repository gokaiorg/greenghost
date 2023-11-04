import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { ImgCup } from '../components/media/ImgCup';
import { Find } from '../components/Find';

const CannabisCup: NextPage = () => {
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
        <title>Green Ghost - Phuket Cannabis Cup</title>
        <meta
          name="description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket. Buy high-quality weed products and enjoy convenient, reliable delivery right to your doorstep. Explore our wide selection and experience the best of Phuket's cannabis scene with Green Ghost."
        />
        <meta property="og:title" content="Green Ghost - Phuket Cannabis Cup" />
        <meta
          property="og:description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket. Buy high-quality weed products and enjoy convenient, reliable delivery right to your doorstep. Explore our wide selection and experience the best of Phuket's cannabis scene with Green Ghost."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/phuket-cannabis-cup"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Phuket Cannabis Cup"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket. Buy high-quality weed products and enjoy convenient, reliable delivery right to your doorstep. Explore our wide selection and experience the best of Phuket's cannabis scene with Green Ghost."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/phuket-cannabis-cup"
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
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          my={4}
          lineHeight={1}
        >
          <ImgCup />
          <HomeSectionTitle title="Phuket Cannabis Cup" />
        </Box>
        <Text
          as={'p'}
          fontFamily={'vt323'}
          width={{ base: '100%' }}
          textAlign={'center'}
          fontSize={{ base: 24, lg: 30 }}
          mb={10}
        >
          Green Ghost Degen Weed Shop is up for Best Dispensaries in Thailand,
          and we need your help to win!
          <br />
          <Link
            href="https://weed.th/best-dispensaries-in-thailand/vote/fe835e3b-d043-4672-af43-8cc039aa013b"
            title="Green Ghost Degen Weed Shop - Best Dispensary in Thailand"
            passHref
          >
            <Text as={'span'} color={'ghostVerse.green.base'}>
              Vote for us today!
            </Text>
          </Link>
        </Text>
        <Text
          as={'h2'}
          lineHeight={1}
          fontSize={{ base: 'xl' }}
          fontFamily={'CubicFive12'}
          mb={5}
        >
          The 2nd Phuket Cannabis Cup - 2023
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={'stretch'}
          mb={20}
        >
          <Box width={{ base: '50%' }}>
            <Image
              src="/media/green-ghost-phuket-cannabis-cup-2023.webp"
              width={1264}
              height={600}
              alt="Green Ghost - Phuket Cannabis Cup 2023"
            />
          </Box>
          <Text
            width={{ base: '50%' }}
            as={'h3'}
            fontSize={{ base: 24, lg: 30 }}
            fontFamily={'vt323'}
            px={4}
            display={'flex'}
            flexDirection={'column'}
            transition={'all .3s'}
          >
            December 1st – 2nd, Blue Tree Water Park, Thalang
          </Text>
        </Box>
        <Text
          as={'h2'}
          lineHeight={1}
          fontSize={{ base: 'xl' }}
          fontFamily={'CubicFive12'}
          mb={5}
        >
          The First Phuket Cannabis Cup - 2023
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          position={'relative'}
          height={'fit-content'}
          width={{ base: '100%' }}
          mb={20}
        >
          <Box width={{ base: '50%' }}>
            <Image
              src="/media/green-ghost-phuket-cannabis-cup-2022.webp"
              width={1264}
              height={600}
              alt="Green Ghost - Phuket Cannabis Cup 2022"
            />
          </Box>
          <Text
            width={{ base: '50%' }}
            as={'h3'}
            fontSize={{ base: 24, lg: 30 }}
            fontFamily={'vt323'}
            px={4}
            display={'flex'}
            flexDirection={'column'}
            transition={'all .3s'}
          >
            March 25th, Pramookkoo Resort, Kata Beach
          </Text>
        </Box>
        <Find />
      </MainLayout>
    </>
  );
};

export default CannabisCup;
