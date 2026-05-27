import { Flame, Truck, Award } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';

const features = [
  {
    icon: Flame,
    title: 'Geleneksel Lezzet',
    desc: 'Ustanın elinden, közün başından — günlük taze malzemeyle hazırlanan otantik tatlar.',
  },
  {
    icon: Truck,
    title: 'Paket & Catering',
    desc: 'Kapınıza kadar hızlı paket servis, düğün ve etkinlikler için catering hizmeti.',
  },
  {
    icon: Award,
    title: 'Uygun Fiyat',
    desc: 'Kaliteden ödün vermeden, cüzdanınıza uygun aile dostu fiyatlar.',
  },
];

export function Features() {
  return (
    <section className="relative py-14 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-360 grid gap-6 md:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <BlurFade key={feature.title} delay={0.1 * i} inView>
              <div className="group relative h-full p-8 rounded-lg border border-border bg-surface/50 hover:border-gold/40 hover:bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(201,168,76,0.15)]">
                <div className="w-12 h-12 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-cream mb-3">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
