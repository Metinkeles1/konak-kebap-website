import type React from 'react';
import { Clock, MapPin, Phone, Truck, UtensilsCrossed } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function TrustBar() {
  const items: { icon: React.ReactNode; label: string; href?: string; hideMobile?: boolean }[] = [
    {
      icon: (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#2D7D5A] opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D7D5A]" />
        </span>
      ),
      label: 'Şimdi açık',
    },
    { icon: <Clock className="w-3.5 h-3.5 text-gold" />, label: 'Her gün açık' },
    { icon: <UtensilsCrossed className="w-3.5 h-3.5 text-gold" />, label: '40+ çeşit menü' },
    { icon: <MapPin className="w-3.5 h-3.5 text-gold" />, label: 'Sancaktepe Yenidoğan', hideMobile: true },
    { icon: <Truck className="w-3.5 h-3.5 text-gold" />, label: 'Paket servis', hideMobile: true },
    {
      icon: <Phone className="w-3.5 h-3.5 text-gold" />,
      label: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
      hideMobile: true,
    },
  ];

  return (
    <section className="bg-foreground text-bg py-3 border-y border-border border-b-foreground">
      <div className="mx-auto max-w-360 px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {items.map((item, i) => {
            const content = (
              <span className="inline-flex items-center gap-2">
                {item.icon}
                <span className="text-bg/90">{item.label}</span>
              </span>
            );
            return (
              <div key={i} className={item.hideMobile ? 'hidden md:inline-flex items-center gap-6' : 'inline-flex items-center gap-6'}>
                {item.href ? (
                  <a href={item.href} className="hover:text-gold-light transition-colors">
                    {content}
                  </a>
                ) : (
                  content
                )}
                {i < items.length - 1 && <span className="text-bg/30 hidden md:inline">·</span>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
