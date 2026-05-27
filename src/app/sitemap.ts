import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllMenuItems } from '@/lib/menu';
import { getAllBlogSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/menu', '/hakkimizda', '/galeri', '/iletisim', '/rezervasyon', '/paket-servis', '/blog'];
  const menuItems = getAllMenuItems();
  const blogSlugs = getAllBlogSlugs();
  const now = new Date();

  return [
    ...routes.map((r) => ({
      url: `${siteConfig.url}${r}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1.0 : 0.8,
    })),
    ...menuItems.map((item) => ({
      url: `${siteConfig.url}/menu/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
