import { Metadata } from "next";
import { getLawsData, getLawsFAQData } from "@/lib/bigquery";

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

export default async function LegalLawsPage() {
  const lawsData = await getLawsData();
  const lawsFaqData = await getLawsFAQData();

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
