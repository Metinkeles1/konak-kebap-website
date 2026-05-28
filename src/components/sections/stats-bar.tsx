import { NumberTicker } from '@/components/magicui/number-ticker';
import { BlurFade } from '@/components/magicui/blur-fade';
import { siteConfig } from '@/lib/site';

interface StatsBarProps {
  rating?: number;
  reviewCount?: number;
}

export function StatsBar({ rating, reviewCount }: StatsBarProps) {
  const stats = [
    { value: 20, suffix: '+', label: 'Kebap Çeşidi' },
    { value: reviewCount && reviewCount > 0 ? reviewCount : 250, suffix: '+', label: 'Mutlu Müşteri' },
    {
      value: rating ?? siteConfig.rating.value,
      suffix: ' ★',
      label: 'Google Puanı',
      decimals: 1,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 border-y border-border bg-surface/30">
      <div className="mx-auto max-w-5xl grid grid-cols-3 gap-3 md:gap-8">
        {stats.map((stat, i) => (
          <BlurFade key={stat.label} delay={0.1 * i} inView>
            <div className="text-center">
              <div className="font-display text-2xl sm:text-4xl md:text-6xl text-gold leading-none">
                <NumberTicker value={stat.value} decimalPlaces={stat.decimals ?? 0} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-3 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
