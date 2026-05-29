import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { SectionTitle } from '@/components/shared/section-title';
import { GalleryGrid } from '@/components/gallery/gallery-grid';

export const metadata: Metadata = {
  title: 'Galeri — Yemek Fotoğrafları',
  description: 'Sancaktepe Yenidoğan Efendi Usta Konak Kebap yemek, mekan ve etkinlik fotoğrafları.',
  alternates: { canonical: '/galeri' },
};

export default function GaleriPage() {
  return (
    <>
      <section className="relative page-header px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'Galeri', href: '/galeri' }]} />
          <div className="mt-5 md:mt-8 text-center">
            <SectionTitle
              as="h1"
              kicker="Galeri"
              title="Görsel Yolculuk"
              description="Yemeklerimizden mekanımıza, lezzet anlarımızı keşfedin."
            />
          </div>
        </div>
      </section>

      <section className="section-head px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
