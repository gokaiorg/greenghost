import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { LoginModalButton } from './core/LoginModalButton';
import { UserAvatar } from './UserAvatar';
import { useRouter } from 'next/router';
import { IconMenu } from './IconMenu';
import Link from 'next/link';
import { IconMap } from './IconMap';
import { IconChat } from './IconChat';
import { IconEarn } from './IconEarn';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const isActive = (href: string): boolean => {
    return router.asPath === href;
  };

  return (
    <Box
      marginLeft={'auto'}
      marginRight={{ base: 'auto', md: 0 }}
      display={'flex'}
    >
      <Link href={'/weed-shop'} title={'Weed Shop Menu'} passHref>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={isActive('/weed-shop') ? 'ghostVerse.green.base' : 'inherit'}
        >
          <Box display={'flex'} flex={'1'} alignItems={'center'} w={'60px'}>
            <IconMenu />
          </Box>
          Menu
        </Box>
      </Link>
      <Link
        href="/crypto-weed-shop-relax-and-earn"
        title="Crypto Coffee Shop"
        passHref
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={
            isActive('/crypto-weed-shop-relax-and-earn')
              ? 'ghostVerse.green.base'
              : 'inherit'
          }
        >
          <Box display={'flex'} flex={'1'} alignItems={'center'} w={'30px'}>
            <IconEarn />
          </Box>
          Earn
        </Box>
      </Link>
      <Link href={'/contact-green-ghost'} title={'Contact Green ghost'} passHref>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={
            isActive('/contact-green-ghost')
              ? 'ghostVerse.green.base'
              : 'inherit'
          }
        >
          <Box display={'flex'} flex={'1'} alignItems={'center'} w={'23px'}>
            <IconChat />
          </Box>
          Chat
        </Box>
      </Link>
      <Link href="/weed-shop-near-me" title="Weed Shop Near Me" passHref>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={
            isActive('/weed-shop-near-me') ? 'ghostVerse.green.base' : 'inherit'
          }
        >
          <Box display={'flex'} flex={'1'} alignItems={'center'} w={'38px'}>
            <IconMap />
          </Box>
          Map
        </Box>
      </Link>
      {enabled.includes('auth') && <LoginModalButton />}
      <UserAvatar />
      {enabled.includes('mint') && (
        <Link href="/mint" title={'Mint'} passHref>
          Mint
        </Link>
      )}
      {enabled.includes('about') && (
        <Link title={'Mint'} passHref href="/about">
          About
        </Link>
      )}
    </Box>
  );
};
