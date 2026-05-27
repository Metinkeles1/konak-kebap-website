import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Flame, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { JsonLd } from '@/components/shared/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site';
import { getAllMenuItems, getMenuItemBySlug, menuData } from '@/lib/menu';
import { getMenuItemSchema, getBreadcrumbSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import type { CategoryName } from '@/types/menu';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMenuItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuItemBySlug(slug);
  if (!item) return {};

  return {
    title: `${item.name} — Sancaktepe ${item.category}`,
    description: `${item.desc} Fiyat: ${item.price}₺. Sancaktepe Yenidoğan'da paket servis ve dine-in.`,
    alternates: {
      canonical: `/menu/${item.slug}`,
    },
    openGraph: {
      title: `${item.name} | ${siteConfig.shortName}`,
      description: item.desc,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: item.name }],
    },
  };
}

export default async function MenuItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getMenuItemBySlug(slug);
  if (!item) notFound();

  // Related: same category, exclude self, take 3
  const related = (menuData[item.category as CategoryName] || [])
    .filter((i) => i.slug !== item.slug)
    .slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Merhaba, "${item.name}" sipariş etmek istiyorum. Fiyat: ${item.price}₺`
  );

  return (
    <>
      <JsonLd
        data={[
          getMenuItemSchema(item, item.category),
          getBreadcrumbSchema([
            { name: 'Ana Sayfa', url: '/' },
            { name: 'Menü', url: '/menu' },
            { name: item.category, url: `/menu#${item.category.toLowerCase()}` },
            { name: item.name, url: `/menu/${item.slug}` },
          ]),
        ]}
      />

      <article className="relative py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { name: 'Menü', href: '/menu' },
              { name: item.category, href: `/menu#${item.category.toLowerCase()}` },
              { name: item.name, href: `/menu/${item.slug}` },
            ]}
          />

          <div className="grid gap-10 md:grid-cols-2 mt-10">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-linear-to-br from-gold-dim/30 via-ember/20 to-bg">
              {item.image && (
                <Image
                  src={item.image}
                  alt={`${item.name} - Efendi Usta Konak Kebap Sancaktepe`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-bg/60 to-transparent" />
              {item.badge && (
                <Badge className="absolute top-4 left-4 bg-gold text-bg border-0 z-10">{item.badge}</Badge>
              )}
              {item.spicy && (
                <div
                  className="absolute top-4 right-4 bg-ember/90 text-white p-2 rounded-full z-10"
                  aria-label="Acılı"
                >
                  <Flame className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="kicker mb-3">{item.category}</p>
              <h1 className="font-display text-4xl md:text-5xl text-cream leading-tight">
                {item.name}
              </h1>
              <div className="flex items-center gap-4 mt-6">
                <span className="font-display text-4xl text-gold">{item.price} ₺</span>
                {item.prepTime && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" />
                    {item.prepTime}
                  </span>
                )}
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
                {item.longDesc || item.desc}
              </p>

              {item.ingredients && item.ingredients.length > 0 && (
                <div className="mt-6">
                  <p className="kicker mb-3">Malzemeler</p>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-foreground/80"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href={`${siteConfig.whatsapp}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'bg-[#25D366] hover:bg-[#1ebe5d] text-white gap-2 flex-1'
                  )}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp&apos;tan Sipariş
                </a>
                {siteConfig.orderPlatforms.yemeksepeti && (
                  <a
                    href={siteConfig.orderPlatforms.yemeksepeti}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: 'lg', variant: 'outline' }),
                      'border-gold/40 text-gold hover:bg-gold hover:text-bg flex-1'
                    )}
                  >
                    Yemeksepeti
                  </a>
                )}
              </div>

              <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
                Sancaktepe&apos;de en otantik {item.name.toLowerCase()} tadı için Efendi Usta Konak
                Kebap&apos;ı tercih edin. Paket servis ve restoran içi sipariş için bizi arayın:{' '}
                <a href={`tel:${siteConfig.phone}`} className="text-gold hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="font-display text-2xl md:text-3xl text-cream mb-8">
                Benzer Lezzetler
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/menu/${rel.slug}`}
                    className="group p-5 rounded-lg border border-border bg-surface hover:border-gold/40 transition-all hover:-translate-y-1"
                  >
                    <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{rel.desc}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/60">
                      <span className="text-gold font-semibold">{rel.price} ₺</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
