import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { ThaiShop } from '../config/thaishops';

type ThaiShopItemProps = {
  thaishop: ThaiShop;
};

export const ThaiShopItem = ({ thaishop }: ThaiShopItemProps) => {
  return (
    <Box
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      paddingBottom={1}
      paddingRight={1}
      lineHeight={1}
    >
      <Link
        href={thaishop.map}
        title={`Thailand Weed Shop - ${thaishop.name} - ${thaishop.city}`}
        passHref
      >
        <Box
          borderColor={'ghostVerse.green.base'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          p={3}
          pos={'relative'}
          fontWeight={'bold'}
          fontSize={'lg'}
          fontFamily={'CubicFive12'}
          color="ghostVerse.gray.base"
          display={'flex'}
          flexDirection={{ base: 'row' }}
          height={'100%'}
          whiteSpace={{ base: 'normal' }}
          _hover={{
            bgColor: 'rgba(109, 208, 246, 0.1)',
            backdropFilter: 'blur(3px)',
          }}
          transition={'all .3s'}
        >
          <Box mr={4} height={{ base: 'auto' }}>
            <Image
              src={thaishop.logo}
              alt={`Thailand Weed Shop - ${thaishop.name} - ${thaishop.city}`}
              width={50}
              height={50}
              title={`Thailand Weed Shop - ${thaishop.name} - ${thaishop.city}`}
              priority={false}
              quality={75}
            />
          </Box>
          <Box>
            <Text as={'h3'} fontSize={16}>
              {thaishop.name}
            </Text>
            <Text as={'h4'} fontSize={14} color={'ghostVerse.grey.base'}>
              {thaishop.city}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
