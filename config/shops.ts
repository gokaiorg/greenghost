export type Shop = {
  slug: string;
  name: string;
  hours: string;
  address: string;
  addresLink: string;
  reviewLink: string;
  tripadvisor: string;
  weedin: string;
  smokingskunk: string;
  restauguru: string;
  description: string;
  descSeo: string;
  details: string;
  mapLink: string;
  videoLink: string;
  images: string[];
};

export const shops: Shop[] = [
  {
    slug: 'rawai',
    name: 'Best Weed Shop Rawai',
    hours: 'Everyday 14h-2h.',
    address: '26, 19 Wiset Rd, Rawai, Amphoe Mueang Phuket, Phuket 83130',
    addresLink: 'https://maps.app.goo.gl/9kVoX6VbjmroaHgJ6',
    reviewLink: 'https://g.page/r/CYOr82juHaKhEBM/review',
    details: 'Ghost loundge 👻💨',
    tripadvisor:
      'https://www.tripadvisor.com.sg/Attraction_Review-g297934-d28129979-Reviews-Green_Ghost-Rawai_Phuket.html',
    weedin: 'https://weed.th/shop/2ab3e52b-83f8-4a73-a96f-a60e04774a17',
    smokingskunk: '',
    restauguru: 'https://restaurantguru.com/Green-Ghost-Thailand',
    description:
      "Welcome to the exclusive realm of Green Ghost Degen Weed Shop in Rawai, an avant-garde cannabis destination like no other. \n\n Green Ghost Degen Weed Shop in Rawai isn't just a dispensary; it's a lifestyle crafted for those who value both exclusivity and efficiency. Join us on a journey where quality, discretion, and convenience converge, setting a new standard for cannabis indulgence in Rawai.",
    descSeo:
      'Welcome to the exclusive realm of Green Ghost Degen Weed Shop in Rawai, an avant-garde cannabis destination like no other.',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76998.36702840267!2d98.33663!3d7.804923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502fd6cfeb7ef5%3A0xa1a21dee68f3ab83!2sGreen%20Ghost%20%F0%9F%8C%BF%F0%9F%91%BB%20Best%20Degen%20Weed%20Shop%20and%20Delivery!5e1!3m2!1sen!2sth!4v1724033204965!5m2!1sen!2sth',
    videoLink: 'https://www.youtube.com/embed/AhX9PlNbvPU',
    images: [
      '/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-01.webp',
      '/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-02.webp',
      '/media/green-ghost-degen-weed-shop-rawai-phuket-thailand-03.webp',
    ],
  },
  {
    slug: 'karon',
    name: 'Best Weed Shop Karon',
    hours: 'Monday/Saturday 18h-00h.',
    address: '452 Patak Road, Karon, Mueang Phuket District, Phuket 83100',
    addresLink: 'https://maps.app.goo.gl/GEuRczV3fnYnfy7z7',
    reviewLink: '#',
    details: 'Smoking area 💨',
    tripadvisor:
      'https://www.tripadvisor.com.sg/Attraction_Review-g1215780-d26518105-Reviews-Green_Ghost-Karon_Phuket.html',
    weedin: 'https://weed.th/shop/fe835e3b-d043-4672-af43-8cc039aa013b',
    smokingskunk:
      'https://smokingskunk.com/weed-in-thailand/green-ghost-degen-weed-shop-karon/',
    restauguru: '',
    description:
      "Your local cannabis haven nestled in the heart of beautiful Karon, just moments away from the vibrant Karon Market, the serene Karon Temple, and the pristine Karon Beach in Phuket, Thailand. \n\n Our Karon-based cannabis dispensary is your go-to destination for premium cannabis buds, a diverse selection of strains, delectable edibles, and more. We're dedicated to bringing the finest cannabis experience to the Karon community and its visitors. \n\n Convenience is key at Green Ghost Degen. Located near Tops Daily, you'll find it easy to access your favorite cannabis products. Whether you prefer the convenience of delivery, a quick and friendly pick-up service, or the speed of our drive-thru option, we've designed our services with your needs in mind. \n\n As a forward-thinking establishment, we embrace the digital age with NFTs (Non-Fungible Tokens) that offer unique and collectible cannabis-related digital assets. We also facilitate cryptocurrency transactions, making your shopping experience seamless and future-oriented. \n\n Green Ghost Degen Weed Shop is your gateway to exceptional cannabis products, all while immersing yourself in the charm and beauty of Karon, Phuket. Explore the wonders of this idyllic beachside town, and when you're ready to enhance your experience, we're here to serve you. \n\n Join us in Karon, where we merge cannabis culture with the beauty of southern Thailand.",
    descSeo:
      'Your local cannabis haven nestled in the heart of beautiful Karon, just moments away from the vibrant Karon Market, the serene Karon Temple, and the pristine Karon Beach in Phuket, Thailand.',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76995.63991439389!2d98.2785734!3d7.8197138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025cdbe048e47%3A0xe9e1c35ad359e18f!2s452%20Patak%20Rd%2C%20Tambon%20Karon%2C%20Amphoe%20Mueang%20Phuket%2C%20Chang%20Wat%20Phuket%2083100!5e1!3m2!1sen!2sth!4v1724033960215!5m2!1sen!2sth',
    videoLink: 'https://www.youtube.com/embed/lGpxomxAsoI?si=peQos07ZiOAWWeP6',
    images: [
      '/media/green-ghost-degen-weed-shop-karon-phuket-thailand-01.webp',
      '/media/green-ghost-degen-weed-shop-karon-phuket-thailand-02.webp',
      '/media/green-ghost-degen-weed-shop-karon-phuket-thailand-03.webp',
    ],
  },
  {
    slug: 'phuket',
    name: 'Best Weed Shop Phuket',
    hours: 'Everyday 8h-2h.',
    address: '17 Thalang Rd, Talat Yai, Mueang Phuket District, Phuket 83000',
    addresLink: 'https://maps.app.goo.gl/QsL9wMfgn7WJj6bL9',
    reviewLink: 'https://g.page/r/CdEZf4I4iGn8EBE/review',
    details: 'Weed delivery only 🚚',
    tripadvisor: '',
    weedin: 'https://weed.th/shop/0d9dde2a-13bd-4167-b063-577af34971e8',
    smokingskunk: '',
    restauguru: '',
    description:
      "your ultimate destination for cannabis enthusiasts in the heart of Phuket Town. Conveniently situated on historic Thalang Road, just steps away from the bustling Sunday Market, our shop is your go-to spot for all things cannabis accessories. \n\n At Green Ghost Degen in Phuket Town, we've curated an impressive selection of high-quality cannabis gadgets that elevate your smoking experience. Explore our extensive range of grinders, bongs, rolling papers, and more – all designed to enhance your cannabis rituals. \n\n Located amidst the vibrant energy of Phuket's Sunday Market, our shop embraces the spirit of this cultural hub. After enjoying the market's eclectic offerings, drop by Green Ghost Degen Weed Shop to discover a world of cannabis accessories that cater to both beginners and seasoned connoisseurs. \n\n We're proud to provide an array of stylish, functional, and innovative products that cater to your unique needs. Our friendly and knowledgeable staff are here to assist you in finding the perfect accessory that complements your cannabis journey. \n\n In the heart of Phuket Town's historic Thalang Road, Green Ghost Degen Weed Shop invites you to explore the intersection of tradition and innovation. As we embrace the latest trends in cannabis culture, we invite you to immerse yourself in the rich tapestry of Phuket's vibrant past. \n\n Visit us today and discover the best in cannabis accessories, only at Green Ghost Degen Weed Shop in Phuket Town.",
    descSeo:
      'your ultimate destination for cannabis enthusiasts in the heart of Phuket Town. Conveniently situated on historic Thalang Road, just steps away from the bustling Sunday Market, our shop is your go-to spot for all things cannabis accessories.',
    mapLink:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4811.472213596345!2d98.385320075006!3d7.884923592137618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031353d385cf7%3A0xfc698838827f19d1!2sGreen%20Ghost%20%F0%9F%8C%BF%F0%9F%91%BB%20Phuket%20Town%20%7C%20Weed%20Delivery!5e1!3m2!1sen!2sth!4v1724034029939!5m2!1sen!2sth',
    videoLink: 'https://www.youtube.com/embed/qviAMP3d3O8?si=kMAcjzxR3EfRhitW',
    images: [
      '/media/green-ghost-degen-weed-shop-phuket-town-phuket-thailand-01.webp',
      '/media/green-ghost-degen-weed-shop-phuket-town-phuket-thailand-02.webp',
      '/media/green-ghost-degen-weed-shop-phuket-town-phuket-thailand-03.webp',
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
