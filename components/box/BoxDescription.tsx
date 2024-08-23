import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxDescription: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      as="section"
      aria-labelledby="Strain Description"
      bgColor={'ghostVerse.dark.lighter'}
      backdropFilter={'blur(3px)'}
      width="full"
      p={4}
      mb={10}
      display={'inline-flex'}
      flexDirection={'column'}
      fontSize={26}
      fontFamily={'vt323'}
      whiteSpace="pre-line"
      lineHeight={1}
    >
      {children}
    </Box>
  );
};

export default BoxDescription;
