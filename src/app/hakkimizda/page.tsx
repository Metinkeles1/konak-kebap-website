import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { SectionTitle } from '@/components/shared/section-title';
import { StatsBar } from '@/components/sections/stats-bar';
import { BlurFade } from '@/components/magicui/blur-fade';
import { menuItemCountRounded } from '@/lib/menu';

export const metadata: Metadata = {
  title: 'Hakkımızda — Sancaktepe Yenidoğan',
  description:
    "Sancaktepe Yenidoğan'da taze malzeme, usta elleri ve uygun fiyatla hizmet veren Efendi Usta Konak Kebap hakkında bilgi alın.",
  alternates: { canonical: '/hakkimizda' },
};

const reasons = [
  {
    title: 'Taze Malzeme',
    desc: 'Günlük taze et, gözümüzün önünde hazırlanan kıyma, yerel ve mevsiminde sebzeler.',
  },
  {
    title: 'Uygun Fiyat',
    desc: 'Aile dostu fiyatlar — kaliteden ödün vermeden cüzdanınıza uygun seçenekler.',
  },
  {
    title: 'Geniş Menü',
    desc: `${menuItemCountRounded}+ çeşit: kebap, dürüm, lahmacun, pide, çorba, tatlı ve içecekler.`,
  },
  {
    title: 'Kolay Ulaşım',
    desc: 'Sancaktar Caddesi üzerinde, ana yola yakın, park imkanı mevcut.',
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="relative page-header px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'Hakkımızda', href: '/hakkimizda' }]} />
          <div className="mt-5 md:mt-8 text-center">
            <SectionTitle
              as="h1"
              kicker="Hakkımızda"
              title="Geleneksel Lezzetin Adresi"
              description="Sancaktepe Yenidoğan'da, ustalık ve tutkuyla hizmet veriyoruz."
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-head px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <BlurFade inView>
            <div className="prose-invert">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Efendi Usta Konak Kebap, Sancaktepe Yenidoğan&apos;ın kalbinde, Sancaktar Caddesi
                üzerinde hizmet veren bir aile işletmesidir. Kuruluşumuzdan bu yana,{' '}
                <strong className="text-gold">geleneksel Türk mutfağının</strong> en güzel
                örneklerini, modern bir sunum anlayışıyla misafirlerimize sunmayı amaçlıyoruz.
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-6">
                Mutfağımızın temelinde <strong className="text-gold">taze malzeme</strong>{' '}
                anlayışı yatar. Etlerimizi günlük olarak tedarik ediyor, kıymalarımızı kendi
                mutfağımızda günlük olarak hazırlıyoruz. Lahmacun hamurumuzu el ile açıyor,
                pidelerimizi taş fırında pişiriyoruz. Adana ve Urfa kebabımız, özel baharat
                karışımımız ve közde pişirme tekniğimizle, otantik lezzetin Sancaktepe&apos;deki
                en doğru adresi olmayı hedefliyoruz.
              </p>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-6">
                İmza yemeğimiz <strong className="text-gold">Konak Kebap Spesiyali</strong>, özel
                baharat karışımı ve restoran tarzı sunumuyla Sancaktepe&apos;de tadına ancak
                burada varılabilecek bir lezzet sunar. Aile yemekleri, arkadaş buluşmaları ve özel
                organizasyonlar için sıcak atmosferimiz ve samimi servisimizle hafta boyunca
                hizmetinizdeyiz.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Why us */}
      <section className="section px-4 md:px-8 bg-surface/30">
        <div className="mx-auto max-w-360">
          <SectionTitle kicker="Neden Biz?" title="Sancaktepe'nin Favori Adresi" />
          <div className="grid gap-6 mt-14 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <BlurFade key={reason.title} delay={0.1 * i} inView>
                <div className="p-6 rounded-xl border border-border bg-surface h-full">
                  <div className="w-10 h-10 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
    </>
  );
}
