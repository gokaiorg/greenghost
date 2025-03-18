import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useNetworkSync } from '@useelven/core';
import { theme } from '../config/chakraTheme';
import { SWRConfig } from 'swr';
import { useToast } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import Fonts from '../components/Fonts';
import AgeVerification from '../components/AgeVerificationPopup';
import PageLoader from '../components/PageLoader';

const toastId = 'elven-tools-error-toast';

const ElvenToolsDapp = ({ Component, pageProps }: AppProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set the language after hydration to prevent hydration mismatch
    document.documentElement.lang = 'en';
    setIsHydrated(true); // Set hydration to true after initial render
  }, []);

  // Network Sync
  useNetworkSync({
    apiTimeout: '10000',
    chainType: process.env.NEXT_PUBLIC_MULTIVERSX_CHAIN,
    ...(process.env.NEXT_PUBLIC_MULTIVERSX_API
      ? { apiAddress: process.env.NEXT_PUBLIC_MULTIVERSX_API }
      : {}),
    ...(process.env.NEXT_PUBLIC_WC_PROJECT_ID
      ? { walletConnectV2ProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID }
      : {}),
  });

  const toast = useToast();

  const handleErrorToast = useCallback(() => {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        variant: 'subtle',
        title: 'API error!',
        description:
          'The API is not responding at the moment. Please try later. Also, make sure that you are using the proper chain type when connecting locally',
        status: 'error',
        duration: 10000,
        isClosable: true,
      });
    }
  }, [toast]);

  // Prevent rendering child components until hydration is complete
  if (!isHydrated) {
    return (
      <ChakraProvider theme={theme}>
        <PageLoader />
      </ChakraProvider>
    );
  }

  return (
    <SWRConfig value={{ onError: handleErrorToast }}>
      <ChakraProvider theme={theme}>
        <PageLoader />
        <AgeVerification />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
};

export default ElvenToolsDapp;
