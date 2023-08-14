import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconMenu } from './IconMenu';
import { IconEarn } from './IconEarn';
import { IconChat } from './IconChat';
import { IconMap } from './IconMap';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  const router = useRouter();

  const isActive = (href: string): boolean => {
    return router.asPath === href;
  };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexWrap={'wrap'}
      py={{ base: '4', md: '9' }}
    >
      <Logo />
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
        <Link
          href={'/contact-us-buy-weed-online'}
          title={'Contact Us to buy weed online'}
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
              isActive('/contact-us-buy-weed-online')
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
              isActive('/weed-shop-near-me')
                ? 'ghostVerse.green.base'
                : 'inherit'
            }
          >
            <Box display={'flex'} flex={'1'} alignItems={'center'} w={'38px'}>
              <IconMap />
            </Box>
            Map
          </Box>
        </Link>
      </Box>
      {children}
      <Box
        as={'div'}
        color={'ghostVerse.yellow.base'}
        p={4}
        mt={10}
        mb={5}
        mx={'auto'}
        w={'100%'}
        borderColor={'ghostVerse.yellow.base'}
        borderWidth={1}
        fontSize={'2xl'}
        textAlign={'center'}
      >
        Do not miss the strain of the week!
        <br />
        Discover the{' '}
        <Link
          href="/weed-shop/white-widow"
          title="White Widow only 400 THB this week!"
          passHref
        >
          <Box as={'span'} color={'white'}>
            White Widow
          </Box>
        </Link>{' '}
        for only 400 THB.
      </Box>
    </Box>
  );
};
