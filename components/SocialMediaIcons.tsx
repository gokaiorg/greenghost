import { SocialIcon } from 'react-social-icons';
import { Box } from '@chakra-ui/react';

export const SocialMediaIcons = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.facebook.com/greengardencs"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
      <Box bgColor="black" borderRadius="100%">
        <SocialIcon
          url="https://www.instagram.com/greengardencs"
          bgColor="#4cfd27"
          style={{ width: 60, height: 60 }}
        />
      </Box>
    </Box>
  );
};
