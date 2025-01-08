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
            title="Green Ghost 🌿👻 Wholesale Cannabis Premium Strains in Phuket"
            href="/wholesale"
            passHref
          >
            Wholesale
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title="Green Ghost 🌿👻 Budtender Job Opening at Our Cannabis Shop"
            href="/jobs"
            passHref
          >
            Jobs
          </Link>
        </Box>
        <Box mx={2}>
          <Link
            title="Green Ghost 🌿👻 Best Weed Shop Near Me in Phuket"
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
          <Link
            title="Green Ghost 🌿👻 Contact Our Weed Shop Team To Order"
            href={'/contact'}
            passHref
          >
            Contact
          </Link>
        </Box>
        <Box mx={2}>
          <Link title="Green Ghost 🌿👻 Sitemap" href="/sitemap" passHref>
            Sitemap
          </Link>
        </Box>
      </Box>
    </>
  );
};
