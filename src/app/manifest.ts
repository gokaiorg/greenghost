import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Green Ghost 🌿👻",
    short_name: "Green Ghost",
    description:
      "Premium cannabis products in Thailand. Fast, discreet delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#13DE00",
    icons: [
      {
        src: "/images/logo48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/images/logo512.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
