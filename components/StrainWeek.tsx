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
        href="/weed-shop/purple-zkittlez"
        title="Purple Zkittlez only 300 THB this week!"
        passHref
      >
        <Box as={'span'} color={'white'}>
          Purple Zkittlez
        </Box>
      </Link>{' '}
      for only 300 THB.
    </Box>
  );
};
