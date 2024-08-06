import { SocialIcon } from 'react-social-icons';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const SocialMediaIcons = () => {
  return (
    <>
      <Box display={'flex'} flexDir={'column'} alignItems={'center'} mt={4}>
        <Box w={'50px'}>
          <Image
            src="/media/green-ghost-degen-weed-shop-heart.png"
            width={190}
            height={152}
            alt="Weed Menu - Weed delivery Phuket - Buy weed online."
          />
        </Box>
        <Text
          as={'h3'}
          fontSize={'xl'}
          color={'ghostVerse.color2.darker'}
          fontFamily={'CubicFive12'}
        >
          Join Us
        </Text>
        <Box
          as={'h4'}
          display={'flex'}
          justifyContent={'center'}
          fontSize={'3xl'}
          mt={-4}
          mb={2}
          w={'full'}
          color={'ghostVerse.grey.base'}
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
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.instagram.com/greenghostdegen"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Instagram"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://twitter.com/greenghostdegen"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Twitter"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://warpcast.com/greenghostdegen"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Warpcast"
          />
        </Box>

        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://t.me/greenghostdegens"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Telegram"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.tiktok.com/@greenghostdegen"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on TikTok"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.facebook.com/greenghostdegen"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Follow Us on Facebook"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.reddit.com/r/greenghostdegen"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Reddit"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.linkedin.com/company/green-ghost"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Linkedin"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://discord.gg/tXSeJfVVnH"
            bgColor={'#13DE00'}
            style={{ width: 40, height: 40 }}
            title="Join Us on Discord"
          />
        </Box>
      </Box>
    </>
  );
};
