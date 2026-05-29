import type { Metadata } from 'next';
import Image from 'next/image';
import { Flame, Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { visibleMenuData, getCategorySlugMap } from '@/lib/menu';
import { siteConfig } from '@/lib/site';
import type { CategoryName, MenuItem } from '@/types/menu';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Dijital Menü',
  description:
    'Masanızdan tarayın: Konak Kebap Efendi Usta güncel menü ve fiyat listesi.',
  // QR menü masa içi kullanım içindir; arama sonuçlarında /menu görünmeli.
  robots: { index: false, follow: false },
  alternates: { canonical: '/menu' },
};

const categorySlugMap = getCategorySlugMap();
const categories = Object.keys(visibleMenuData) as CategoryName[];

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-start gap-3 py-3.5">
      {item.image && (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-surface-2">
          <Image
            src={item.image}
            alt={item.name}
            fill
            loading="lazy"
            quality={60}
            sizes="56px"
            className="object-cover"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="font-display text-base leading-tight text-foreground">
            {item.name}
          </h3>
          {item.badge && (
            <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-bg">
              {item.badge}
            </span>
          )}
          {item.popular && !item.badge && (
            <span className="rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
              Popüler
            </span>
          )}
          {item.spicy && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold uppercase tracking-wide text-ember">
              <Flame className="h-3 w-3" />
              Acılı
            </span>
          )}
        </div>
        <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
          {item.desc}
        </p>
      </div>

      <div className="shrink-0 pl-1 font-display text-base font-semibold text-gold tabular-nums">
        {item.price} ₺
      </div>
    </li>
  );
}

export default function QrMenuPage() {
  return (
    <div className="bg-background">
      {/* Başlık bandı */}
      <header className="page-header bg-surface/50 px-4 text-center md:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="kicker mb-3">Dijital Menü</p>
          <h1 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
            {siteConfig.shortName}
            <span className="text-gold italic"> Efendi Usta</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-gold" />
              {siteConfig.hours.display}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {siteConfig.address.district}
            </span>
          </div>

          {/* Hızlı aksiyon */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border border-gold/40 px-4 py-2.5 text-sm font-semibold text-gold transition-colors active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              Garson / Sipariş
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Yapışkan kategori çubuğu — anchor ile bölüme atlar (scroll dinleyici yok).
          Sabit yükseklik (h-14) + bölümlerdeki scroll-mt ile birebir hizalanır. */}
      <nav className="sticky top-16 z-30 h-14 border-y border-border bg-background md:top-20">
        <ul className="scrollbar-none scroll-fade-x mx-auto flex h-full max-w-3xl items-center gap-2 overflow-x-auto px-4 md:px-8">
          {categories.map((cat) => (
            <li key={cat}>
              <a
                href={`#${categorySlugMap[cat]}`}
                className="block whitespace-nowrap rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menü bölümleri */}
      <div className="mx-auto max-w-3xl px-4 pb-16 md:px-8">
        {categories.map((cat) => {
          const items = visibleMenuData[cat];
          return (
            <section
              key={cat}
              id={categorySlugMap[cat]}
              className="scroll-mt-30 pt-8 md:scroll-mt-34 md:pt-10"
            >
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl text-foreground md:text-2xl">
                  {cat}
                </h2>
                <span className="text-xs text-muted-foreground">
                  {items.length} çeşit
                </span>
              </div>
              <ul
                className={cn(
                  'divide-y divide-border rounded-2xl border border-border bg-surface/40 px-4 md:px-6'
                )}
              >
                {items.map((item) => (
                  <ItemRow key={item.slug} item={item} />
                ))}
              </ul>
            </section>
          );
        })}

        {/* Bilgi notu */}
        <div className="mt-10 rounded-2xl border border-border bg-surface/40 p-5 text-center text-xs leading-relaxed text-muted-foreground">
          <p>Tüm fiyatlarımıza KDV dahildir. Ürünler ve fiyatlar haber verilmeksizin değişebilir.</p>
          <p className="mt-2">
            Geçerli yemek kartları: {siteConfig.mealCards.join(' · ')}
          </p>
        </div>
      </div>
    </div>
  );
}
