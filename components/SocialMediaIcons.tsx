import { SocialIcon } from 'react-social-icons';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const SocialMediaIcons = () => {
  return (
    <>
      <Box display={'flex'} flexDir={'column'} alignItems={'center'} mt={4}>
        <Box w={'50px'}>
          <Image
            src="/media/green-ghost-degen-weed-shop-heart.webp"
            alt="Green Ghost Degen Community Love"
            title="Green Ghost Degen Community Love"
            width={190}
            height={152}
            sizes="50px"
            style={{ width: '100%', height: 'auto' }}
            quality={75}
          />
        </Box>
        <Text
          as={'h3'}
          fontSize={'md'}
          color={'white'}
          fontFamily={'CubicFive12'}
          mt={4}
        >
          Join A Degen Community
        </Text>
        <Box
          as={'h4'}
          display={'flex'}
          justifyContent={'center'}
          fontSize={'xl'}
          mt={0}
          mb={2}
          w={'full'}
          color={'ghostVerse.grey.lighter'}
          fontFamily={'vt323'}
        >
          @greenghostdegen
        </Box>
      </Box>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Social Media Icons List"
        display={'inline-flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={3}
        mx={'auto'}
      >
        <Box as={'li'} aria-label="Follow Us on X" borderRadius={'100%'}>
          <SocialIcon
            url="https://x.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on X"
            network="x"
          />
        </Box>
        <Box as={'li'} aria-label="Subscribe on Youtube" borderRadius={'100%'}>
          <SocialIcon
            url="https://www.youtube.com/@greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Subscribe on Youtube"
          />
        </Box>{' '}
        <Box
          as={'li'}
          aria-label="Follow Us on Instagram"
          borderRadius={'100%'}
        >
          <SocialIcon
            url="https://www.instagram.com/greenghost_degen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Instagram"
          />
        </Box>
        <Box as={'li'} aria-label="Join Us on Telegram" borderRadius={'100%'}>
          <SocialIcon
            url="https://t.me/greenghost_degen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Telegram"
          />
        </Box>
        <Box as={'li'} aria-label="Join Us on Telegram" borderRadius={'100%'}>
          <SocialIcon
            url="https://opensea.io/collection/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Opensea"
          />
        </Box>
        <Box as={'li'} aria-label="Follow Us on TikTok" borderRadius={'100%'}>
          <SocialIcon
            url="https://www.tiktok.com/@greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on TikTok"
          />
        </Box>
        <Box as={'li'} aria-label="Follow Us on Warpcast" borderRadius={'100%'}>
          <SocialIcon
            url="https://warpcast.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Warpcast"
          />
        </Box>
        <Box as={'li'} aria-label="Follow Us on Facebook" borderRadius={'100%'}>
          <SocialIcon
            url="https://www.facebook.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Facebook"
          />
        </Box>
        <Box as={'li'} aria-label="Join Us on Reddit" borderRadius={'100%'}>
          <SocialIcon
            url="https://www.reddit.com/r/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Reddit"
          />
        </Box>
        <Box as={'li'} aria-label="Join Us on Linkedin" borderRadius={'100%'}>
          <SocialIcon
            url="https://www.linkedin.com/company/green-ghost"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Linkedin"
          />
        </Box>
        <Box as={'li'} aria-label="Join Us on Discord" borderRadius={'100%'}>
          <SocialIcon
            url="https://discord.gg/tXSeJfVVnH"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Discord"
          />
        </Box>
      </Box>
    </>
  );
};
