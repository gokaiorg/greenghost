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
    path: '/crypto-weed-shop-relax-and-earn',
    label: 'Relax And Earn',
    image: '/media/green-ghost-crypto-weed-shop-relax-earn.png',
    imageW: '25px',
  },
  {
    path: '/crypto-weed-shop-cashback',
    label: 'Cashback',
    image: '/media/green-ghost-crypto-weed-shop-cashback.png',
    imageW: '25px',
  },
  {
    path: '/crypto-weed-shop-partners',
    label: 'Partners',
    image: '/media/green-ghost-crypto-weed-shop-partners.png',
    imageW: '25px',
  },
];

// Take note on how I implement these type, to be able to correctly pass the props
export const MenuCrypto = () => {
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
                alt="Green Ghost - Degen Weed Shop - Crypto Weed Shop."
              />
            </Box>
            {link.label}
          </NavLink>
        ))}
      </Box>
    </>
  );
};
