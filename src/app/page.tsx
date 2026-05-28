import { Hero } from '@/components/sections/hero';
import { TrustBar } from '@/components/sections/trust-bar';
import { FeaturedMenu } from '@/components/sections/featured-menu';
import { OrderSection } from '@/components/sections/order-section';
import { AboutSummary } from '@/components/sections/about-summary';
import { GoogleReviews } from '@/components/sections/google-reviews';
import { FAQ } from '@/components/sections/faq';
import { ContactMap } from '@/components/sections/contact-map';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedMenu />
      <OrderSection />
      <AboutSummary />
      <GoogleReviews />
      <FAQ />
      <ContactMap />
    </>
  );
}
