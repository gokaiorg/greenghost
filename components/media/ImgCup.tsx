import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgCup = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/phuket-cannabis-cup.webp"
        width={140}
        height={100}
        alt="Green Ghost - Degen Weed Shop - Phuket Cannabis Cup"
        title="Green Ghost - Degen Weed Shop - Phuket Cannabis Cup"
      />
    </Box>
  );
};
