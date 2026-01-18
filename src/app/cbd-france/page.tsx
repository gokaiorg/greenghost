import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { getCBDProducts } from "@/lib/cbd-data";
import CBDList from "@/components/CBDList";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "CBD France",
  });
}

// Server component that fetches data
export default async function CBDFrancePage() {
  const products = await getCBDProducts();

  return (
    <>
      <PagesBanner pageName="CBD France" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="CBD France" />
        <CBDList products={products} />
      </div>
    </>
  );
}
