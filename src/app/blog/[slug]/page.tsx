import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { BlogCard } from '@/components/blog/blog-card';
import { JsonLd } from '@/components/shared/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { getAllBlogSlugs, getBlogPostBySlug, getRelatedPosts } from '@/lib/blog';
import { getBlogPostingSchema, getFAQSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, post.relatedSlugs);

  // Dynamic import the MDX content
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <JsonLd
        data={[
          getBlogPostingSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            coverImage: post.coverImage,
          }),
          ...(post.faq && post.faq.length > 0 ? [getFAQSchema(post.faq)] : []),
        ]}
      />

      <article className="section px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          {post.coverImage && (
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mt-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.readingTime && (
              <>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} dk okuma
                </span>
              </>
            )}
          </div>

          <div className="prose prose-invert max-w-none mt-4">
            <Content />
          </div>

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                Sıkça Sorulan Sorular
              </h2>
              <div className="space-y-4">
                {post.faq.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-border bg-surface p-5"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-foreground marker:content-['']">
                      {item.q}
                      <span className="text-gold transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl border border-gold/30 bg-linear-to-br from-gold/5 to-transparent text-center">
            <p className="text-base text-foreground">
              Bu lezzetleri tatmak için bizi ziyaret edin veya hemen sipariş verin:
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-gold text-bg hover:bg-gold-light mt-4 gap-2'
              )}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                İlgili Yazılar
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((r) => (
                  <BlogCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-gold transition-colors">
              ← Tüm yazılar
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
