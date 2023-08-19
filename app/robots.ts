import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/adminedit/',
    },
    sitemap: 'https://latemarch.vercel.app/sitemap.xml',
  }
}
