import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HomeHeroItemProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  linkTitle: string;
  linkLabel: string;
}

export const HomeHeroItem: FC<HomeHeroItemProps> = ({
  title,
  image,
  imageAlt,
  description,
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <Box
      as="section"
      aria-label="Banner"
      position="relative"
      height="100%"
      width="100%"
      overflow="hidden"
      mb={10}
    >
      <motion.div
        style={{
          y,
          position: 'absolute',
          top: '-65%',
          left: 0,
          width: '100%',
          height: '200%',
          zIndex: -1,
        }}
      >
        <Image
          src={image}
          alt={imageAlt}
          title={imageAlt}
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
      </motion.div>
      <Box
        bg="rgba(0, 0, 0, 0.8)"
        px={2}
        py={10}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign="center"
        h={'100%'}
        minHeight={{ base: 'auto', md: '400px' }}
      >
        <Text
          as="h1"
          fontSize={{ base: '22px', md: '30px', lg: '44px' }}
          lineHeight={1}
          mb={2}
          fontFamily="CubicFive12"
          color="ghostVerse.green.base"
          mx="auto"
          w={{ base: '100%', md: '65%', lg: '70%', xl: '60%' }}
        >
          {title}
        </Text>
        <Text
          as="p"
          lineHeight={1}
          fontFamily={'vt323'}
          fontSize={{ base: '26px', md: '36px', lg: '44px' }}
          mx="auto"
          w={{ base: '100%', xl: '100%' }}
        >
          {description}
        </Text>
        <Box
          aria-label="Contact us now"
          display={'flex'}
          flexWrap={'wrap'}
          gap={2}
          mx={'auto'}
        >
          <Link
            href={'/contact'}
            title={'Contact Our Weed Shop Team To Order'}
            passHref
          >
            <Text
              as="span"
              display="inline-flex"
              fontFamily="CubicFive12"
              fontSize={{ base: 'md', md: 'lg' }}
              px={6}
              py={2}
              mt={5}
              mx="auto"
              color="black"
              borderWidth={1}
              borderColor="ghostVerse.green.base"
              bgColor="ghostVerse.green.base"
              _hover={{
                bgColor: 'black',
                color: 'ghostVerse.green.base',
              }}
            >
              Contact
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
