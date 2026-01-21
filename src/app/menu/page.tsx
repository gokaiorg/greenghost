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

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Menu",
  });
}

export default async function Menu() {
  const organizationData = await getOrganizationData();
  const structuredData = await generateMenuPageSchema(organizationData);

  return (
    <>
      {structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}
      <PagesBanner pageName="Menu" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Menu" />
        <MenuList />
      </div>
    </>
  );
}
