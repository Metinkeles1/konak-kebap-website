import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { Clock, CreditCard, MapPin, Phone } from 'lucide-react';

function Instagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-8 md:mt-12">
      <div className="mx-auto max-w-360 px-4 md:px-8 py-16 pb-28 lg:pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-xs tracking-[0.3em] text-gold uppercase">Efendi Usta</span>
              <span className="font-display text-2xl text-cream italic">Konak Kebap</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sancaktepe Yenidoğan&apos;ın en lezzetli kebap adresi. Geleneksel lezzetlerimizi
              modern bir sunumla sofranıza taşıyoruz.
            </p>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 mt-5 rounded-full border border-border text-foreground/70 hover:text-gold hover:border-gold/60 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg text-cream mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="text-muted-foreground hover:text-gold transition-colors">Menü</Link></li>
              <li><Link href="/hakkimizda" className="text-muted-foreground hover:text-gold transition-colors">Hakkımızda</Link></li>
              <li><Link href="/galeri" className="text-muted-foreground hover:text-gold transition-colors">Galeri</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/paket-servis" className="text-muted-foreground hover:text-gold transition-colors">Paket Servis</Link></li>
              <li><Link href="/rezervasyon" className="text-muted-foreground hover:text-gold transition-colors">Rezervasyon</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg text-cream mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.hours.display}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <CreditCard className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <span>Nakit, kart & yemek kartı ({siteConfig.mealCards.join(', ')})</span>
              </li>
            </ul>
          </div>

          {/* Online sipariş */}
          <div>
            <h3 className="font-display text-lg text-cream mb-4">Online Sipariş</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.orderPlatforms.yemeksepeti && (
                <li>
                  <a href={siteConfig.orderPlatforms.yemeksepeti} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                    Yemeksepeti
                  </a>
                </li>
              )}
              {siteConfig.orderPlatforms.trendyolYemek && (
                <li>
                  <a href={siteConfig.orderPlatforms.trendyolYemek} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                    Trendyol Yemek
                  </a>
                </li>
              )}
              {siteConfig.orderPlatforms.migros && (
                <li>
                  <a href={siteConfig.orderPlatforms.migros} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                    Migros Yemek
                  </a>
                </li>
              )}
              {siteConfig.orderPlatforms.getirYemek && (
                <li>
                  <a href={siteConfig.orderPlatforms.getirYemek} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                    Getir Yemek
                  </a>
                </li>
              )}
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                  WhatsApp Sipariş
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-muted-foreground">Sancaktepe Yenidoğan / İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
