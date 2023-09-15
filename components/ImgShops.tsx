import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgShops = () => {
  return (
    <Box w={{ base: '200px', lg: '300px' }}>
      <Image
        src="/media/weed-shops-thailand-green-ghost.webp"
        width={300}
        height={83}
        alt="Green Ghost - Degen Weed Shop - Weed Shops Thailand."
      />
    </Box>
  );
};
