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
          fontSize={'xl'}
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
          fontSize={'3xl'}
          mt={-4}
          mb={2}
          w={'full'}
          color={'ghostVerse.grey.lighter'}
          fontFamily={'vt323'}
        >
          @greenghostdegen
        </Box>
      </Box>
      <Box
        display={'inline-flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={3}
        mx={'auto'}
      >
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.youtube.com/@greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Subscribe on Youtube"
          />
        </Box>{' '}
        {/* <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.instagram.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Instagram"
          />
        </Box> */}
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://x.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on X"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://warpcast.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Warpcast"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://t.me/greenghostdegens"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Telegram"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.tiktok.com/@greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on TikTok"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.facebook.com/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Facebook"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.reddit.com/r/greenghostdegen"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Reddit"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.linkedin.com/company/green-ghost"
            bgColor={'black'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Linkedin"
          />
        </Box>
        <Box bgColor={'#13DE00'} borderRadius={'100%'}>
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
