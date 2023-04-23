import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgEarth = () => {
  return (
    <Box height="80px" width="80px" marginRight={2}>
      <motion.div
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <Box
          as="img"
          src="/media/green-ghost-degen-weed-shop.webp"
          width="80px"
          height="80px"
          maxW="inherit"
          alt="Green Ghost - Tokenized Cannabis Shop - GhostVerse MxGhosts NFT DAO"
          title="Green Ghost - Tokenized Cannabis Shop - GhostVerse MxGhosts NFT DAO"
        />
      </motion.div>
    </Box>
  );
};
