import { getPagesData } from "@/lib/bigquery";
// import { PageData } from "@/lib/bigquery-types";
import { selectLocalizedField } from "@/lib/i18n-helpers";
import PagesBannerClient, { PagesBannerClientProps } from "./PagesBannerClient";

interface PagesBannerProps extends Partial<PagesBannerClientProps> {
  pageName?: string;
  locale?: string;
}

export default async function PagesBanner({
  pageName,
  locale = 'en',
  ...props
}: PagesBannerProps) {
  let fetchedProps: Partial<PagesBannerClientProps> = {};

  if (pageName) {
    const bqData = await getPagesData(pageName);

    if (bqData) {
      const title = selectLocalizedField<string>((bqData as unknown) as Record<string, unknown>, 'title', locale);
      const subtitle = selectLocalizedField<string>((bqData as unknown) as Record<string, unknown>, 'subtitle', locale);
      const slug = (bqData.title_en || "").toLowerCase().replace(/\s+/g, "-");

      fetchedProps = {
        title: title || "",
        subtitle: subtitle || "",
        iconSrc: `${slug}-green-ghost.avif`,
        iconAlt: `${title} Green Ghost`,
        bgSrc: `green-ghost-best-degen-weed-shop-${slug}.avif`,
      };
    }
  }

  const mergedProps = { ...fetchedProps, ...props } as PagesBannerClientProps;

  // Ensure we have required props before rendering, or handle gracefully
  if (!mergedProps.title || !mergedProps.bgSrc) {
    return null;
  }

  return <PagesBannerClient {...mergedProps} />;
}
