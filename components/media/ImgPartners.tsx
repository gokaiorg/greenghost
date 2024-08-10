import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgPartners = () => {
  return (
    <Box w={{ base: '200px', lg: '300px' }} ml={'auto'}>
      <Image
        src="/media/green-ghost-best-cannabis-partners.webp"
        alt="Green Ghost - Degen Weed Shop - Cannabis friends Phuket Thailand."
        width={1821}
        height={1632}
        sizes="(max-width: 1024px) 200px, 300px"
        style={{ width: '100%', height: 'auto' }}
        quality={75}
      />
    </Box>
  );
};
