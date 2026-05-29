import Link from 'next/link';
import { Clock, CreditCard, MapPin, MessageCircle, Phone } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SectionTitle } from '@/components/shared/section-title';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export function ContactMap() {
  return (
    <section className="section px-4 md:px-8">
      <div className="mx-auto max-w-360">
        <SectionTitle kicker="İletişim & Konum" title="Bizi Ziyaret Edin" />

        <div className="grid gap-8 mt-14 lg:grid-cols-2">
          <BlurFade delay={0} inView>
            <div className="p-5 sm:p-8 rounded-2xl border border-border bg-surface h-full">
              <h3 className="font-display text-2xl text-foreground mb-6">Bilgiler</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Adres</p>
                    <p className="text-foreground">{siteConfig.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Telefon</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-foreground hover:text-gold transition-colors text-lg">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Çalışma Saatleri</p>
                    <p className="text-foreground">{siteConfig.hours.display}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Ödeme</p>
                    <p className="text-foreground">Nakit, Kredi/Banka Kartı, NFC</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {siteConfig.mealCards.map((card) => (
                        <span
                          key={card}
                          className="text-xs px-2 py-0.5 rounded-full border border-border bg-bg text-muted-foreground"
                        >
                          {card}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-8 border-t border-border">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants(), 'bg-[#25D366] hover:bg-[#1ebe5d] text-white flex-1 gap-2')}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <Link
                  href="/rezervasyon"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'border-gold/40 text-gold hover:bg-gold hover:text-bg flex-1'
                  )}
                >
                  Rezervasyon
                </Link>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="rounded-2xl overflow-hidden border border-border h-full min-h-100 xl:min-h-120">
              <iframe
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konum"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
