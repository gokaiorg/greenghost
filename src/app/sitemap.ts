import { MetadataRoute } from 'next'

interface Product {
  id: string;
  [key: string]: unknown;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://greeng.host' // Replace with your actual domain

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/strains`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Fetch products for dynamic URLs
  let dynamicPages: MetadataRoute.Sitemap = []

  try {
    // Fetch all products
    const res = await fetch('http://localhost:3000/api/products/strains')
    if (res.ok) {
      const strains = await res.json()
      const strainPages = strains.map((strain: Product) => ({
        url: `${baseUrl}/strains/${strain.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...strainPages]
    }

    // Fetch edibles
    const ediblesRes = await fetch('http://localhost:3000/api/products/edibles')
    if (ediblesRes.ok) {
      const edibles = await ediblesRes.json()
      const ediblePages = edibles.map((edible: Product) => ({
        url: `${baseUrl}/edibles/${edible.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...ediblePages]
    }

    // Fetch concentrates
    const concentratesRes = await fetch('http://localhost:3000/api/products/concentrates')
    if (concentratesRes.ok) {
      const concentrates = await concentratesRes.json()
      const concentratePages = concentrates.map((concentrate: Product) => ({
        url: `${baseUrl}/concentrates/${concentrate.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...concentratePages]
    }

    // Fetch gadgets
    const gadgetsRes = await fetch('http://localhost:3000/api/products/gadgets')
    if (gadgetsRes.ok) {
      const gadgets = await gadgetsRes.json()
      const gadgetPages = gadgets.map((gadget: Product) => ({
        url: `${baseUrl}/gadgets/${gadget.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...gadgetPages]
    }

    // Menu subpages
    const menuPages = [
      `${baseUrl}/menu/buds`,
      `${baseUrl}/menu/pre-rolls`,
      `${baseUrl}/menu/edibles`,
      `${baseUrl}/menu/concentrates`,
      `${baseUrl}/menu/gadgets`,
    ].map(url => ({
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    dynamicPages = [...dynamicPages, ...menuPages]

  } catch (error) {
    console.error('Error generating sitemap:', error)
  }

  return [...staticPages, ...dynamicPages]
}
