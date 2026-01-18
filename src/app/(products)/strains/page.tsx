import { Metadata } from "next";

import StrainsClient from "./StrainsClient";

import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Strains",
  });
}

export default function StrainsPage() {
  return (
    <>
      <PagesBanner pageName="Strains" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Strains" />
        <StrainsClient />
      </div>
    </>
  );
}
