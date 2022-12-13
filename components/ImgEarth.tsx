import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgEarth = () => {
  return (
    <Box height={{ base: '50px' }} width={{ base: '50px' }} marginRight={2}>
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
          src="/media/ghostverse-earth-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.png"
          width={{ base: '50px' }}
          height={{ base: '50px' }}
          maxW="inherit"
          alt="Mr Ghost Earth - MultiversX NFT DAO - MxGhosts"
          title="Mr Ghost Earth - MultiversX NFT DAO - MxGhosts"
        />
      </motion.div>
    </Box>
  );
};
