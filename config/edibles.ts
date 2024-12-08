export type Edible = {
  slug: string;
  name: string;
  packaging: string;
  THC: string;
  CBD: string;
  effects: string;
  ingretiens: string;
  price: number;
  description: string;
  descSeo: string;
  images: string[];
  imgDesc: string;
  quantity: number;
};

export const edibles: Edible[] = [
  {
    slug: 'thc-honey-stick',
    name: 'THC Honey Stick',
    price: 100,
    packaging: '1 stick',
    THC: '20',
    CBD: '0',
    effects: 'Happy, Relaxed, Sleepy',
    ingretiens: 'Honey',
    quantity: 1,
    description:
      "Discover a delightful twist to your cannabis experience with our THC Honey Sticks, available in three enticing flavors: Lemon Hybrid, Cinnamon Indica, and Peppermint Sativa. Each honey stick is infused with 20mg of high-quality THC, making them a versatile and convenient option for both new and seasoned cannabis enthusiasts. \n\n The Lemon Hybrid flavor delivers a balanced experience, combining the best of both worlds to elevate your mood and boost creativity. Cinnamon Indica offers a rich, soothing taste perfect for unwinding after a long day or preparing for a restful night. Meanwhile, the Peppermint Sativa provides a refreshing burst that invigorates the senses and enhances focus, making it an excellent choice for daytime use. \n\n These THC-infused honey sticks are a delicious and discreet way to consume cannabis. Add them to your favorite drinks, drizzle them over snacks, or enjoy them straight out of the package. Crafted with natural honey and infused with premium cannabis extracts, our honey sticks are designed to deliver a consistent dosage and a delightful flavor profile with every use. Whether you're seeking relaxation, rejuvenation, or a creative spark, our THC Honey Sticks offer a convenient and enjoyable way to incorporate cannabis into your daily routine.",
    descSeo:
      'Enjoy THC Honey Sticks in Lemon Hybrid, Cinnamon Indica, and Peppermint Sativa. Infused with 20mg THC, these delicious flavors elevate your cannabis experience.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-honey-stick-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-honey-stick-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-honey-stick-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Honey Stick THC Edible',
  },
  {
    slug: 'cbd-honey-stick',
    name: 'CBD Honey Stick',
    price: 100,
    packaging: '1 stick',
    THC: '0',
    CBD: '40',
    effects: 'Happy, Relaxed, Sleepy',
    ingretiens: 'Honey',
    quantity: 1,
    description:
      'Experience the calming and therapeutic benefits of our CBD Honey Stick, made with all-natural honey flavor and infused with 40mg of premium CBD. This delightful treat offers a sweet, rich flavor that complements your favorite beverages or snacks. The natural honey provides a smooth, comforting sweetness, perfect for those looking for a holistic addition to their daily routine. Each stick is carefully crafted to deliver consistent dosing, making it an ideal choice for microdosing or managing your wellness on the go. \n\n Whether you’re starting your day with a touch of calm or winding down in the evening, our CBD Honey Stick offers a convenient, delicious way to enjoy the benefits of CBD. Free of artificial flavors, our sticks are the purest way to enhance your relaxation and focus while indulging in a naturally sweet treat. Add it to tea, drizzle over toast, or enjoy it straight from the stick — your path to tranquility starts here.',
    descSeo:
      'Enjoy the natural sweetness of CBD with our 40mg CBD Honey Stick. All-natural honey flavor, perfect for relaxation and wellness. Shop now for a calming treat!',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-cbd-honey-stick-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-cbd-honey-stick-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-cbd-honey-stick-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Honey Stick CBD Edible',
  },
  {
    slug: 'thc-cookies',
    name: 'THC Cookies',
    price: 800,
    packaging: '4 Cookies',
    THC: '240',
    CBD: '0',
    effects: 'Creative, Happy, Euphoric',
    ingretiens: 'Cannabutter, Eggs, Flour, Dried Grapes',
    quantity: 1,
    description:
      'Experience the perfect blend of flavor and relaxation with our "Cocos Supreme" chocolate chip cookie bites. Each cookie is infused with 60mg of high-quality THC, delivering a powerful punch of blissful euphoria and relaxation in every bite. Crafted with rich chocolate chips and a delectable, buttery base, these cookies are a delightful way to elevate your day or unwind after a long one. Designed for both the seasoned cannabis connoisseur and those new to edibles, the "Cocos Supreme" cookies offer a potent yet enjoyable experience. \n\n Enjoy a great deal with our special pack of 4 cookies, perfect for sharing with friends or savoring over multiple sessions. Whether you’re looking to enjoy a movie night, add a sweet twist to a weekend adventure, or simply relax at home, our "Cocos Supreme" THC cookies offer the ideal combination of flavor, potency, and convenience. With a discounted price for the pack of 4, you get more for less, making it easy to treat yourself to premium quality without breaking the bank. Elevate your snack game with "Cocos Supreme" today!',
    descSeo:
      'Indulge in Cocos Supreme THC cookies – 4 chocolate chip cookies, each with 60mg of THC. Enjoy a sweet, potent treat with a discount on the pack!',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookies-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Cookies THC Edible',
  },
  {
    slug: 'thc-cookie',
    name: 'THC Cookie',
    price: 250,
    packaging: '1 Cookie',
    THC: '60',
    CBD: '0',
    effects: 'Creative, Happy, Euphoric',
    ingretiens: 'Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      'Satisfy your sweet tooth and elevate your senses with our "Cocos Supreme" Chocolate Chip Cookie Bites, infused with 60mg of premium THC in every bite. These delightful mini cookies combine the comforting taste of classic chocolate chip cookies with the powerful effects of cannabis, delivering an irresistible treat that’s both delicious and potent. Each bite-sized cookie is crafted with high-quality ingredients and packed with rich chocolate chips, offering a perfect balance of sweet flavor and satisfying crunch. \n\n Ideal for experienced cannabis enthusiasts, "Cocos Supreme" is designed to provide a consistent and enjoyable high with every cookie. Whether you\'re relaxing at home, adding a fun twist to a social gathering, or simply treating yourself to a unique snack, these THC-infused chocolate chip cookies are sure to please. With 60mg of THC per bite, they are perfect for those looking for a strong, tasty, and easy-to-dose edible option. \n\n Remember to enjoy responsibly by starting with a small bite and waiting to feel the effects before consuming more. "Cocos Supreme" Chocolate Chip Cookie Bites are a perfect way to indulge your taste buds while experiencing the uplifting and relaxing effects of THC. Take your cannabis enjoyment to the next level with these delicious cookie bites that deliver both flavor and potency in every bite.',
    descSeo:
      'Experience "Cocos Supreme" THC Chocolate Chip Cookie Bites – 60mg of THC per cookie. Delicious, potent, and perfect for a tasty cannabis treat. Enjoy responsibly.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookie-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookie-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-cookie-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Cookie THC Edible',
  },
  {
    slug: 'thc-stroopwafel',
    name: 'THC Stroopwafel',
    price: 300,
    packaging: '1 Stroopwafel',
    THC: '30',
    CBD: '0',
    effects: 'Creative, Happy, Euphoric',
    ingretiens: 'Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      'Treat yourself to a decadent delight with our "Double Dutch" THC Stroopwafels, a delicious twist on a classic Dutch treat. Each stroopwafel is infused with 30mg of premium THC, perfectly balanced to provide a gentle and relaxing high that can enhance any moment. Our "Double Dutch" stroopwafels are crafted with two thin, crispy waffles sandwiching a gooey caramel syrup filling, then dipped in rich, velvety chocolate for an extra layer of indulgence. \n\n Whether you\'re looking to elevate your coffee break, enjoy a relaxing evening snack, or add a sweet touch to your social gatherings, "Double Dutch" THC stroopwafels offer a unique blend of flavors and a satisfying texture. Ideal for both cannabis enthusiasts and those new to edibles, each bite offers a sweet and smooth sensation, coupled with a mild yet uplifting high. Experience the perfect harmony of caramel, chocolate, and cannabis in every bite. Elevate your taste buds and your mood with "Double Dutch" – the stroopwafel reimagined for the modern cannabis lover!',
    descSeo:
      'Enjoy our "Double Dutch" THC Stroopwafels – a delicious chocolate-dipped treat with 30mg of THC. Perfect for a relaxing snack or to elevate any moment!',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-stroopwafel-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-stroopwafel-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-stroopwafel-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Stroopwafel THC Edible',
  },
  {
    slug: 'thc-gummies',
    name: 'THC Gummies',
    price: 350,
    packaging: '5 Gummies',
    THC: '50',
    CBD: '0',
    effects: 'Creative, Happy, Euphoric',
    ingretiens: 'Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      "Experience a delightful dose of relaxation with our THC Gummies! Each package contains 5 gummies, with each bite-sized treat delivering 10mg of premium THC for a total of 50mg per pack. These gummies are crafted to offer a consistent and enjoyable high, whether you're looking to unwind after a long day, enhance your creativity, or simply add a little fun to your routine. The perfect combination of flavor and potency, our THC Gummies are a discreet and tasty way to enjoy the benefits of cannabis wherever you are. \n\n Our THC Gummies are ideal for both beginners and seasoned cannabis enthusiasts. With a mild, controlled dose in each gummy, they allow you to easily find your sweet spot, whether you're microdosing or seeking a moderate high. Made with high-quality ingredients, these gummies are as delicious as they are effective, offering a burst of flavor in every bite. Enjoy the flexibility of a low-dose edible that you can adjust to your personal needs, all while savoring a tasty treat.",
    descSeo:
      'Enjoy our THC Gummies – 5 delicious gummies, 10mg THC each, totaling 50mg per pack. Perfect for a tasty, controlled, and consistent cannabis experience!',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-gummies-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-gummies-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-gummies-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Gummies THC Edible',
  },
  {
    slug: 'thc-pretzels',
    name: 'THC Pretzels',
    price: 200,
    packaging: '6 Pretzels',
    THC: '30',
    CBD: '0',
    effects: 'Creative, Happy, Euphoric',
    ingretiens: 'Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      'Satisfy your cravings with "Chubby Twists," our delectable THC-infused chocolate-covered pretzels. Each pack of "Chubby Twists" contains 6 pretzels, each loaded with 5mg of premium THC for a total of 30mg per package. These bite-sized delights combine the perfect balance of salty, crunchy pretzels with a rich, creamy chocolate coating, delivering a unique snack experience that will elevate your taste buds and your mood. \n\n Perfect for microdosing throughout the day or enjoying a satisfying treat in one go, "Chubby Twists" offer a gentle and enjoyable high without overpowering your senses. Whether you\'re looking for a sweet and salty snack to pair with your favorite drink, a discreet edible for a casual outing, or just a little something to unwind with after a long day, "Chubby Twists" have got you covered. Each pretzel is carefully crafted to deliver a consistent, mild dose of THC, making them ideal for both newcomers and experienced cannabis consumers alike. Enjoy the fun, flavor, and relaxation that come with every twist!',
    descSeo:
      'Indulge in "Chubby Twists" THC Pretzels – chocolate-covered, medicated delights with 30mg of THC (6 x 5mg). Perfect for a balanced, tasty high!',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-pretzels-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-pretzels-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-pretzels-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Pretzels THC Edible',
  },
  {
    slug: 'thc-brownie',
    name: 'THC Brownie',
    price: 250,
    packaging: '1 Brownie',
    THC: '60',
    CBD: '0',
    effects: 'Happy, Relaxed, Sleepy',
    ingretiens: 'Dark chocolate, Sugar, Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      'Indulge in the ultimate cannabis-infused treat with our "Brother Browns" Super Brownie Bites, each packed with 60mg of premium THC. These delicious, bite-sized brownies are perfect for those who love the rich, fudgy taste of classic chocolate brownies but want a little extra kick. Made with high-quality ingredients, these brownies provide a potent dose of relaxation and euphoria in every bite, making them ideal for experienced cannabis consumers looking for a powerful and tasty edible. \n\n Crafted to deliver a consistent and enjoyable experience, "Brother Browns" are expertly baked to perfection, offering a soft, chewy texture with a deep chocolate flavor that melts in your mouth. Whether you\'re unwinding after a long day, enhancing a social gathering, or simply seeking a delicious way to elevate your mood, these THC brownie bites are the perfect choice. Enjoy them at home, share them with friends, or take them on the go – however you choose to indulge, "Brother Browns" promise an unforgettable edible experience. \n\n Please consume responsibly, starting with a small bite to gauge your tolerance. Each "Brother Browns" contains 60mg of THC, ensuring a satisfying and potent cannabis experience. Enjoy the rich, chocolaty goodness and potent effects of these brownie bites, the perfect treat for any cannabis lover.',
    descSeo:
      'Enjoy "Brother Browns" THC Brownie Bites – 60mg of premium THC in each delicious bite. Perfect for a potent and tasty edible experience. Consume responsibly.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownie-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Brownie THC Edible',
  },
  {
    slug: 'thc-muffin',
    name: 'THC Muffin',
    price: 400,
    packaging: '1 Muffin',
    THC: '150',
    CBD: '0',
    effects: 'Uplifted, Relaxed, Creative',
    ingretiens: 'Dark chocolate, Sugar, Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      'Indulge in the ultimate cannabis treat with our THC Muffin, crafted using an exclusive blend of premium Exotic Genetix weed strains. Each muffin is infused with a potent 150 mg of THC, delivering a powerful and enjoyable experience tailored to seasoned enthusiasts. With a rich chocolate taste, this muffin offers the perfect balance of decadent flavor and euphoric effects. \n\n The THC Muffin isn’t just about indulgence—it’s an adventure. The blend of Exotic Genetix strains ensures a complex profile of cannabinoids and terpenes, enhancing the overall experience. The muffin delivers a gradual onset of effects, starting with a cerebral buzz that uplifts your mood and sparks creativity. As the high deepens, you’ll notice a calming wave of relaxation enveloping your body, making it ideal for unwinding after a long day or elevating social moments. \n\n Perfect for recreational use and therapeutic relief, this muffin can help alleviate symptoms of chronic pain, stress, and anxiety. It’s also a great choice for those battling insomnia, as the relaxing properties may ease you into a restful sleep. Convenient, discreet, and irresistibly tasty, the THC Muffin is the perfect blend of flavor and potency.',
    descSeo:
      'Experience indulgence with our THC Muffin: 150 mg of premium Exotic Genetix strains, rich chocolate taste, uplifting effects, and relaxing relief in every bite.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-muffin-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-muffin-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-muffin-cover.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Muffin THC Edible',
  },
  {
    slug: 'thc-brownies',
    name: 'THC Brownies',
    price: 800,
    packaging: '4 Brownies',
    THC: '800',
    CBD: '0',
    effects: 'Happy, Relaxed, Sleepy',
    ingretiens: 'Dark chocolate, Sugar, Cannabutter, Eggs, Flour',
    quantity: 1,
    description:
      "Indulge in the ultimate cannabis-infused treat with our THC brownies. Crafted to satisfy both your sweet tooth and your cannabis cravings, each batch comes with four deliciously rich, chocolate-flavored brownies. Every piece is infused with a potent 200mg of THC, totaling an impressive 800mg per pack. Perfectly baked to a soft, fudgy texture, our brownies offer an ideal way to relax, unwind, or elevate your experience. \n\n Whether you're looking for a special treat to enhance a gathering with friends or a solo session to help you unwind, these THC brownies are designed for maximum enjoyment and effect. The robust chocolate flavor pairs perfectly with the cannabis infusion, masking any hint of the THC while delivering a deeply satisfying dessert experience. \n\n Enjoy the classic taste of chocolate in every bite while benefiting from a powerful THC infusion. Please consume responsibly, as these brownies pack a potent punch designed for those who appreciate a stronger cannabis edible.",
    descSeo:
      'Indulge in our THC brownies with 200mg THC per piece (800mg total). Delicious chocolate flavor, perfectly infused for a potent and satisfying cannabis treat.',
    images: [
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownies-product-01.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownies-cover.webp',
      '/media/green-ghost-degen-weed-shop-menu-edible-thc-brownies-product-02.webp',
    ],
    imgDesc: 'Green Ghost 🌿👻 Degen Weed Shop Best Brownies THC Edible',
  },
];

export function getEdibleBySlug(slug: string): Edible | undefined {
  return edibles.find((edible) => edible.slug === slug);
}

export function getEdibles(): Edible[] {
  return edibles;
}

export function getEdibleImageUrls(edible: Edible): string[] {
  return edible.images.map((image) => `/media/${image}`);
}
