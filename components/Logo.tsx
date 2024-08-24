import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';
import { ImgEarth } from './media/ImgEarth';

export const Logo = () => {
  return (
    <Box
      mx={{ base: '0', md: '0' }}
      position="relative"
      width="95px"
      height="100px"
      maxW="inherit"
    >
      <NextLink
        title={'Green Ghost 🌿👻 Best Degen Weed Shop and Delivery'}
        href="/"
        passHref
      >
        <ImgEarth />
      </NextLink>
    </Box>
  );
};
