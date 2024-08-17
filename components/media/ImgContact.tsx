import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgContact = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/contact.webp"
        width={200}
        height={175}
        alt="Green Ghost - Degen Weed Shop - Contact"
        title="Green Ghost - Degen Weed Shop - Contact"
        quality={75}
      />
    </Box>
  );
};
