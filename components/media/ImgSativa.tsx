import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgSativa = () => {
  return (
    <Box w={{ base: '100%' }}>
      <Image
        src="/media/sativa-strains-cannabis-weed-shop-green-ghost.webp"
        width={1366}
        height={1366}
        alt="Sativa Strains Cannabis Weed Shop Green Ghost"
        title="Sativa Strains Cannabis Weed Shop Green Ghost"
        quality={75}
      />
    </Box>
  );
};
