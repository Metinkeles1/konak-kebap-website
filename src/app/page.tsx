import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { FeaturedMenu } from '@/components/sections/featured-menu';
import { OrderSection } from '@/components/sections/order-section';
import { AboutSummary } from '@/components/sections/about-summary';
import { GoogleReviews } from '@/components/sections/google-reviews';
import { FAQ } from '@/components/sections/faq';
import { ContactMap } from '@/components/sections/contact-map';
import { getGoogleReviews } from '@/lib/google-reviews';

export default async function HomePage() {
  const reviews = await getGoogleReviews();

  return (
    <>
      <Hero />
      <TrustBar rating={reviews?.rating} reviewCount={reviews?.user_ratings_total} />
      <FeaturedMenu />
      <OrderSection />
      <AboutSummary />
      <GoogleReviews />
      <FAQ />
      <ContactMap />
    </>
  );
}
