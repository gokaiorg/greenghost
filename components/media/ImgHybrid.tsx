import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgHybrid = () => {
  return (
    <Box w={{ base: '100%' }}>
      <Image
        src="/media/hybrid-strains-cannabis-weed-shop-green-ghost.webp"
        width={1366}
        height={1366}
        alt="Hybrid Strains Cannabis Weed Shop Green Ghost"
        title="Hybrid Strains Cannabis Weed Shop Green Ghost"
        quality={75}
      />
    </Box>
  );
};
