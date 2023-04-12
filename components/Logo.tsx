import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';
import { ImgEarth } from './ImgEarth';
import { ImgG } from './ImgG';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box display="flex" alignItems="center">
        <ImgEarth />
        <Box width={{ base: '200px', md: '200px' }}>
          {/* <ImgG /> */}
          Green Ghost
        </Box>
      </Box>
    </NextLink>
  );
};
