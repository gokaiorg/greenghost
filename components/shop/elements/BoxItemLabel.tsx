import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemLabel: FC<BoxProps> = ({ children }) => {
  return (
    <Box display={'flex'} marginRight={2} flexDirection={'row'}>
      {children}
    </Box>
  );
};

export default BoxItemLabel;
