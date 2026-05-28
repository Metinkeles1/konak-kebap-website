import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, MessageCircle, Phone, Truck } from 'lucide-react';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { SectionTitle } from '@/components/shared/section-title';
import { OrderPlatforms } from '@/components/sections/order-platforms';
import { BlurFade } from '@/components/magicui/blur-fade';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';
import { featuredItems, getMenuItemBySlug } from '@/lib/menu';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Paket Servis — Sancaktepe Kebap Teslimat',
  description: `Sancaktepe ve çevresine kebap, lahmacun, pide paket servis. Hızlı teslimat için ${siteConfig.phoneDisplay}.`,
  alternates: { canonical: '/paket-servis' },
};

const districts = [
  'Sancaktepe Yenidoğan',
  'Sancaktepe Eyüp Sultan',
  'Sancaktepe Merve',
  'Sancaktepe Akpınar',
  'Sancaktepe Veysel Karani',
  'Sancaktepe Sarıgazi',
  'Sancaktepe Atatürk',
  'Sancaktepe Fatih',
];

export default function PaketServisPage() {
  const popular = featuredItems
    .map((slug) => getMenuItemBySlug(slug))
    .filter((i): i is NonNullable<ReturnType<typeof getMenuItemBySlug>> => Boolean(i));

  return (
    <>
      <section className="relative py-16 md:py-24 px-4 md:px-8 bg-grain border-b border-border">
        <div className="mx-auto max-w-360">
          <Breadcrumbs items={[{ name: 'Paket Servis', href: '/paket-servis' }]} />
          <div className="mt-8 text-center">
            <SectionTitle
              kicker="Paket Servis"
              title="Kapınıza Sıcak Lezzet"
              description="Sancaktepe ve çevresine hızlı paket servis. Telefondan, WhatsApp'tan veya online platformlardan sipariş verin."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <BlurFade inView>
            <div className="p-8 md:p-10 rounded-lg border border-gold/30 bg-linear-to-br from-gold/5 to-transparent text-center">
              <Truck className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl text-cream">Sipariş Vermek İçin</h2>
              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className={cn(buttonVariants({ size: 'lg' }), 'bg-gold text-bg hover:bg-gold-light gap-2')}
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'bg-[#25D366] hover:bg-[#1ebe5d] text-white gap-2'
                  )}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-6 flex items-center gap-1.5 justify-center">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Her gün 10:00 — 01:00 arası
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <OrderPlatforms />

      {/* SEO content */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          <BlurFade inView>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-cream">
                Sancaktepe&apos;de Paket Servis Hizmeti
              </h2>
              <div className="h-px bg-gold/60 w-16 my-4" />
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                Efendi Usta Konak Kebap olarak, Sancaktepe Yenidoğan&apos;da ve çevre
                mahallelerde hızlı paket servis hizmeti sunuyoruz. Tüm menümüz —{' '}
                <strong className="text-gold">kebap, lahmacun, pide, dürüm, çorba ve tatlılar</strong> — paket servis
                olarak sıcak sıcak kapınıza gelir. Siparişlerimiz özel termal kaplarla,
                lezzetinden hiçbir şey kaybetmeden ulaşır.
              </p>
            </div>
          </BlurFade>

          <BlurFade inView>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-cream">Hizmet Bölgelerimiz</h2>
              <div className="h-px bg-gold/60 w-16 my-4" />
              <p className="text-base text-foreground/90 leading-relaxed mb-4">
                Aşağıdaki Sancaktepe mahallelerine paket servis yapıyoruz:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {districts.map((d) => (
                  <div key={d} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade inView>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-cream">Popüler Paket Ürünler</h2>
              <div className="h-px bg-gold/60 w-16 my-4" />
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {popular.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/menu/${p.slug}`}
                    className="group flex items-center justify-between p-4 rounded-lg border border-border bg-surface hover:border-gold/40 transition-colors"
                  >
                    <div>
                      <h3 className="font-display text-lg text-cream group-hover:text-gold transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{p.desc}</p>
                    </div>
                    <span className="text-gold font-semibold">{p.price} ₺</span>
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade inView>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-cream">Catering & Toplu Sipariş</h2>
              <div className="h-px bg-gold/60 w-16 my-4" />
              <p className="text-base text-foreground/90 leading-relaxed">
                Düğün, nişan, doğum günü, kurumsal yemekler ve etkinlikler için catering hizmeti
                sunuyoruz. <strong className="text-gold">Kilo işi kebap, köfte ve kanat</strong>{' '}
                seçeneklerimizle 10 kişiden 500 kişiye kadar her ölçekte etkinliğinizi
                doyuruyoruz. Catering teklifimiz için bizi arayın veya WhatsApp&apos;tan ulaşın.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
