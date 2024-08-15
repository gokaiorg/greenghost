import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const ImgAbout = () => {
  return (
    <Box w={{ base: '100px', lg: '140px' }}>
      <Image
        src="/media/green-ghost-degen-weed-shop-about-weed.webp"
        alt="Green Ghost 🌿👻 About Cannabis Culture in Thailand"
        title="Green Ghost 🌿👻 About Cannabis Culture in Thailand"
        width={1860}
        height={1253}
        quality={75}
        sizes="(max-width: 768px) 100px, 140px"
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  );
};
