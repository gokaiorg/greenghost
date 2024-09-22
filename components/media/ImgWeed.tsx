import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgWeed = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/weed-green-ghost.webp"
        width={1594}
        height={1594}
        alt="Green Ghost 🌿👻 Your Weed Guide to Cannabis Excellence"
        title="Green Ghost 🌿👻 Your Weed Guide to Cannabis Excellence"
        quality={75}
      />
    </Box>
  );
};
