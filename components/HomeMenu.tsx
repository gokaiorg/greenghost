import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconMenu } from './media/IconMenu';

export const HomeMenu = () => {
  const menuItems = [
    {
      href: '/menu/buds',
      title: 'Weed Shop Premium Cannabis Buds Menu',
      label: 'Buds',
    },
    {
      href: '/menu/pre-rolls',
      title: 'Weed Shop Premium Cannabis Pre-Rolls Menu',
      label: 'Pre-Rolls',
    },
    // {
    //   href: '/menu/edibles',
    //   title: 'Weed Shop Premium Cannabis Edibles Menu',
    //   label: 'Edibles',
    // },
    // {
    //   href: '/menu/concentrates',
    //   title: 'Weed Shop Premium Cannabis Concentrates Menu',
    //   label: 'Concentrates',
    // },
    {
      href: '/menu/gadgets',
      title: 'Weed Shop Premium Cannabis Gadgets Menu',
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
          Shop Our Weed Menu
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
          <Box
            as="ul"
            aria-label="Menu Navigation List"
            style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}
          >
            {menuItems.map((item, index) => (
              <Box as="li" key={index} aria-label={`${item.label} Menu`}>
                <Link href={item.href} passHref title={item.title}>
                  <Text
                    as="h3"
                    mb={2}
                    _hover={{ textDecoration: 'underline' }}
                    whiteSpace={'nowrap'}
                  >
                    {item.label}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
          <Box ml="auto" mt={4} aria-label="Explore our menu">
            <Link href="/menu" passHref title="Weed & Cannabis Products Menu">
              <Text
                as="span"
                display="inline-flex"
                fontFamily="CubicFive12"
                fontSize={{ base: 'md', md: 'lg' }}
                px={6}
                py={2}
                mt={0}
                mx="auto"
                color="black"
                borderWidth={1}
                borderColor="ghostVerse.green.base"
                backgroundColor="ghostVerse.green.base"
                _hover={{
                  borderColor: 'ghostVerse.green.base',
                  bgColor: 'black',
                  color: 'ghostVerse.green.base',
                }}
              >
                Browse menu
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
