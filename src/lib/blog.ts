import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { BlogPost, BlogFrontmatter } from '@/types/blog';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();
  return slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  const words = content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.round(words / 200));

  return {
    slug,
    title: fm.title,
    description: fm.description,
    publishedAt: fm.publishedAt,
    coverImage: fm.coverImage,
    keywords: fm.keywords,
    relatedSlugs: fm.relatedSlugs,
    readingTime,
  };
}

export function getRelatedPosts(slug: string, relatedSlugs?: string[]): BlogPost[] {
  if (!relatedSlugs || relatedSlugs.length === 0) {
    return getAllBlogPosts()
      .filter((p) => p.slug !== slug)
      .slice(0, 2);
  }
  return relatedSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is BlogPost => p !== null);
}
