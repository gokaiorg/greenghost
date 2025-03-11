import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getNFTs, NFT } from '../../config/nfts';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface NFTPageProps {
  nft: NFT;
  previousSlug: string | null;
  nextSlug: string | null;
}

export default function NFTPage({ nft, previousSlug, nextSlug }: NFTPageProps) {
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
        <title>{nft.name} - Green Ghost 🌿👻</title>
        <meta name="description" content={nft.description} />
        <meta property="og:title" content={`${nft.name} - Green Ghost 🌿👻`} />
        <meta property="og:description" content={nft.description} />
        <meta property="og:image" content={nft.logo} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta property="og:url" content={`https://green.gd/nft/${nft.slug}`} />
        <meta name="twitter:title" content={`${nft.name} - Green Ghost 🌿👻`} />
        <meta name="twitter:description" content={nft.description} />
        <meta name="twitter:image" content={nft.logo} />
        <meta name="twitter:url" content={`https://green.gd/nft/${nft.slug}`} />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor={'pointer'}
          color={'ghostVerse.green.base'}
          onClick={handleBack}
          title={'BACK'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#13DE00"
            width="30px"
            height="30px"
          >
            <path
              fillRule="evenodd"
              d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
        <Box
          mt={5}
          display={'flex'}
          flexDirection={'column'}
          fontFamily={'vt323'}
        >
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'column', md: 'row' }}
            mb={4}
          >
            <Box
              display={'block'}
              width={{ base: '100%', md: '300px', lg: '500px' }}
              mr={4}
              mb={4}
            >
              <Image
                src={nft.logo}
                width={500}
                height={500}
                alt={`${nft.name} - Green Ghost 🌿👻`}
                title={`${nft.name} - Green Ghost 🌿👻`}
                quality={75}
              />
            </Box>
            <Box flex={1}>
              <Box
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <HomeSectionTitle title={`${nft.name}`} />
              </Box>
              {/* <Text display={'inline-flex'} fontSize={{ base: '3xl' }} mb={2}>
                {nft.description}
              </Text> */}
              <Box mt={0} display={'flex'} flexWrap={'wrap'} fontSize={'xl'}>
                {nft.ghost !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'ghost'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.ghost}
                    </Box>
                  </Box>
                )}
                {nft.vibe !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'vibe'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.vibe}
                    </Box>
                  </Box>
                )}
                {nft.vibes !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'vibes'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.vibes}
                    </Box>
                  </Box>
                )}
                {nft.leaves !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'leaves'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.leaves}
                    </Box>
                  </Box>
                )}
                {nft.embellishments !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'embellishments'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.embellishments}
                    </Box>
                  </Box>
                )}
                {nft.joint !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'joint'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.joint}
                    </Box>
                  </Box>
                )}
                {nft.headgear !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'headgear'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.headgear}
                    </Box>
                  </Box>
                )}
                {nft.shades !== '0' && (
                  <Box>
                    <Box as={'h2'} color={'ghostVerse.grey.lighter'}>
                      {'shades'}
                    </Box>
                    <Box
                      borderWidth={1}
                      borderColor={'ghostVerse.green.base'}
                      color={'ghostVerse.green.base'}
                      borderRadius={'xl'}
                      px={'2'}
                      mr={'4'}
                    >
                      {nft.shades}
                    </Box>
                  </Box>
                )}
                {nft.opensea !== '0' && (
                  <Link href={nft.opensea} title={'View On OpenSea'} passHref>
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
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={10} display="flex">
          {previousSlug && (
            <Link href={`/nft/${previousSlug}`} passHref>
              <Box color="ghostVerse.green.base" cursor="pointer">
                &larr; Previous
              </Box>
            </Link>
          )}
          {nextSlug && (
            <Box
              display={'flex'}
              ml={'auto'}
              color="ghostVerse.green.base"
              cursor="pointer"
            >
              <Link href={`/nft/${nextSlug}`} passHref>
                Next &rarr;
              </Link>
            </Box>
          )}
        </Box>
      </MainLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const nfts = getNFTs();
  const paths = nfts.map((nft) => ({
    params: { slug: nft.slug },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const nfts = getNFTs();
  const currentIndex = nfts.findIndex((nft) => nft.slug === slug);

  const previousSlug = currentIndex > 0 ? nfts[currentIndex - 1].slug : null;
  const nextSlug =
    currentIndex < nfts.length - 1 ? nfts[currentIndex + 1].slug : null;

  const nft = nfts[currentIndex];

  return {
    props: {
      nft,
      previousSlug,
      nextSlug,
    },
  };
};
