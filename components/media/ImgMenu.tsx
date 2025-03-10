import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgMenu = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/menu-green-ghost.webp"
        width={1897}
        height={1858}
        alt="Weed & Cannabis Products Menu"
        title="Weed & Cannabis Products Menu"
        quality={75}
      />
    </Box>
  );
};
