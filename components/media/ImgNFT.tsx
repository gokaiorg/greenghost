import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgNFT = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/green-ghost-degen-nft-collection.webp"
        width={1594}
        height={1594}
        alt="Green Ghost Degen NFT Collection"
        title="Green Ghost Degen NFT Collection"
        quality={75}
      />
    </Box>
  );
};
