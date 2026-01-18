import fs from "fs";
import path from "path";

export async function getLocationImages(slug: string): Promise<string[]> {
  const bannersDir = path.join(process.cwd(), "public/images/banners");

  // Map simple slugs to the specific naming convention parts found in the directory
  const slugMapping: Record<string, string> = {
    rawai: "rawai",
    karon: "kata-karon",
    phuket: "phuket",
    paris: "paris",
  };

  const mappedSlug = slugMapping[slug] || slug;

  // Pattern: green-ghost-best-degen-weed-shop-delivery-[mappedSlug]-[index].avif

  try {
    const files = await fs.promises.readdir(bannersDir);

    const matchingFiles = files.filter((file) => {
      return (
        file.startsWith("green-ghost-best-degen-weed-shop-delivery-") &&
        file.includes(mappedSlug) &&
        /\d+\.avif$/.test(file)
      );
    });

    // Sort by the number at the end
    matchingFiles.sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)\.avif$/)?.[1] || "0");
      const numB = parseInt(b.match(/(\d+)\.avif$/)?.[1] || "0");
      return numA - numB;
    });

    return matchingFiles.map((file) => `/images/banners/${file}`);
  } catch (error) {
    console.error("Error reading banner images:", error);
    return [];
  }
}
