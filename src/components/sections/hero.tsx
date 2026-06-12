import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { menuItemCountRounded } from '@/lib/menu';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <>
      {/* MOBILE — full-bleed background image with bottom-aligned content */}
      <section className="relative lg:hidden min-h-[calc(100svh-8rem)] flex items-end overflow-hidden bg-bg">
        <Image
          src="/images/menu/adana-kebap.webp"
          alt="Adana Kebap - Efendi Usta Sancaktepe"
          fill
          priority
          sizes="(min-width: 1024px) 1px, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/85 to-bg/20" />

        <div className="relative z-10 w-full px-4 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface/80 backdrop-blur-sm border border-border rounded-full text-xs text-muted-foreground mb-5 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#2D7D5A] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7D5A]" />
            </span>
            <span className="font-medium text-foreground">Şimdi açık</span>
            <span>·</span>
            <span>Her gün açık</span>
          </div>

          {/* LCP — animasyonsuz, aninda gorunur */}
          <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] tracking-tight text-foreground">
            Sancaktepe&apos;nin
            <br />
            en lezzetli
            <br />
            <span className="text-gold italic font-medium">kebabı.</span>
          </h1>

          <p
            className="mt-5 text-base text-muted-foreground max-w-md leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Yenidoğan&apos;da, ocak başından sofranıza — günlük taze etlerle,
            el açması hamurla, ustanın elinden.
          </p>

          <div
            className="mt-6 flex items-center gap-4 text-sm animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl text-gold leading-none">{siteConfig.rating.value}</span>
              <span className="text-gold leading-none">★</span>
              <span className="text-muted-foreground">Google</span>
            </div>
            <span className="h-8 w-px bg-border/60" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl text-gold leading-none">250+</span>
              <span className="text-muted-foreground">Müşteri</span>
            </div>
            <span className="h-8 w-px bg-border/60" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl text-gold leading-none">{menuItemCountRounded}+</span>
              <span className="text-muted-foreground">Çeşit</span>
            </div>
          </div>

          <div
            className="mt-7 flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            <Link
              href="/menu"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'bg-gold text-bg hover:bg-gold-light px-7 py-6 text-base font-semibold gap-2 group'
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
                'border border-foreground/20 text-foreground bg-bg/60 backdrop-blur-sm hover:bg-foreground hover:text-bg px-7 py-6 text-base font-semibold gap-2'
              )}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp&apos;tan Sipariş
            </a>
          </div>
        </div>
      </section>

      {/* DESKTOP — split layout with food photo */}
      <section className="hidden lg:flex relative overflow-hidden bg-bg lg:-mt-20 lg:py-10 [@media(max-height:850px)]:pt-24 lg:min-h-[calc(100svh-3rem)] lg:items-center">
        <div className="mx-auto w-full max-w-360 px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT — Text & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-full text-xs text-muted-foreground mb-6 animate-fade-up">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#2D7D5A] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7D5A]" />
                </span>
                <span className="font-medium text-foreground">Şimdi açık</span>
                <span>·</span>
                <span>Her gün açık</span>
              </div>

              {/* LCP — animasyonsuz */}
              <p
                aria-hidden="true"
                className="font-display text-7xl xl:text-8xl leading-[0.95] tracking-tight text-foreground"
              >
                Sancaktepe&apos;nin
                <br />
                en lezzetli
                <br />
                <span className="text-gold italic font-medium">kebabı.</span>
              </p>

              <p
                className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed animate-fade-up"
                style={{ animationDelay: '0.15s' }}
              >
                Yenidoğan&apos;da, ocak başından sofranıza — günlük taze etlerle,
                el açması hamurla, ustanın elinden.
              </p>

              <div
                className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up"
                style={{ animationDelay: '0.25s' }}
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
              </div>

              {/* Inline trust signals */}
              <div
                className="mt-14 flex items-center gap-2 text-sm animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-foreground font-medium">{siteConfig.rating.value}</span>
                <span className="text-muted-foreground">· Google&apos;da {siteConfig.rating.count} değerlendirme</span>
              </div>
            </div>

            {/* RIGHT — Big food photo (LCP, animasyonsuz) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface">
                <Image
                  src="/images/menu/adana-kebap.webp"
                  alt="Adana Kebap - Efendi Usta Sancaktepe"
                  fill
                  priority
                  sizes="(max-width: 1024px) 1px, (max-width: 1280px) 40vw, 50vw"
                  className="object-cover"
                />
                {/* Photo badge overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-bg/95 rounded-full px-3 py-1.5 text-xs font-semibold text-foreground shadow-md">
                  <span className="text-gold">🔥</span>
                  En çok tercih edilen
                </div>
                <div className="absolute bottom-4 right-4 bg-foreground text-bg rounded-lg px-3 py-2 shadow-lg">
                  <p className="text-[10px] uppercase tracking-wider opacity-70">Şefin önerisi</p>
                  <p className="font-display font-semibold text-lg leading-tight">Adana Kebap</p>
                  <p className="text-sm opacity-90">400 ₺</p>
                </div>
              </div>

              {/* Floating accent — secondary small photo */}
              <div
                className="absolute -left-8 -bottom-8 w-40 h-40 xl:w-48 xl:h-48 rounded-xl overflow-hidden border-4 border-bg shadow-xl animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                <Image
                  src="/images/menu/lahmacun.webp"
                  alt="Lahmacun"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
