import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const StrainWeek = () => {
  return (
    <Box
      as={'div'}
      color={'ghostVerse.yellow.base'}
      p={4}
      mb={5}
      mx={'auto'}
      w={'100%'}
      borderColor={'ghostVerse.yellow.base'}
      borderWidth={1}
      fontSize={'2xl'}
      textAlign={'center'}
    >
      Do not miss the strain of the week!
      <br />
      Discover the{' '}
      <Link
        href="/weed-shop/buddy-critical"
        title="Buddy Critical only 400 THB this week!"
        passHref
      >
        <Box as={'span'} color={'white'}>
          Buddy Critical
        </Box>
      </Link>{' '}
      for only 400 THB.
    </Box>
  );
};
