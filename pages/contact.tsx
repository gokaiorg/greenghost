import type { GetServerSideProps, NextPage } from 'next';
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
import { Shop } from '../components/Shop';
import { motion, useScroll, useTransform } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const contactJSONLD = {
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+66 93 645 9898',
    contactType: 'Customer Service',
    areaServed: 'TH',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.facebook.com/greenghostdegen',
    'https://x.com/greenghostdegen',
    'https://www.tiktok.com/@greenghostdegen',
    'https://www.youtube.com/@greenghostdegen',
    'https://warpcast.com/greenghostdegen',
  ],
};

const BuyWeed: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <Head>
        <title>Contact Our Weed Shop Team To Order - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Get in touch with the Green Ghost team 🌿👻 for all your weed shop inquiries and orders. We're here to assist with your cannabis needs and provide exceptional service."
        />
        <meta
          property="og:title"
          content="Contact Our Weed Shop Team To Order - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Get in touch with the Green Ghost team 🌿👻 for all your weed shop inquiries and orders. We're here to assist with your cannabis needs and provide exceptional service."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-contact-us.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/contact" />
        <meta
          name="twitter:title"
          content="Contact Our Weed Shop Team To Order - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Get in touch with the Green Ghost team 🌿👻 for all your weed shop inquiries and orders. We're here to assist with your cannabis needs and provide exceptional service."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-contact-us.webp"
        />
        <meta name="twitter:url" content="https://green.gd/contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactJSONLD)}
        </script>
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main" my={4}>
          <Box
            as="section"
            aria-label="Banner"
            position="relative"
            height="100%"
            width="100%"
            overflow="hidden"
            mb={10}
          >
            <motion.div
              style={{
                y,
                position: 'absolute',
                top: '-65%',
                left: 0,
                width: '100%',
                height: '200%',
                zIndex: -1,
              }}
            >
              <Image
                src="/media/green-ghost-degen-weed-shop-contact-us.webp"
                alt="Contact Our Weed Shop Team To Order"
                title="Contact Our Weed Shop Team To Order"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
              />
            </motion.div>
            <Box
              bg="rgba(0, 0, 0, 0.8)"
              p={2}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'100%'}
              minHeight={{ base: 'auto', md: '400px' }}
            >
              <ImgContact />
              <HomeSectionTitle title="Contact" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                Get in touch with Green Ghost for all your cannabis inquiries,
                from premium strains to exclusive club perks. We&apos;re here to
                help with orders, recommendations, and any questions about our
                top-quality products. Reach out today!
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent={{ base: 'start', lg: 'center' }}
            alignItems={{ base: 'start', lg: 'center' }}
            mb={10}
            gap={6}
          >
            <Box textAlign="left" fontFamily="CubicFive12">
              <Text as="h2" fontSize="xl" mb={2}>
                Call us
              </Text>
              <Text
                as="div"
                fontSize="2xl"
                color="ghostVerse.green.base"
                p={2}
                bgColor="ghostVerse.dark.lighter"
              >
                <Link
                  title={`Call: +66936459898`}
                  href="tel:+66936459898"
                  passHref
                >
                  +66936459898
                </Link>
              </Text>
            </Box>
            <Box textAlign="left">
              <Text as="h2" fontSize="xl" mb={2} fontFamily="CubicFive12">
                Text us
              </Text>
              <SocialContactIcons />
            </Box>
          </Box>
          <Shop />
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
