
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: 'https://www.nusantaratravels.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nusantaratravels.com/about',
      lastModified: new Date(),
    }
  ]
}