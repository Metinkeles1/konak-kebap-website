import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/layout/whatsapp-float';
import { MobileCta } from '@/components/layout/mobile-cta';
import { JsonLd } from '@/components/shared/json-ld';
import { ClarityScript } from '@/components/shared/clarity-script';
import { siteConfig } from '@/lib/site';
import { getRestaurantSchema } from '@/lib/schema';
import { getGoogleReviews } from '@/lib/google-reviews';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Sancaktepe Kebap, Lahmacun & Pide`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: 'Hu6j37gZ3Ax7dQCh98M2z1Zo8D3-l3hSN_BI6taxBH8',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#B85C2E',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const reviews = await getGoogleReviews();
  const rating =
    reviews && reviews.user_ratings_total > 0
      ? { value: reviews.rating, count: reviews.user_ratings_total }
      : siteConfig.rating;

  return (
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <JsonLd data={getRestaurantSchema(rating)} />
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileCta />
        <Toaster theme="light" />
        <ClarityScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
