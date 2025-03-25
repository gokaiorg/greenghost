import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface ListTitleProps {
  title: string;
}

export const ListTitle: FC<ListTitleProps> = ({ title }) => {
  return (
    <Text
      as={'p'}
      display={'inline-flex'}
      ml={{ base: '0', md: '2' }}
      flexWrap={'wrap'}
      fontSize={26}
      fontFamily={'vt323'}
      color={'ghostVerse.grey.base'}
    >
      {title}
    </Text>
  );
};
