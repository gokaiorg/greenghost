import Image from 'next/image';

export const ImgEarth = () => {
  return (
    <Image
      src="/media/green-ghost-degen-weed-shop.webp"
      alt="Best Degen Weed Shop and Delivery"
      title="Best Degen Weed Shop and Delivery"
      width={95}
      height={91}
      style={{ objectFit: 'contain' }}
      priority={true}
      sizes="95px"
      quality={75}
    />
  );
};
