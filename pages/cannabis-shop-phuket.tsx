import type { NextPage } from 'next';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Bud } from '../components/Bud';
import { BuyNowLink } from '../components/BuyNowLink';
import { PreRoll } from '../components/PreRoll';
import { Bakery } from '../components/Bakery';
import Head from 'next/head';

const CannabisShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Green Garden Dispensary - Cannabis Shop Selection - Buds, Pre Rolled,
          Edibles.
        </title>
        <meta
          name="description"
          content="Explore our wide selection of high-quality cannabis products including premium flowers, pre-rolled joints, and delicious edibles. Our products are carefully curated and lab-tested to ensure the best possible experience for our customers. Discover your perfect strain today at The Green Garden Dispensary in Phuket."
        />
        <meta
          property="og:title"
          content="Green Garden Dispensary - Cannabis Shop Selection - Buds, Pre Rolled, Edibles."
        />
        <meta
          property="og:description"
          content="Explore our wide selection of high-quality cannabis products including premium flowers, pre-rolled joints, and delicious edibles. Our products are carefully curated and lab-tested to ensure the best possible experience for our customers. Discover your perfect strain today at The Green Garden Dispensary in Phuket."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-garden-dispensary-strain-selection.png"
        />
        <meta property="og:image:width" content="1748" />
        <meta property="og:image:height" content="2480" />
        <meta
          property="og:url"
          content="https://green.gd/cannabis-shop-phuket"
        />
        <meta
          name="twitter:title"
          content="Green Garden Dispensary - Cannabis Shop Selection - Buds, Pre Rolled, Edibles."
        />
        <meta
          name="twitter:description"
          content="Explore our wide selection of high-quality cannabis products including premium flowers, pre-rolled joints, and delicious edibles. Our products are carefully curated and lab-tested to ensure the best possible experience for our customers. Discover your perfect strain today at The Green Garden Dispensary in Phuket."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-garden-dispensary-strain-selection.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/cannabis-shop-phuket"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Cannabis Shop - Strains in Phuket." />
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              bgColor="ghostVerse.dark.lighter"
              py={2}
              px={6}
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              color="ghostVerse.green.base"
              borderColor="black"
              borderBottomWidth={2}
              borderTopWidth={0}
              borderLeftWidth={0}
              borderRightWidth={0}
              _selected={{ borderColor: '#4cfd27' }}
            >
              Buds
            </Tab>
            <Tab
              bgColor="ghostVerse.dark.lighter"
              py={2}
              px={6}
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              color="ghostVerse.green.base"
              borderColor="black"
              borderBottomWidth={2}
              borderTopWidth={0}
              borderLeftWidth={0}
              borderRightWidth={0}
              _selected={{ borderColor: '#4cfd27' }}
            >
              Pre Rolled
            </Tab>
            <Tab
              bgColor="ghostVerse.dark.lighter"
              py={2}
              px={6}
              textAlign="center"
              fontWeight="bold"
              fontSize="lg"
              color="ghostVerse.green.base"
              borderColor="black"
              borderBottomWidth={2}
              borderTopWidth={0}
              borderLeftWidth={0}
              borderRightWidth={0}
              _selected={{ borderColor: '#4cfd27' }}
            >
              Edibles
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Bud />
            </TabPanel>
            <TabPanel px={0}>
              <PreRoll />
            </TabPanel>
            <TabPanel px={0}>
              <Bakery />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box
          as="h3"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          p={4}
          my={4}
          mx="auto"
          display="flex"
          width="fit-content"
          flexDirection="column"
          fontSize={20}
        >
          All our products are organic
        </Box>
        <BuyNowLink />
      </MainLayout>
    </>
  );
};

export default CannabisShop;
