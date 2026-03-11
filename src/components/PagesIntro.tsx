import React from "react";
import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedFields } from "@/lib/i18n-helpers";

interface PagesIntroProps {
  pageName?: string;
  locale?: string;
  label?: string;
  description?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

const PagesIntro: React.FC<PagesIntroProps> = async ({
  pageName,
  locale = "en",
  label,
  description,
  sectionTitle,
  sectionDescription,
}) => {
  let content = { label, description, sectionTitle, sectionDescription };

  if (pageName) {
    const bqData = await getPagesData(pageName);
    if (bqData) {
      // Define what fields we expect to get back localized
      type LocalizedIntroData = {
        label: string;
        description: string;
        section_title: string;
        section_description: string;
      };

      const localizedData = selectLocalizedFields<LocalizedIntroData>(
        bqData,
        ["label", "description", "section_title", "section_description"],
        locale,
      );

      // Map snake_case to camelCase
      content = {
        label: localizedData.label,
        description: localizedData.description,
        sectionTitle: localizedData.section_title,
        sectionDescription: localizedData.section_description,
      };
    }
  }

  return (
    <div className="flex flex-wrap md:flex-row md:space-x-8 w-full">
      <div className="flex-1">
        {content.label && content.label.trim() !== "" && (
          <h2
            id="who-are-we"
            className="text-lg md:text-xl font-bold text-center md:text-left mb-4 mt-8 text-[#13DE00] whitespace-pre-wrap"
          >
            {content.label}
          </h2>
        )}

        {content.description && content.description.trim() !== "" && (
          <div className="text-[11px] md:text-xs lg:text-sm text-gray-200 text-center md:text-left w-full mb-4 md:mb-8 whitespace-pre-wrap">
            {content.description}
          </div>
        )}
      </div>

      {((content.sectionTitle && content.sectionTitle.trim() !== "") ||
        (content.sectionDescription &&
          content.sectionDescription.trim() !== "")) && (
        <div className="flex-1">
          {content.sectionTitle && content.sectionTitle.trim() !== "" && (
            <h2 className="text-lg md:text-xl font-bold text-center md:text-left mb-4 mt-8 text-[#13DE00] whitespace-pre-wrap">
              {content.sectionTitle}
            </h2>
          )}

          {content.sectionDescription &&
            content.sectionDescription.trim() !== "" && (
              <div className="text-[11px] md:text-xs lg:text-sm text-gray-200 text-center md:text-left w-full mb-4 md:mb-8 whitespace-pre-wrap">
                {content.sectionDescription}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default PagesIntro;
