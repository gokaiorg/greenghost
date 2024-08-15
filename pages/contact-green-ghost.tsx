import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import { SocialContactIcons } from '../components/SocialContactIcons';
import Image from 'next/image';
import { ImgContact } from '../components/media/ImgContact';

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Contact Us</title>
        <meta
          name="description"
          content="Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Try the fastest Phuket weed delivery."
        />
        <meta property="og:title" content="Green Ghost 🌿👻 Contact Us" />
        <meta
          property="og:description"
          content="Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Try the fastest Phuket weed delivery."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/contact-green-ghost"
        />
        <meta name="twitter:title" content="Green Ghost 🌿👻 Contact Us" />
        <meta
          name="twitter:description"
          content="Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Try the fastest Phuket weed delivery."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/contact-green-ghost"
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
          <ImgContact />
          <HomeSectionTitle title="Contact Green Ghost" />
        </Box>
        <Text
          as={'h2'}
          textAlign={'center'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          mb={10}
          lineHeight={1}
        >
          Get in touch with the Green Ghost for all your cannabis inquiries.
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column-reverse', lg: 'row' }}
          mb={10}
        >
          <Box width={{ base: '100%', lg: '35%' }} mr={{ base: 0, lg: 10 }}>
            <Image
              src="/green-ghost-weed-shop-buy-online.png"
              width={500}
              height={500}
              alt="Contact us - Buy weed online."
              quality={75}
            />
          </Box>
          <Box width={{ base: '100%', lg: '65%' }} mb={10}>
            <Box display={'flex'} flexDirection={'column'}>
              <Text
                as={'h3'}
                color={'white'}
                fontSize={{ base: 'xl' }}
                fontFamily={'CubicFive12'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.lighter'}
                borderWidth={1}
                backdropFilter={'blur(3px)'}
                mb={6}
                p={2}
                mr={'auto'}
              >
                Call us
              </Text>
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                borderColor={'ghostVerse.green.base'}
                fontSize={{ base: '4xl' }}
                borderWidth={1}
                whiteSpace={'nowrap'}
                bgColor={'ghostVerse.dark.lighter'}
                backdropFilter={'blur(3px)'}
                py={1}
                px={6}
                mb={2}
                mr={'auto'}
                fontFamily={'vt323'}
              >
                <Link href="tel:+66936459898" title="+66936459898" passHref>
                  +66 93 645 9898
                </Link>
              </Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Text
                as={'h3'}
                color={'white'}
                fontSize={{ base: 'xl' }}
                fontFamily={'CubicFive12'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.lighter'}
                borderWidth={1}
                backdropFilter={'blur(3px)'}
                mt={5}
                mb={6}
                p={2}
                mr={'auto'}
              >
                Text us
              </Text>
              <SocialContactIcons />
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
