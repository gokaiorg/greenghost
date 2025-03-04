import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgClub = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/green-ghost-degen-weed-shop-cannabis-club-stoner.webp"
        alt="Best Cannabis Social Club in Phuket Thailand"
        title="Best Cannabis Social Club in Phuket Thailand"
        width={2048}
        height={1973}
        sizes="(max-width: 1024px) 100px, 140px"
        style={{ width: '100%', height: 'auto' }}
        quality={75}
      />
    </Box>
  );
};
