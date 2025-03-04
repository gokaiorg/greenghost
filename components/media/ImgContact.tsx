import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgContact = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/contact-green-ghost.webp"
        width={1594}
        height={1594}
        alt="Contact Our Weed Shop Team To Order"
        title="Contact Our Weed Shop Team To Order"
        quality={75}
      />
    </Box>
  );
};
