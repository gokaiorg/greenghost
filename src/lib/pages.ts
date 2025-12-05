export interface PageData {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  section_title?: string;
  section_description?: string;
  [key: string]: string | undefined;
}

// Client-side function with caching
let pagesCache: PageData[] | null = null;

// Client-side function to get all pages
export async function getPages(): Promise<PageData[]> {
  if (pagesCache) {
    return pagesCache;
  }

  try {
    const response = await fetch('/api/pages');
    if (!response.ok) throw new Error('Failed to fetch pages');
    const data = await response.json();
    pagesCache = data.pages;
    return pagesCache || [];
  } catch (error) {
    console.error('Error getting pages:', error);
    return [];
  }
}

// Helper function to find page by slug
function findPageBySlug(pages: PageData[], slug: string): PageData | undefined {
  return pages.find(page =>
    page.slug === slug ||
    page.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === slug
  );
}

// Get page by slug (client side)
export async function getPageBySlug(slug: string): Promise<PageData | undefined> {
  const pages = await getPages();
  return findPageBySlug(pages, slug);
}
