import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { SectionTitle } from '@/components/shared/section-title';
import { BlogCard } from '@/components/blog/blog-card';
import { BlurFade } from '@/components/magicui/blur-fade';
import { getAllBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog — Sancaktepe Kebap Rehberi',
  description: 'Sancaktepe kebap kültürü, Adana-Urfa farkı, paket servis, konak kebap rehberi ve daha fazlası.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
          <div className="mt-8 text-center">
            <SectionTitle
              kicker="Blog"
              title="Lezzet Üzerine Yazılar"
              description="Sancaktepe kebap kültürü, geleneksel tarifler ve mutfak ipuçları."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">Henüz blog yazısı yok.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <BlurFade key={post.slug} delay={0.1 * i} inView>
                  <BlogCard post={post} />
                </BlurFade>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
