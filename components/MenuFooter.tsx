import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const MenuFooter = () => {
  return (
    <>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        mx={'auto'}
        my={4}
        fontSize={'2xl'}
        fontFamily={'vt323'}
        textDecoration={'underline'}
        color={'ghostVerse.grey.lighter'}
      >
        <Box mx={2}>
          <Link
            title="Best Weed Shops in Thailand"
            href="/weed-shops-thailand"
            passHref
          >
            Shops
          </Link>
        </Box>
        <Box mx={2}>
          <Link title="Weed Growers in Thailand" href="/weed-grower" passHref>
            Growers
          </Link>
        </Box>
        <Box mx={2}>
          <Link title="Weed Shop Menu" href={'/weed-shop'} passHref>
            Menu
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title="Weed Delivery Phuket"
            href="/weed-delivery-phuket"
            passHref
          >
            Delivery
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title="Drive Thru Phuket"
            href="/weed-drive-thru-phuket"
            passHref
          >
            Drive-Thru
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title="Green Ghost Map Location"
            href="/weed-shop-near-me"
            passHref
          >
            Location
          </Link>
        </Box>
        <Box mx={2}>
          <Link title={'About Green Ghost'} href="/about-green-ghost" passHref>
            About
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title="Contact Green Ghost"
            href={'/contact-green-ghost'}
            passHref
          >
            Contact
          </Link>
        </Box>
        <Box mx={2}>
          <Link title="Green Ghost Sitemap" href="/sitemap" passHref>
            Sitemap
          </Link>
        </Box>
      </Box>
    </>
  );
};
