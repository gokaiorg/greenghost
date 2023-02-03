import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.facebook.com/greengardend"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.instagram.com/greengardend"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://t.me/greengardend"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.tiktok.com/@greengardend"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://line.me/ti/p/Xh7jcqlmE7"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
    </Box>
  );
};
