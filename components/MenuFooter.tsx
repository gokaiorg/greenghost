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
            title="Green Ghost Map Location"
            href="/best-degen-weed-shop"
            passHref
          >
            Location
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title={'Green Ghost 🌿👻 About Cannabis Culture in Thailand'}
            href="/about"
            passHref
          >
            About
          </Link>
        </Box>
        <Box mx={2}>
          <Link title="Contact Green Ghost" href={'/contact'} passHref>
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
