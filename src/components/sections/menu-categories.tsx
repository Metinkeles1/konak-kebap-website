import Link from 'next/link';
import { ArrowRight, Soup, UtensilsCrossed, Wheat, Pizza } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SectionTitle } from '@/components/shared/section-title';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  { name: 'Kebaplar', icon: UtensilsCrossed, desc: '20+ kebap çeşidi', anchor: 'kebaplar' },
  { name: 'Dürümler', icon: Wheat, desc: '6 dürüm çeşidi', anchor: 'durumler' },
  { name: 'Lahmacun', icon: Pizza, desc: 'El açması', anchor: 'lahmacun' },
  { name: 'Pideler', icon: Soup, desc: '8 pide çeşidi', anchor: 'pideler' },
];

export function MenuCategories() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-surface/30">
      <div className="mx-auto max-w-360">
        <SectionTitle
          kicker="Menü"
          title="Damak Çıtanızı Yükseltin"
          description="40'tan fazla çeşit — soğuk meze, çorba, kebap, pide, tatlı ve içecekler."
        />

        <div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <BlurFade key={cat.name} delay={0.1 * i} inView>
                <Link
                  href={`/menu#${cat.anchor}`}
                  className="group flex items-center gap-4 p-6 rounded-lg border border-border bg-surface hover:border-gold/40 transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{cat.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </Link>
              </BlurFade>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className={cn(buttonVariants({ size: 'lg' }), 'bg-gold text-bg hover:bg-gold-light px-8')}
          >
            Tüm Menüyü Gör
          </Link>
        </div>
      </div>
    </section>
  );
}
