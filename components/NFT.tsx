import { Box } from '@chakra-ui/react';
import { nfts } from '../config/nfts';
import { NFTItem } from './NFTItem';

export const NFT = () => {
  return (
    <Box mb="10">
      <Box display={'flex'} flexWrap={'wrap'}>
        {nfts.map((nft) => (
          <NFTItem key={nft.slug} nft={nft} />
        ))}
      </Box>
    </Box>
  );
};
