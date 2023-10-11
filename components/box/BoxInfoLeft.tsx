import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoLeft: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      order={{ base: 2, md: 1 }}
      display={'flex'}
      flexDirection={{ base: 'column' }}
      fontSize={'3xl'}
      fontFamily={'vt323'}
    >
      {children}
    </Box>
  );
};

export default BoxInfoLeft;
