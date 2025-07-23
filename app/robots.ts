import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/member/', '/api/'],
    },
    sitemap: 'https://takara-sagashi.com/sitemap.xml',
  }
}