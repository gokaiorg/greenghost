import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgDelivery = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/weed-delivery-phuket.webp"
        width={200}
        height={160}
        alt="Green Ghost - Degen Weed Shop - Weed Delivery Phuket"
        title="Green Ghost - Degen Weed Shop - Weed Delivery Phuket"
      />
    </Box>
  );
};
