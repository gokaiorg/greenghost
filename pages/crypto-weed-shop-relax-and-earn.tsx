import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Tokenized01 } from '../components/tokenized01';
import { Tokenized02 } from '../components/tokenized02';
import { Tokenized03 } from '../components/tokenized03';
import Head from 'next/head';

const CryptoWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Green Ghost - Crypto Coffee Shop - Relax and Earn.
        </title>
        <meta
          name="description"
          content="Discover the future of cannabis shopping with The Green Ghost - a crypto tokenized coffee shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          property="og:title"
          content="Green Ghost - Crypto Coffee Shop - Relax and Earn.
          Edibles."
        />
        <meta
          property="og:description"
          content="Discover the future of cannabis shopping with The Green Ghost - a crypto tokenized coffee shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/crypto-weed-shop-relax-and-earn"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Crypto Coffee Shop - Relax and Earn.
          Edibles."
        />
        <meta
          name="twitter:description"
          content="Discover the future of cannabis shopping with The Green Ghost - a crypto tokenized coffee shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/crypto-weed-shop-relax-and-earn"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Relax & Earn - Tokenized Cannabis Shop." />
        <Tabs variant="unstyled">
          <TabList overflowX={{ base: 'scroll', md: 'inherit' }}>
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
              Concept
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
              Cashback
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
              Partners
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Tokenized01 />
            </TabPanel>
            <TabPanel px={0}>
              <Tokenized02 />
            </TabPanel>
            <TabPanel px={0}>
              <Tokenized03 />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MainLayout>
    </>
  );
};

export default CryptoWeedShop;
