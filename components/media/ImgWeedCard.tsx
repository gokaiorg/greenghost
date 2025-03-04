import Image from 'next/image';

export const ImgWeedCard = () => {
  return (
    <Image
      src="/media/green-ghost-weed-thailand-medicinal-cannabis-card.webp"
      alt="Medicinal Cannabis Card for Thailand"
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
