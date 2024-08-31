import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

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
  link,
  linkTitle,
  linkLabel,
}) => {
  return (
    <Box
      as="div"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Box
        as="span"
        w="100%"
        h={{ base: '300px', md: '400px' }}
        position="relative"
      >
        <Image
          src={image}
          alt={imageAlt}
          title={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 600px) 768px, (max-width: 1200px) 984px, 1240px"
          quality={75}
        />
      </Box>
      <Box
        pos="absolute"
        top={0}
        left={0}
        right={0}
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        fontWeight="black"
        bgColor="rgba(0, 0, 0, 0.8)" // Semi-transparent background for contrast
      >
        <Text
          as="h1"
          fontSize={{ base: '22px', md: '30px', lg: '44px' }}
          lineHeight={1}
          mb={2}
          fontFamily="CubicFive12"
          color="ghostVerse.green.base"
          mx="auto"
          w={{ base: '100%', md: '65%', lg: '70%', xl: '58%' }}
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
        <Link href={link} title={linkTitle} passHref>
          <Text
            as="span"
            display="inline-flex"
            fontSize={{ base: 'xl', md: '4xl' }}
            borderWidth={1}
            px={6}
            pb={2}
            mt={10}
            fontFamily="vt323"
            color="black"
            borderColor="ghostVerse.green.base"
            bgColor="ghostVerse.green.base"
            _hover={{
              bgColor: 'black',
              color: 'ghostVerse.green.base',
            }}
            mx="auto"
          >
            {linkLabel}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
