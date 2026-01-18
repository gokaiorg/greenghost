import { ReactNode } from "react";

import { generateProductMetadata } from "@/lib/config/site-metadata";

type ProductsLayoutProps = {
  children: ReactNode;
  params: Promise<{ category?: string }>;
};

type GenerateMetadataProps = {
  params: Promise<{ category?: string }>;
};

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { category } = await params;
  return generateProductMetadata(category);
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return <>{children}</>;
}
