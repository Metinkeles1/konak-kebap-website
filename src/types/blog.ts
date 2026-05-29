export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
  keywords?: string[];
  relatedSlugs?: string[];
  faq?: BlogFaq[];
  readingTime?: number;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
  keywords?: string[];
  relatedSlugs?: string[];
  faq?: BlogFaq[];
}
