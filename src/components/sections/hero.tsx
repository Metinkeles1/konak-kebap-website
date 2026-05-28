'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-8 md:pt-16 lg:pt-10 pb-12 md:pb-20 lg:pb-10 lg:min-h-[min(calc(100svh-8rem),52rem)] lg:flex lg:items-center">
      <div className="mx-auto w-full max-w-360 px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT — Text & CTAs */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full text-xs text-muted-foreground mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#2D7D5A] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7D5A]" />
              </span>
              <span className="font-medium text-foreground">Şimdi açık</span>
              <span>·</span>
              <span>10:00 — 01:00</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-foreground"
            >
              Sancaktepe&apos;nin
              <br />
              en lezzetli
              <br />
              <span className="text-gold italic font-medium">kebabı.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
              className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Yenidoğan&apos;da, ocak başından sofranıza — günlük taze etlerle,
              el açması hamurla, ustanın elinden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/menu"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'bg-gold text-bg hover:bg-gold-light px-7 py-6 text-base font-semibold gap-2 group transition-[color,background-color,box-shadow] hover:shadow-[0_8px_24px_rgba(192,74,38,0.3)]'
                )}
              >
                Menüyü Gör
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'border border-foreground/20 text-foreground bg-bg hover:bg-foreground hover:text-bg px-7 py-6 text-base font-semibold gap-2'
                )}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp&apos;tan Sipariş
              </a>
            </motion.div>

            {/* Inline trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-14 flex items-center gap-2 text-xs sm:text-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-foreground font-medium">4.7</span>
              <span className="text-muted-foreground">· Google&apos;da 250+ yorum</span>
            </motion.div>
          </div>

          {/* RIGHT — Big food photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-3/4 sm:aspect-4/5 lg:aspect-square rounded-2xl overflow-hidden bg-surface">
              <Image
                src="/images/menu/konak-kebap-spesiyali.jpg"
                alt="Konak Kebap Spesiyali - Efendi Usta Sancaktepe"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 40vw, 50vw"
                className="object-cover"
              />
              {/* Photo badge overlay */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-bg/95 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground shadow-md">
                <span className="text-gold">🔥</span>
                En çok tercih edilen
              </div>
              <div className="absolute bottom-4 right-4 bg-foreground text-bg rounded-lg px-3 py-2 shadow-lg">
                <p className="text-[10px] uppercase tracking-wider opacity-70">Şefin önerisi</p>
                <p className="font-display font-semibold text-lg leading-tight">Konak Kebap</p>
                <p className="text-sm opacity-90">750 ₺</p>
              </div>
            </div>

            {/* Floating accent — secondary small photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block absolute -left-8 -bottom-8 w-40 h-40 xl:w-48 xl:h-48 rounded-xl overflow-hidden border-4 border-bg shadow-xl"
            >
              <Image
                src="/images/menu/lahmacun.jpg"
                alt="Lahmacun"
                fill
                sizes="160px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
