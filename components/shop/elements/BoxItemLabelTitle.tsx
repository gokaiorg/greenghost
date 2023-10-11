import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemLabelTitleProps {
  title: string;
}

export const BoxItemLabelTitle: FC<BoxItemLabelTitleProps> = ({ title }) => {
  return (
    <Text as={'h3'} mr={4}>
      {title}
    </Text>
  );
};
