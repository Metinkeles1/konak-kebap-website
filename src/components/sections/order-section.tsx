import { ExternalLink, MessageCircle, Phone } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { siteConfig } from '@/lib/site';

export function OrderSection() {
  const platforms = [
    { key: 'yemeksepeti' as const, name: 'Yemeksepeti', color: '#FF0040' },
    { key: 'trendyolYemek' as const, name: 'Trendyol Yemek', color: '#F27A1A' },
    { key: 'getirYemek' as const, name: 'Getir Yemek', color: '#5D3EBC' },
  ];

  const activePlatforms = platforms.filter((p) => Boolean(siteConfig.orderPlatforms[p.key]));

  return (
    <section className="relative py-14 md:py-28 xl:py-36 px-4 md:px-8">
      <div className="mx-auto max-w-360">
        <BlurFade inView>
          <div className="relative rounded-3xl overflow-hidden bg-foreground p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #FAF7F2 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Text */}
              <div>
                <p className="kicker mb-4">Sipariş Ver</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-bg leading-[1.05] tracking-tight">
                  Karnınız mı acıktı?{' '}
                  <span className="italic text-gold-light">Tek tıkla.</span>
                </h2>
                <div className="h-px w-16 bg-gold/60 mt-6" />
                <p className="mt-6 text-base md:text-lg text-bg/70 leading-relaxed max-w-md">
                  WhatsApp, telefon veya online platformlardan — istediğiniz şekilde
                  sipariş verin. 25-40 dakikada kapınızda.
                </p>
              </div>

              {/* Right: Action buttons */}
              <div className="flex flex-col gap-3">
                {/* Primary actions */}
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg leading-tight">WhatsApp</p>
                      <p className="text-sm opacity-85">En hızlı yol</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform]" />
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-between p-5 rounded-xl bg-gold text-bg hover:bg-gold-light transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-bg/15 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg leading-tight">Telefon</p>
                      <p className="text-sm opacity-85">{siteConfig.phoneDisplay}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform]" />
                </a>

                {/* Platforms */}
                {activePlatforms.length > 0 && (
                  <>
                    <div className="flex items-center gap-3 my-2">
                      <div className="h-px flex-1 bg-bg/10" />
                      <span className="text-xs text-bg/40 uppercase tracking-wider">veya</span>
                      <div className="h-px flex-1 bg-bg/10" />
                    </div>
                    {activePlatforms.map((p) => (
                      <a
                        key={p.key}
                        href={siteConfig.orderPlatforms[p.key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-5 py-4 rounded-xl border border-bg/15 text-bg hover:bg-bg/5 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: p.color }}
                          />
                          <span className="font-medium">{p.name}</span>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </>
                )}

                {activePlatforms.length === 0 && (
                  <p className="text-bg/40 text-xs text-center mt-2">
                    Yemeksepeti, Trendyol Yemek, Getir Yemek &mdash; çok yakında
                  </p>
                )}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
