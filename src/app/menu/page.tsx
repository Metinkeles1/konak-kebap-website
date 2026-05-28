import type { Metadata } from 'next';
import { MenuTabs } from '@/components/menu/menu-tabs';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { OrderPlatforms } from '@/components/sections/order-platforms';
import { SectionTitle } from '@/components/shared/section-title';
import { JsonLd } from '@/components/shared/json-ld';
import { getFullMenuSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Menü — Kebap, Lahmacun, Pide Çeşitleri',
  description:
    "Konak kebap, Adana dürüm, el açması lahmacun ve pide çeşitlerimizi inceleyin. Sancaktepe'nin uygun fiyatlı kebap menüsü.",
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={getFullMenuSchema()} />
      {/* Small hero */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'Menü', href: '/menu' }]} />
          <div className="mt-8 text-center">
            <SectionTitle
              kicker="Menümüz"
              title="Lezzetin Tam Listesi"
              description="40+ çeşit ile damak çıtanıza uygun lezzetler. Kategorilere göre filtreleyin."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <MenuTabs />
        </div>
      </section>

      <OrderPlatforms />
    </>
  );
}
