import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import ContactList from "@/components/ContactList";
import LocationSection from "@/components/LocationSection";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Contact",

    locale: lang,
    path: "/contact",

  });
}

export default async function ContactPage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <>
      <PagesBanner pageName="Contact" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Contact" locale={lang} />
        <ContactList />
        <ContactForm />
        <LocationSection locale={lang} />
      </div>
    </>
  );
}
