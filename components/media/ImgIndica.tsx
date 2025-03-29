import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgIndica = () => {
  return (
    <Box w={{ base: '100%' }}>
      <Image
        src="/media/indica-strains-cannabis-weed-shop-green-ghost.webp"
        width={1366}
        height={1366}
        alt="Indica Strains Cannabis Weed Shop Green Ghost"
        title="Indica Strains Cannabis Weed Shop Green Ghost"
        quality={75}
      />
    </Box>
  );
};
