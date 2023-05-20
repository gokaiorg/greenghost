import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box
      display="inline-flex"
      flexWrap="wrap"
      alignItems={'center'}
      justifyContent={'center'}
      gap={3}
      mx="auto"
    >
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.instagram.com/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
          title="Follow Us on Instagram"
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.facebook.com/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
          title="Follow Us on Facebook"
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.tiktok.com/@greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
          title="Follow Us on TikTok"
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://t.me/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
          title="Follow Us on Telegram"
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://twitter.com/GokaiLabs"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
          title="Follow Us on Twitter"
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://discord.gg/tXSeJfVVnH"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
          title="Join Us on Discord"
        />
      </Box>
    </Box>
  );
};
