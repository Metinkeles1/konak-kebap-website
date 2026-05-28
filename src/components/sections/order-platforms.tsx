import { ExternalLink } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SectionTitle } from '@/components/shared/section-title';

const platforms = [
  { key: 'yemeksepeti' as const, name: 'Yemeksepeti', color: 'from-[#ff0040]/20 to-[#ff0040]/5' },
  { key: 'trendyolYemek' as const, name: 'Trendyol Yemek', color: 'from-[#f27a1a]/20 to-[#f27a1a]/5' },
  { key: 'getirYemek' as const, name: 'Getir Yemek', color: 'from-[#5d3ebc]/20 to-[#5d3ebc]/5' },
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-surface hover:border-gold/40 transition-colors text-sm"
          >
            {p.name}
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="Online Sipariş" title="Sevdiğiniz Platformdan" />
        <div className="grid gap-4 mt-10 sm:grid-cols-2 md:grid-cols-3">
          {active.map((p, i) => (
            <BlurFade key={p.key} delay={0.1 * i} inView>
              <a
                href={siteConfig.orderPlatforms[p.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-lg border border-border bg-surface hover:border-gold/40 hover:-translate-y-1 transition-all"
              >
                <div className={`h-12 w-12 rounded-md bg-linear-to-br ${p.color} flex items-center justify-center mb-4`}>
                  <ExternalLink className="w-5 h-5 text-cream" />
                </div>
                <h3 className="font-display text-xl text-cream group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">Hemen sipariş ver</p>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
