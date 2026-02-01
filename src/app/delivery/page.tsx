import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { getDeliveryData } from "@/lib/bigquery";
import DeliveryList from "@/components/DeliveryList";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Delivery",
  });
}

export default async function Delivery() {
  const deliverySteps = await getDeliveryData();

  return (
    <>
      <PagesBanner pageName="Delivery" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Delivery" />
        <DeliveryList steps={deliverySteps} />
      </div>
    </>
  );
}
