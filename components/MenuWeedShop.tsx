import { Box } from '@chakra-ui/react';
import NavLink from './NavLink';
import Image from 'next/image';

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
    imageW: '25px',
  },
  {
    path: '/weed-shop-edibles',
    image: '/media/green-ghost-degen-weed-shop-menu-edibles.png',
    label: 'Edibles',
    imageW: '20px',
  },
  {
    path: '/weed-shop-degen',
    image: '/media/green-ghost-degen-weed-shop-menu-degen.png',
    label: 'Degen',
    imageW: '10px',
  },
  {
    path: '/weed-shop-gadgets',
    image: '/media/green-ghost-degen-weed-shop-menu-gadgets.webp',
    label: 'Gadgets',
    imageW: '20px',
  },
  {
    path: '/weed-shop-pre-rolled',
    image: '/media/green-ghost-degen-weed-shop-menu-pre-rolled.png',
    label: 'Pre-Rolled',
    imageW: '10px',
  },
  {
    path: '/weed-shop-member',
    image: '/media/green-ghost-degen-weed-shop-menu-member.png',
    label: 'Member',
    imageW: '25px',
  },
];

// Take note on how I implement these type, to be able to correctly pass the props
export const MenuWeedShop = () => {
  return (
    <>
      <Box
        display={'flex'}
        overflow={{ base: 'auto', md: 'none' }}
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {Links.map((link) => (
          <NavLink key={link.label} to={link.path} title={link.label}>
            <Box w={link.imageW} mr={2}>
              <Image
                src={link.image}
                width={50}
                height={50}
                alt="Green Ghost - Degen Weed Shop - Weed Menu."
              />
            </Box>
            {link.label}
          </NavLink>
        ))}
      </Box>
    </>
  );
};
