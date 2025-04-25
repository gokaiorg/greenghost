import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgCoffeeshop = () => {
  return (
    <Box
      as="span"
      flex={'none'}
      w={{ base: '60px', md: '120px' }}
      mr={{ base: '0', md: '8' }}
      mt={{ base: '0', md: '4' }}
    >
      <Image
        src="/media/green-ghost-coffeeshop-phuket.webp"
        width={342}
        height={531}
        alt="Best Coffee shop in Rawai Phuket"
        title="Best Coffee shop in Rawai Phuket"
        sizes="(max-width: 768px) 60px, 120px"
        quality={75}
      />
    </Box>
  );
};
