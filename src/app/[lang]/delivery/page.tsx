import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { getDeliveryData } from "@/lib/bigquery";
import DeliveryList from "@/components/DeliveryList";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Delivery",

    locale: lang,
    path: "/delivery",

  });
}

export default async function Delivery({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const deliverySteps = await getDeliveryData();

  return (
    <>
      <PagesBanner pageName="Delivery" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Delivery" locale={lang} />
        <DeliveryList steps={deliverySteps} />
      </div>
    </>
  );
}
