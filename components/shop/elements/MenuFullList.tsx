import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

type Route = {
  label: string;
  title: string;
  path: string;
  image: string;
  description: string;
  imageW: string;
};

const Links: Route[] = [
  {
    path: '/menu/buds',
    image: '/media/buds-menu-weed-shop-green-ghost.webp',
    label: 'Buds',
    title: 'Weed Shop Premium Cannabis Buds Menu',
    description:
      'Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.',
    imageW: '20px',
  },
  {
    path: '/menu/pre-rolls',
    image: '/media/pre-rolls-menu-weed-shop-green-ghost.webp',
    label: 'Pre-Rolls',
    title: 'Weed Shop Premium Cannabis Pre Rolls Menu',
    description:
      'Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.',
    imageW: '8px',
  },
  {
    path: '/menu/edibles',
    image: '/media/edibles-menu-weed-shop-green-ghost.webp',
    label: 'Edibles',
    title: 'Weed Shop Premium Cannabis Edibles Menu',
    description:
      'A curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.',
    imageW: '18px',
  },
  {
    path: '/menu/concentrates',
    image: '/media/concentrates-menu-weed-shop-green-ghost.webp',
    label: 'Concentrates',
    title: 'Weed Shop Premium Cannabis Concentrates Menu',
    description:
      'Menu offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.',
    imageW: '7px',
  },
  {
    path: '/menu/gadgets',
    image: '/media/gadgets-menu-weed-shop-green-ghost.webp',
    label: 'Gadgets',
    title: 'Weed Shop Premium Cannabis Gadgets Menu',
    description:
      'Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.',
    imageW: '14px',
  },
];

export const MenuFullList = () => {
  return (
    <Box
      as="nav"
      aria-label="Menu Navigation"
      mb={4}
      mx={{ base: '0', md: '0' }}
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
        flexWrap={'wrap'}
        listStyleType="none"
        mx={-1}
        p={0}
        fontSize={{ base: 'sm', md: 'xl' }}
        fontFamily={'CubicFive12'}
      >
        {Links.map((link) => (
          <Box
            w={{ base: '100%', sm: '100%', md: '33.33333%', lg: '25%' }}
            as="li"
            aria-label={`${link.label} Menu`}
            key={link.label}
            mb={2}
          >
            <Link href={link.path} title={link.title} passHref>
              <Box
                as="span"
                display={'flex'}
                flexDirection={'column'}
                p={{ base: 2 }}
                mx={1}
                backgroundColor={'ghostVerse.dark.lighter'}
                _hover={{
                  backgroundColor: 'ghostVerse.green.transparent',
                }}
                h={{ base: '100%', md: '100%' }}
              >
                <Box
                  as="h2"
                  whiteSpace={'wrap'}
                  color={'ghostVerse.green.base'}
                  display={'flex'}
                  alignItems={'end'}
                  lineHeight={1}
                  my={1}
                >
                  {link.label} Menu
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={{ base: 'row', md: 'column' }}
                >
                  <Box w={{ base: '50%', md: '100%' }} mr={{ base: 2, md: 0 }}>
                    <Image
                      src={`${link.image}`}
                      alt={`${link.title}`}
                      width={1366}
                      height={1366}
                      sizes="100%"
                      quality={75}
                    />
                  </Box>
                  <Text
                    as="p"
                    fontSize={{ base: '25px' }}
                    lineHeight={{ base: '20px' }}
                    fontFamily="vt323"
                    w={{ base: '50%', md: '100%' }}
                    whiteSpace={'normal'}
                    my={1}
                  >
                    {link.description}
                  </Text>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
