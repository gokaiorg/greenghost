import { MetadataRoute } from 'next'
import { getLocations } from '@/lib/organization-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://green.gd'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages with their priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/strains`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/delivery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wholesale`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cannabis-club`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nft`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/weed`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cbd-france`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/growers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/seeds`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/best-weed-shops-thailand`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Menu subpages
  const menuPages: MetadataRoute.Sitemap = [
    'buds',
    'pre-rolls',
    'edibles',
    'concentrates',
    'gadgets',
  ].map(category => ({
    url: `${baseUrl}/menu/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  let dynamicPages: MetadataRoute.Sitemap = []

  try {
    // Fetch dynamic location pages
    const locations = await getLocations()
    const locationPages: MetadataRoute.Sitemap = locations.map(location => ({
      url: `${baseUrl}/locations/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
    dynamicPages = [...dynamicPages, ...locationPages]

    // Fetch products for dynamic URLs using the API
    const apiBase = process.env.NEXT_PUBLIC_API_URL || baseUrl

    // Fetch strains
    const strainsRes = await fetch(`${apiBase}/api/products/strains`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    if (strainsRes.ok) {
      const strains = await strainsRes.json()
      const strainPages: MetadataRoute.Sitemap = strains.map((strain: { id: string }) => ({
        url: `${baseUrl}/strains/${strain.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...strainPages]
    }

    // Fetch edibles
    const ediblesRes = await fetch(`${apiBase}/api/products/edibles`, {
      next: { revalidate: 3600 }
    })
    if (ediblesRes.ok) {
      const edibles = await ediblesRes.json()
      const ediblePages: MetadataRoute.Sitemap = edibles.map((edible: { id: string }) => ({
        url: `${baseUrl}/edibles/${edible.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...ediblePages]
    }

    // Fetch concentrates
    const concentratesRes = await fetch(`${apiBase}/api/products/concentrates`, {
      next: { revalidate: 3600 }
    })
    if (concentratesRes.ok) {
      const concentrates = await concentratesRes.json()
      const concentratePages: MetadataRoute.Sitemap = concentrates.map((concentrate: { id: string }) => ({
        url: `${baseUrl}/concentrates/${concentrate.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...concentratePages]
    }

    // Fetch gadgets
    const gadgetsRes = await fetch(`${apiBase}/api/products/gadgets`, {
      next: { revalidate: 3600 }
    })
    if (gadgetsRes.ok) {
      const gadgets = await gadgetsRes.json()
      const gadgetPages: MetadataRoute.Sitemap = gadgets.map((gadget: { id: string }) => ({
        url: `${baseUrl}/gadgets/${gadget.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
      dynamicPages = [...dynamicPages, ...gadgetPages]
    }

  } catch (error) {
    console.error('Error generating sitemap:', error)
  }

  return [...staticPages, ...menuPages, ...dynamicPages]
}
