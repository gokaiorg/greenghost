import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const MenuFooter = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => router.asPath === href;

  const menuItems = [
    {
      href: '/menu',
      title: 'Weed & Cannabis Products Menu',
      label: 'Menu',
      ariaLabel: 'Explore our menu',
    },
    {
      href: '/weed-delivery-phuket',
      title: 'Best Weed Delivery Service in Phuket',
      label: 'Delivery',
      ariaLabel: 'Get delivered',
    },
    {
      href: '/weed',
      title: 'Your Weed Guide to Cannabis Excellence',
      label: 'Learn about weed',
      ariaLabel: 'Learn about weed',
    },
    {
      href: '/strains',
      title: 'Buy Premium Cannabis Strains Online',
      label: 'All the strains',
      ariaLabel: 'All the strains',
    },
    {
      href: '/wholesale',
      title: 'Wholesale Cannabis Premium Strains in Phuket',
      label: 'Bulk ordering',
      ariaLabel: 'Bulk ordering',
    },
    {
      href: '/jobs',
      title: 'Budtender Job Opening at Our Cannabis Shop',
      label: 'We are hiring',
      ariaLabel: 'We are hiring',
    },
    {
      href: '/cannabis-club',
      title: 'Best Cannabis Social Club in Phuket Thailand',
      label: 'Join the club',
      ariaLabel: 'Join the club',
    },
    {
      href: '/about',
      title: 'About Cannabis Culture in Thailand',
      label: 'Cannabis culture',
      ariaLabel: 'Cannabis culture',
    },
    {
      href: '/sitemap',
      title: 'List of all website pages and sections',
      label: 'Website sitemap',
      ariaLabel: 'Website sitemap',
    },
    {
      href: '/locations',
      title: 'Best Weed shops near me in Phuket',
      label: 'Visit our locations',
      ariaLabel: 'Visit our locations',
    },
    {
      href: '/contact',
      title: 'Contact Our Weed Shop Team To Order',
      label: 'Contact us now',
      ariaLabel: 'Contact us now',
    },
  ];

  return (
    <>
      <Box
        as="nav"
        mr={{ base: '0', md: '0' }}
        ml={{ base: 'auto' }}
        mt={10}
        aria-label="Footer Navigation"
        textAlign={'left'}
      >
        <Box
          as="ul"
          aria-label="Footer Navigation List"
          listStyleType={'none'}
          display="flex"
          justifyContent={'center'}
          flexWrap={'wrap'}
          fontFamily={'vt323'}
          fontSize={'2xl'}
          lineHeight={1}
        >
          {menuItems.map((item) => (
            <Box
              as="li"
              aria-label={`${item.ariaLabel}`}
              key={item.href}
              ml={4}
              display="flex"
              m={{ base: '1' }}
              p={1}
              w={{ base: '100px' }}
              h={{ base: '100px' }}
              color={
                isActive(item.href)
                  ? 'ghostVerse.green.base'
                  : 'ghostVerse.dark.lighter'
              }
              backgroundColor={
                isActive(item.href)
                  ? 'ghostVerse.dark.lighter'
                  : 'ghostVerse.green.base'
              }
              _hover={{
                backgroundColor: 'ghostVerse.green.transparent',
                color: 'ghostVerse.green.base',
              }}
            >
              <Link href={item.href} title={item.title} passHref>
                {item.ariaLabel}
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};
