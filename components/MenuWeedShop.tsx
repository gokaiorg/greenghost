import Link, { LinkProps } from 'next/link';
import { Box } from '@chakra-ui/react';

interface MenuLinkProps extends LinkProps {
  label: string;
}

export const MenuWeedShop = () => {
  const menuLinks: MenuLinkProps[] = [
    {
      href: '/weed-shop',
      label: 'Buds',
    },
    {
      href: '/weed-shop-pre-rolled',
      label: 'Pre-Rolled',
    },
    {
      href: '/weed-shop-edibles',
      label: 'Edibles',
    },
    {
      href: '/weed-shop-member',
      label: 'Member',
    },
    {
      href: '/ghost-degen-weed-shop',
      label: 'Degen',
    },
  ];

  return (
    <>
      {menuLinks.map((link, index) => (
        <Box
          bgColor="ghostVerse.dark.lighter"
          py={6}
          px={6}
          textAlign="center"
          fontWeight="bold"
          fontSize="lg"
          display="inline-flex"
          color="ghostVerse.green.base"
          borderColor="black"
          borderBottomWidth={2}
          borderTopWidth={0}
          borderLeftWidth={0}
          borderRightWidth={0}
          whiteSpace="nowrap"
          textDecoration="none !important"
        >
          <Link key={index} href={link.href} title={link.label} passHref>
            {link.label}
          </Link>
        </Box>
      ))}
    </>
  );
};
