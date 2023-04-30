import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { UserAvatar } from './UserAvatar';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = () => {
  return (
    <Box display={'flex'} gap={5} alignItems={'center'}>
      <UserAvatar />
    </Box>
  );
};
