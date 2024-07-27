import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const MenuFilterShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      marginRight={'auto'}
      py={4}
      borderRadius={0}
      background={'black'}
      borderColor={'black'}
      top={0}
      w={'full'}
    >
      <Box
        display={'flex'}
        width={'100%'}
        alignItems={{ base: 'start' }}
        flexDirection={{ base: 'column' }}
        fontFamily={'vt323'}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MenuFilterShop;
