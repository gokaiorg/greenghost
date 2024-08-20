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
        <title>Green Ghost 🌿👻 Contact Our Weed Shop Team To Order</title>
        <meta
          name="description"
          content="Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team provides a safe and reliable service with discreet and secure shipping. Enjoy the fastest Phuket weed delivery."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Contact Our Weed Shop Team To Order"
        />
        <meta
          property="og:description"
          content="Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team provides a safe and reliable service with discreet and secure shipping. Enjoy the fastest Phuket weed delivery."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-weed-delivery-phuket-contact-us.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/contact" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Contact Our Weed Shop Team To Order"
        />
        <meta
          name="twitter:description"
          content="Contact Green Ghost Degen to place your order for high-quality, locally-sourced cannabis products. Our knowledgeable team provides a safe and reliable service with discreet and secure shipping. Enjoy the fastest Phuket weed delivery."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-weed-delivery-phuket-contact-us.webp"
        />
        <meta name="twitter:url" content="https://green.gd/contact" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="section" textAlign="center" my={4} lineHeight={1}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            my={4}
            lineHeight={1}
          >
            <ImgContact />
            <HomeSectionTitle title="Contact" />
          </Box>
          <Text as="h2" fontSize={{ base: '3xl' }} fontFamily="vt323" mb={10}>
            Get in touch with the Green Ghost for all your cannabis inquiries.
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={{ base: 'start', lg: 'center' }}
            alignItems={{ base: 'start', lg: 'center' }}
            mb={10}
            gap={6}
          >
            <Box textAlign="left" fontFamily="CubicFive12">
              <Text as="h3" fontSize="xl" mb={2}>
                Call us
              </Text>
              <Text as="div" fontSize="2xl" color="ghostVerse.green.base">
                <Link href="tel:+66936459898" passHref>
                  +66 93 645 9898
                </Link>
              </Text>
            </Box>
            <Box textAlign="left">
              <Text as="h3" fontSize="xl" mb={2} fontFamily="CubicFive12">
                Text us
              </Text>
              <SocialContactIcons />
            </Box>
          </Box>
          <Box>
            <Image
              src="/media/green-ghost-degen-weed-shop-weed-delivery-phuket-contact-us.webp"
              alt="Green Ghost 🌿👻 Contact Our Weed Shop Team To Order"
              width={2048}
              height={1366}
              sizes="100%"
              quality={75}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
