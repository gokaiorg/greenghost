import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const MenuFooter = () => {
  return (
    <>
      <Box
        aria-label="Footer Navigation"
        as="ul"
        listStyleType={'none'}
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
        <Box aria-label="Wholesale" as="li" mx={2}>
          <Link
            title="Wholesale Cannabis Premium Strains in Phuket"
            href="/wholesale"
            passHref
          >
            Wholesale
          </Link>
        </Box>
        <Box aria-label="Jobs" as="li" mx={2}>
          <Link
            title="Budtender Job Opening at Our Cannabis Shop"
            href="/jobs"
            passHref
          >
            Jobs
          </Link>
        </Box>
        <Box aria-label="Location" as="li" mx={2}>
          <Link
            title="Best Weed Shop Near Me in Phuket"
            href="/best-degen-weed-shop"
            passHref
          >
            Location
          </Link>
        </Box>
        <Box aria-label="About" as="li" mx={2}>
          <Link
            title={'About Cannabis Culture in Thailand'}
            href="/about"
            passHref
          >
            About
          </Link>
        </Box>
        <Box aria-label="Contact" as="li" mx={2}>
          <Link
            title="Contact Our Weed Shop Team To Order"
            href={'/contact'}
            passHref
          >
            Contact
          </Link>
        </Box>
        <Box aria-label="Sitemap" as="li" mx={2}>
          <Link title="Sitemap" href="/sitemap" passHref>
            Sitemap
          </Link>
        </Box>
      </Box>
    </>
  );
};
