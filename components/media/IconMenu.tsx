import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const IconMenu = () => {
  return (
    <Box
      position="relative"
      w={{ base: '235px', md: '320px', lg: '420px' }}
      h={{ base: '60px', md: '80px', lg: '105px' }}
    >
      <Image
        src="/media/green-ghost-degen-weed-shop-menu.webp"
        alt="Green Ghost - Degen Weed Shop - Weed Menu"
        fill
        style={{ objectFit: 'contain' }}
        priority={true}
        sizes="(max-width: 600px) 235px, (max-width: 1200px) 320px, 420px"
      />
    </Box>
  );
};
