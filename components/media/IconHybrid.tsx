import Image from 'next/image';

export const IconHybrid = () => {
  return (
    <Image
      src="/media/icon-hybrid.webp"
      width={30}
      height={31}
      alt="Green Ghost 🌿👻 Menu Weed Shop Hybrid Dominance"
      title="Green Ghost 🌿👻 Menu Weed Shop Hybrid Dominance"
      quality={75}
      loading="lazy"
      priority={false}
      sizes="(max-width: 768px) 25vw, 
             (max-width: 1200px) 15vw, 
             30px"
    />
  );
};
