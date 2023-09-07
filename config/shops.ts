export type Shop = {
  slug: string;
  name: string;
  hours: string;
  address: string;
  addresLink: string;
  reviewLink: string;
  description: string;
  descSeo: string;
  details: string;
  mapLink: string;
  images: string[];
};

export const shops: Shop[] = [
  {
    slug: 'karon',
    name: 'Degen Weed Shop in Karon',
    hours: 'Monday/Sunday 14h-00h.',
    address: '452 Patak Road, Karon, Mueang Phuket District, Phuket 83100',
    addresLink: 'https://goo.gl/maps/2mrscgVuBc73KRot8',
    reviewLink: 'https://g.page/r/CcPCrFf7RfRNEBM/review',
    details: 'Main Shop. All our buds and gadgets. Smoking room ...',
    description:
      "Your local cannabis haven nestled in the heart of beautiful Karon, just moments away from the vibrant Karon Market, the serene Karon Temple, and the pristine Karon Beach in Phuket, Thailand. \n\n Our Karon-based cannabis dispensary is your go-to destination for premium cannabis buds, a diverse selection of strains, delectable edibles, and more. We're dedicated to bringing the finest cannabis experience to the Karon community and its visitors. \n\n Convenience is key at Green Ghost Degen. Located near Tops Daily, you'll find it easy to access your favorite cannabis products. Whether you prefer the convenience of delivery, a quick and friendly pick-up service, or the speed of our drive-thru option, we've designed our services with your needs in mind. \n\n As a forward-thinking establishment, we embrace the digital age with NFTs (Non-Fungible Tokens) that offer unique and collectible cannabis-related digital assets. We also facilitate cryptocurrency transactions, making your shopping experience seamless and future-oriented. \n\n Green Ghost Degen Weed Shop is your gateway to exceptional cannabis products, all while immersing yourself in the charm and beauty of Karon, Phuket. Explore the wonders of this idyllic beachside town, and when you're ready to enhance your experience, we're here to serve you. \n\n Join us in Karon, where we merge cannabis culture with the beauty of southern Thailand.",
    descSeo:
      'Your local cannabis haven nestled in the heart of beautiful Karon, just moments away from the vibrant Karon Market, the serene Karon Temple, and the pristine Karon Beach in Phuket, Thailand.',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.456934535779!2d98.2985733!3d7.847151599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025d1fcbc13ff%3A0x4df445fb57acc2c3!2sGreen%20Ghost%20%7C%20Degen%20Weed%20Shop%20Karon!5e0!3m2!1sen!2sth!4v1688547648541!5m2!1sen!2sth',
    images: [
      '/media/green-ghost-degen-weed-shop-karon-phuket-thailand-01.webp',
      '/media/green-ghost-degen-weed-shop-karon-phuket-thailand-02.webp',
      '/media/green-ghost-degen-weed-shop-karon-phuket-thailand-03.webp',
    ],
  },
  {
    slug: 'phuket',
    name: 'Degen Weed Shop in Phuket',
    hours: 'Monday/Saturday 10h-19h. Sunday 10h-22h.',
    address: '17 Thalang Rd, Talat Yai, Mueang Phuket District, Phuket 83000',
    addresLink: 'https://goo.gl/maps/FEhBvjDY8Puwp87q9',
    reviewLink: 'https://g.page/r/CdEZf4I4iGn8EBE/review',
    details: 'Gadgets Shop. Grinders, bongs, rolling papers, ...',
    description:
      "your ultimate destination for cannabis enthusiasts in the heart of Phuket Town. Conveniently situated on historic Thalang Road, just steps away from the bustling Sunday Market, our shop is your go-to spot for all things cannabis accessories. \n\n At Green Ghost Degen in Phuket Town, we've curated an impressive selection of high-quality cannabis gadgets that elevate your smoking experience. Explore our extensive range of grinders, bongs, rolling papers, and more – all designed to enhance your cannabis rituals. \n\n Located amidst the vibrant energy of Phuket's Sunday Market, our shop embraces the spirit of this cultural hub. After enjoying the market's eclectic offerings, drop by Green Ghost Degen Weed Shop to discover a world of cannabis accessories that cater to both beginners and seasoned connoisseurs. \n\n We're proud to provide an array of stylish, functional, and innovative products that cater to your unique needs. Our friendly and knowledgeable staff are here to assist you in finding the perfect accessory that complements your cannabis journey. \n\n In the heart of Phuket Town's historic Thalang Road, Green Ghost Degen Weed Shop invites you to explore the intersection of tradition and innovation. As we embrace the latest trends in cannabis culture, we invite you to immerse yourself in the rich tapestry of Phuket's vibrant past. \n\n Visit us today and discover the best in cannabis accessories, only at Green Ghost Degen Weed Shop in Phuket Town.",
    descSeo:
      'your ultimate destination for cannabis enthusiasts in the heart of Phuket Town. Conveniently situated on historic Thalang Road, just steps away from the bustling Sunday Market, our shop is your go-to spot for all things cannabis accessories.',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15808.387850146597!2d98.387895!3d7.8849236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031353d385cf7%3A0xfc698838827f19d1!2sGreen%20Ghost%20%7C%20Degen%20Weed%20Shop%20Phuket!5e0!3m2!1sen!2sth!4v1682823349216!5m2!1sen!2sth',
    images: [
      '/media/green-ghost-degen-weed-shop-phuket-town-phuket-thailand-01.webp',
      '/media/green-ghost-degen-weed-shop-phuket-town-phuket-thailand-02.webp',
      '/media/green-ghost-degen-weed-shop-phuket-town-phuket-thailand-03.webp',
    ],
  },
  {
    slug: 'rawai',
    name: 'Degen Weed Shop in Rawai',
    hours: 'Monday/Sunday 16h-00h. Close on Saturday.',
    address: '69/53 Soi Saiyuan, Rawai, Mueang Phuket District, Phuket 83100',
    addresLink: 'https://goo.gl/maps/NRJB7PM1DsQSCHXW8',
    reviewLink: 'https://g.page/r/CZ-x7RFAO5t4EBE/review',
    details: 'My Weed Partner Shop. Same awesome weed. Rooftop ...',
    description:
      "your cannabis sanctuary in the heart of Rawai's lively Soi Saiyuan. Nestled amidst the bustling nightlife of lady bars and just a stone's throw away from the pristine shores of Nai Harn Beach, our shop offers a unique and elevated cannabis experience. \n\n At Green Ghost Degen in Rawai, we specialize in providing an extensive selection of cannabis products, from premium buds to exclusive strains. But what sets us apart is our rooftop oasis, a haven for stoners looking to enjoy their cannabis with panoramic views of the Rawai landscape. \n\n After exploring the vibrant nightlife of Soi Saiyuan, unwind with us on our rooftop, where you can savor your favorite cannabis products in a relaxed and picturesque setting. It's the perfect spot to connect with friends, take in the beautiful surroundings, and elevate your experience to new heights. \n\n Our knowledgeable and friendly staff are here to guide you through our carefully curated offerings, ensuring you find the perfect match for your cannabis preferences. And for those who seek the convenience of delivery or pick-up, we've got you covered. \n\n Green Ghost Degen Weed Shop is not just a destination; it's an experience. We invite you to immerse yourself in the Rawai lifestyle, where tradition meets modernity. Whether you're a seasoned connoisseur or new to the world of cannabis, our shop in Soi Saiyuan is your gateway to an unforgettable journey. \n\n Join us at Green Ghost Degen Weed Shop in Rawai, where we combine the excitement of the nightlife, the tranquility of the beach, and the joy of cannabis on our rooftop.",
    descSeo:
      "your cannabis sanctuary in the heart of Rawai's lively Soi Saiyuan. Nestled amidst the bustling nightlife of lady bars and just a stone's throw away from the pristine shores of Nai Harn Beach, our shop offers a unique and elevated cannabis experience.",
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15811.90431127206!2d98.3203122!3d7.7923573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa82f76285212d49%3A0x789b3b4011edb19f!2sGreen%20Ghost%20%7C%20Degen%20Weed%20Shop%20Rawai!5e0!3m2!1sen!2sth!4v1682822659232!5m2!1sen!2sth',
    images: [
      '/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-01.webp',
      '/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-02.webp',
      '/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-03.webp',
    ],
  },
];

export function getShopBySlug(slug: string): Shop | undefined {
  return shops.find((shop) => shop.slug === slug);
}

export function getShops(): Shop[] {
  return shops;
}

export function getShopImageUrls(shop: Shop): string[] {
  return shop.images.map((image) => `/media/${image}`);
}
