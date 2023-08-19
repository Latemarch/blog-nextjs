import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://latemarch.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://latemarch.vercel.app/posts',
      lastModified: new Date(),
    },
    {
      url: 'https://latemarch.vercel.app/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://latemarch.vercel.app/about',
      lastModified: new Date(),
    },
  ]
}
