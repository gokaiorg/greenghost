import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { NFT } from '../config/nfts';

type NFTItemProps = {
  nft: NFT;
};

export const NFTItem = ({ nft }: NFTItemProps) => {
  return (
    <Box width={{ base: '50%', lg: '20%' }} mb={'4'} minHeight={'170px'}>
      <Link href={`nft/${nft.slug}`} title={nft.name} passHref>
        <Box
          h={'100%'}
          fontSize={{ base: 'xl' }}
          color={'ghostVerse.color2.darker'}
          fontFamily={'CubicFive12'}
          mx={0}
          p={1}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'start'}
          transition={'all .3s'}
          _hover={{
            bgColor: 'ghostVerse.dark.lighter',
            color: 'ghostVerse.green.base',
          }}
        >
          <Box w={'100%'}>
            <Image
              src={nft.logo}
              alt={`${nft.name}`}
              width={250}
              height={250}
              title={`${nft.name}`}
              priority={false}
              quality={75}
            />
          </Box>
          <Box as={'h3'} w={'100%'} fontSize={{ base: 12 }} mt={'1'}>
            {nft.name}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
