import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import Head from 'next/head';
import Image from 'next/image';

const GrowerCosmic: NextPage = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <Head>
        <title>Green Ghost - Grower - Ohigho.</title>
        <meta
          name={'description'}
          content={
            'Cannabis brand dedicated to healing and inspiring people through the cultivation of premium quality cannabis in Phuket, Thailand.'
          }
        />
        <meta
          property={'og:title'}
          content={'Green Ghost - Grower - Ohigho.'}
        />
        <meta
          property={'og:description'}
          content={
            'Cannabis brand dedicated to healing and inspiring people through the cultivation of premium quality cannabis in Phuket, Thailand.'
          }
        />
        <meta
          property={'og:image'}
          content={'https://green.gd/green-ghost-degen-weed-shop.png'}
        />
        <meta property={'og:image:width'} content={'2400'} />
        <meta property={'og:image:height'} content={'1260'} />
        <meta property={'og:url'} content={'https://green.gd/ohigho'} />
        <meta
          name={'twitter:title'}
          content={'Green Ghost - Grower - Ohigho.'}
        />
        <meta
          name={'twitter:description'}
          content={
            'Cannabis brand dedicated to healing and inspiring people through the cultivation of premium quality cannabis in Phuket, Thailand.'
          }
        />
        <meta
          name={'twitter:image'}
          content={'https://green.gd/green-ghost-degen-weed-shop.png'}
        />
        <meta name={'twitter:url'} content={'https://green.gd/ohigho'} />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor={'pointer'}
          color={'ghostVerse.green.base'}
          onClick={handleBack}
        >
          {'< back'}
        </Box>
        <HomeSectionTitle title={'Green Ghost - Grower - Ohigho.'} />
        <Box display={'flex'} flexDirection={'column'} fontFamily={'vt323'}>
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '3xl' }}
            fontWeight={'black'}
            borderColor={'ghostVerse.color2.base'}
            bgColor={'ghostVerse.dark.lighter'}
            borderWidth={1}
            backdropFilter={'blur(3px)'}
            mt={5}
            mb={6}
            p={4}
            mr={'auto'}
          >
            Ohigho
          </Text>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'column', lg: 'row' }}
            mb={4}
          >
            <Box display={'block'} width={{ base: '100%', md: '320px' }}>
              <Image
                src={'/media/green-ghost-grower-ohigho.png'}
                width={320}
                height={320}
                alt={'Green Ghost - Grower - Ohigho'}
                title={'Green Ghost - Grower - Ohigho'}
              />
            </Box>
            <Text
              display={'inline-flex'}
              fontSize={{ base: '3xl', md: '40' }}
              mb={2}
              ml={{ base: '0', lg: '10' }}
              mr={'auto'}
            >
              Discover Ohigho Weed Farm, a licensed cannabis paradise in Phuket,
              Thailand! Licensed Cannabis Farm with #NoPGR Certification.
            </Text>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} fontFamily={'vt323'}>
          <Box display={'flex'} alignItems={'center'} gap={3}>
            <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
              <SocialIcon
                url={'https://www.instagram.com/ohigho_'}
                bgColor={'#4cfd27'}
                style={{ width: 36, height: 36 }}
              />
            </Box>
            <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
              <SocialIcon
                url={'https://t.me/ohighochannel'}
                bgColor={'#4cfd27'}
                style={{ width: 36, height: 36 }}
              />
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default GrowerCosmic;
