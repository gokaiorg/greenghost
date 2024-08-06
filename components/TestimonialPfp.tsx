import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const TestimonialPfp = () => {
  return (
    <Box position={'relative'} w={'80px'} h={{ base: '100px' }}>
      <Image
        src="/media/green-ghost-smiling-pfp.webp"
        width={256} // Original width
        height={256} // Original height
        alt="Green Ghost Weed Shop Phuket"
        layout="intrinsic" // Preserve aspect ratio
        sizes="(max-width: 600px) 80px, (max-width: 1200px) 80px, 80px"
      />
    </Box>
  );
};
