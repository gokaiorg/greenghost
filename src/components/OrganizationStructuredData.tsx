'use client';

import { StructuredData } from './StructuredData';
import type { Organization } from '@/lib/types/organization';

interface OrganizationStructuredDataProps {
  data: Organization;
}

export default function OrganizationStructuredData({ data }: OrganizationStructuredDataProps) {
  if (!data) {
    return null;
  }

  return <StructuredData data={data} />;
}
