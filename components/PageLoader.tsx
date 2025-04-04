import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Define an animation (glowing effect)
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <Box
      pos="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
      backgroundColor="black"
      opacity={0.9}
      zIndex={999}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Box
          w="50px"
          h="50px"
          backgroundColor="#13DE00"
          boxShadow="0 0 15px #13DE00"
          animation={`${pulse} 1s infinite ease-in-out`}
        />
      </motion.div>
    </Box>
  );
};

export default PageLoader;
