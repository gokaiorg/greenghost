import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgAbout = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/about-green-ghost.webp"
        width={200}
        height={171}
        alt="Green Ghost - Degen Weed Shop - About"
        title="Green Ghost - Degen Weed Shop - About"
        quality={75}
      />
    </Box>
  );
};
