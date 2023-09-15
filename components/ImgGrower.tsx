import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgGrower = () => {
  return (
    <Box w={{ base: '100px', lg: '200px' }}>
      <Image
        src="/media/weed-grower-thailand-green-ghost.webp"
        width={200}
        height={206}
        alt="Green Ghost - Degen Weed Shop - Weed Grower."
      />
    </Box>
  );
};
