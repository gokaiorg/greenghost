import fs from "fs";
import path from "path";
import Papa from "papaparse";

export interface NFT {
  slug: string;
  name: string;
  logo: string;
  description: string;
  opensea: string;
  embellishments: string;
  ghost: string;
  headgear: string;
  joint: string;
  leaves: string;
  shades: string;
  vibe: string;
  vibes: string;
}

export async function getNFTs(): Promise<NFT[]> {
  const filePath = path.join(process.cwd(), "public/datas/nfts.csv");
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data } = Papa.parse<NFT>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return data.map((nft) => ({
    ...nft,
    logo: `/images${nft.logo}`,
  }));
}

export async function getNFTBySlug(slug: string): Promise<NFT | undefined> {
  const nfts = await getNFTs();
  return nfts.find((nft) => nft.slug === slug);
}
