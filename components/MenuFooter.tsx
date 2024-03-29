import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const MenuFooter = () => {
  return (
    <>
      <Text
        as={'h3'}
        fontSize={'lg'}
        mx={'auto'}
        fontFamily={'CubicFive12'}
        mt={10}
        textAlign={'center'}
        color={'ghostVerse.color2.darker'}
      >
        Links
      </Text>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        mx={'auto'}
        mb={4}
        fontSize={'2xl'}
        fontFamily={'vt323'}
      >
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link
            title="Best Weed Shops in Thailand"
            href="/weed-shops-thailand"
            passHref
          >
            Shops |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link title="Weed Growers in Thailand" href="/weed-grower" passHref>
            Growers |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link title="Weed Shop Menu" href={'/weed-shop'} passHref>
            Menu |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link
            title="Weed Delivery Phuket"
            href="/weed-delivery-phuket"
            passHref
          >
            Delivery |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link
            title="Drive Thru Phuket"
            href="/weed-drive-thru-phuket"
            passHref
          >
            Drive-Thru |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link
            title="Green Ghost Map Location"
            href="/weed-shop-near-me"
            passHref
          >
            Location |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link title={'About Green Ghost'} href="/about-green-ghost" passHref>
            About |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link
            title="Contact Green Ghost"
            href={'/contact-green-ghost'}
            passHref
          >
            Contact |
          </Link>
        </Box>
        <Box mx={2} color={'ghostVerse.green.base'}>
          <Link title="Green Ghost Sitemap" href="/sitemap" passHref>
            Sitemap
          </Link>
        </Box>
      </Box>
    </>
  );
};
