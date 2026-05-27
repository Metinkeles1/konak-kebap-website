export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  coverImage?: string;
  keywords?: string[];
  relatedSlugs?: string[];
  readingTime?: number;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  coverImage?: string;
  keywords?: string[];
  relatedSlugs?: string[];
}
