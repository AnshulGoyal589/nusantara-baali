
import { MetadataRoute } from 'next'
import { allPackages } from './data/packages'

export default function sitemap(): MetadataRoute.Sitemap {
  const packageEntries: MetadataRoute.Sitemap = allPackages.map((pkg) => ({
    url: `https://www.nusantaratravels.com/packages/${pkg.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://www.nusantaratravels.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nusantaratravels.com/about',
      lastModified: new Date(),
    },
    // ... add other static pages
    ...packageEntries,
  ]
}