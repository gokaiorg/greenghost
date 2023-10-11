import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoRight: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      order={{ base: 1, md: 2 }}
      marginLeft={'auto'}
      alignItems={'end'}
      display={'flex'}
      flexDirection={'column'}
    >
      {children}
    </Box>
  );
};

export default BoxInfoRight;
