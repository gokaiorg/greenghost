import { Box } from '@chakra-ui/react';
import NavLink from './NavLink';

type Route = {
  label: string;
  path: string;
};

const Links: Route[] = [
  {
    path: '/weed-shop',
    label: 'Buds',
  },
  {
    path: '/weed-shop-member',
    label: 'Member',
  },
  {
    path: '/weed-shop-pre-rolled',
    label: 'Pre-Rolled',
  },
  {
    path: '/weed-shop-edibles',
    label: 'Edibles',
  },
  {
    path: '/ghost-degen-weed-shop',
    label: 'Degen',
  },
];

// Take note on how I implement these type, to be able to correctly pass the props
export const MenuWeedShop = () => {
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
