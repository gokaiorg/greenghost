import { Container, Box } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';
import { MetaHead, MetaHeadProps } from './MetaHead';
import { Footer } from './Footer';
import AgeVerificationPopup from '../components/AgeVerificationPopup';

export const MainLayout: FC<PropsWithChildren<MetaHeadProps>> = ({
  children,
  metaTitle,
  metaDescription,
  metaImage,
  metaUrl,
}) => {
  const handleVerify = () => {
    console.log('User verified age.');
  };

  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQL8CG2"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
      <AgeVerificationPopup onVerify={handleVerify} />
      <MetaHead
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaImage={metaImage}
        metaUrl={metaUrl}
      />
      <Box
        minHeight="calc(100vh - 34px)"
        position="relative"
        zIndex={3}
        color="ghostVerse.color2.darker"
        mb={5}
      >
        <Container maxW="container.xl">
          <Box>{children}</Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
