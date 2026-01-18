import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import PromotesList from "@/components/PromotesList";
import ListingsList from "@/components/ListingsList";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "About",
  });
}

export default async function AboutPage() {
  return (
    <>
      <PagesBanner pageName="About" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="About" />
        <PromotesList />
        <ListingsList />
      </div>
    </>
  );
}
