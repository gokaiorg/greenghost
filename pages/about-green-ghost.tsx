import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import { ImgQuestion } from '../components/ImgQuestion';
import Image from 'next/image';

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - About.</title>
        <meta
          name="description"
          content="Green Ghost is the result of a partnership with best Phuket growers, and Gokai Labs, a digital branding and communication agency with over 10 years of experience in Thailand."
        />
        <meta property="og:title" content="Green Ghost - About." />
        <meta
          property="og:description"
          content="Green Ghost is the result of a partnership with best Phuket growers, and Gokai Labs, a digital branding and communication agency with over 10 years of experience in Thailand."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/about-green-ghost" />
        <meta name="twitter:title" content="Green Ghost - About." />
        <meta
          name="twitter:description"
          content="Green Ghost is the result of a partnership with best Phuket growers, and Gokai Labs, a digital branding and communication agency with over 10 years of experience in Thailand."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/about-green-ghost" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="About Green Ghost - Not another coffeeshop." />
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          mt={5}
          mb={6}
          p={4}
        >
          <Text
            as="h2"
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight="black"
            mb={4}
          >
            What&apos;s the inspiring story behind Green Ghost&apos;s origins
            <ImgQuestion />
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
                src="/green-ghost-weed-shop-growers.png"
                width={500}
                height={500}
                alt="ok"
                layout="responsive"
              />
            </Box>
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text>
                At Green Ghost, our philosophy is to support the local Thai weed
                market by exclusively selecting high-quality organic weed grown
                in Thailand. We do not import weed from other countries. By
                doing so, we hope to contribute to making Thailand a top spot
                for high-quality weed growth in the world.
              </Text>
              <br />
              <Text>
                Green Ghost is the result of a partnership with{' '}
                <Link
                  href="/cannabis-grower-phuket"
                  title="Cannabis Grower Phuket"
                  passHref
                >
                  <Box as="span" color="ghostVerse.green.base">
                    best Phuket growers
                  </Box>
                </Link>{' '}
                and Gokai Labs, a digital branding and communication agency with
                over 10 years of experience in Thailand.
              </Text>
              <Box display={'flex'} my={4}>
                <Box
                  display={'flex'}
                  justifyContent="center"
                  alignItems={'center'}
                  flexDirection={'column'}
                  color="ghostVerse.green.base"
                  as="a"
                  mx={4}
                  target="_blank"
                  href="https://gokai.org"
                >
                  <Box
                    as="img"
                    src="/media/green-ghost-degen-weed-shop-partner-gokai-labs.webp"
                    width="80px"
                    height="80px"
                    maxW="inherit"
                    alt="Green Ghost - Degen Weed Shop - Gokai Labs"
                    title="Green Ghost - Degen Weed Shop - Gokai Labs"
                  />
                  Gokai Labs
                </Box>
                <Box
                  display={'flex'}
                  justifyContent="center"
                  alignItems={'center'}
                  flexDirection={'column'}
                  color="ghostVerse.green.base"
                  mx={4}
                  textAlign="center"
                >
                  <Link
                    href="/my-weed-solutions"
                    title="My Weed Solutions"
                    passHref
                  >
                    <Box
                      as="img"
                      src="/media/green-ghost-grower-my-weed-solutions.webp"
                      width="80px"
                      height="80px"
                      maxW="inherit"
                      mx="auto"
                      alt="Green Ghost - My Weed Solutions"
                      title="Green Ghost - My Weed Solutions"
                    />
                    My Weed
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                as="h2"
                color={'white'}
                fontSize={{ base: '4xl' }}
                fontWeight="black"
                mb={4}
              >
                What sets Green Ghost apart from other coffeeshop in the
                industry
                <ImgQuestion />
              </Text>
              <Text>
                This collaboration has allowed us to launch a unique concept
                that combines the precision of quality weed production, weed
                shop management, technology, and creativity. Green Ghost stands
                out from its competitors.
              </Text>
              <Text>
                Committed to local values,{' '}
                <Link href="/weed-shop" title="Weed Shop" passHref>
                  <Box
                    as="span"
                    display="inline-block"
                    color="ghostVerse.green.base"
                  >
                    our products
                  </Box>
                </Link>{' '}
                are mainly sourced from Thailand, organic, and carefully
                selected by our experts.
                <br />
                <br />
                Green Ghost is not just another coffee shop; it is the
                culmination of the passion of an entire team dedicated to our
                clients with an innovative{' '}
                <Link
                  href="/crypto-weed-shop-relax-and-earn"
                  title="Crypto Weed Shop Relax And Earn"
                  passHref
                >
                  <Box
                    as="span"
                    display="inline-block"
                    color="ghostVerse.green.base"
                  >
                    rewards system
                  </Box>
                </Link>
                .
              </Text>
            </Box>
            <Box
              width={{ base: '100%', lg: '35%' }}
              ml={{ base: 0, lg: 10 }}
              mt={4}
            >
              <Image
                src="/green-ghost-weed-shop-design-agency.png"
                width={500}
                height={500}
                alt="ok"
                layout="responsive"
              />
            </Box>
          </Box>
          <Text textAlign="center" my={10}>
            All our efforts are focused on providing the highest quality
            products at the best possible price.
            <br />
            Thank you for your trust.
          </Text>
          <Link href="/sitemap" title="Sitemap" passHref>
            <Box as="span" color="ghostVerse.green.base">
              Sitemap
            </Box>
          </Link>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
