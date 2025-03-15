import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgShopThailand = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/best-weed-shops-thailand-green-ghost.webp"
        width={1669}
        height={1821}
        alt="Best Weed Shops Thailand"
        title="Best Weed Shops Thailand"
        quality={75}
      />
    </Box>
  );
};
