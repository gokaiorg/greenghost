import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import { ImgQuestion } from '../components/ImgQuestion';

const BuyWeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - About.</title>
        <meta
          name="description"
          content="Green Ghost is the result of a partnership between LH CBD, a network
          of CBD shops in France for 3 years, and Gokai Labs, a digital branding
          and communication agency with over 10 years of experience in Thailand."
        />
        <meta property="og:title" content="Green Ghost - About." />
        <meta
          property="og:description"
          content="Green Ghost is the result of a partnership between LH CBD, a network
          of CBD shops in France for 3 years, and Gokai Labs, a digital branding
          and communication agency with over 10 years of experience in Thailand."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1895" />
        <meta property="og:image:height" content="898" />
        <meta property="og:url" content="https://green.gd/about-green-ghost" />
        <meta name="twitter:title" content="Green Ghost - About." />
        <meta
          name="twitter:description"
          content="Green Ghost is the result of a partnership between LH CBD, a network
          of CBD shops in France for 3 years, and Gokai Labs, a digital branding
          and communication agency with over 10 years of experience in Thailand."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd/about-green-ghost" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="About Green Ghost - Not another coffeeshop." />
        <Box
          display="flex"
          flexDirection="column"
          as="div"
          color="white"
          fontSize={{ base: '3xl' }}
          fontFamily="vt323"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
        >
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '4xl' }}
            fontWeight="black"
            mb={4}
          >
            What's the inspiring story behind Green Ghost's origins
            <ImgQuestion />
          </Text>
          <Text>
            Green Ghost is the result of a partnership with best Phuket growers,
            and Gokai Labs, a digital branding and communication agency with
            over 10 years of experience in Thailand.
          </Text>
          <Box display="flex" my={4}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              color="ghostVerse.green.base"
              as="a"
              mx={4}
              target="_blank"
              href="https://gokai.org"
            >
              <Box
                as="img"
                src="/media/green-ghost-degen-weed-shop-partner-gokai-labs.webp"
                width={{ base: '80px' }}
                height={{ base: '80px' }}
                maxW="inherit"
                alt="Green Ghost - Degen Weed Shop - Gokai Labs"
                title="Green Ghost - Degen Weed Shop - Gokai Labs"
              />
              Gokai Labs
            </Box>
          </Box>
          <Text>
            This collaboration has allowed us to launch a unique concept that
            combines the precision of quality weed production, weed shop
            management, technology, and creativity. Green Ghost stands out from
            its competitors.
          </Text>
          <br />
          <br />
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '4xl' }}
            fontWeight="black"
            mb={4}
          >
            What sets Green Ghost apart from other coffeeshop in the industry
            <ImgQuestion />
          </Text>
          <Text>
            Committed to local values,{' '}
            <Link href="/cannabis-shop-phuket">
              <Box
                as="span"
                display="inline-block"
                color="ghostVerse.green.base"
              >
                our products
              </Box>
            </Link>{' '}
            are mainly sourced from Thailand, organic, and carefully selected by
            our experts.
            <br />
            <br />
            Green Ghost is not just another coffee shop; it is the culmination
            of the passion of an entire team dedicated to our clients with an
            innovative{' '}
            <Link href="/tokenized-cannabis-store">
              <Box
                as="span"
                display="inline-block"
                color="ghostVerse.green.base"
              >
                rewards system
              </Box>
            </Link>
            .
            <br />
            <br />
            All our efforts are focused on providing the highest quality
            products at the best possible price.
            <br />
            <br />
            Thank you for your trust.
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;