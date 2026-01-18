import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Jobs",
  });
}

export default async function JobsPage() {
  return (
    <>
      <PagesBanner pageName="Jobs" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Jobs" />

        <div className="text-center my-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScnR4_SsE1DAn-HGk5oYhxfThlaKXFOdmWZDBi1BJrdVLcmFg/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#13DE00] hover:text-[#13DE00]/80 underline font-bold transition-colors"
          >
            Apply Now
          </a>
        </div>

        <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8">
          {
            "Ready to embark on this exciting journey with us? We\’d love to hear about your passion for cannabis and why you\’re excited to join Green Ghost. Let’s grow together!"
          }
        </div>
      </div>
    </>
  );
}
