import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { TestimonialPfp } from './TestimonialPfp';
import { TestimonialStars } from './TestimonialStars';

interface ReviewItemProps {
  title: string;
  review: string;
  reviewLink: string;
}

export const ReviewItem: FC<ReviewItemProps> = ({
  title,
  review,
  reviewLink,
}) => {
  return (
    <Box display={'flex'} my={'5'} bgColor={'ghostVerse.dark.lighter'} p={'5'}>
      <TestimonialPfp />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        fontWeight={'black'}
        color={'white'}
        w={'80%'}
        fontFamily={'vt323'}
        px={4}
        backdropFilter={'blur(3px)'}
      >
        <Text
          as={'h4'}
          fontSize={{ base: 'xl' }}
          marginBottom={2}
          fontFamily={'vt323'}
        >
          {title}
        </Text>
        <TestimonialStars />
        <Text as={'p'} fontSize={{ base: 26, lg: 28 }} lineHeight={'1'}>
          {review}
        </Text>
        <Link
          href={reviewLink}
          title={'Read More Review on Google Map Place'}
          passHref
        >
          <Text
            display={'inline-flex'}
            color={'ghostVerse.green.base'}
            fontSize={{ base: 'xl' }}
            mt={4}
            fontFamily={'vt323'}
          >
            Read Review
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
