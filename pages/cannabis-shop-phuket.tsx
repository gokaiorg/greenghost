import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Weedmap } from '../components/Weedmap';
import { Bud } from '../components/Bud';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import { BuyNowLink } from '../components/BuyNowLink';
import { PreRoll } from '../components/PreRoll';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Buy weed online - Cannabis Shop Phuket." />
      <Bud />
      <PreRoll />
      <BuyNowLink />
    </MainLayout>
  );
};

export default Home;
