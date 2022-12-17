import { useRouter } from 'next/router';
import { useCallback, FC } from 'react';
import { ActionButton } from './ActionButton';
import { Image } from '@chakra-ui/react';

interface MainMenuButtonsProps {
  enabled: string[];
}

export const MainMenuButtons: FC<MainMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/contact');
  }, [router]);

  return (
    <>
      {enabled.includes('contact') && (
        <ActionButton onClick={handleMintClick}>
          <Image
            boxSize={{ base: '100px', md: '140px' }}
            objectFit="contain"
            my={4}
            src="/media/ghostverse-collect-trade-mr-ghost-mxghosts-nft-dao-multiversx-blockchain.webp"
            alt="GhostVerse collect and trade Mr Ghost MxGhosts NFT DAO MultiversX"
          />
          Contact
        </ActionButton>
      )}
    </>
  );
};
