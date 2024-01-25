import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { getGrowers, Grower } from '../../config/growers';

import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';

import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

interface GrowerPageProps {
  grower: Grower;
}

export default function GrowerPage({ grower }: GrowerPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Weed Grower in Thailand {grower.name}</title>
        <meta name="description" content={grower.description} />
        <meta
          property="og:title"
          content={`Green Ghost - ${grower.name} Weed Grower in Thailand`}
        />
        <meta property="og:description" content={grower.description} />
        <meta property="og:image" content={grower.logo} />
        <meta property="og:image:width" content="320" />
        <meta property="og:image:height" content="320" />
        <meta
          property="og:url"
          content={`https://green.gd/weed-grower/${grower.slug}`}
        />
        <meta
          name="twitter:title"
          content={`Green Ghost - ${grower.name} Weed Grower in Thailand`}
        />
        <meta name="twitter:description" content={grower.description} />
        <meta name="twitter:image" content={grower.logo} />
        <meta
          name="twitter:url"
          content={`https://green.gd/weed-grower/${grower.slug}`}
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
        <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
          <HomeSectionTitle
            title={`${grower.name} - Weed Grower in Thailand`}
          />
        </Box>
        <Box
          mt={10}
          display={'flex'}
          flexDirection={'column'}
          fontFamily={'vt323'}
        >
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'column', lg: 'row' }}
            mb={4}
          >
            <Box display={'block'} width={{ base: '100%', md: '320px' }}>
              <Image
                src={grower.logo}
                width={320}
                height={320}
                alt={`Green Ghost - ${grower.name} Weed Grower in Thailand`}
                title={`Green Ghost - ${grower.name} Weed Grower in Thailand`}
              />
            </Box>
            <Text
              display={'inline-flex'}
              fontSize={{ base: '3xl', md: '40' }}
              mb={2}
              ml={{ base: '0', lg: '10' }}
              mr={'auto'}
            >
              {grower.description}
            </Text>
          </Box>
          <Box mt={10} display={'flex'} alignItems={'center'} gap={3}>
            {grower.website !== '0' && (
              <Link
                href={grower.website}
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
            )}
            {grower.facebook !== '0' && (
              <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
                <SocialIcon
                  url={grower.facebook}
                  bgColor={'#4cfd27'}
                  style={{ width: 36, height: 36 }}
                />
              </Box>
            )}
            {grower.instagram !== '0' && (
              <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
                <SocialIcon
                  url={grower.instagram}
                  bgColor={'#4cfd27'}
                  style={{ width: 36, height: 36 }}
                />
              </Box>
            )}
            {grower.twitter !== '0' && (
              <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
                <SocialIcon
                  url={grower.twitter}
                  bgColor={'#4cfd27'}
                  style={{ width: 36, height: 36 }}
                />
              </Box>
            )}
            {grower.telegram !== '0' && (
              <Box bgColor={'black'} borderRadius={'100%'} mx={'2'}>
                <SocialIcon
                  url={grower.telegram}
                  bgColor={'#4cfd27'}
                  style={{ width: 36, height: 36 }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  //console.log('Generating paths...');
  const growers = getGrowers();

  const paths = growers.map((grower) => ({
    params: { slug: grower.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<GrowerPageProps> = async ({
  params,
}) => {
  const growers = getGrowers();
  const grower = growers.find((p) => p.slug === params?.slug);

  if (!grower) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      grower,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
