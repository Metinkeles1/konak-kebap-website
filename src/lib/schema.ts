import { siteConfig } from './site';
import { visibleMenuData } from './menu';
import type { MenuItem } from '@/types/menu';

export function getRestaurantSchema(rating?: { value: number; count: number }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    foundingDate: siteConfig.foundingDate,
    image: [
      `${siteConfig.url}/images/menu/konak-kebap-spesiyali.webp`,
      `${siteConfig.url}/images/mekan/ic-mekan.jpg`,
    ],
    priceRange: '₺₺',
    paymentAccepted: siteConfig.paymentAccepted,
    currenciesAccepted: 'TRY',
    servesCuisine: ['Türk Mutfağı', 'Kebap', 'Lahmacun', 'Pide', 'Dürüm'],
    areaServed: siteConfig.areaServed.map((name) => ({ '@type': 'Place', name })),
    amenityFeature: [
      'Açık hava oturma alanı',
      'Ücretsiz Wi-Fi',
      'Ücretsiz otopark',
      'Helal yemek',
      'Aile salonu',
      'Aileler için uygun',
      'Mama sandalyesi',
      'Çocuk menüsü',
      'Paket servis',
    ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.coordinates.lat,
      longitude: siteConfig.address.coordinates.lng,
    },
    openingHoursSpecification: siteConfig.hours.schedule.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.dow,
      opens: s.open,
      closes: s.close,
    })),
    hasMenu: `${siteConfig.url}/menu`,
    acceptsReservations: 'True',
    hasMap: siteConfig.maps.directUrl,
    contactPoint: [
      { '@type': 'ContactPoint', telephone: siteConfig.phone, contactType: 'reservations', areaServed: 'TR', availableLanguage: 'Turkish' },
      { '@type': 'ContactPoint', telephone: siteConfig.phoneSecondary, contactType: 'customer service', areaServed: 'TR', availableLanguage: 'Turkish' },
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
  };

  if (rating && rating.count > 0) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: '5',
      worstRating: '1',
    };
  }

  return schema;
}

export function getFullMenuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `${siteConfig.name} Menüsü`,
    url: `${siteConfig.url}/menu`,
    inLanguage: 'tr',
    hasMenuSection: Object.entries(visibleMenuData).map(([category, items]) => ({
      '@type': 'MenuSection',
      name: category,
      hasMenuItem: items.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.longDesc || item.desc,
        ...(item.image ? { image: `${siteConfig.url}${item.image}` } : {}),
        offers: {
          '@type': 'Offer',
          price: item.price,
          priceCurrency: 'TRY',
          availability: 'https://schema.org/InStock',
        },
      })),
    })),
  };
}

export function getMenuItemSchema(item: MenuItem, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: item.name,
    description: item.longDesc || item.desc,
    image: item.image ? `${siteConfig.url}${item.image}` : `${siteConfig.url}${siteConfig.ogImage}`,
    offers: {
      '@type': 'Offer',
      price: item.price,
      priceCurrency: 'TRY',
      availability: 'https://schema.org/InStock',
    },
    menuAddOn: category,
  };
}

export function getBlogListSchema(
  posts: Array<{ title: string; description: string; slug: string; publishedAt: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.url}/blog/#blog`,
    name: `${siteConfig.shortName} Blog`,
    description: 'Sancaktepe kebap kültürü, tarifler ve mutfak ipuçları.',
    url: `${siteConfig.url}/blog`,
    inLanguage: 'tr',
    publisher: { '@id': `${siteConfig.url}/#restaurant` },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getFAQSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/blog/${post.slug}` },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: post.coverImage ? `${siteConfig.url}${post.coverImage}` : `${siteConfig.url}${siteConfig.ogImage}`,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}${siteConfig.ogImage}` },
    },
  };
}
