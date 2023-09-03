import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexWrap={'wrap'}
      py={{ base: '4', md: '9' }}
    >
      <Logo />
      {children}
    </Box>
  );
};
