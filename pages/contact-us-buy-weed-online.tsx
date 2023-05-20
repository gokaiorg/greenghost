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

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Contact Us - Buy Weed Online.</title>
        <meta
          name="description"
          content="Looking to buy weed online? Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Try the fastest Phuket weed delivery."
        />
        <meta
          property="og:title"
          content="Green Ghost - Contact Us - Buy Weed Online."
        />
        <meta
          property="og:description"
          content="Looking to buy weed online? Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Try the fastest Phuket weed delivery."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/contact-us-buy-weed-online"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Contact Us - Buy Weed Online."
        />
        <meta
          name="twitter:description"
          content="Looking to buy weed online? Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Try the fastest Phuket weed delivery."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/contact-us-buy-weed-online"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Contact us - Buy weed online." />
        <Text as={'h2'} fontSize={{ base: '3xl' }} fontFamily={'vt323'} mb={10}>
          Looking to buy weed online? No need to leave the house for your
          favorite buds, your choice of strains is delivered right to your
          doorstep.
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          mb={10}
        >
          <Box
            width={{ base: '100%', lg: '35%' }}
            mr={{ base: 0, lg: 10 }}
            mt={4}
          >
            <Image
              src="/green-ghost-weed-shop-buy-online.png"
              width={500}
              height={500}
              alt="Contact us - Buy weed online."
              layout="responsive"
            />
          </Box>
          <Box width={{ base: '100%', lg: '65%' }}>
            <Box display={'flex'} flexDirection={'column'}>
              <Text
                as={'h3'}
                color={'white'}
                fontSize={{ base: '2xl' }}
                fontFamily={'CubicFive12'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.lighter'}
                borderWidth={1}
                backdropFilter={'blur(3px)'}
                mt={5}
                mb={6}
                p={4}
                mr={'auto'}
              >
                Call us to order online
              </Text>
              <Text
                display="inline-flex"
                color="ghostVerse.green.base"
                borderColor="ghostVerse.green.base"
                fontSize={{ base: '5xl' }}
                borderWidth={1}
                whiteSpace="nowrap"
                bgColor={'ghostVerse.dark.lighter'}
                backdropFilter={'blur(3px)'}
                py={2}
                px={6}
                mb={2}
                mr={'auto'}
                fontFamily={'vt323'}
              >
                <Link href="tel:+66936459898">+66 93 645 9898</Link>
              </Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'}>
              <Text
                as={'h3'}
                color={'white'}
                fontSize={{ base: '2xl' }}
                fontFamily={'CubicFive12'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.lighter'}
                borderWidth={1}
                backdropFilter={'blur(3px)'}
                mt={5}
                mb={6}
                p={4}
                mr={'auto'}
              >
                Text us to order online
              </Text>
              <SocialContactIcons />
            </Box>
          </Box>
        </Box>
        <Box
          as={'h3'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          mx="auto"
          mt={10}
          display={'flex'}
          textAlign="center"
          fontSize="3xl"
          width="fit-content"
          flexDirection={'column'}
          fontFamily={'vt323'}
        >
          Immediate weed delivery in Phuket from 10am to midnight
          <br />
          Free delivery for orders over 10g
        </Box>
        <Text
          title="Find Us on Weed in th"
          as={'h3'}
          fontSize="xl"
          mx="auto"
          fontFamily={'CubicFive12'}
          mt={10}
          textAlign={'center'}
        >
          Find Us Also On
        </Text>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
          alignItems={'center'}
          justifyContent="center"
          mx="auto"
          mb={4}
          fontSize="4xl"
          fontFamily={'vt323'}
        >
          <Box m={4} color="ghostVerse.green.base">
            <Link
              title="Find Us on Weed in th"
              href="https://weed.th/shop/0d9dde2a-13bd-4167-b063-577af34971e8"
            >
              WEED.TH Phuket
            </Link>
          </Box>
          <Box m={4} color="ghostVerse.green.base">
            <Link
              title="Find Us on Weed in th"
              href="https://weed.th/shop/be232698-0464-4352-bd70-15ea51257870"
            >
              WEED.TH Rawai
            </Link>
          </Box>
          <Box m={4} color="ghostVerse.green.base">
            <Link
              title="Find Us on Weeddee"
              href="https://thaiweeddee.com/listing/green-ghost/"
            >
              Weeddee
            </Link>
          </Box>
          <Box m={4} color="ghostVerse.green.base">
            <Link
              title="Find Us on WeedHub"
              href="https://weedhub.asia/listing/green-ghost/"
            >
              WeedHub
            </Link>
          </Box>
          <Box m={4} color="ghostVerse.green.base">
            <Link
              title="Find Us on Thailand Weed"
              href="https://www.thailandweed.com/directory-dispensaries/listing/green-ghost/"
            >
              Thailand Weed
            </Link>
          </Box>
          <Box m={4} color="ghostVerse.green.base">
            <Link
              title="Find Us on High Thailand"
              href="https://www.highthailand.com/location/green-ghost/"
            >
              High Thailand
            </Link>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
