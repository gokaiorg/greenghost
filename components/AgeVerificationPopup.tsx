import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { ImgQuestion } from './ImgQuestion';
import Link from 'next/link';

type AgeVerificationPopupProps = {
  onVerify: () => void;
};

const AgeVerificationPopup = ({ onVerify }: AgeVerificationPopupProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isVerified = localStorage.getItem('ageVerified');
    if (isVerified) {
      setIsOpen(false);
    }
  }, []);

  const verifyAge = () => {
    setIsOpen(false);
    localStorage.setItem('ageVerified', 'true');
    onVerify();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Box
      pos="fixed"
      zIndex="100"
      top={0}
      bottom={0}
      left={0}
      right={0}
      backgroundColor="black"
    >
      <Box
        position={'absolute'}
        top={0}
        bottom={0}
        left={0}
        right={0}
        margin="auto"
        px={6}
        width={{ base: '100%', md: '60%' }}
        height={'fit-content'}
      >
        <Box
          onTouchStart={handleClose}
          as={'img'}
          src="/media/green-ghost-degen-weed-shop-older-20-only.webp"
          width="300px"
          height="300px"
          maxW={'inherit'}
          alt="Green Ghost - Degen Weed Shop - 20 or older only"
          title="Green Ghost - Degen Weed Shop - 20 or older only"
        />
        <Box
          as={'h2'}
          display={'flex'}
          flexDirection={'row'}
          alignItems="baseline"
          fontSize={'2xl'}
          mt={4}
          whiteSpace={'nowrap'}
        >
          Are you 20 or older
          <ImgQuestion />
        </Box>
        <Box
          as={'span'}
          display={'inline-flex'}
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          fontSize={'xl'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          py={2}
          px={6}
          mb={2}
          mr={'auto'}
          outline="none"
          cursor={'pointer'}
          onClick={verifyAge}
          onTouchStart={verifyAge}
          onTouchMove={verifyAge}
          onMouseDown={verifyAge}
          onPointerDown={verifyAge}
          onTouchEnd={verifyAge}
        >
          Yes, I am over 20
        </Box>
        <br />
        <Link href={'https://ghostverse.org/'} title={'GhostVerse'} passHref>
          <Box
            as={'span'}
            display={'inline-flex'}
            color="#FFE12B"
            borderColor="#FFE12B"
            fontSize={'xl'}
            borderWidth={1}
            bgColor={'ghostVerse.dark.lighter'}
            backdropFilter={'blur(3px)'}
            py={2}
            px={6}
            mb={2}
            mr={'auto'}
          >
            No, NFTs are better for me
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default AgeVerificationPopup;
