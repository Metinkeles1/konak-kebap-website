'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BlurFade } from '@/components/magicui/blur-fade';
import { getAllMenuItems } from '@/lib/menu';

interface GalleryItem {
  alt: string;
  category: 'yemekler' | 'mekan' | 'etkinlikler';
  src: string;
}

// Yemekler sekmesi menü ürünlerinden otomatik dolar (içecekler hariç, görseli olanlar).
const foodGallery: GalleryItem[] = getAllMenuItems().flatMap((item) =>
  item.image && item.category !== 'İçecekler'
    ? [{ alt: item.name, category: 'yemekler' as const, src: item.image }]
    : []
);

const galleryItems: GalleryItem[] = [
  ...foodGallery,
  // Mekan
  { alt: 'İç Mekan', category: 'mekan', src: '/images/mekan/ic-mekan.jpg' },
  { alt: 'Restoran Atmosferi', category: 'mekan', src: '/images/mekan/restoran-atmosferi.jpg' },
  { alt: 'Masa Düzeni', category: 'mekan', src: '/images/mekan/masa-duzeni.jpg' },
  { alt: 'Bar Bölümü', category: 'mekan', src: '/images/mekan/bar-bolumu.jpg' },
  // Etkinlikler
  { alt: 'Aile Yemekleri', category: 'etkinlikler', src: '/images/etkinlikler/aile-yemekleri.jpg' },
  { alt: 'Catering Hizmeti', category: 'etkinlikler', src: '/images/etkinlikler/catering.jpg' },
  { alt: 'Toplu Sipariş', category: 'etkinlikler', src: '/images/etkinlikler/toplu-siparis.jpg' },
];

export function GalleryGrid() {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  const renderTab = (category: GalleryItem['category']) => {
    const items = galleryItems.filter((i) => i.category === category);
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
        {items.map((item, i) => (
          <BlurFade key={`${category}-${i}`} delay={0.04 * (i % 8)} inView>
            <button
              type="button"
              onClick={() => setOpen(item)}
              aria-label={`${item.alt} - Efendi Usta Konak Kebap Sancaktepe`}
              className="group relative block w-full aspect-4/5 rounded-lg overflow-hidden border border-border hover:border-gold/40 transition-all"
            >
              <Image
                src={item.src}
                alt={`${item.alt} - Efendi Usta Konak Kebap Sancaktepe`}
                fill
                priority={i < 8}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-linear-to-t from-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-cream text-sm font-display text-left">{item.alt}</p>
              </div>
            </button>
          </BlurFade>
        ))}
      </div>
    );
  };

  return (
    <>
      <Tabs defaultValue="yemekler">
        <TabsList className="bg-surface border border-border">
          <TabsTrigger value="yemekler">Yemekler</TabsTrigger>
          <TabsTrigger value="mekan">Mekan</TabsTrigger>
          <TabsTrigger value="etkinlikler">Etkinlikler</TabsTrigger>
        </TabsList>
        <TabsContent value="yemekler">{renderTab('yemekler')}</TabsContent>
        <TabsContent value="mekan">{renderTab('mekan')}</TabsContent>
        <TabsContent value="etkinlikler">{renderTab('etkinlikler')}</TabsContent>
      </Tabs>

      <Dialog open={Boolean(open)} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl bg-surface border-border p-2">
          <DialogTitle className="sr-only">{open?.alt}</DialogTitle>
          {open && (
            <div className="relative aspect-video w-full rounded-md overflow-hidden">
              <Image
                src={open.src}
                alt={open.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
