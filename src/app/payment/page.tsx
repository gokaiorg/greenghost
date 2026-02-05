import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import PaymentList from "@/components/PaymentList";
import { getPaymentsData } from "@/lib/bigquery";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Payment",
  });
}

export default async function PaymentPage() {
  const payments = await getPaymentsData();

  return (
    <>
      <PagesBanner pageName="Payment" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Payment" />
        <PaymentList payments={payments} />
      </div>
    </>
  );
}
