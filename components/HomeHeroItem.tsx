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
    <>
      <Box
        mt={{ base: 4, lg: 0 }}
        position={'relative'}
        w="100%"
        h={{ base: '350px', lg: '600px' }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
        />
      </Box>
      <Box
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        margin="auto"
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        fontWeight={'black'}
        color={'white'}
        fontFamily={'vt323'}
        px={{ base: 5, md: 10 }}
        bgColor={'ghostVerse.dark.ultralight'}
        backdropFilter={'blur(3px)'}
      >
        <Text
          as={'h2'}
          fontSize={{ base: 24, lg: 48 }}
          marginBottom={4}
          fontFamily={'CubicFive12'}
          color={'ghostVerse.green.base'}
        >
          {title}
        </Text>
        <Text as={'p'} fontSize={{ base: 26, md: 44 }} lineHeight={1}>
          {description}
        </Text>
        <Link href={link} title={linkTitle} passHref>
          <Text
            display={'inline-flex'}
            color={'white'}
            borderColor={'white'}
            fontSize={{ base: 'xl', md: '4xl' }}
            borderWidth={1}
            bgColor="transparent"
            backdropFilter={'blur(3px)'}
            p={{ base: 4, md: 6 }}
            mt={10}
            mx={'auto'}
            fontFamily={'CubicFive10'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
              color: 'ghostVerse.green.base',
            }}
          >
            {linkLabel}
          </Text>
        </Link>
      </Box>
    </>
  );
};
