import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import WholesalesList from "@/components/WholesalesList";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Wholesale",

    locale: lang,
    path: "/wholesale",
  });
}

export default async function WholesalePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PagesBanner pageName="Wholesale" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Wholesale" locale={lang} />
        <WholesalesList />
      </div>
    </>
  );
}
