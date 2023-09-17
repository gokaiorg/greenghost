import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { ImgAbout } from '../components/ImgAbout';

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - About Us</title>
        <meta
          name="description"
          content="Green Ghost is the result of a partnership with best Phuket growers, and Gokai Labs, a digital branding and communication agency with over 10 years of experience in Thailand."
        />
        <meta property="og:title" content="Green Ghost - About" />
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
        <meta name="twitter:title" content="Green Ghost - About" />
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
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
        >
          <ImgAbout />
          <HomeSectionTitle title="About Green Ghost" />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontFamily={'vt323'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          mt={5}
          mb={6}
          p={4}
          lineHeight={1}
          fontSize={{ base: 24, lg: 30 }}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: 30, lg: 34 }}
            fontWeight={'black'}
            mb={4}
          >
            What&apos;s the inspiring story behind Green Ghost&apos;s origins?
          </Text>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            mb={10}
          >
            <Box
              width={{ base: '100%', lg: '35%' }}
              mr={{ base: 0, lg: 10 }}
              my={4}
            >
              <Image
                src="/green-ghost-weed-shop-growers.png"
                width={500}
                height={500}
                alt="ok"
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
              <Text
                as={'h2'}
                color={'white'}
                fontSize={{ base: 30, lg: 34 }}
                fontWeight={'black'}
                mb={4}
              >
                How the Green Ghost works?
              </Text>
              <Text>
                Green Ghost is the result of a partnership with{' '}
                <Link
                  href="/weed-grower"
                  title="Best Weed Growers Thailand"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    best weed growers in Thailand
                  </Box>
                </Link>{' '}
                and{' '}
                <Link
                  href="https://gokai.org/"
                  title="Gokai Labs - Creative Web3 agency"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    Gokai Labs
                  </Box>
                </Link>
                , a digital branding and communication agency with over 10 years
                of experience in Thailand.
              </Text>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={{ base: 'column', lg: 'row' }}>
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                as={'h2'}
                color={'white'}
                fontSize={{ base: 30, lg: 34 }}
                fontWeight={'black'}
                mb={4}
              >
                What sets Green Ghost apart from other coffeeshop in the
                industry ?
              </Text>
              <Text>
                This collaboration has allowed us to launch a unique concept
                that combines the precision of quality weed production, weed
                shop management, technology, and creativity. Green Ghost stands
                out from its competitors.
              </Text>
              <Text>
                Committed to local values,{' '}
                <Link href={'/weed-shop'} title={'Weed Shop'} passHref>
                  <Box
                    as={'span'}
                    display="inline-block"
                    color={'ghostVerse.green.base'}
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
                    as={'span'}
                    display="inline-block"
                    color={'ghostVerse.green.base'}
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
              />
            </Box>
          </Box>
          <Text textAlign={'center'} my={10}>
            All our efforts are focused on providing the highest quality
            products at the best possible price.
            <br />
            Thank you for your trust.
          </Text>
          <Box
            position={'relative'}
            w="100%"
            h={{ base: '200px', lg: '600px' }}
          >
            <Image
              src="/media/green-ghost-weed-shop-phuket.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
