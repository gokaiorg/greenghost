import { SocialIcon } from 'react-social-icons';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const SocialMediaIcons = () => {
  return (
    <>
      <Box display={'flex'} flexDir={'column'} alignItems={'center'} mx={10}>
        <Box w={'60px'} mb={4}>
          <motion.div
            animate={{
              scale: [1, 1.5, 1, 1.5, 1],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image
              src="/media/green-ghost-degen-weed-shop-heart.png"
              width={190}
              height={152}
              alt="Weed Menu - Weed delivery Phuket - Buy weed online."
              layout={'responsive'}
            />
          </motion.div>
        </Box>
        <Text
          as={'h3'}
          fontSize={'2xl'}
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
          marginBottom={4}
          mt={-2}
          w={'full'}
          color={'ghostVerse.green.base'}
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
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Follow Us on Instagram"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.facebook.com/greenghostdegen"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Follow Us on Facebook"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.tiktok.com/@greenghostdegen"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Follow Us on TikTok"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://t.me/greenghostdegen"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Follow Us on Telegram"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://www.reddit.com/r/greenghostdegen"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Join Us on Reddit"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://medium.com/@GokaiLabs"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Follow Us on Medium"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://twitter.com/GokaiLabs"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Follow Us on Twitter"
          />
        </Box>
        <Box bgColor={'black'} borderRadius={'100%'}>
          <SocialIcon
            url="https://discord.gg/tXSeJfVVnH"
            bgColor={'#4cfd27'}
            style={{ width: 60, height: 60 }}
            title="Join Us on Discord"
          />
        </Box>
      </Box>
    </>
  );
};
