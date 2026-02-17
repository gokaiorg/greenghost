import Link from "next/link";
import { PHONE_NUMBER } from "@/lib/constants";
import { getSectionsData } from "@/lib/bigquery";
import { getLocalizedSection } from "@/lib/i18n-db";
import { getLocalizedUrl } from "@/lib/i18n-helpers";

interface ContactSectionProps {
  locale?: string;
}

export default async function ContactSection({
  locale = "en",
}: ContactSectionProps) {
  const sections = await getSectionsData();
  const content = getLocalizedSection(sections, "ContactSection", locale);

  const titleContent = content.title || "Contact Us";
  const description =
    content.description ||
    "Have questions or need help with your order? Our team is here to assist you.";
  const linkLabel = content.links[0]?.label || "Get in Touch";
  const linkUrl = content.links[0]?.url || "/contact";

  // Format title: "Contact Us" with "Us" in green if matched
  const formatTitle = (text: string) => {
    // Default fallback formatting
    if (text === "Contact Us") {
      return (
        <>
          <span className="text-white">Contact</span>{" "}
          <span className="text-[#13DE00]">Us</span>
        </>
      );
    }
    // Generic formatting: last word green
    const words = text.split(" ");
    if (words.length <= 1) return <span className="text-[#13DE00]">{text}</span>;
    const lastWord = words[words.length - 1];
    const rest = words.slice(0, -1).join(" ");
    return (
      <>
        <span className="text-white">{rest}</span>{" "}
        <span className="text-[#13DE00]">{lastWord}</span>
      </>
    );
  };

  return (
    <section className="container mx-auto px-4 text-center py-20 bg-black max-w-4xl mx-auto" aria-label={titleContent}>
      <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
        {formatTitle(titleContent)}
      </h2>

      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href={getLocalizedUrl(linkUrl, locale)}
          className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300"
          aria-label={linkLabel}
          title={linkLabel}
        >
          {linkLabel}
        </Link>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="mt-4 text-xl text-[#13DE00] hover:text-[#10c500] transition-colors duration-300 block"
          aria-label={`Call us at ${PHONE_NUMBER}`}
          title="Call us"
        >
          +6687-420-1144
        </a>
      </div>
    </section>
  );
}
