import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import Head from 'next/head';
import Image from 'next/image';

const BuyWeed: NextPage = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <Head>
        <title>Green Ghost - Grower - My Weed Solutions.</title>
        <meta
          name="description"
          content="MW Solutions is a company that believes in its customers and
              believes in the right to live life their way."
        />
        <meta
          property="og:title"
          content="Green Ghost - Grower - My Weed Solutions."
        />
        <meta
          property="og:description"
          content="MW Solutions is a company that believes in its customers and
              believes in the right to live life their way."
        />
        <meta property="og:image" content="https://green.gd/social.png" />
        <meta property="og:image:width" content="1895" />
        <meta property="og:image:height" content="898" />
        <meta property="og:url" content="https://green.gd" />
        <meta
          name="twitter:title"
          content="Green Ghost - Grower - My Weed Solutions."
        />
        <meta
          name="twitter:description"
          content="MW Solutions is a company that believes in its customers and
              believes in the right to live life their way."
        />
        <meta name="twitter:image" content="https://green.gd/social.png" />
        <meta name="twitter:url" content="https://green.gd" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor="pointer"
          color="ghostVerse.green.base"
          onClick={handleBack}
        >
          Go back
        </Box>
        <HomeSectionTitle title="Green Ghost - Grower - My Weed Solutions." />
        <Box display="flex" flexDirection="column" fontFamily="vt323">
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '3xl' }}
            fontWeight="black"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            mt={5}
            mb={6}
            p={4}
            mr="auto"
          >
            My Weed Solutions
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'column', lg: 'row' }}
            mb={4}
          >
            <Image
              src="/media/green-ghost-grower-my-weed-solutions.webp"
              width={320}
              height={320}
              alt="Green Ghost - Grower - My Weed Solutions"
            />
            <Text
              display="inline-flex"
              fontSize={{ base: '3xl', md: '40' }}
              mb={2}
              ml={{ base: '0', lg: '10' }}
              mr="auto"
            >
              MW Solutions is a company that believes in its customers and
              believes in the right to live life their way.
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" fontFamily="vt323">
          <Box display="flex" alignItems="center" gap={3}>
            {/* <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.instagram.com/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box> */}
            {/* <Box bgColor="black" borderRadius="100%">
        <Box
          as="a"
          href="https://line.me/ti/p/Xh7jcqlmE7"
          color="ghostVerse.green.base"
        >
          <svg
            fill="#4cfd27"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="60px"
          >
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
        </Box>
      </Box> */}
            <Box bgColor="black" borderRadius="100%">
              <SocialIcon
                url="https://www.facebook.com/profile.php?id=100085363101043"
                bgColor="#4cfd27"
                style={{ width: 60, height: 60 }}
              />
            </Box>
            <Box bgColor="black" borderRadius="100%">
              <SocialIcon
                url="https://mwsphuket.wixsite.com/myweedsolutions"
                bgColor="#4cfd27"
                style={{ width: 60, height: 60 }}
              />
            </Box>
            {/* <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://t.me/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box> */}
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
