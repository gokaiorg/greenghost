import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgWholesale = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/green-ghost-wholesale-cannabis.webp"
        width={1594}
        height={1594}
        alt="Wholesale Cannabis Premium Strains in Phuket"
        title="Wholesale Cannabis Premium Strains in Phuket"
        quality={75}
      />
    </Box>
  );
};
