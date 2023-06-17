import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const TestimonialPfp = () => {
  return (
    <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
      <Image
        src="/media/green-ghost-smiling-pfp.webp"
        fill
        style={{ objectFit: 'contain' }}
        alt={'Green Ghost Weed Shop Phuket'}
        priority={false}
      />
    </Box>
  );
};
