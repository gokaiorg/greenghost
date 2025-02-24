import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconMenu } from './media/IconMenu';

export const HomeMenu = () => {
  const menuItems = [
    {
      href: '/weed-shop',
      title: 'Weed Shop Premium Cannabis Buds Menu',
      label: 'Buds',
    },
    {
      href: '/weed-shop-pre-rolls',
      title: 'Green Ghost 🌿👻 Weed Shop Premium Cannabis Pre-Rolls Menu',
      label: 'Pre-Rolls',
    },
    {
      href: '/weed-shop-edibles',
      title: 'Green Ghost 🌿👻 Weed Shop Premium Cannabis Edibles Menu',
      label: 'Edibles',
    },
    {
      href: '/weed-shop-degen',
      title: 'Green Ghost 🌿👻 Weed Shop Premium Cannabis Concentrates Menu',
      label: 'Concentrates',
    },
    {
      href: '/weed-shop-gadgets',
      title: 'Green Ghost 🌿👻 Weed Shop Premium Cannabis Gadgets Menu',
      label: 'Gadgets',
    },
  ];

  return (
    <Box
      as="section"
      aria-labelledby="Weed Menu"
      display="flex"
      mt={10}
      mb={10}
      flexWrap="wrap"
      alignItems="stretch"
    >
      <Box display="flex" flexDirection="column" w="100%" alignItems="center">
        <IconMenu />
        <Text
          as="h2"
          fontSize={{ base: 24, lg: 30 }}
          lineHeight={1}
          fontFamily="CubicFive12"
          my={2}
          textAlign="center"
        >
          Weed Menu
        </Text>
      </Box>

      <Box display="flex" w="100%" flexDirection={{ base: 'row', lg: 'row' }}>
        <Text
          as="p"
          fontSize={{ base: 26, lg: 44 }}
          lineHeight={1}
          fontFamily="vt323"
          w={{ base: '100%', md: '70%' }}
          mr={4}
        >
          Find the rarest strains, from top-tier selections to the cheapest weed
          in Phuket. Whether you seek premium quality or great value, we have
          something for everyone in our cannabis menu.
        </Text>
        <Box
          as="nav"
          aria-label="Menu Navigation"
          display="flex"
          flexDirection="column"
          fontSize={{ base: 16, md: 20 }}
          fontFamily="CubicFive12"
          color="ghostVerse.green.base"
          justifyContent="center"
          flex={1}
          mt={{ base: 4, lg: 0 }}
        >
          <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  passHref
                  title={item.title}
                  aria-label={`${item.label} Menu`}
                >
                  <Text
                    as="h3"
                    mb={2}
                    _hover={{ textDecoration: 'underline' }}
                    whiteSpace={'nowrap'}
                  >
                    {item.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
          <Box ml="auto" mt={4}>
            <Link
              href="/weed-shop"
              passHref
              title="Weed Shop Premium Cannabis Buds Menu"
            >
              <Text
                as="span"
                display="inline-flex"
                fontSize={{ base: 'xl', md: '4xl' }}
                borderWidth={1}
                px={{ base: 4, md: 6 }}
                pt={{ base: 2, md: 0 }}
                pb={{ base: 2, md: 2 }}
                fontFamily="vt323"
                color="black"
                borderColor="ghostVerse.green.base"
                backgroundColor="ghostVerse.green.base"
                _hover={{
                  borderColor: 'ghostVerse.green.base',
                  bgColor: 'black',
                  color: 'ghostVerse.green.base',
                }}
              >
                Menu
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
