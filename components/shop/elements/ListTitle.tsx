import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface ListTitleProps {
  title: string;
}

export const ListTitle: FC<ListTitleProps> = ({ title }) => {
  return (
    <Text
      as={'h2'}
      display={'inline-flex'}
      mr={'auto'}
      mb={2}
      flexWrap={'wrap'}
      fontSize={26}
      fontFamily={'vt323'}
      color={'ghostVerse.grey.base'}
    >
      {title}
    </Text>
  );
};
