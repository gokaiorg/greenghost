import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface HomeSectionTitleProps {
  title: string;
}

export const HomeSectionTitle: FC<HomeSectionTitleProps> = ({ title }) => {
  return (
    <Text
      as={'h1'}
      fontSize={{ base: 'xl', md: '2xl' }}
      fontFamily={'CubicFive12'}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      marginRight={1}
      marginBottom={4}
    >
      {title}
    </Text>
  );
};
