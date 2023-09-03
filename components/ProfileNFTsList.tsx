import { Box, Stack, Spinner, Card, CardBody, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAccount, useApiCall, SCQueryType, useConfig } from '@useelven/core';
import { NFT } from '../types/nfts';
import { useElvenScQuery } from '../hooks/useElvenScQuery';
// import { NftImageHelper } from './NftImageHelper';

const SIZE_PER_PAGE = 10000;

export const ProfileNFTsList = () => {
  const { address } = useAccount();
  const { explorerAddress } = useConfig();

  const { data: collectionTicker, isLoading: collectionTickerLoading } =
    useElvenScQuery<number>({
      funcName: 'getNftTokenId',
      type: SCQueryType.STRING,
    });

  const { data: nfts, isLoading: nftsDataPending } = useApiCall<NFT[]>({
    url: `/accounts/${address}/nfts?collections=${collectionTicker}&size=${SIZE_PER_PAGE}`,
    autoInit: Boolean(address) && Boolean(collectionTicker),
  });

  if (nftsDataPending || collectionTickerLoading) {
    return (
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={8}
      >
        <Spinner size="lg" />
      </Stack>
    );
  }

  if (!nfts || nfts.length === 0) {
    return (
      <Box mt={12} textAlign="center">
        <Text
          as={'h2'}
          fontSize={{ base: '3xl', md: '6xl' }}
          fontFamily={'CubicFive12'}
        >
          You are not a member
        </Text>
        <Link href="https://ghostverse.org/mxghosts" passHref>
          <Text
            fontSize={{ base: '4xl' }}
            fontFamily={'vt323'}
            color={'ghostVerse.green.base'}
          >
            Get your MxGhosts NOW!
          </Text>
        </Link>
      </Box>
    );
  }

  return (
    <>
      <Stack
        direction="row"
        mt={12}
        justifyContent="center"
        flexWrap="wrap"
        gap={6}
        spacing={0}
      >
        <Box
          as={'h2'}
          fontSize={{ base: '3xl', md: '6xl' }}
          fontFamily={'CubicFive12'}
          color={'ghostVerse.green.base'}
          textAlign={'center'}
        >
          You are a member
        </Box>
        <Text
          color={'white'}
          textAlign={'center'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          marginBottom={4}
        >
          Explore your{' '}
          <Link
            href="/crypto-weed-shop-relax-and-earn#benefits"
            title="Green Ghost - Member benefits"
            passHref
          >
            <Box as={'span'} color={'ghostVerse.green.base'}>
              Benefits
            </Box>
          </Link>{' '}
          today.
        </Text>

        {/* {nfts?.map((nft) => (
          <Card
            maxW="xs"
            minW="xs"
            key={nft.identifier}
            backgroundColor="elvenTools.dark.darker"
          >
            <CardBody>
              <Stack height={280} position="relative">
                <NftImageHelper
                  thumbnail={nft.media?.[0].thumbnailUrl}
                  multiversxIPFSGatewayUrl={nft.url}
                  href={`${explorerAddress}/nfts/${nft.identifier}`}
                />
              </Stack>
              <Box
                fontWeight={800}
                mt={5}
                color="elvenTools.white"
                textAlign="center"
              >
                <a
                  href={`${explorerAddress}/nfts/${nft.identifier}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {nft.name}
                </a>
              </Box>
              <Box color="elvenTools.white" textAlign="center">
                <a
                  href={`${explorerAddress}/nfts/${nft.identifier}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {nft.identifier}
                </a>
              </Box>
            </CardBody>
          </Card>
        ))} */}
      </Stack>
    </>
  );
};
