import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoProduct: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={'start'}
      lineHeight={1}
    >
      {children}
    </Box>
  );
};

export default BoxInfoProduct;
