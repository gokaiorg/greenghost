import { Box } from '@chakra-ui/react';
import NavLink from './NavLink';

type Route = {
  label: string;
  path: string;
};

const Links: Route[] = [
  {
    path: '/crypto-weed-shop-relax-and-earn',
    label: 'Relax And Earn',
  },
  {
    path: '/crypto-weed-shop-cashback',
    label: 'Cashback',
  },
  {
    path: '/crypto-weed-shop-partners',
    label: 'Partners',
  },
];

// Take note on how I implement these type, to be able to correctly pass the props
export const MenuCrypto = () => {
  return (
    <>
      <Box
        display="flex"
        overflow={{ base: 'auto', md: 'none' }}
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {Links.map((link) => (
          <NavLink key={link.label} to={link.path} title={link.label}>
            {link.label}
          </NavLink>
        ))}
      </Box>
    </>
  );
};
