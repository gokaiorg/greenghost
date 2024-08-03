import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';
import { ImgEarth } from './media/ImgEarth';

export const Logo = () => {
  return (
    <Box mx={{ base: 'auto', md: 'inherit' }}>
      <NextLink href="/">
        <ImgEarth />
      </NextLink>
    </Box>
  );
};
