import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ImgQuestion } from '../components/ImgQuestion';

const BuyWeed: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="About Green Garden - Not another coffeeshop in Phuket." />
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
          What's the inspiring story behind Green Garden's origins
          <ImgQuestion />
        </Text>
        <Text>
          Green Garden is the result of a partnership between LH CBD, a network
          of CBD shops in France for 3 years, and Gokai Labs, a digital branding
          and communication agency with over 10 years of experience in Thailand.
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
            href="https://lh-cbd.com/"
          >
            <Box
              as="img"
              src="/media/green-garden-dispensary-cannabis-shop-phuket-partner-lh-cbd.webp"
              width={{ base: '80px' }}
              height={{ base: '80px' }}
              maxW="inherit"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - LH CBD"
              title="Green Garden Dispensary - Cannabis Shop Phuket - LH CBD"
            />
            LH CBD
          </Box>
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
              src="/media/green-garden-dispensary-cannabis-shop-phuket-partner-gokai-labs.webp"
              width={{ base: '80px' }}
              height={{ base: '80px' }}
              maxW="inherit"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - Gokai Labs"
              title="Green Garden Dispensary - Cannabis Shop Phuket - Gokai Labs"
            />
            Gokai Labs
          </Box>
        </Box>
        <Text>
          This collaboration has allowed us to launch a unique concept that
          combines the precision of weed shop management, technology, and
          creativity. Green Garden stands out from its competitors.
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
          What sets Green Garden apart from other coffeeshop in the industry
          <ImgQuestion />
        </Text>
        <Text>
          Committed to local values,{' '}
          <Link href="/cannabis-shop-phuket">
            <Box display="inline-block" color="ghostVerse.green.base">
              our products
            </Box>
          </Link>{' '}
          are mainly sourced from Thailand, organic, and carefully selected by
          our experts.
          <br />
          <br />
          Green Garden is not just another coffee shop; it is the culmination of
          the passion of an entire team dedicated to our clients with an
          innovative{' '}
          <Link href="/tokenized-cannabis-store">
            <Box display="inline-block" color="ghostVerse.green.base">
              rewards system
            </Box>
          </Link>
          .
          <br />
          <br />
          All our efforts are focused on providing the highest quality products
          at the best possible price.
          <br />
          <br />
          Thank you for your trust.
        </Text>
      </Box>
    </MainLayout>
  );
};

export default BuyWeed;
