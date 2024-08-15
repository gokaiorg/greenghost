import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as={'h1'}
      fontSize={{ base: '20', lg: '30' }}
      fontFamily={'CubicFive12'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
    >
      {title}
    </Text>
  );
};
