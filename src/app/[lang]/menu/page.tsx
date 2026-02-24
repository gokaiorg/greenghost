import { Metadata } from "next";

import { getOrganizationData } from "@/lib/organization-data";

import {
  StructuredData,
  generateMenuPageSchema,
} from "@/components/StructuredData";
import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import MenuList from "@/components/MenuList";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Menu",

    locale: lang,
    path: "/menu",

  });
}

export default async function Menu({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const organizationData = await getOrganizationData();
  const structuredData = await generateMenuPageSchema(organizationData);

  return (
    <>
      {structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
      <PagesBanner pageName="Menu" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Menu" locale={lang} />
        <MenuList locale={lang} />
      </div>
    </>
  );
}
