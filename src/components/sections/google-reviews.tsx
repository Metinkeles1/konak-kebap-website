import { Star } from 'lucide-react';
import Image from 'next/image';
import { getGoogleReviews } from '@/lib/google-reviews';
import { curatedReviews } from '@/lib/reviews';
import { siteConfig } from '@/lib/site';
import { Marquee } from '@/components/magicui/marquee';
import { SectionTitle } from '@/components/shared/section-title';

interface DisplayReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  source: string;
}

export async function GoogleReviews() {
  const data = await getGoogleReviews();

  const googleReviews: DisplayReview[] = (data?.reviews ?? []).slice(0, 5).map((r) => ({
    author_name: r.author_name,
    rating: r.rating,
    text: r.text,
    relative_time_description: r.relative_time_description,
    profile_photo_url: r.profile_photo_url,
    source: 'Google',
  }));

  const reviews: DisplayReview[] = [...googleReviews, ...curatedReviews];
  if (reviews.length === 0) return null;

  const rating = data?.rating ?? siteConfig.rating.value;
  const total = data?.user_ratings_total ?? siteConfig.rating.count;

  return (
    <section className="section px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-360">
        <SectionTitle
          kicker="Müşteri Yorumları"
          title="Ne Diyor Sancaktepelliler?"
          description="Google ve sipariş platformlarında binlerce mutlu müşteri."
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[{ name: 'Google', value: rating, count: total }, ...siteConfig.reviewPlatforms].map((pf) => (
            <div
              key={pf.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2"
            >
              <Star className="w-4 h-4 fill-gold text-gold shrink-0" />
              <span className="font-display text-lg text-foreground leading-none">{pf.value.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">
                {pf.name} · {pf.count}+ yorum
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
        <Marquee pauseOnHover className="[--duration:50s]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="w-72 sm:w-80 md:w-100 mx-2 p-4 sm:p-6 rounded-xl border border-border bg-surface flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  {r.profile_photo_url ? (
                    <Image
                      src={r.profile_photo_url}
                      alt={r.author_name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold shrink-0">
                      {r.author_name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{r.author_name}</p>
                    <p className="text-xs text-muted-foreground truncate">{r.relative_time_description}</p>
                  </div>
                </div>
                <span className="shrink-0 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                  {r.source}
                </span>
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
