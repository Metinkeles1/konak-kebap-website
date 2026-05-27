'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';

interface GalleryItem {
  alt: string;
  category: 'yemekler' | 'mekan' | 'etkinlikler';
  src: string;
}

const galleryItems: GalleryItem[] = [
  // Yemekler
  { alt: 'Adana Kebap', category: 'yemekler', src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Konak Kebap Spesiyali', category: 'yemekler', src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Lahmacun', category: 'yemekler', src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Karışık Pide', category: 'yemekler', src: 'https://images.unsplash.com/photo-1574936145840-28808d77a0b6?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Karışık Kebap', category: 'yemekler', src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Adana Dürüm', category: 'yemekler', src: 'https://images.unsplash.com/photo-1561626423-a51b45aef0a1?w=900&q=80&auto=format&fit=crop' },
  // Mekan
  { alt: 'İç Mekan', category: 'mekan', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Restoran Atmosferi', category: 'mekan', src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Masa Düzeni', category: 'mekan', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Bar Bölümü', category: 'mekan', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80&auto=format&fit=crop' },
  // Etkinlikler
  { alt: 'Aile Yemekleri', category: 'etkinlikler', src: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Catering Hizmeti', category: 'etkinlikler', src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80&auto=format&fit=crop' },
  { alt: 'Toplu Sipariş', category: 'etkinlikler', src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=80&auto=format&fit=crop' },
];

export function GalleryGrid() {
  const [open, setOpen] = useState<GalleryItem | null>(null);

  const renderTab = (category: GalleryItem['category']) => {
    const items = galleryItems.filter((i) => i.category === category);
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-8 [column-fill:balance]">
        {items.map((item, i) => (
          <BlurFade key={`${category}-${i}`} delay={0.05 * i} inView>
            <button
              type="button"
              onClick={() => setOpen(item)}
              aria-label={`${item.alt} - Efendi Usta Konak Kebap Sancaktepe`}
              className={cn(
                'group relative block w-full mb-4 rounded-lg overflow-hidden border border-border hover:border-gold/40 transition-all',
                i % 3 === 0 ? 'aspect-square' : i % 3 === 1 ? 'aspect-3/4' : 'aspect-4/5'
              )}
            >
              <Image
                src={item.src}
                alt={`${item.alt} - Efendi Usta Konak Kebap Sancaktepe`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bg/30 group-hover:bg-bg/0 transition-colors pointer-events-none" />
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
                src={open.src.replace('w=900', 'w=1600')}
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
