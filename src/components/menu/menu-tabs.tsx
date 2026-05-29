'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';
import { visibleMenuData } from '@/lib/menu';
import type { CategoryName } from '@/types/menu';
import { DishPlaceholder } from '@/components/shared/dish-placeholder';
import { BlurFade } from '@/components/magicui/blur-fade';
import { cn } from '@/lib/utils';

const categories = Object.keys(visibleMenuData) as CategoryName[];

const hashToCategory: Record<string, CategoryName> = {
  corbalar: 'Çorbalar',
  kebaplar: 'Kebaplar',
  durumler: 'Dürümler',
  lahmacun: 'Lahmacun',
  pideler: 'Pideler',
  'kilo-isi': 'Kilo İşi',
  tatlilar: 'Tatlılar',
  icecekler: 'İçecekler',
};

function getInitialCategory(): CategoryName {
  if (typeof window === 'undefined') return categories[0];
  const hash = window.location.hash.slice(1).toLowerCase();
  const c = hashToCategory[hash];
  return c && categories.includes(c) ? c : categories[0];
}

export function MenuTabs() {
  const [active, setActive] = useState<CategoryName>(getInitialCategory);

  const items = visibleMenuData[active] ?? [];

  return (
    <div>
      {/* Sticky tab bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-background border-b border-border -mx-4 md:-mx-8 px-4 md:px-8 py-3 md:py-4 mb-6 md:mb-8">
        <nav className="flex gap-2 overflow-x-auto scrollbar-none scroll-fade-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
                active === cat
                  ? 'bg-gold text-bg'
                  : 'text-muted-foreground hover:text-gold hover:bg-surface'
              )}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-gold mb-8">{active}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item, i) => (
              <BlurFade key={item.slug} delay={0.04 * (i % 4)} inView className="h-full">
              <Link
                href={`/menu/${item.slug}`}
                className="group flex h-full gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl border border-border bg-surface hover:border-gold/40 transition-all hover:-translate-y-0.5"
              >
                {item.image ? (
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-md overflow-hidden bg-linear-to-br from-gold-dim/30 via-ember/20 to-bg">
                    <Image
                      src={item.image}
                      alt={`${item.name} - Sancaktepe`}
                      fill
                      priority={i < 2}
                      sizes="(max-width: 640px) 240px, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-md overflow-hidden">
                    <DishPlaceholder name={item.name} showName={false} />
                  </div>
                )}
                <div className="flex-1 min-w-0 py-1">
                  <div className="flex items-start gap-2">
                    <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    {item.spicy && (
                      <Flame className="w-4 h-4 text-ember shrink-0 mt-1" aria-label="Acılı" />
                    )}
                  </div>
                  {item.badge && (
                    <span className="inline-block mt-1 text-[10px] tracking-wider uppercase bg-gold/10 text-gold px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                  {item.desc && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end justify-between py-1">
                  <span className="font-display text-lg sm:text-2xl text-gold whitespace-nowrap">
                    {item.price} ₺
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              </BlurFade>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
