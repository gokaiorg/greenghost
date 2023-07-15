import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const GrowerCosmic: NextPage = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <Head>
        <title>Green Ghost - Grower - Cosmic Temple Vibes.</title>
        <meta
          name={'description'}
          content={
            'Cannabis brand dedicated to healing and inspiring people through the cultivation of premium quality cannabis in Phuket, Thailand.'
          }
        />
        <meta
          property={'og:title'}
          content={'Green Ghost - Grower - Cosmic Temple Vibes.'}
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
        <meta
          property={'og:url'}
          content={'https://green.gd/cosmic-temple-vibes'}
        />
        <meta
          name={'twitter:title'}
          content={'Green Ghost - Grower - Cosmic Temple Vibes.'}
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
        <meta
          name={'twitter:url'}
          content={'https://green.gd/cosmic-temple-vibes'}
        />
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
        <HomeSectionTitle
          title={'Green Ghost - Grower - Cosmic Temple Vibes.'}
        />
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
            Cosmic Temple Vibes
          </Text>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'column', lg: 'row' }}
            mb={4}
          >
            <Box display={'block'} width={{ base: '100%', md: '320px' }}>
              <Image
                src={'/media/green-ghost-grower-cosmic-temple-vibes.png'}
                width={320}
                height={320}
                alt={'Green Ghost - Grower - Cosmic Temple Vibes'}
                title={'Green Ghost - Grower - Cosmic Temple Vibes'}
              />
            </Box>
            <Text
              display={'inline-flex'}
              fontSize={{ base: '3xl', md: '40' }}
              mb={2}
              ml={{ base: '0', lg: '10' }}
              mr={'auto'}
            >
              Cannabis brand dedicated to healing and inspiring people through
              the cultivation of premium quality cannabis in Phuket, Thailand.
            </Text>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} fontFamily={'vt323'}>
          <Box display={'flex'} alignItems={'center'} gap={3}>
            <Link
              href={'https://cosmictemplevibes.com/'}
              title={'Cosmic Temple Vibes Website'}
              passHref
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                mx={2}
              >
                <svg
                  width={'40px'}
                  xmlns={'http://www.w3.org/2000/svg'}
                  viewBox={'0 0 24 24'}
                  fill={'#4cfd27'}
                >
                  <path
                    d={
                      'M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z'
                    }
                  />
                </svg>
              </Box>
            </Link>
            <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
              <SocialIcon
                url={'https://www.facebook.com/profile.php?id=100088275630884'}
                bgColor={'#4cfd27'}
                style={{ width: 36, height: 36 }}
              />
            </Box>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} fontFamily={'vt323'}>
          <Box as={'h3'} w={'100%'} fontSize={{ base: '4xl' }} my={5}>
            Shop in Soi Saiyuan
          </Box>
          <Link
            href={'https://goo.gl/maps/C6U2inTe4QA2NtGq8?coh=178571&entry=tt'}
            title={'Cosmic Temple Vibes Map'}
            passHref
          >
            <Box display={'flex'} flexDirection={'column'} mx={2}>
              <svg
                width={'40px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 24 24'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d={
                    'M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                  }
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
          </Link>
        </Box>
        <Box display={'flex'} flexDirection={'column'} fontFamily={'vt323'}>
          <Box as={'h3'} w={'100%'} fontSize={{ base: '4xl' }} my={5}>
            HQ in Viset Road
          </Box>
          <Link
            href={'https://goo.gl/maps/d18hjvieGQLQyv596'}
            title={'Cosmic Temple Vibes HQ Map'}
            passHref
          >
            <Box display={'flex'} flexDirection={'column'} mx={2}>
              <svg
                width={'40px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 24 24'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d={
                    'M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                  }
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
          </Link>
        </Box>
      </MainLayout>
    </>
  );
};

export default GrowerCosmic;
