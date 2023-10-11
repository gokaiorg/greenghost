import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxInfoLabelTitleProps {
  title: string;
}

export const BoxInfoLabelTitle: FC<BoxInfoLabelTitleProps> = ({ title }) => {
  return (
    <Text as={'h3'} mr={4}>
      {title}
    </Text>
  );
};
