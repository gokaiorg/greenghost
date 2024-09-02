import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => router.asPath === href;

  const menuItems = [
    {
      href: '/weed-shop',
      title: 'Green Ghost 🌿👻 Weed Shop Premium Cannabis Buds Menu',
      label: 'Weed Shop',
    },
    {
      href: '/contact',
      title: 'Green Ghost 🌿👻 Contact Our Weed Shop Team To Order',
      label: 'Contact',
    },
  ];

  return (
    <Box
      as="nav"
      mr={{ base: '0', md: '0' }}
      ml={{ base: 'auto' }}
      aria-label="Main Navigation"
    >
      <Box
        as="ul"
        aria-label="Main Navigation List Links to Weed Shop Menu, Contact and Maps"
        listStyleType={'none'}
        ml="auto"
        mr={{ base: 'auto', md: 0 }}
        py={{ base: 4, lg: 0 }}
        display="flex"
        fontFamily="CubicFive12"
      >
        {menuItems.map((item) => (
          <Box
            as="li"
            aria-label={`Main Navigation Link to ${item.label}`}
            key={item.href}
            ml={4}
            display="flex"
            alignItems="center"
            mx={{ base: '1', md: '2' }}
            color={isActive(item.href) ? 'ghostVerse.green.base' : 'inherit'}
            _hover={{ color: 'ghostVerse.green.base' }}
          >
            <Link href={item.href} title={item.title} passHref>
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
