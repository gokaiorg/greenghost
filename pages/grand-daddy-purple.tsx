import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import { BuyNowLink } from '../components/BuyNowLink';
import { GoToShopLink } from '../components/GoToShopLink';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <GoToShopLink />
      <HomeSectionTitle title="Grand Daddy Purple - Cannabis Shop Phuket." />
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
        Grand Daddy Purple, also known as GDP, is a popular and highly sought-after cannabis strain that is known for its distinct grape and berry aroma and flavor. This strain has a high THC content, which makes it a powerful choice for those looking for a strong and long-lasting body high. GDP is popular among those seeking relief from stress, anxiety, chronic pain, and insomnia.
        <br/>
        <br/>
        This strain is grown in a greenhouse, so while it is not top-shelf quality, it is still a high-quality strain that is sure to provide a satisfying experience. It has deep purple buds and a thick coat of trichomes, giving it a visually striking appearance. When smoked or vaporized, GDP provides a relaxing and euphoric experience that can help to take the edge off a busy day and provide a sense of calm and well-being. It is a great strain for socializing and enjoying with friends.
<br/>
<br/>
        If you are looking for a potent and enjoyable cannabis strain, give Grand Daddy Purple a try. This strain is sure to impress with its unique flavor and powerful effects. Whether you are a seasoned cannabis connoisseur or a newcomer to the world of marijuana, you will love the relaxing and uplifting experience that GDP provides. Order some today and discover the magic of this highly sought-after strain.
      </Box>
      <BuyNowLink />
    </MainLayout>
  );
};

export default Home;
