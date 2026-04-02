import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://cutai.dev', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://cutai.dev/ko', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}