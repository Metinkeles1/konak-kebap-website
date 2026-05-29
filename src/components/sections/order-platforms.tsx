import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SectionTitle } from '@/components/shared/section-title';

const platforms = [
  { key: 'yemeksepeti' as const, name: 'Yemeksepeti', color: '#FF0040' },
  { key: 'trendyolYemek' as const, name: 'Trendyol Yemek', color: '#F27A1A' },
  { key: 'migros' as const, name: 'Migros Yemek', color: '#FF7A00' },
  { key: 'getirYemek' as const, name: 'Getir Yemek', color: '#5D3EBC' },
];

export function OrderPlatforms({ compact = false }: { compact?: boolean }) {
  const active = platforms.filter((p) => Boolean(siteConfig.orderPlatforms[p.key]));

  if (active.length === 0) return null;

  if (compact) {
    return (
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {active.map((p) => (
          <a
            key={p.key}
            href={siteConfig.orderPlatforms[p.key]}
            target="_blank"
            rel="noopener noreferrer"
            style={{ '--brand': p.color } as React.CSSProperties}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-surface hover:border-(--brand) transition-colors text-sm"
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} />
            {p.name}
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <section className="relative section px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Online Sipariş" title="Sevdiğiniz Platformdan" />
        <div className="grid gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3">
          {active.map((p, i) => (
            <BlurFade key={p.key} delay={0.1 * i} inView>
              <a
                href={siteConfig.orderPlatforms[p.key]}
                target="_blank"
                rel="noopener noreferrer"
                style={{ '--brand': p.color } as React.CSSProperties}
                className="group relative block overflow-hidden p-6 pl-7 rounded-xl border border-border bg-surface hover:border-(--brand) hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: p.color }} />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-[0.07] transition-opacity" style={{ backgroundColor: p.color }} />
                <div className="relative flex items-center justify-between">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center font-display text-xl font-semibold text-white shadow-sm"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="relative font-display text-xl text-foreground group-hover:text-gold transition-colors mt-4">
                  {p.name}
                </h3>
                <p className="relative text-xs text-muted-foreground mt-1">Hemen sipariş ver</p>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
