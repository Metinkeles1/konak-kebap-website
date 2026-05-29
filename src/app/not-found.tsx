import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, UtensilsCrossed, Phone } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section px-4 md:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="font-display text-7xl md:text-8xl text-gold">404</p>
        <h1 className="font-display text-3xl md:text-4xl text-foreground mt-4">
          Bu sayfayı bulamadık
        </h1>
        <p className="text-muted-foreground mt-4">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdan
          menümüze göz atabilir ya da bize ulaşabilirsiniz.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}
          >
            <Home className="w-4 h-4" />
            Ana Sayfa
          </Link>
          <Link
            href="/menu"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'gap-2'
            )}
          >
            <UtensilsCrossed className="w-4 h-4" />
            Menüyü Gör
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-gold text-bg hover:bg-gold-light gap-2'
            )}
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
