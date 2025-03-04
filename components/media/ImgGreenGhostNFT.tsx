import Image from 'next/image';

export const ImgGreenGhostNFT = () => {
  return (
    <Image
      src="/media/green-ghost-degen-nft.webp"
      alt="Green Ghost Degen NFT"
      width={1260}
      height={600}
      sizes="
        (max-width: 599px) 330px,  /* Base resolution */
        (min-width: 600px) and (max-width: 1199px) 550px,  /* Medium screens */
        100vw  /* Default size for larger screens */
      "
      quality={75}
    />
  );
};
