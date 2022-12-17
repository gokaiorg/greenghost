import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Cannabis Shop ร้าน ขาย กัญชา." />
      <Box display="flex" flexDirection="column">
        <Text
          as="h2"
          color="white"
          fontSize="lg"
          fontWeight="black"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr={50}
        >
          The top marijuana from Thailand is chosen for you by our experts. Find
          out about our Sativa, Indica, pre-rolled joints, and the amazing
          universe of Green Garden.
        </Text>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={40}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          mr="auto"
        >
          <Link href="/cannabis-shop-phuket">Discover</Link>
        </Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Text
          as="h2"
          color="ghostVerse.color2.darker"
          fontSize="xl"
          fontWeight="black"
          display="inline-flex"
          p={4}
          mt={5}
          mb={6}
          ml="auto"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
        >
          Where to buy and try the best ganja in Phuket NOW!?
        </Text>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={40}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          ml={{ base: '0', md: 'auto' }}
          mr={{ base: 'auto', md: '0' }}
        >
          <Link href="/buy-cannabis-weed-online-phuket-thailand">
            Contact Us
          </Link>
        </Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Text
          as="h2"
          color="white"
          fontSize="lg"
          fontWeight="black"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr={50}
        >
          We are Phuket&apos;s first tokenized weed shop. Cryptocurrency is used to
          store a percentage of the shop&apos;s profits and is then distributed to
          our members.
        </Text>
        <Text
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="ghostVerse.green.base"
          fontSize={40}
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          py={2}
          px={6}
          mb={2}
          mr="auto"
        >
          <Link href="/tokenized-crypto-NFT-cannabis-weed-store">
            Learn More
          </Link>
        </Text>
      </Box>
    </MainLayout>
  );
};

export default Home;
