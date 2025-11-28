interface PageData {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  section_title?: string;
  section_description?: string;
  [key: string]: string | undefined;
}

export async function getPageData(slug: string): Promise<PageData | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || ''}/api/pages`);
    if (!response.ok) {
      throw new Error('Failed to fetch pages data');
    }
    
    const data = await response.json();
    return data.pages.find((page: PageData) => 
      page.slug === slug || 
      page.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === slug
    ) || null;
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}

export async function getAllPages(): Promise<PageData[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || ''}/api/pages`);
    if (!response.ok) {
      throw new Error('Failed to fetch pages data');
    }
    
    const data = await response.json();
    return data.pages || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}
