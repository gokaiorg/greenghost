import { FwenItem } from './FwenItem';
import { fwen } from '../config/fwens';

import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Fwen = () => {
  if (!Array.isArray(fwen)) return null;
  return (
    <Box
      display={'flex'}
      mt={40}
      mb={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      justifyContent={'center'}
      mx={-2}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        mx={'auto'}
      >
        <Text
          as={'h3'}
          fontSize={{ base: 24, lg: 34 }}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={10}
          mb={-20}
        >
          Fwens
        </Text>
        <Box w={'300px'} mt={-40} mb={10}>
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Image
              src={'/media/green-ghost-degen-weed-shop-fire-fwens.png'}
              width={300}
              height={300}
              alt={'Green Ghost - Degen Weed Shop - Fwens in fire'}
            />
          </motion.div>
        </Box>
      </Box>
      {fwen.map((homeHeroItem, index) => (
        <FwenItem key={index} {...homeHeroItem} />
      ))}
    </Box>
  );
};
