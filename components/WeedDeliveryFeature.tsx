import { Box, Text } from '@chakra-ui/react';

export const WeedDeliveryFeature = () => {
  return (
    <Box display={'flex'} my={4}>
      <Text
        as={'h4'}
        fontSize={{ base: 14, lg: 20 }}
        lineHeight={1}
        fontFamily={'CubicFive12'}
        color={'white'}
        textAlign={'center'}
        p={2}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
        width={{ base: '100%', lg: '33%' }}
      >
        <Box fontSize={{ base: '3xl' }} mb={2} color={'ghostVerse.green.base'}>
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width="100px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Box>
        Free delivery above 2000THB
      </Text>
      <Text
        as={'h4'}
        fontSize={{ base: 14, lg: 20 }}
        lineHeight={1}
        fontFamily={'CubicFive12'}
        color={'white'}
        textAlign={'center'}
        p={2}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
        width={{ base: '100%', lg: '33%' }}
      >
        <Box fontSize={{ base: '3xl' }} mb={2} color={'ghostVerse.green.base'}>
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox="0 0 24 24"
            fill="currentColor"
            width="100px"
          >
            <path
              fillRule={'evenodd'}
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
        Instant weed delivery in Phuket
      </Text>
      <Text
        as={'h4'}
        fontSize={{ base: 14, lg: 20 }}
        lineHeight={1}
        fontFamily={'CubicFive12'}
        color={'white'}
        textAlign={'center'}
        p={2}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
        width={{ base: '100%', lg: '33%' }}
      >
        <Box fontSize={{ base: '3xl' }} mb={2} color={'ghostVerse.green.base'}>
          <svg
            xmlns={'http://www.w3.org/2000/svg'}
            viewBox="0 0 24 24"
            fill="currentColor"
            width="100px"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
        Everyday day from 8am to 2am
      </Text>
    </Box>
  );
};
