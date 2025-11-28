import { NextResponse } from 'next/server';
import { getPagesServerSide } from '@/lib/pages-server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const pages = await getPagesServerSide();

    return NextResponse.json(
      { pages },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
        }
      }
    );
  } catch (error) {
    console.error('Error reading pages data:', error);
    return NextResponse.json(
      { error: 'Failed to load pages data' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  }
}


