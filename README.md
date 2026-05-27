# Efendi Usta Konak Kebap

Sancaktepe Yenidoğan'da hizmet veren **Efendi Usta Konak Kebap** restoranının resmi web sitesi.

**Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · shadcn/ui (base-nova) · Framer Motion · MDX

---

## Hızlı Başlangıç

```bash
# Bağımlılıklar
pnpm install

# Geliştirme sunucusu
pnpm dev

# Production build
pnpm build && pnpm start

# Lint
pnpm lint
```

`http://localhost:3000` adresinde çalışır.

---

## Ortam Değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın ve doldurun:

```bash
NEXT_PUBLIC_SITE_URL=https://efendiustakonakkebap.com

# Google Places API — gerçek Google yorumlarını çekmek için
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=

# Microsoft Clarity — ücretsiz heatmap & session recording
NEXT_PUBLIC_CLARITY_PROJECT_ID=
```

**Google Places API kurulumu:**

1. [console.cloud.google.com](https://console.cloud.google.com/google/maps-apis) adresinden proje oluşturun
2. "Places API"yi etkinleştirin
3. API anahtarı oluşturun
4. Restoranın Place ID'sini [bu sayfadan](https://developers.google.com/maps/documentation/places/web-service/place-id) bulun

**Microsoft Clarity kurulumu:**

1. [clarity.microsoft.com](https://clarity.microsoft.com) adresinde proje oluşturun
2. Project ID'yi kopyalayıp env'e ekleyin

API anahtarları boşsa, ilgili özellikler otomatik olarak gizlenir (graceful fallback).

---

## Proje Yapısı

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (Navbar, Footer, JsonLd)
│   ├── page.tsx              # Ana sayfa
│   ├── menu/
│   │   ├── page.tsx          # Menü listesi
│   │   └── [slug]/page.tsx   # Her ürün için ayrı sayfa (SEO için)
│   ├── blog/
│   │   ├── page.tsx          # Blog listesi
│   │   └── [slug]/page.tsx   # MDX render
│   ├── hakkimizda/
│   ├── galeri/
│   ├── iletisim/
│   ├── rezervasyon/
│   ├── paket-servis/
│   ├── sitemap.ts            # /sitemap.xml
│   ├── robots.ts             # /robots.txt
│   ├── manifest.ts           # PWA
│   └── opengraph-image.tsx   # Dinamik OG image
├── components/
│   ├── ui/                   # shadcn primitives
│   ├── aceternity/           # Premium efektler (Spotlight, BackgroundBeams, Card3D)
│   ├── magicui/              # Animasyon component'leri (BlurFade, Marquee, NumberTicker)
│   ├── layout/               # Navbar, Footer, WhatsAppFloat
│   ├── sections/             # Ana sayfa section'ları
│   ├── menu/                 # MenuTabs, MenuItem
│   ├── gallery/              # GalleryGrid, Lightbox
│   ├── forms/                # ReservationForm, ContactForm
│   ├── blog/                 # BlogCard, BlogContent
│   └── shared/               # SectionTitle, Breadcrumbs, JsonLd, ClarityScript
├── lib/
│   ├── site.ts               # Site config — tüm site bilgisi tek yerde
│   ├── menu.ts               # Menü verisi + utility fonksiyonlar
│   ├── schema.ts             # JSON-LD schema generators
│   ├── faq.ts                # FAQ verileri
│   ├── google-reviews.ts     # Google Places API client
│   ├── blog.ts               # MDX okuma, frontmatter parse
│   └── utils.ts              # cn() utility
├── types/                    # MenuItem, BlogPost tipleri
├── content/blog/             # MDX blog yazıları
└── mdx-components.tsx        # MDX render override
```

---

## İçerik Güncelleme

### Yeni Menü Öğesi Ekleme

`src/lib/menu.ts` dosyasında ilgili kategori dizisine yeni `MenuItem` ekleyin:

```typescript
{
  slug: 'yeni-urun',              // URL slug — eşsiz olmalı
  name: 'Yeni Ürün',
  price: 250,
  desc: 'Kısa açıklama.',
  longDesc: 'Uzun SEO açıklaması (250+ kelime ideal).',
  ingredients: ['Malzeme 1', 'Malzeme 2'],
  badge: 'Şef Önerisi',           // opsiyonel
  popular: true,                  // opsiyonel
  spicy: true,                    // opsiyonel
  prepTime: '15 dk',              // opsiyonel
}
```

Build sırasında otomatik olarak `/menu/yeni-urun` sayfası ve sitemap kaydı oluşturulur.

### Yeni Blog Yazısı Ekleme

`src/content/blog/yeni-yazi.mdx` dosyası oluşturun:

```mdx
---
title: 'Yazı Başlığı'
description: 'SEO açıklaması (150-160 karakter)'
publishedAt: '2025-02-01'
coverImage: '/images/blog/yeni-yazi.jpg'
keywords: ['anahtar1', 'anahtar2']
relatedSlugs: ['ilgili-yazi-1', 'ilgili-yazi-2']
---

# Yazı Başlığı

İçerik...
```

### Site Bilgileri (telefon, adres vs.)

`src/lib/site.ts` — tek kaynak. Tüm site bu dosyadan beslenir.

### Online Sipariş Platformları

`src/lib/site.ts` içinde `orderPlatforms` alanına URL'leri ekleyin:

```typescript
orderPlatforms: {
  yemeksepeti: 'https://www.yemeksepeti.com/restaurant/...',
  trendyolYemek: 'https://www.trendyolyemek.com/...',
  getirYemek: 'https://yemek.getir.com/restoran/...',
}
```

URL'ler boşsa, ilgili platformlar otomatik olarak gizlenir.

---

## SEO Özellikleri

- ✅ Her sayfada `generateMetadata` — unique title/description
- ✅ Schema.org JSON-LD: Restaurant, MenuItem, BreadcrumbList, FAQPage, BlogPosting, AggregateRating
- ✅ Otomatik `sitemap.xml` (menü ürünleri + blog yazıları dahil)
- ✅ `robots.txt`
- ✅ Open Graph + Twitter Card metadata
- ✅ PWA manifest
- ✅ Dinamik OG image (`next/og`)
- ✅ Canonical URL'ler
- ✅ Her menü ürünü için ayrı SEO sayfası (long-tail keyword'ler için)
- ✅ Google Places API ile gerçek müşteri yorumları
- ✅ Microsoft Clarity ile heatmap (A/B testing yerine)

---

## Deploy

### Vercel (Önerilen)

1. GitHub'a push edin
2. [vercel.com](https://vercel.com) → New Project → Import repository
3. Environment variables sekmesinden `.env.local` değişkenlerini ekleyin
4. Deploy

Otomatik özellikler:
- Edge Network CDN
- Image optimization
- Analytics (`@vercel/analytics`)
- Speed Insights (`@vercel/speed-insights`)
- ISR (Incremental Static Regeneration)

### Alternatif Hosting

`pnpm build && pnpm start` ile herhangi bir Node.js host'unda çalışır (Railway, Render, vb.).

---

## Geliştirme Notları

- **Tailwind v4** kullanılıyor — config CSS'te `@theme` directive ile yapılıyor (tailwind.config.ts YOK)
- **shadcn/ui base-nova** (default değil) — `@base-ui/react` üzerine kurulu, `asChild` yerine `render` prop kullanır
- **Framer Motion** → `motion/react` paketi
- **MDX** — Turbopack uyumlu konfigürasyon (`next.config.ts`'te string array plugin syntax)
- **Form'larda** RHF + Zod kullanılıyor → submit WhatsApp deep link'e yönlendirir

---

## Lisans

Bu proje Efendi Usta Konak Kebap restoranı için özel olarak geliştirilmiştir.
