import { Metadata } from "next";

type MenuItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const menuItems: Record<string, MenuItem> = {
  buds: {
    id: "buds",
    title: "Weed Shop Premium Cannabis Buds Menu - Green Ghost 🌿👻",
    description:
      "Explore Green Ghost's premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.",
    image: "green-ghost-best-degen-weed-shop-buds",
  },
  "pre-rolls": {
    id: "pre-rolls",
    title: "Weed Shop Premium Cannabis Pre Rolls Menu - Green Ghost 🌿👻",
    description:
      "Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.",
    image: "green-ghost-best-degen-weed-shop-pre-rolls",
  },
  concentrates: {
    id: "concentrates",
    title: "Weed Shop Premium Cannabis Concentrates Menu - Green Ghost 🌿👻",
    description:
      "Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.",
    image: "green-ghost-best-degen-weed-shop-concentrates",
  },
  edibles: {
    id: "edibles",
    title: "Weed Shop Premium Cannabis Edibles Menu - Green Ghost 🌿👻",
    description:
      "Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.",
    image: "green-ghost-best-degen-weed-shop-edibles",
  },
  gadgets: {
    id: "gadgets",
    title: "Weed Shop Premium Cannabis Gadgets Menu - Green Ghost 🌿👻",
    description:
      "Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.",
    image: "green-ghost-best-degen-weed-shop-gadgets",
  },
};

export function generateMenuMetadata(menuId: string): Metadata {
  const menuItem = menuItems[menuId] || {
    id: "default",
    title: "Green Ghost 🌿👻",
    description:
      "Premium cannabis products in Thailand. Fast, discreet delivery.",
    image: "green-ghost-logo",
  };

  const imageUrl = `https://green.gd/images/banners/${menuItem.image}.avif`;

  return {
    title: menuItem.title,
    description: menuItem.description,
    openGraph: {
      title: menuItem.title,
      description: menuItem.description,
      url: `https://green.gd/menu/${menuItem.id}`,
      siteName: "Green Ghost",
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1080,
          alt: menuItem.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: menuItem.title,
      description: menuItem.description,
      images: [imageUrl],
    },
    metadataBase: new URL("https://green.gd"),
    alternates: {
      canonical: `https://green.gd/menu/${menuItem.id}`,
      languages: {
        en: `https://green.gd/menu/${menuItem.id}`,
        fr: `https://green.gd/fr/menu/${menuItem.id}`,
      },
    },
  };
}
