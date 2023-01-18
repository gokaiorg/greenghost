import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import { BuyNowLink } from '../components/BuyNowLink';
import { GoToShopLink } from '../components/GoToShopLink';

const SpaceCakeBrownie: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <GoToShopLink />
      <HomeSectionTitle title="Brownie Space Cake - Cannabis Shop Phuket." />
      <Box
        borderColor="ghostVerse.color2.base"
        bgColor="ghostVerse.dark.lighter"
        borderWidth={1}
        backdropFilter="blur(3px)"
        p={4}
        mb={4}
        display="inline-flex"
        flexDirection="column"
        fontSize={20}
      >
        Introducing the ultimate indulgence for cannabis lovers, our Brownie
        Space Cake made with OG kush marijuana butter, Switzerland flour and
        Belgium chocolate. This delicious treat is the perfect way to enjoy the
        full benefits of marijuana in a delectable and decadent form.
        <br />
        <br />
        Our Brownie Space Cake is made with only the finest ingredients,
        including premium OG kush marijuana butter, which is known for its
        strong and relaxing effects. The Switzerland flour and Belgium chocolate
        add a rich and indulgent flavor to the brownie.
        <br />
        <br />
        Each bite of this heavenly treat will transport you to a new level of
        taste and relaxation. Perfect for any occasion, from a special treat for
        yourself or as a gift for your friends, this Brownie Space Cake is sure
        to be a hit.
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default SpaceCakeBrownie;
