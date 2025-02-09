import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Route = {
  label: string;
  title: string;
  path: string;
  image: string;
  imageW: string;
};

const Links: Route[] = [
  {
    path: '/weed-shop',
    image: '/media/green-ghost-degen-weed-shop-menu-buds.png',
    label: 'Buds',
    title: 'Weed Shop Premium Cannabis Buds Menu',
    imageW: '20px',
  },
  {
    path: '/weed-shop-pre-rolls',
    image: '/media/green-ghost-degen-weed-shop-menu-pre-rolls.png',
    label: 'Pre-Rolls',
    title: 'Weed Shop Premium Cannabis Pre Rolls Menu',
    imageW: '8px',
  },
  {
    path: '/weed-shop-edibles',
    image: '/media/green-ghost-degen-weed-shop-menu-edibles.png',
    label: 'Edibles',
    title: 'Weed Shop Premium Cannabis Edibles Menu',
    imageW: '18px',
  },
  {
    path: '/weed-shop-degen',
    image: '/media/green-ghost-degen-weed-shop-menu-degen.png',
    label: 'Concentrates',
    title: 'Weed Shop Premium Cannabis Concentrates Menu',
    imageW: '7px',
  },
  {
    path: '/weed-shop-gadgets',
    image: '/media/green-ghost-degen-weed-shop-menu-gadgets.webp',
    label: 'Gadgets',
    title: 'Weed Shop Premium Cannabis Gadgets Menu',
    imageW: '14px',
  },
];

export const MenuWeedShop = () => {
  const { pathname } = useRouter();

  return (
    <Box
      as="nav"
      aria-label="Menu Navigation"
      mb={4}
      overflow={{ base: 'auto', md: 'none' }}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box
        as="ul"
        aria-label="Menu Navigation List"
        display="flex"
        listStyleType="none"
        m={0}
        p={0}
        fontSize={'sm'}
        fontFamily={'CubicFive12'}
        color={'ghostVerse.green.base'}
      >
        {Links.map((link) => (
          <Box
            as="li"
            aria-label={`${link.label}`}
            key={link.label}
            px={4}
            py={4}
            whiteSpace={'nowrap'}
            backgroundColor={
              pathname === link.path
                ? 'ghostVerse.green.transparent'
                : 'transparent'
            }
            borderBottomWidth={1}
            borderColor={
              pathname === link.path ? 'ghostVerse.green.base' : 'transparent'
            }
          >
            <Link href={link.path} title={link.title} passHref>
              {link.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
