import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoLabel: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      display={'flex'}
      flexWrap={{ base: 'wrap' }}
      alignItems={'baseline'}
      fontSize={'3xl'}
      fontFamily={'vt323'}
    >
      {children}
    </Box>
  );
};

export default BoxInfoLabel;
