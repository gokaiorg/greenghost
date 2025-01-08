import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgJobs = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/jobs-green-ghost.webp"
        width={1784}
        height={1669}
        alt="Green Ghost 🌿👻 Budtender Job Opening at Our Cannabis Shop"
        title="Green Ghost 🌿👻 Budtender Job Opening at Our Cannabis Shop"
        quality={75}
      />
    </Box>
  );
};
