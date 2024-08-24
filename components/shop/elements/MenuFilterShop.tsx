import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const MenuFilterShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      as="section"
      aria-label="Menu Filters"
      marginRight={'auto'}
      py={2}
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      borderRadius={0}
      background={'black'}
      borderColor={'black'}
      top={0}
      w={'full'}
    >
      {children}
    </Box>
  );
};

export default MenuFilterShop;
