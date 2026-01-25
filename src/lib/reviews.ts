import fs from "fs";
import path from "path";
import { parseCSV } from "@/lib/utils/csv";
import { Review } from "@/lib/types";

interface ReviewCSVRow {
  Name: string;
  Comment: string;
  Link: string;
  Shop: string;
  [key: string]: string | undefined;
}

export async function getReviews(): Promise<Review[]> {
  try {
    const filePath = path.join(process.cwd(), "public/datas/reviews.csv");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsedData = parseCSV<ReviewCSVRow>(fileContent);

    if (parsedData.length === 0) return [];

    return parsedData.map((row) => ({
      name: row.Name || "Anonymous",
      comment: row.Comment || "",
      link: row.Link || "#",
      shop: row.Shop || "",
    }));
  } catch (error) {
    console.error("Error reading reviews.csv:", error);
    return [];
  }
}
