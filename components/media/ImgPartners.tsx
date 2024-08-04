import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgPartners = () => {
  return (
    <Box w={{ base: '200px', lg: '300px' }} ml={'auto'}>
      <Image
        src="/media/green-ghost-best-cannabis-partners.webp"
        width={1821}
        height={1632}
        alt="Green Ghost - Degen Weed Shop - Weed Shops Thailand."
      />
    </Box>
  );
};
