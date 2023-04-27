import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import { SocialContactIcons } from '../components/SocialContactIcons';

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Contact Us - Buy Weed Online.</title>
        <meta
          name="description"
          content="Looking to buy weed online? Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Contact us today to learn more and place your order."
        />
        <meta
          property="og:title"
          content="Green Ghost - Contact Us - Buy Weed Online."
        />
        <meta
          property="og:description"
          content="Looking to buy weed online? Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Contact us today to learn more and place your order."
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
          content="Looking to buy weed online? Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team is dedicated to providing a safe and reliable service, with discreet and secure shipping options available. Whether you're a seasoned smoker or new to the world of cannabis, we have a wide selection of products to suit your needs. Contact us today to learn more and place your order."
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
        <Box display="flex" flexDirection="column" fontFamily="vt323">
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '3xl' }}
            fontWeight="black"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            mt={5}
            mb={6}
            p={4}
            mr="auto"
          >
            Call the shop
          </Text>
          <Text
            display="inline-flex"
            color="ghostVerse.green.base"
            borderColor="ghostVerse.green.base"
            fontSize={{ base: '3xl', md: '40' }}
            borderWidth={1}
            whiteSpace="nowrap"
            bgColor="ghostVerse.dark.lighter"
            backdropFilter="blur(3px)"
            py={2}
            px={6}
            mb={2}
            mr="auto"
          >
            <Link href="tel:+66936459898">+66 93 645 9898</Link>
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" fontFamily="vt323">
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '3xl' }}
            fontWeight="black"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            mt={5}
            mb={6}
            p={4}
            mr="auto"
          >
            Contact us to order online
            <Box as="span" color="ghostVerse.green.base">
              {' '}
              @greenghostdegen
            </Box>
          </Text>
          <SocialContactIcons />
          <Box
            as="h3"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            p={4}
            mx="auto"
            mt={10}
            display="flex"
            textAlign="center"
            fontSize="3xl"
            width="fit-content"
            flexDirection="column"
          >
            Immediate delivery in Phuket
            <br />
            24/24 delivery only in Rawai
            <br />
            Worldwide shipping
          </Box>
          <Text title="Find Us on Weed in th" as="h3" fontSize="xl" mx="auto" fontFamily="CubicFive12" mt={10}>
            Find Us Also On
          </Text>
          <Box display="inline-flex" flexWrap="wrap" alignItems="center" justifyContent="center" mx="auto" mb={4} fontSize="4xl">
            <Box m={4} color="ghostVerse.green.base">
              <Link title="Find Us on Weed in th" href="https://weed.th/shop/be232698-0464-4352-bd70-15ea51257870">WEED.in.th</Link>
            </Box>
            <Box m={4} color="ghostVerse.green.base">
              <Link title="Find Us on Weeddee" href="https://thaiweeddee.com/listing/green-ghost/">Weeddee</Link>
            </Box>
            <Box m={4} color="ghostVerse.green.base">
              <Link title="Find Us on WeedHub" href="https://weedhub.asia/listing/green-ghost/">WeedHub</Link>
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
