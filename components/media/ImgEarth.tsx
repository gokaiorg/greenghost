import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgEarth = () => {
  return (
    <Box position="relative" width="95px" height="100px" maxW="inherit">
      <Image
        src="/media/green-ghost-degen-weed-shop.webp"
        alt="Green Ghost 🌿👻 Best Degen Weed Shop and Delivery"
        title="Green Ghost 🌿👻 Best Degen Weed Shop and Delivery"
        fill
        style={{ objectFit: 'contain' }}
        priority={true}
        sizes="95px"
        quality={75}
      />
    </Box>
  );
};
