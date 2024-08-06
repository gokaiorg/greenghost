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
      m={1}
      px={2}
      fontSize={22}
      color={'ghostVerse.grey.base'}
      bgColor={'ghostVerse.dark.lighter'}
      backdropFilter={'blur(3px)'}
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
