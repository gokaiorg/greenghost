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
  const [verified, setVerified] = React.useState(false)

  const handleVerify = () => {
    setVerified(true)
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ageVerifiedAt', new Date().toISOString())
    }
  }

  const handleReset = () => {
    setVerified(false)
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('ageVerifiedAt')
    }
  }

  let ageVerifiedAt
  if (typeof localStorage !== 'undefined') {
    ageVerifiedAt = localStorage.getItem('ageVerifiedAt')
  }

  const isVerified = verified || (ageVerifiedAt && (new Date().getTime() - new Date(ageVerifiedAt).getTime()) < (5 * 60 * 1000))

  return (
    <>
      {!verified && <AgeVerificationPopup onVerify={handleVerify} />}
        {verified && (
          <div>
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
          </div>
        )}
    </>
  );
};
