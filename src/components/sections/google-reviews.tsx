import { Star } from 'lucide-react';
import Image from 'next/image';
import { getGoogleReviews } from '@/lib/google-reviews';
import { Marquee } from '@/components/magicui/marquee';
import { SectionTitle } from '@/components/shared/section-title';

export async function GoogleReviews() {
  const data = await getGoogleReviews();
  if (!data || !data.reviews || data.reviews.length === 0) return null;

  const reviews = data.reviews.slice(0, 5);

  return (
    <section className="py-14 md:py-28 xl:py-36 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-360">
        <SectionTitle
          kicker="Müşteri Yorumları"
          title="Ne Diyor Sancaktepelliler?"
          description={`Google'da ${data.rating.toFixed(1)} ★ puan, ${data.user_ratings_total}+ yorum.`}
        />
      </div>
      <div className="mt-12 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        <Marquee pauseOnHover className="[--duration:50s]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="w-72 sm:w-80 md:w-100 mx-2 p-4 sm:p-6 rounded-lg border border-border bg-surface flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                {r.profile_photo_url ? (
                  <Image
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
                    {r.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-cream">{r.author_name}</p>
                  <p className="text-xs text-muted-foreground">{r.relative_time_description}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-3.5 h-3.5 ${j < r.rating ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                {r.text}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
