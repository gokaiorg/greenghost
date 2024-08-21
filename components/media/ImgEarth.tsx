import Image from 'next/image';

export const ImgEarth = () => {
  return (
    <Image
      src="/media/green-ghost-degen-weed-shop.webp"
      alt="Green Ghost 🌿👻 Best Degen Weed Shop and Delivery"
      title="Green Ghost 🌿👻 Best Degen Weed Shop and Delivery"
      width={95}
      height={100}
      style={{ objectFit: 'contain' }}
      priority={true}
      sizes="95px"
      quality={75}
    />
  );
};
