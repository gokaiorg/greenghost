import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Tokenized01 } from '../components/tokenized01';
import { Tokenized02 } from '../components/tokenized02';
import { Tokenized03 } from '../components/tokenized03';

const CryptoNft: NextPage = () => {
  return (
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
  );
};

export default CryptoNft;
