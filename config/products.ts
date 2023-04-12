export type Product = {
  slug: string;
  name: string;
  dominance: string;
  indica: string;
  sativa: string;
  THC: string;
  CBD: string;
  effects: string;
  price: string;
  description: string;
  descSeo: string;
  images: string[];
  imgDesc: string;
  source: string;
};

export const products: Product[] = [
  {
    slug: 'og-poison',
    name: 'OG Poison',
    price: '250',
    dominance: 'Indica Dominant',
    indica: '70',
    sativa: '30',
    THC: '22',
    CBD: 'undefined',
    effects: 'Sleepy, Hungry, Tingly',
    description:
      "OG Poison, also referred to as Poison OG, is a potent hybrid that can induce drowsiness after the initial consumption. This strain was specifically crafted to combat severe insomnia and its effects are quick-acting. \n\n However, it is not recommended for individuals who wish to remain productive, as it is intended solely for nighttime use. With a distinct piney scent and strong lasting effects, OG Poison delivers a deeply relaxing and heavy-bodied experience for its users. Its unique qualities make it a desirable choice for those seeking a peaceful night's rest. \n\n Additionally, due to its soothing properties, OG Poison may also be beneficial for those experiencing stress or anxiety. From an SEO perspective, this rephrasing highlights the key benefits and features of the strain while incorporating relevant keywords for search engines to recognize.",
    descSeo:
      'OG Poison, also referred to as Poison OG, is a potent hybrid that can induce drowsiness after the initial consumption. This strain was specifically crafted to combat severe insomnia and its effects are quick-acting.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-og-poison-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-og-poison-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-og-poison-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud OG Poison',
    source: 'https://www.leafly.com/strains/og-poison',
  },
  {
    slug: 'runtz',
    name: 'Runtz',
    price: '250',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '19/29',
    CBD: 'undefined',
    effects: 'Talkative, Happy, Giggly',
    description:
      'Runtz, also referred to as "Runtz OG," is a rare and highly sought-after hybrid marijuana strain created by the Cookies Fam by crossing Zkittlez with Gelato. It\'s recognized for its exceptional fruity flavor profile that mimics the aroma of sugary candy we all love. \n\n Its popularity has been rising steadily, and it was named Leafly Strain of the Year in 2020. According to growers, Runtz has resinous buds that range in color from deep purple to vibrant lime green. \n\n It boasts a smooth and creamy smoke that is easy to inhale. This strain is famous for its long-lasting uplifting effects and euphoric highs. Purple Caper Seeds also produced the same cross and marketed it as Gelato Zkittlez.',
    descSeo:
      'Runtz, also referred to as "Runtz OG," is a rare and highly sought-after hybrid marijuana strain created by the Cookies Fam by crossing Zkittlez with Gelato. It\'s recognized for its exceptional fruity flavor profile that mimics the aroma of sugary candy we all love.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-runtz-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-runtz-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-runtz-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud Runtz',
    source: 'https://www.leafly.com/strains/runtz',
  },
  {
    slug: 'green-gelato',
    name: 'Green Gelato',
    price: '300',
    dominance: 'Indica Dominant',
    indica: '55',
    sativa: '45',
    THC: '17/25',
    CBD: 'undefined',
    effects: 'Euphoric, Aroused, Happy',
    description:
      "Green Gelato is a popular hybrid cannabis strain that offers the best of both worlds with its balanced indica and sativa genetics. This strain is a result of crossing Sunset Sherbet and Thin Mint Girl Scout Cookies, two renowned strains that contribute to Green Gelato's unique characteristics. \n\n Consumers who have smoked Green Gelato report that the strain's effects come on quickly, inducing a euphoric high accompanied by strong feelings of relaxation. This strain's balanced effects make it ideal for those seeking relief from pain, fatigue, and insomnia, while still remaining mentally stimulated and productive.",
    descSeo:
      "Green Gelato is a popular hybrid cannabis strain that offers the best of both worlds with its balanced indica and sativa genetics. This strain is a result of crossing Sunset Sherbet and Thin Mint Girl Scout Cookies, two renowned strains that contribute to Green Gelato's unique characteristics.",
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-green-gelato-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-green-gelato-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-green-gelato-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Green Gelato',
    source: 'https://www.leafly.com/strains/green-gelato',
  },
  {
    slug: 'gelato-dream',
    name: 'Gelato Dream',
    price: '350',
    dominance: 'Sativa Dominant',
    indica: '30',
    sativa: '70',
    THC: '20/30',
    CBD: 'undefined',
    effects: 'Euphoric, Focused, Happy',
    description:
      "With the combination of the original Gelato #41 and a male Loud Dream, Gelato Dream was created, and it's a strain that has been improved upon. \n\n This cookie strain boasts big yields for growers and a smooth, sweet, and fruity terpene profile for consumers. \n\n The high from Gelato Dream induces deep relaxation, along with a sense of euphoria and focus. If you're looking for a sweet and satisfying experience, Gelato Dream may be the perfect strain for you.",
    descSeo:
      "With the combination of the original Gelato #41 and a male Loud Dream, Gelato Dream was created, and it's a strain that has been improved upon.",
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-gelato-dream-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-gelato-dream-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-gelato-dream-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Gelato Dream',
    source: 'https://www.leafly.com/strains/gelato',
  },
  {
    slug: 'white-runtz',
    name: 'White Runtz',
    price: '350',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '23/24',
    CBD: 'undefined',
    effects: 'Tingly, Relaxed, Euphoric',
    description:
      "White Runtz is a highly potent hybrid marijuana strain, resulting from the crossbreeding of Gelato and Zkittlez. Its strong effects are long-lasting, and leave you feeling relaxed and tingly. \n\n White Runtz is famous for its sweet taste that tingles your senses with every puff. The strain's buds are distinctively white, resembling a snowy landscape, due to the abundance of trichomes. \n\n White Runtz is a popular choice among medical marijuana patients who use it to alleviate chronic pain, stress, and anxiety.",
    descSeo:
      'White Runtz is a highly potent hybrid marijuana strain, resulting from the crossbreeding of Gelato and Zkittlez. Its strong effects are long-lasting, and leave you feeling relaxed and tingly.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-white-runtz-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-white-runtz-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-white-runtz-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud White Runtz',
    source: 'https://www.leafly.com/strains/white-runtz',
  },
  {
    slug: 'banana-kush',
    name: 'Banana Kush',
    price: '400',
    dominance: 'Indica Dominant',
    indica: '60',
    sativa: '40',
    THC: '18/25',
    CBD: 'undefined',
    effects: 'Talkative, Sleeppy, Giggly',
    description:
      'Banana Kush, also known as "Larry Bird" and "Banana Kush #42," is a popular hybrid cannabis strain that offers the best of both worlds with its balanced indica and sativa genetics. This strain is a result of crossing Sunset Sherbet and Thin Mint Girl Scout Cookies, two renowned strains that contribute to Banana Kush\'s unique characteristics. \n\n Consumers who have smoked Banana Kush report that the strain\'s effects come on quickly, inducing a euphoric high accompanied by strong feelings of relaxation. This strain\'s balanced effects make it ideal for those seeking relief from pain, fatigue, and insomnia, while still remaining mentally stimulated and productive.',
    descSeo:
      'Banana Kush, also known as "Larry Bird" and "Banana Kush #42," is a popular hybrid cannabis strain that offers the best of both worlds with its balanced indica and sativa genetics. This strain is a result of crossing Sunset Sherbet and Thin Mint Girl Scout Cookies, two renowned strains that contribute to Banana Kush\'s unique characteristics.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-kush-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-kush-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-kush-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud Banana Kush',
    source: 'https://www.leafly.com/strains/banana-kush',
  },
  {
    slug: 'jack-herer',
    name: 'Jack Herer',
    price: '450',
    dominance: 'Sativa Dominant',
    indica: '20',
    sativa: '80',
    THC: '19/29',
    CBD: 'undefined',
    effects: 'Energetic, Creative, Uplifted',
    description:
      'Jack Herer, also known as "JH," "The Jack," "Premium Jack," and "Platinum Jack" is a sativa-dominant hybrid marijuana strain named after the marijuana activist and author of The Emperor Wears No Clothes. \n\n Jack Herer is a balanced hybrid strain with a high THC content that produces a mixed head and body effect. It\'s known to provide a sense of relaxation and is often enjoyed in the evening to ease stress. \n\n Jack Herer was first created in the Netherlands in the mid-1990s and was later distributed by Dutch pharmacies as a recognized medical-grade strain. Its spicy, pine-scented aroma has won numerous awards for its quality and potency.',
    descSeo:
      'Jack Herer, also known as "JH," "The Jack," "Premium Jack," and "Platinum Jack" is a sativa-dominant hybrid marijuana strain named after the marijuana activist and author of The Emperor Wears No Clothes.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-jack-herer-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-jack-herer-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-jack-herer-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud Jack Herer',
    source: 'https://www.leafly.com/strains/jack-herer',
  },
  {
    slug: 'chem-dog',
    name: 'Chem Dog',
    price: '600',
    dominance: 'Indica Dominant',
    indica: '55',
    sativa: '45',
    THC: '15/20',
    CBD: 'undefined',
    effects: 'Euphoric, Uplifted, Creative',
    description:
      'Chemdawg, also known as "Chemdog," is a legendary hybrid cannabis strain created and distributed by breeder Chemdog since 1991. \n\n Chemdawg has become a staple strain in the cannabis world and has been responsible for some of the most famous strains, including Sour Diesel and OG Kush. It has a diesel-like aroma that is strong and pungent, making it easily recognizable from afar. However, new users should use caution as it can be very potent. Chemdawg typically produces a cerebral experience, coupled with a strong heavy-bodied feeling. \n\n Medical marijuana patients often choose this strain to help alleviate symptoms associated with stress, anxiety, and pain. Overall, Chemdawg is a versatile strain that is a favorite among cannabis enthusiasts, with its unique history and powerful effects.',
    descSeo:
      'Chemdawg, also known as "Chemdog," is a legendary hybrid cannabis strain created and distributed by breeder Chemdog since 1991.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-chem-dog-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-chem-dog-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-chem-dog-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Green Gelato',
    source: 'https://www.leafly.com/strains/chemdawg',
  },
  {
    slug: 'moon-fruit',
    name: 'Moon Fruit',
    price: '600',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '20/22',
    CBD: 'undefined',
    effects: 'Relaxed, Happy, Talkative',
    description:
      'Moon Fruit is a highly sought-after cannabis strain that boasts a tantalizing taste profile and visually stunning appearance. Its unique blend of hard candy, exotic passion fruit, lavender, blueberry, and vanilla/raspberry zingers make for a deluxe connoisseur experience that is all about flexing on taste and smell. \n\n This strain has an impressive lineage, derived from the crossing of Cherry Pie, Tangie, and a rare Indica-dominant version of the famous Girl Scout Cookies. As a result, Moon Fruit grows with a symmetrical structure, producing medium-sized, ultra-dense flowers that are simply drop-dead gorgeous.',
    descSeo:
      'Moon Fruit is a highly sought-after cannabis strain that boasts a tantalizing taste profile and visually stunning appearance. Its unique blend of hard candy, exotic passion fruit, lavender, blueberry, and vanilla/raspberry zingers make for a deluxe connoisseur experience that is all about flexing on taste and smell.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-moon-fruit-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-moon-fruit-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-moon-fruit-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud Moon Fruit',
    source:
      'https://www.leafly.com/brands/gardeners/products/gardeners-moonfruit-flower',
  },
  {
    slug: 'banana-daddy',
    name: 'Banana Daddy',
    price: '650',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '21/30',
    CBD: '1/3',
    effects: 'Happy, Talktative, Relaxed',
    description:
      "With Banana Daddy, Ethos Genetics has successfully combined two fruity strains, Granddaddy Purp and Banana Hammock R1, to create an exceptional cannabis strain. The result is a visually stunning plant with large, dense, and dark purple buds that emit a delightful aroma of bubblegum and gas. \n\n Despite its high THC content, Banana Daddy provides a mellow, giggly high that is perfect for unwinding in the evening. This strain's relaxing effects are ideal for socializing and having fun with friends. \n\n If you're a fan of fruity strains and looking for a new strain to add to your collection, Banana Daddy is definitely worth trying. This strain is sure to impress with its unique terpene profile and relaxing effects. So, grab some Banana Daddy and enjoy a mellow evening with friends.",
    descSeo:
      'With Banana Daddy, Ethos Genetics has successfully combined two fruity strains, Granddaddy Purp and Banana Hammock R1, to create an exceptional cannabis strain. The result is a visually stunning plant with large, dense, and dark purple buds that emit a delightful aroma of bubblegum and gas.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-daddy-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-daddy-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-banana-daddy-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Banana Daddy',
    source: 'https://www.leafly.com/strains/banana-daddy',
  },
  {
    slug: 'orange-velvet',
    name: 'Orange Velvet',
    price: '700',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '18/22',
    CBD: 'undefined',
    effects: 'Aroused, Uplifted, Energetic',
    description:
      "Looking for a unique strain that tastes and smells like an Orange Dreamsicle? Look no further than Orange Velvet, a rare gem created by MzJill Genetics. \n\n While its effects may not be overpowering, its citrusy and creamy aroma and taste make up for it. The high provides just the right amount of euphoria and focus for a duration of 2 to 3 hours, making it perfect for those looking to unwind without getting too couch-locked. \n\n Additionally, Orange Velvet has been known to help alleviate light pain. While it's no longer widely available, keep an eye out for this strainv at your local dispensary and stock up when you find it!",
    descSeo:
      'Looking for a unique strain that tastes and smells like an Orange Dreamsicle? Look no further than Orange Velvet, a rare gem created by MzJill Genetics.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-orange-velvet-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-orange-velvet-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-orange-velvet-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Orange Velvet',
    source: 'https://www.leafly.com/strains/orange-velvet',
  },
  {
    slug: 'platinum-punch',
    name: 'Platinum Punch',
    price: '750',
    dominance: 'Sativa Dominant',
    indica: '30',
    sativa: '70',
    THC: '15/25',
    CBD: 'undefined',
    effects: 'Focus, Giggly, Relaxed',
    description:
      "Platinum Punch is a sativa-dominante hybrid strain that results from crossing Platinum Wreck and Fruit Punch. Its effects are believed to offer relaxation and focus, making it a great option for both daytime and evening use. \n\n This strain's taste is described as herbal with subtle hints of citrus and pepper, providing a delightful sensory experience. Platinum Punch features dense, light green buds that are dusted with trichomes, giving it a frosty appearance. \n\n Medical marijuana patients choose Platinum Punch to relieve symptoms associated with stress, anxiety, and depression. Growers appreciate its moderate growth and average flowering time, making it a great strain for those who are just starting.",
    descSeo:
      'Platinum Punch is a sativa-dominante hybrid strain that results from crossing Platinum Wreck and Fruit Punch. Its effects are believed to offer relaxation and focus, making it a great option for both daytime and evening use.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-platinum-punch-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-platinum-punch-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-platinum-punch-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Platinum Punch',
    source: 'https://www.leafly.com/strains/platinum-punch',
  },
  {
    slug: 'lemon-berry-candy',
    name: 'Lemon Berry Candy',
    price: '800',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '25',
    CBD: '3',
    effects: 'Creative, Energetic, Talkative',
    description:
      'Lemon Berry Candy OG, a strain from Ethos Genetics, is a cross between Las Vegas Lemon Skunk and LGBT (Lemon Grape Bubba Temple). \n\n This unique hybrid boasts trichome-rich buds with a flavor profile that includes candied lemons, sweet berries, and subtle gassy undertones. \n\n Lemon Berry Candy OG is a favorite among concentrate enthusiasts due to its high resin production. Users have reported feeling elevated, energized, and engaged after just one puff.',
    descSeo:
      'Lemon Berry Candy OG, a strain from Ethos Genetics, is a cross between Las Vegas Lemon Skunk and LGBT (Lemon Grape Bubba Temple).',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-lemon-berry-candy-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-lemon-berry-candy-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-lemon-berry-candy-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Lemon Berry Candy',
    source: 'https://www.leafly.com/strains/lemon-berry-candy-og',
  },
  {
    slug: 'mandarin-cookies',
    name: 'Mandarin Cookies',
    price: '800',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '19',
    CBD: 'undefined',
    effects: 'Relaxed, Uplifted, Happy',
    description:
      'Mandarin Cookies, also known as "Mandarin Mints," is a premium hybrid cannabis strain that offers a sedating and calming high, making it an excellent choice for relaxation and unwinding. \n\n Bred by Ethos in Colorado, Mandarin Cookies is a result of crossing the popular Forum Cut Cookies and Mandarin Sunset strains. Its well-balanced genetics produce medium-sized buds with a dense, frosty coating of trichomes that emit a refreshing aroma of citrus and earthy undertones. \n\n This strain is perfect for those seeking a post-dinner dessert that won\'t leave them glued to their couch. Mandarin Cookies offers a moderate high that is ideal for socializing or enjoying a creative endeavor, without the sedative effects of some other strains.',
    descSeo:
      'Mandarin Cookies, also known as "Mandarin Mints," is a premium hybrid cannabis strain that offers a sedating and calming high, making it an excellent choice for relaxation and unwinding.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mandarin-cookies-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mandarin-cookies-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mandarin-cookies-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Mandarin Cookies',
    source: 'https://www.leafly.com/strains/mandarin-cookies',
  },
  {
    slug: 'mimosa',
    name: 'Mimosa',
    price: '850',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '20',
    CBD: '1',
    effects: 'Energetic, Focused, Uplifted',
    description:
      "Mimosa, also known as \"Purple Mimosa,\" is a popular hybrid cannabis strain that offers a balanced high and a delicious taste profile. This strain is a result of crossing Clementine with Purple Punch, two well-regarded strains that contribute to Mimosa's unique characteristics. \n\n In small doses, Mimosa produces happy and level-headed effects that leave you feeling uplifted and motivated to tackle any mundane task. \n\n Mimosa's strong aroma and flavor are reminiscent of its namesake, with notes of fruity and citrusy flavors bursting through. This strain's flavors and effects have made it a popular choice among medical marijuana patients seeking relief from symptoms associated with depression and stress.",
    descSeo:
      'Mimosa, also known as "Purple Mimosa," is a popular hybrid cannabis strain that offers a balanced high and a delicious taste profile. This strain is a result of crossing Clementine with Purple Punch, two well-regarded strains that contribute to Mimosa\'s unique characteristics.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mimosa-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mimosa-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-mimosa-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud Mimosa',
    source: 'https://www.leafly.com/strains/mimosa',
  },
  {
    slug: 'black-cherry-punch',
    name: 'Black Cherry Punch',
    price: '900',
    dominance: 'Indica Dominant',
    indica: '80',
    sativa: '20',
    THC: '20',
    CBD: 'undefined',
    effects: 'Sleepy, Tingly, Happy',
    description:
      "Black Cherry Punch is a potent indica-dominant hybrid strain resulting from the crossing of Purple Punch and Black Cherry Pie. With a THC content of around 20%, this strain is not recommended for those with a low tolerance to cannabis. \n\n It's known for its calming effects, which provide a sense of physical relaxation and mental calmness. The strain has a sweet cherry flavor and floral undertones, owing to its dessert ancestry. \n\n Medical cannabis patients often use Black Cherry Punch to manage chronic stress, depression, insomnia, and chronic pain. The buds produced by this strain are tall and slim with light orange hairs, creating a striking contrast with the light green shades.",
    descSeo:
      'Black Cherry Punch is a potent indica-dominant hybrid strain resulting from the crossing of Purple Punch and Black Cherry Pie. With a THC content of around 20%, this strain is not recommended for those with a low tolerance to cannabis.',
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-black-cherry-punch-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-black-cherry-punch-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-black-cherry-punch-qr-code.webp',
    ],
    imgDesc:
      'Green Ghost - Degen Weed Shop - Bud Black Cherry Punch',
    source: 'https://www.leafly.com/strains/black-cherry-punch',
  },
  {
    slug: 'snoop-punch',
    name: 'Snoop Punch',
    price: '900',
    dominance: 'Hybrid',
    indica: '50',
    sativa: '50',
    THC: '28',
    CBD: 'undefined',
    effects: 'Relaxed, Sleepy, Hungry',
    description:
      "By blending two of Snoop Dogg's beloved strains, Blue Dream and Master Kush, Snoop Punch was born. Its balanced effects are a perfect reflection of its hybrid nature, providing a cerebral high that inspires creativity while also inducing relaxation in the body. \n\n Not only does Purple Punch bring its unique flavors to the table, but it also adds an extra level of frost, giving this strain an appealing appearance that will catch anyone's eye. \n\n Whether you're a seasoned smoker or new to the game, Snoop's Dream x Purple Punch is sure to provide a well-rounded experience that satisfies both the palate and mind.",
    descSeo:
      "By blending two of Snoop Dogg's beloved strains, Blue Dream and Master Kush, Snoop Punch was born. Its balanced effects are a perfect reflection of its hybrid nature, providing a cerebral high that inspires creativity while also inducing relaxation in the body.",
    images: [
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-snoop-punch-bud-01.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-snoop-punch-cover.webp',
      '/media/green-garden-dispensary-cannabis-shop-phuket-strain-snoop-punch-qr-code.webp',
    ],
    imgDesc: 'Green Ghost - Degen Weed Shop - Bud Snoop Punch',
    source:
      'https://www.leafly.com/brands/elev8-seeds/products/elev8-seeds-snoops-punch-hybrid',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProducts(): Product[] {
  return products;
}
