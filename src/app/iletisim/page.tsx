import type { Metadata } from 'next';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { SectionTitle } from '@/components/shared/section-title';
import { ContactForm } from '@/components/forms/contact-form';
import { BlurFade } from '@/components/magicui/blur-fade';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'İletişim & Konum — Sancaktepe Yenidoğan',
  description: `Sancaktar Cd. No:2B Sancaktepe. ${siteConfig.phoneDisplay}. Her gün 10:00-01:00 hizmetinizdeyiz.`,
  alternates: { canonical: '/iletisim' },
};

const days = [
  { label: 'Pazartesi', hours: '10:00 — 01:00' },
  { label: 'Salı', hours: '10:00 — 01:00' },
  { label: 'Çarşamba', hours: '10:00 — 01:00' },
  { label: 'Perşembe', hours: '10:00 — 01:00' },
  { label: 'Cuma', hours: '10:00 — 01:00' },
  { label: 'Cumartesi', hours: '10:00 — 01:00' },
  { label: 'Pazar', hours: '10:00 — 01:00' },
];

export default function IletisimPage() {
  return (
    <>
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'İletişim', href: '/iletisim' }]} />
          <div className="mt-8 text-center">
            <SectionTitle
              kicker="İletişim"
              title="Bize Ulaşın"
              description="Sorularınız, rezervasyon ve sipariş talepleriniz için her zaman buradayız."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
          {/* Info card */}
          <BlurFade inView>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-surface">
                <h2 className="font-display text-2xl text-cream mb-5">Bilgiler</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Adres</p>
                      <p className="text-cream">{siteConfig.address.full}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Telefon</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-cream hover:text-gold text-lg transition-colors">
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</p>
                      <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-cream hover:text-gold transition-colors">
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours table */}
              <div className="p-6 rounded-lg border border-border bg-surface">
                <h2 className="font-display text-2xl text-cream mb-5 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  Çalışma Saatleri
                </h2>
                <ul className="space-y-2">
                  {days.map((d) => (
                    <li key={d.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{d.label}</span>
                      <span className="text-cream">{d.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BlurFade>

          {/* Contact form */}
          <BlurFade delay={0.15} inView>
            <div className="p-6 md:p-8 rounded-lg border border-border bg-surface">
              <h2 className="font-display text-2xl text-cream mb-5">Mesaj Gönderin</h2>
              <ContactForm />
            </div>
          </BlurFade>
        </div>

        {/* Map */}
        <div className="mx-auto max-w-6xl mt-10">
          <BlurFade delay={0.3} inView>
            <div className="rounded-lg overflow-hidden border border-border aspect-video">
              <iframe
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konum"
              />
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
