import Image from 'next/image';

export const IconIndica = () => {
  return (
    <Image
      src="/media/icon-indica.webp"
      aria-label="Indica Icon"
      width={30}
      height={31}
      alt="Menu Weed Shop Indica Dominance"
      title="Menu Weed Shop Indica Dominance"
      quality={75}
      loading="lazy"
      priority={false}
      sizes="(max-width: 768px) 25vw, 
             (max-width: 1200px) 15vw, 
             30px"
    />
  );
};
