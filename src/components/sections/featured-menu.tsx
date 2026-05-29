import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { DishPlaceholder } from '@/components/shared/dish-placeholder';
import { buttonVariants } from '@/components/ui/button';
import { featuredItems, getMenuItemBySlug, menuItemCountRounded } from '@/lib/menu';
import { cn } from '@/lib/utils';

export function FeaturedMenu() {
  const items = featuredItems
    .map((slug) => getMenuItemBySlug(slug))
    .filter((item): item is NonNullable<ReturnType<typeof getMenuItemBySlug>> => Boolean(item));

  return (
    <section className="relative section px-4 md:px-8">
      <div className="mx-auto max-w-360">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="kicker mb-4">Popüler Lezzetler</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground tracking-tight leading-[1.05]">
              Bizden <span className="italic text-gold">tavsiye</span>
            </h2>
            <div className="h-px w-16 bg-gold/60 mt-6" />
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-gold transition-colors group"
          >
            Tüm menüyü gör
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 xl:gap-8">
          {items.map((item, i) => (
            <BlurFade key={item.slug} delay={0.05 * i} inView>
              <Link
                href={`/menu/${item.slug}`}
                className="group block h-full"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-surface mb-2 sm:mb-3">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.name} - Efendi Usta Konak Kebap`}
                      fill
                      priority={i < 4}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover will-change-transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <DishPlaceholder name={item.name} />
                  )}
                  {/* Badges */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5">
                    {item.badge && (
                      <span className="bg-foreground text-bg text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold">
                        {item.badge}
                      </span>
                    )}
                    {item.popular && !item.badge && (
                      <span className="bg-bg/95 text-foreground text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold inline-flex items-center gap-1">
                        🔥 Çok satan
                      </span>
                    )}
                  </div>
                  {item.spicy && (
                    <span
                      className="absolute top-3 right-3 bg-gold text-bg p-1.5 rounded-full shadow-sm"
                      aria-label="Acılı"
                    >
                      <Flame className="w-3 h-3" />
                    </span>
                  )}
                  {/* Price tag bottom-right */}
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-bg shadow-md rounded-lg px-2 py-1 sm:px-3 sm:py-1.5">
                    <span className="font-display font-semibold text-xs sm:text-base text-foreground">
                      {item.price} <span className="text-gold">₺</span>
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-xl xl:text-2xl text-foreground group-hover:text-gold transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="hidden sm:block text-sm xl:text-base text-muted-foreground mt-1 line-clamp-1">{item.desc}</p>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-foreground text-bg hover:bg-gold px-8 py-6 text-base font-semibold gap-2'
            )}
          >
            {menuItemCountRounded}+ Çeşit Menüyü İncele
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
