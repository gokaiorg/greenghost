import { Metadata } from "next";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

import WeedNavigation from "@/components/WeedNavigation";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";
import Laws from "@/components/Laws";
import LawsFAQ from "@/components/LawsFAQ";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Legal Laws",
  });
}

// Define types based on CSV structure
type ItemData = {
  title: string;
  decription: string; // Keeping 'decription' to match CSV header
};

async function getCsvData() {
  try {
    // Determine path safely
    const publicDir = path.join(process.cwd(), "public");
    const lawsCsvPath = path.join(publicDir, "datas", "laws.csv");
    const lawsFaqCsvPath = path.join(publicDir, "datas", "laws-faq.csv");

    // Read files asynchronously
    const lawsFile = await fs.promises.readFile(lawsCsvPath, "utf8");
    const lawsFaqFile = await fs.promises.readFile(lawsFaqCsvPath, "utf8");

    // Parse CSVs
    const lawsData = Papa.parse<ItemData>(lawsFile, {
      header: true,
      skipEmptyLines: true,
    }).data;
    const lawsFaqData = Papa.parse<ItemData>(lawsFaqFile, {
      header: true,
      skipEmptyLines: true,
    }).data;

    return {
      lawsData,
      lawsFaqData,
    };
  } catch (error) {
    console.error("Error in getCsvData:", error);
    return {
      lawsData: [],
      lawsFaqData: [],
    };
  }
}

export default async function LegalLawsPage() {
  const { lawsData, lawsFaqData } = await getCsvData();

  return (
    <>
      <PagesBanner pageName="Legal Laws" />

      <div className="container mx-auto px-4">
        <PagesIntro pageName="Legal Laws" />

        <div className="w-full h-px bg-[#13DE00]/20 my-8" />

        {/* Laws Component */}
        <section className="mx-auto">
          <Laws items={lawsData} />
        </section>

        <div className="w-full h-px bg-[#13DE00]/20 my-8" />

        {/* LawsFAQ Component */}
        <section className="max-w-4xl mx-auto">
          <LawsFAQ items={lawsFaqData} />
        </section>

        <div className="w-full h-px bg-[#13DE00]/20 my-8" />

        <WeedNavigation />
      </div>
    </>
  );
}
