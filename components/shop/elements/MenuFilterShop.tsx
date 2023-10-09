import { Box, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const MenuFilterShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Menu>
      <MenuButton w={6} h={6} color={'ghostVerse.green.base'} name={'filters'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </MenuButton>
      <MenuList
        marginLeft={'auto'}
        p={4}
        borderRadius={0}
        background={'black'}
        borderColor={'black'}
        top={0}
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
      </MenuList>
    </Menu>
  );
};

export default MenuFilterShop;
