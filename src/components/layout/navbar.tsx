'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/menu', label: 'Menü' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'İletişim' },
  { href: '/rezervasyon', label: 'Rezervasyon' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-[background-color,border-color] duration-300',
        scrolled
          ? 'bg-background/95 border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto max-w-360 px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase">
            Efendi Usta
          </span>
          <span className="font-display text-lg md:text-xl text-foreground italic">
            Konak Kebap
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-gold',
                isActive(item.href) ? 'text-gold' : 'text-foreground/80'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Phone + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            aria-label="Telefon ile arayın"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'hidden md:inline-flex border-gold/40 text-gold hover:bg-gold hover:text-bg gap-1.5'
            )}
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden text-gold" aria-label="Menüyü aç" />
              }
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" showCloseButton={false} className="bg-background border-border w-72 p-6">
              <SheetTitle className="sr-only">Mobil Menü</SheetTitle>
              <div className="flex items-center justify-between mb-8 mt-2">
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] tracking-[0.3em] text-gold uppercase">
                    Efendi Usta
                  </span>
                  <span className="font-display text-lg text-foreground italic">Konak Kebap</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menüyü kapat"
                  className="text-foreground/70 hover:text-gold transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-3 py-3 rounded-md text-base font-medium transition-colors',
                      isActive(item.href)
                        ? 'bg-gold/10 text-gold'
                        : 'text-foreground/80 hover:text-gold hover:bg-surface'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-6 px-3 py-3 rounded-md border border-gold/40 text-gold text-base font-medium flex items-center gap-2 hover:bg-gold hover:text-bg transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
