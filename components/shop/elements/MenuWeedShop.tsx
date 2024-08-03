import { Box, Text } from '@chakra-ui/react';
import NavLink from '../../NavLink';

type Route = {
  label: string;
  path: string;
  image: string;
  imageW: string;
};

const Links: Route[] = [
  {
    path: '/weed-shop',
    image: '/media/green-ghost-degen-weed-shop-menu-buds.png',
    label: 'Buds',
    imageW: '20px',
  },
  {
    path: '/weed-shop-pre-rolls',
    image: '/media/green-ghost-degen-weed-shop-menu-pre-rolls.png',
    label: 'Pre-Rolls',
    imageW: '8px',
  },
  {
    path: '/weed-shop-edibles',
    image: '/media/green-ghost-degen-weed-shop-menu-edibles.png',
    label: 'Edibles',
    imageW: '18px',
  },
  {
    path: '/weed-shop-degen',
    image: '/media/green-ghost-degen-weed-shop-menu-degen.png',
    label: 'Degen',
    imageW: '7px',
  },
  {
    path: '/weed-shop-gadgets',
    image: '/media/green-ghost-degen-weed-shop-menu-gadgets.webp',
    label: 'Gadgets',
    imageW: '14px',
  },
  // {
  //   path: '/weed-shop-member',
  //   image: '/media/green-ghost-degen-weed-shop-menu-member.png',
  //   label: 'Member',
  //   imageW: '20px',
  // },
];

// Take note on how I implement these type, to be able to correctly pass the props
export const MenuWeedShop = () => {
  return (
    <>
      <Box
        display={'flex'}
        mb={4}
        overflow={{ base: 'auto', md: 'none' }}
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {Links.map((link) => (
          <NavLink
            px={4}
            py={0}
            key={link.label}
            to={link.path}
            title={link.label}
          >
            <Text as="span" fontSize={{ base: 14 }} fontFamily={'CubicFive12'}>
              {link.label}
            </Text>
          </NavLink>
        ))}
      </Box>
    </>
  );
};
