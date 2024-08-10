import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgDelivery = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/weed-delivery-phuket.webp"
        alt="Green Ghost - Degen Weed Shop - Weed Delivery Phuket"
        title="Green Ghost - Degen Weed Shop - Weed Delivery Phuket"
        width={640}
        height={512}
        sizes="(max-width: 1024px) 100px, 140px"
        style={{ width: '100%', height: 'auto' }}
        quality={75}
      />
    </Box>
  );
};
