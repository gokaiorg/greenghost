import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuWeedShop } from '../components/MenuWeedShop';
import { BudMember } from '../components/BudMember';
import { IconMenu } from '../components/IconMenu';

const WeedShopMember: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Member Only.</title>
        <meta
          name="description"
          content="Join our exclusive member shop and gain access to a wide selection of premium cannabis products at unbeatable prices. Our members enjoy special discounts and promotions on top-quality buds, pre-rolls, edibles, and more. We also offer exclusive access to limited edition strains and products, as well as personalized recommendations from our knowledgeable staff. Join us now and experience the best of the cannabis world with our exclusive member shop."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Menber Only."
        />
        <meta
          property="og:description"
          content="Join our exclusive member shop and gain access to a wide selection of premium cannabis products at unbeatable prices. Our members enjoy special discounts and promotions on top-quality buds, pre-rolls, edibles, and more. We also offer exclusive access to limited edition strains and products, as well as personalized recommendations from our knowledgeable staff. Join us now and experience the best of the cannabis world with our exclusive member shop."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-member" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Menber Only."
        />
        <meta
          name="twitter:description"
          content="Join our exclusive member shop and gain access to a wide selection of premium cannabis products at unbeatable prices. Our members enjoy special discounts and promotions on top-quality buds, pre-rolls, edibles, and more. We also offer exclusive access to limited edition strains and products, as well as personalized recommendations from our knowledgeable staff. Join us now and experience the best of the cannabis world with our exclusive member shop."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-member" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box display={'flex'} alignItems={'center'}>
          <Box w={'70px'} mr={4} mb={4}>
            <IconMenu />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop - Member Only Menu." />
        </Box>
        <MenuWeedShop />
        <BudMember />
        <Box
          as={'h3'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          my={4}
          mx={'auto'}
          mt={'auto'}
          display={'flex'}
          width={'fit-content'}
          flexDirection={'column'}
          fontSize={20}
          textAlign={'center'}
        >
          All our products are organic
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedShopMember;
