import { getPagesData } from "@/lib/bigquery";
import PagesBannerClient, { PagesBannerClientProps } from "./PagesBannerClient";

interface PagesBannerProps extends Partial<PagesBannerClientProps> {
  pageName?: string;
}

export default async function PagesBanner({
  pageName,
  ...props
}: PagesBannerProps) {
  let fetchedProps: Partial<PagesBannerClientProps> = {};

  if (pageName) {
    const bqData = await getPagesData(pageName);

    if (bqData) {
      const title = bqData.title;
      const slug = title.toLowerCase().replace(/\s+/g, "-");
      fetchedProps = {
        title: title,
        subtitle: bqData.subtitle || "",
        iconSrc: `${slug}-green-ghost.avif`,
        iconAlt: `${title} Green Ghost`,
        bgSrc: `green-ghost-best-degen-weed-shop-${slug}.avif`,
      };
    }
  }

  const mergedProps = { ...fetchedProps, ...props } as PagesBannerClientProps;

  // Ensure we have required props before rendering, or handle gracefully
  if (!mergedProps.title || !mergedProps.bgSrc) {
    // Fallback or return null if critical data is missing.
    // For now, assuming data integrity or manual props.
    return null;
  }

  return <PagesBannerClient {...mergedProps} />;
}
