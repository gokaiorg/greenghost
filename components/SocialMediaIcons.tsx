import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="inline-flex" alignItems="center" gap={3} mx="auto" mb={10}>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.instagram.com/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.facebook.com/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.tiktok.com/@greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://t.me/greenghostdegen"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://twitter.com/GokaiLabs"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
    </Box>
  );
};
