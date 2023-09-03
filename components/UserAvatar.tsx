import { Avatar } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { avatarIdUrl } from '../config/dappCustoms';
import { useAccount } from '@useelven/core';

export const UserAvatar = () => {
  const { address } = useAccount();

  if (!address) return null;

  return (
    <Link href="/profile">
      <Tooltip
        bg="black"
        fontWeight="light"
        placement="top"
        py={3}
        px={5}
        mb={3}
        hasArrow
        arrowSize={12}
        borderRadius={0}
        color={'ghostVerse.green.base'}
        label="Verify membership"
      >
        <Avatar
          borderWidth={1}
          borderRadius={0}
          ml={4}
          borderColor={'ghostVerse.green.base'}
          width={'60px'}
          height={'60px'}
          src={avatarIdUrl(address)}
        />
      </Tooltip>
    </Link>
  );
};
