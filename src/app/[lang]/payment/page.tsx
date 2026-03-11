export const dynamic = "force-dynamic";

import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import PaymentList from "@/components/PaymentList";
import { getPaymentsData } from "@/lib/bigquery";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Payment",

    locale: lang,
    path: "/payment",
  });
}

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const payments = await getPaymentsData();

  return (
    <>
      <PagesBanner pageName="Payment" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Payment" locale={lang} />
        <PaymentList payments={payments} />
      </div>
    </>
  );
}
