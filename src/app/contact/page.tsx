import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import ContactList from "@/components/ContactList";
import LocationsHome from "@/components/LocationsHome";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Contact",
  });
}

export default async function ContactPage() {
  return (
    <>
      <PagesBanner pageName="Contact" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Contact" />
        <ContactList />
        <ContactForm />
        <LocationsHome />
      </div>
    </>
  );
}
