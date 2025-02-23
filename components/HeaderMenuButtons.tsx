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
      title: 'Weed Shop Premium Cannabis Buds Menu',
      label: 'Menu',
    },
    {
      href: '/weed-delivery-phuket',
      title: 'Best Weed Delivery Service in Phuket',
      label: 'Delivery',
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
        aria-label="Main Navigation List"
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
            aria-label={`${item.label}`}
            key={item.href}
            ml={4}
            display="flex"
            alignItems="center"
            mx={{ base: '1', md: '2' }}
            color={isActive(item.href) ? 'ghostVerse.green.base' : 'inherit'}
            _hover={{ color: 'ghostVerse.green.base' }}
          >
            <Link
              href={item.href}
              title={item.title}
              passHref
              aria-label={`${item.label}`}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
