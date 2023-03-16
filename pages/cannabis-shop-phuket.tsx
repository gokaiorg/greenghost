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

const CannabisShop: NextPage = () => {
  return (
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
  );
};

export default CannabisShop;
