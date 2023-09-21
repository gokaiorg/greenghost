import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface FindItemProps {
  name: string;
  findUsLink: string;
}

export const FindItem: FC<FindItemProps> = ({ name, findUsLink }) => {
  return (
    <Box
      m={2}
      px={2}
      fontSize={26}
      color={'ghostVerse.green.base'}
      _hover={{
        color: 'black',
        backgroundColor: 'ghostVerse.green.base',
      }}
    >
      <Link title={`Find Us on ${name}`} href={findUsLink} passHref>
        {name}
      </Link>
    </Box>
  );
};
