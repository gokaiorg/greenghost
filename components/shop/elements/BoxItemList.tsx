import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemList: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
      lineHeight={1}
      pos={'relative'}
    >
      {children}
    </Box>
  );
};

export default BoxItemList;
