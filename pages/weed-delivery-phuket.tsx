import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { WeedDeliveryFeature } from '../components/WeedDeliveryFeature';
import { ImgDelivery } from '../components/media/ImgDelivery';

const WeedDelivery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Weed Delivery Phuket</title>
        <meta
          name="description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket. Buy high-quality weed products and enjoy convenient, reliable delivery right to your doorstep. Explore our wide selection and experience the best of Phuket's cannabis scene with Green Ghost."
        />
        <meta
          property="og:title"
          content="Green Ghost - Weed Delivery Phuket"
        />
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
          content="https://green.gd/weed-delivery-phuket"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Weed Delivery Phuket"
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
          content="https://green.gd/weed-delivery-phuket"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          my={4}
          lineHeight={1}
        >
          <ImgDelivery />
          <HomeSectionTitle title="Weed Delivery Phuket" />
        </Box>
        <Text
          as={'h2'}
          textAlign={'center'}
          lineHeight={1}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          mb={10}
        >
          To enjoy our weed delivery service in Phuket, simply follow these
          steps:
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={'stretch'}
          mb={10}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            position={'relative'}
            height={'fit-content'}
            width={{ base: '100%', lg: '50%' }}
            mb={2}
          >
            <Link href={'/weed-shop'} title={'Weed Shop'} passHref>
              <Text
                as={'h2'}
                fontSize={{ base: 'xl', lg: '2xl' }}
                fontFamily={'CubicFive12'}
                color={'white'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.ultralight'}
                borderWidth={1}
                backdropFilter={'blur(1px)'}
                textAlign={'center'}
                p={4}
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                transition={'all .3s'}
                _hover={{
                  color: 'ghostVerse.green.base',
                  bgColor: 'ghostVerse.dark.lighter',
                }}
              >
                <Box fontSize={{ base: '3xl', lg: '5xl' }}>1</Box>
                Browse our selection of high-quality weed
              </Text>
            </Link>
            <Box width={{ base: '100%' }}>
              <Image
                src="/media/green-ghost-degen-weed-shop-weed-delivery-phuket-strain-choice.webp"
                width={1200}
                height={600}
                alt="Weed Menu - Weed delivery Phuket - Buy weed online."
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            position={'relative'}
            height={'fit-content'}
            width={{ base: '100%', lg: '50%' }}
            mb={2}
          >
            <Link
              href={'/contact-green-ghost'}
              title={'Contact Green Ghost'}
              passHref
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl', lg: '2xl' }}
                fontFamily={'CubicFive12'}
                color={'white'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.ultralight'}
                borderWidth={1}
                backdropFilter={'blur(1px)'}
                textAlign={'center'}
                p={4}
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                transition={'all .3s'}
                _hover={{
                  color: 'ghostVerse.green.base',
                  bgColor: 'ghostVerse.dark.lighter',
                }}
              >
                <Box fontSize={{ base: '3xl', lg: '5xl' }}>2</Box>
                Proceed to contact and provide your delivery details
              </Text>
            </Link>
            <Box width={{ base: '100%' }}>
              <Image
                src="/media/green-ghost-degen-weed-shop-weed-delivery-phuket-contact-us.webp"
                width={1200}
                height={600}
                alt="Contact us - Weed delivery Phuket - Buy weed online."
              />
            </Box>
          </Box>
        </Box>
        <WeedDeliveryFeature />
        <Box
          as={'h3'}
          mb={20}
          display={'flex'}
          textAlign={'center'}
          fontSize={'4xl'}
          width={'fit-content'}
          flexDirection={'column'}
          fontFamily={'vt323'}
        >
          Sit back and relax as we rapidly deliver your order to your location
          in Phuket and experience the convenience and top-notch service of
          Green Ghost&apos;s weed delivery today!
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedDelivery;
