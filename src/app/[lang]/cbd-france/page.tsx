import { Metadata } from "next";
export const revalidate = 86400;

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { getCBDsData } from "@/lib/firestore";
import CBDList from "@/components/CBDList";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "CBD France",

    locale: lang,
    path: "/cbd-france",
  });
}

// Server component that fetches data
export default async function CBDFrancePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const products = await getCBDsData();

  return (
    <>
      <PagesBanner pageName="CBD France" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="CBD France" locale={lang} />
        <CBDList products={products} />
      </div>
    </>
  );
}
