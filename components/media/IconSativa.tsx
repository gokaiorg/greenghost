import Image from 'next/image';

export const IconSativa = () => {
  return (
    <Image
      src="/media/icon-sativa.webp"
      aria-label="Sativa Icon"
      width={30}
      height={31}
      alt="Green Ghost 🌿👻 Menu Weed Shop Sativa Dominance"
      title="Green Ghost 🌿👻 Menu Weed Shop Sativa Dominance"
      quality={75}
      loading="lazy"
      priority={false}
      sizes="(max-width: 768px) 25vw, 
             (max-width: 1200px) 15vw, 
             30px"
    />
  );
};
