import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { SectionTitle } from '@/components/shared/section-title';
import { ReservationForm } from '@/components/forms/reservation-form';
import { BlurFade } from '@/components/magicui/blur-fade';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Rezervasyon — Masa Ayırt',
  description: `Efendi Usta Konak Kebap'ta masa ayırtmak için formu doldurun veya ${siteConfig.phoneDisplay}'ü arayın.`,
  alternates: { canonical: '/rezervasyon' },
};

export default function RezervasyonPage() {
  return (
    <>
      <section className="relative page-header px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'Rezervasyon', href: '/rezervasyon' }]} />
          <div className="mt-5 md:mt-8 text-center">
            <SectionTitle
              as="h1"
              kicker="Rezervasyon"
              title="Masanızı Ayırtın"
              description="Aile yemekleri, arkadaş buluşmaları ve özel günler için masa rezervasyonu yapın."
            />
          </div>
        </div>
      </section>

      <section className="section-head px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <BlurFade inView>
            <div className="p-6 md:p-10 rounded-lg border border-border bg-surface">
              <ReservationForm />
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-3">veya direkt arayın</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'border-gold/40 text-gold hover:bg-gold hover:text-bg gap-2'
                )}
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
