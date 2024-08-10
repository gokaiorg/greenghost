import Image from 'next/image';

export const IconPartners = () => {
  return (
    <Image
      src="/media/green-ghost-crypto-weed-shop-partners.png"
      width={1821} // Original width for higher resolutions
      height={632} // Original height for higher resolutions
      alt="Green Ghost - Crypto Weed Shop - Partners."
      layout="responsive" // Makes the image responsive
      sizes="(max-width: 600px) 140px, (min-width: 601px) and (max-width: 1200px) 240px, 240px" // Responsive sizing
      quality={75}
    />
  );
};
