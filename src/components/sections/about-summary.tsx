import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame, MapPin } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { menuItemCountRounded } from '@/lib/menu';
import { cn } from '@/lib/utils';

export function AboutSummary() {
  return (
    <section className="relative section px-4 md:px-8 bg-surface">
      <div className="mx-auto max-w-360">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="kicker mb-4">Biz Kimiz</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground tracking-tight leading-[1.05]">
            Sancaktepe&apos;de <span className="italic text-gold">tutkulu</span> bir kebap dükkanı.
          </h2>
          <div className="h-px w-16 bg-gold/60 mt-6" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 xl:gap-6">
          {/* Big photo - 2x2 */}
          <BlurFade delay={0} inView className="md:col-span-2 md:row-span-2 min-h-72 md:min-h-105">
            <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-bg">
              <Image
                src="/images/mekan/ic-mekan.jpg"
                alt="Efendi Usta Konak Kebap iç mekan"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <p className="text-bg/70 text-xs uppercase tracking-wider mb-2">Hikayemiz</p>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-bg leading-tight">
                  Sancaktar Caddesi&apos;nde, ocak başında, taze malzemeyle.
                </h3>
                <p className="text-bg/85 text-sm md:text-base mt-4 leading-relaxed max-w-lg">
                  Yenidoğan&apos;ın kalbinde, kısa sürede semtin en sevilen
                  kebap adresi haline geldik. Geleneksel tariflerle, ustanın
                  elinden, dürüst fiyatlarla.
                </p>
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center gap-1.5 text-bg font-semibold text-sm mt-5 group"
                >
                  <span className="border-b border-gold/60 pb-0.5">Daha fazla oku</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </BlurFade>

          {/* Stat: dishes */}
          <BlurFade delay={0.1} inView>
            <div className="rounded-2xl border border-border bg-bg p-6 md:p-8 h-full flex flex-col justify-between min-h-40 md:min-h-50">
              <Flame className="w-7 h-7 text-gold" />
              <div>
                <p className="font-display text-5xl md:text-6xl text-foreground font-semibold leading-none tracking-tight">
                  <NumberTicker value={menuItemCountRounded} />+
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Çeşit menü — kebap, lahmacun, pide, dürüm ve dahası
                </p>
              </div>
            </div>
          </BlurFade>

          {/* Stat / Location */}
          <BlurFade delay={0.2} inView>
            <div className="rounded-2xl bg-foreground text-bg p-6 md:p-8 h-full flex flex-col justify-between min-h-40 md:min-h-50">
              <MapPin className="w-7 h-7 text-gold-light" />
              <div>
                <p className="font-display text-xl text-bg leading-tight">
                  {siteConfig.address.street}
                </p>
                <p className="text-sm text-bg/70 mt-1">
                  {siteConfig.address.district}, {siteConfig.address.city}
                </p>
                <a
                  href={siteConfig.maps.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'sm', variant: 'outline' }),
                    'mt-5 border-bg/20 bg-transparent text-bg hover:bg-bg hover:text-foreground gap-1.5'
                  )}
                >
                  Yol tarifi
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
