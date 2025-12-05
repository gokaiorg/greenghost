import { NextResponse } from 'next/server';
import { getOrganizationData } from '@/lib/organization-data';

export async function GET() {
  try {
    const organization = await getOrganizationData();
    return NextResponse.json(organization);
  } catch (error) {
    console.error('Error fetching organization data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch organization data' },
      { status: 500 }
    );
  }
}
