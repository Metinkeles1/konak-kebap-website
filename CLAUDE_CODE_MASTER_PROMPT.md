# 🔥 EFENDİ USTA KONAK KEBAP — CLAUDE CODE MASTER PROMPT (v3 — FINAL)

> Bu dosyayı Claude Code'a ver ve "Bu master prompt'a göre projeyi sıfırdan oluştur" de.
> Her dosya production-ready üretilecek. Placeholder veya TODO bırakılmayacak.

---

## 🎯 GÖREV TANIMI

Sen kıdemli bir Next.js/React full-stack geliştiricisi ve UI/UX tasarımcısısın. **Efendi Usta Konak Kebap** restoranı için production-ready, agresif SEO uyumlu, premium görünümlü bir web sitesi geliştireceksin.

**Hedef:** Sancaktepe ve çevresinde "kebap", "lahmacun", "pide" anahtar kelimelerinde Google'da ilk 3 + high-end restoran sitesi görsel kalitesi.

---

## 🛠️ TEKNOLOJİ STACK

```
Framework:    Next.js 15 (App Router, SSG)
Dil:          TypeScript (strict mode)
Stil:         Tailwind CSS v4
UI Stack:     shadcn/ui (foundation) + Aceternity UI (effects) + Magic UI (animations)
Animasyon:    Framer Motion (motion/react)
İkonlar:      Lucide React
Form:         React Hook Form + Zod
Görseller:    next/image + Sharp (otomatik WebP/AVIF)
Font:         next/font/google (Playfair Display + Lato)
SEO:          generateMetadata API, JSON-LD, app/sitemap.ts, app/robots.ts
İçerik:       TypeScript dosyaları (lib/menu.ts) + MDX (blog)
Blog:         @next/mdx + gray-matter
Reviews:      Google Places API (gerçek Google yorumları)
Online Sip.:  Yemeksepeti, Trendyol Yemek, Getir Yemek deep link
Analytics:    Vercel Analytics + Microsoft Clarity (heatmap/session recording)
Deploy:       Vercel
Paket Yön.:   pnpm
```

### UI Kütüphaneleri — Hangi Component Nereden?

| Kategori | Kütüphane | Component Örnekleri |
|----------|-----------|---------------------|
| Form, Button, Dialog, Tabs, Sheet, Card, Accordion | **shadcn/ui** | `button`, `dialog`, `sheet`, `tabs`, `form`, `accordion`, `sonner` |
| Hero efektleri, premium görsel ögeler | **Aceternity UI** | `Spotlight`, `BackgroundBeams`, `3DCard`, `MovingBorder` |
| Animasyonlar, scroll reveals, sayaç | **Magic UI** | `BlurFade`, `Marquee`, `NumberTicker`, `ShimmerButton`, `BorderBeam`, `AnimatedGradientText` |
| Restoran-özel custom | **Sıfırdan** | MenuItem card, ReservationForm, GalleryMasonry |

**KURALLAR:**
- App Router (Pages Router YOK)
- Server Components default, `"use client"` sadece gerektiğinde
- Tüm sayfalar SSG
- Initial JS bundle hedefi: < 200kb
- Aceternity/Magic UI component'larını `src/components/aceternity/` ve `src/components/magicui/` altına **elle kopyala** (npm değil)

---

## 📦 PROJE KURULUM

```bash
# 1. Next.js
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*" --eslint

# 2. shadcn/ui
npx shadcn@latest init    # new-york, slate base, CSS variables
npx shadcn@latest add button card input label textarea select dialog sheet tabs separator badge sonner form accordion

# 3. Paketler
pnpm add framer-motion lucide-react react-hook-form @hookform/resolvers zod
pnpm add @vercel/analytics @vercel/speed-insights
pnpm add -D sharp

# 4. MDX
pnpm add @next/mdx @mdx-js/loader @mdx-js/react gray-matter rehype-slug rehype-autolink-headings

# 5. Aceternity & Magic UI: ui.aceternity.com ve magicui.design'dan elle kopyala
```

---

## 🎨 TASARIM SİSTEMİ

### Renk Paleti — `src/app/globals.css` (Tailwind v4)

```css
@import "tailwindcss";

@theme {
  --color-bg: #0A0A0A;
  --color-surface: #141414;
  --color-surface-2: #1E1E1E;
  --color-border: #2A2A2A;
  --color-gold: #C9A84C;
  --color-gold-light: #E8C96A;
  --color-gold-dim: #8B6914;
  --color-text: #F0EDE6;
  --color-text-muted: #9A9590;
  --color-cream: #F5F0E8;
  --color-ember: #B85C2E;        /* spicy badge */

  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Lato', sans-serif;

  --shadow-gold: 0 4px 24px rgba(201, 168, 76, 0.15);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.4);
  --shadow-premium: 0 20px 60px -10px rgba(201, 168, 76, 0.25);
}

/* shadcn dark theme (HSL) */
:root {
  --background: 0 0% 4%;
  --foreground: 36 25% 92%;
  --primary: 42 55% 54%;
  --primary-foreground: 0 0% 4%;
  --card: 0 0% 8%;
  --card-foreground: 36 25% 92%;
  --border: 0 0% 16%;
  --input: 0 0% 16%;
  --ring: 42 55% 54%;
  --muted: 0 0% 12%;
  --muted-foreground: 30 10% 60%;
  --accent: 42 55% 54%;
  --accent-foreground: 0 0% 4%;
  --destructive: 0 70% 50%;
  --radius: 0.5rem;
}

/* Grain texture utility */
.bg-grain {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
}
```

### Font Yükleme — `src/app/layout.tsx`

```typescript
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});
```

### Tipografi
- H1: `font-display`, altın, `text-6xl md:text-8xl`, italic accent
- H2: `font-display`, krem, `text-4xl md:text-5xl`, `tracking-wide`
- H3: `font-display`, krem, `text-2xl md:text-3xl`
- Body: `font-body`, 16px, line-height 1.7
- Kicker: `font-body`, `text-sm uppercase tracking-[0.3em]`, altın

### Görsel Kurallar
- Siyah yüzeylerde subtle grain (`bg-grain` utility)
- Section başlığı altı altın accent: `w-16 h-0.5 bg-[--color-gold] mx-auto`
- Kartlarda: `border hover:border-[--color-gold-dim]` + Aceternity `MovingBorder` veya Magic UI `BorderBeam`
- Hero overlay: `bg-gradient-to-b from-black/40 via-black/30 to-black/80`

### Animasyon Felsefesi — Dengeli & Premium

- **Hero:** Aceternity `Spotlight` + Magic UI `BlurFade` (staggered)
- **CTA:** Magic UI `ShimmerButton` veya `BorderBeam`
- **Scroll Reveal:** `BlurFade`, `viewport={{ once: true }}`
- **Menü Kartları:** Aceternity `3DCard` (mouse tilt)
- **Yorumlar:** Magic UI `Marquee` (yatay akan, pause on hover)
- **Stat Bar:** Magic UI `NumberTicker`
- **Mobil:** animasyon süreleri yarıya, `prefers-reduced-motion` desteği

**Performans kuralı:** Sadece `transform` + `opacity` animate et. Layout-shifting özellikleri animate ETME.

---

## 📁 DOSYA YAPISI

```
konak-kebap-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── template.tsx                  # page transition fade
│   │   ├── page.tsx                       # ana sayfa
│   │   ├── globals.css
│   │   ├── manifest.ts                    # PWA
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── opengraph-image.tsx
│   │   ├── menu/
│   │   │   ├── page.tsx                   # tüm menü
│   │   │   └── [slug]/page.tsx            # her ürün için ayrı sayfa (SEO)
│   │   ├── hakkimizda/page.tsx
│   │   ├── galeri/page.tsx
│   │   ├── iletisim/page.tsx
│   │   ├── rezervasyon/page.tsx
│   │   ├── paket-servis/page.tsx          # SEO için ayrı sayfa
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── components/
│   │   ├── ui/                              # shadcn primitives
│   │   ├── aceternity/                      # Spotlight, 3DCard, vb.
│   │   ├── magicui/                         # BlurFade, Marquee, NumberTicker, vb.
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── WhatsAppFloat.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── FeaturedMenu.tsx
│   │   │   ├── AboutSummary.tsx
│   │   │   ├── MenuCategories.tsx
│   │   │   ├── GoogleReviews.tsx            # Google API'den gerçek yorumlar
│   │   │   ├── StatsBar.tsx                 # NumberTicker
│   │   │   ├── FAQ.tsx
│   │   │   ├── OrderPlatforms.tsx           # Yemeksepeti/Trendyol/Getir
│   │   │   └── ContactMap.tsx
│   │   ├── menu/
│   │   │   ├── MenuTabs.tsx
│   │   │   ├── MenuItem.tsx
│   │   │   └── MenuItemDetail.tsx
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx
│   │   │   └── Lightbox.tsx
│   │   ├── forms/
│   │   │   ├── ReservationForm.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogContent.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   └── RelatedPosts.tsx
│   │   └── shared/
│   │       ├── SectionTitle.tsx
│   │       ├── GoldAccent.tsx
│   │       ├── JsonLd.tsx
│   │       └── ClarityScript.tsx            # Microsoft Clarity
│   ├── lib/
│   │   ├── site.ts
│   │   ├── menu.ts
│   │   ├── schema.ts
│   │   ├── blog.ts
│   │   ├── faq.ts
│   │   ├── google-reviews.ts                # Google Places API client
│   │   └── utils.ts
│   ├── types/
│   │   ├── menu.ts
│   │   └── blog.ts
│   └── content/
│       └── blog/                              # MDX dosyaları
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   ├── gallery/
│   │   ├── about/
│   │   └── blog/
│   ├── favicon.ico
│   ├── icon.png
│   └── og-image.jpg
├── .env.local                                  # GOOGLE_PLACES_API_KEY, vb.
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── components.json
├── package.json
└── README.md
```

---

## 🔑 ENV DEĞİŞKENLERİ — `.env.example`

```bash
# Google Places API (gerçek yorumlar için)
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=

# Microsoft Clarity (heatmap)
NEXT_PUBLIC_CLARITY_PROJECT_ID=

# Site URL (production)
NEXT_PUBLIC_SITE_URL=https://efendiustakonakkebap.com
```

---

## 🏗️ TEMEL KONFİGÜRASYON

### `src/lib/site.ts`

```typescript
export const siteConfig = {
  name: 'Efendi Usta Konak Kebap',
  shortName: 'Konak Kebap',
  description: "Sancaktepe Yenidoğan'ın en lezzetli kebap adresi. Konak kebap, Adana dürüm, el açması lahmacun ve pide çeşitleri.",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://efendiustakonakkebap.com',
  ogImage: '/og-image.jpg',
  phone: '+905515322534',
  phoneDisplay: '0551 532 25 34',
  whatsapp: 'https://wa.me/905515322534',
  email: 'info@efendiustakonakkebap.com',
  address: {
    street: 'Safa Mah., Sancaktar Cd. No:2B',
    district: 'Sancaktepe',
    city: 'İstanbul',
    postalCode: '34791',
    country: 'TR',
    full: 'Safa Mah., Sancaktar Cd. No:2B, 34791 Sancaktepe / İstanbul',
    coordinates: { lat: 41.0078, lng: 29.2566 },
  },
  hours: {
    display: 'Her gün 10:00 — 01:00',
    open: '10:00',
    close: '01:00',
  },
  social: {
    instagram: 'https://instagram.com/efendiustakonakkebap',
    facebook: '',
  },
  // Online sipariş platformları — restoran sahibi bu URL'leri sağlayacak
  orderPlatforms: {
    yemeksepeti: '',         // örn: https://www.yemeksepeti.com/restaurant/...
    trendyolYemek: '',        // örn: https://www.trendyolyemek.com/...
    getirYemek: '',           // örn: https://yemek.getir.com/restoran/...
  },
  maps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!...',
    directUrl: 'https://maps.google.com/?q=Sancaktar+Caddesi+2B+Sancaktepe',
  },
  keywords: [
    'sancaktepe kebap', 'yenidoğan lahmacun', 'sancaktepe adana kebap',
    'sancaktepe pide', 'konak kebap', 'sancaktepe restoran',
    'sancaktepe paket servis', 'sancaktepe yenidoğan kebap',
    'sancaktepe en iyi kebap',
  ],
} as const;
```

### `src/types/menu.ts`

```typescript
export interface MenuItem {
  slug: string;
  name: string;
  price: number;
  desc: string;
  longDesc?: string;        // ürün sayfası için uzun SEO açıklaması
  ingredients?: string[];
  badge?: string;
  image?: string;
  popular?: boolean;
  spicy?: boolean;
  prepTime?: string;
}

export type CategoryName =
  | 'Çorbalar' | 'Kebaplar' | 'Dürümler' | 'Lahmacun'
  | 'Pideler' | 'Kilo İşi' | 'Tatlılar' | 'İçecekler';

export type MenuData = Record<CategoryName, MenuItem[]>;
```

### `src/lib/menu.ts`

```typescript
import type { MenuData, MenuItem } from '@/types/menu';

export const menuData: MenuData = {
  'Çorbalar': [
    { slug: 'az-mercimek', name: 'Az Mercimek', price: 50, desc: 'Hafif ve lezzetli kırmızı mercimek çorbası.' },
    { slug: 'suzme-mercimek', name: 'Süzme Mercimek', price: 100, desc: 'Geleneksel süzme mercimek çorbası, limon ve tereyağlı.' },
    { slug: 'yayla-corbasi', name: 'Yayla Çorbası', price: 120, desc: 'Yoğurtlu, naneli, Türk mutfağının klasik yayla çorbası.' },
    { slug: 'kelle-paca', name: 'Kelle Paça', price: 300, desc: 'Geleneksel Türk mutfağının vazgeçilmezi, sabah servisi.' },
  ],
  'Kebaplar': [
    { slug: 'adana-kebap', name: 'Adana Kebap', price: 400, desc: 'Günlük taze kıyma ile hazırlanan acılı Adana kebap.',
      longDesc: 'Adana yöresine özgü tariflerle, günlük taze kuzu kıyması ve özel baharat karışımıyla şiş üzerinde hazırlanan, közde pişirilen geleneksel Adana kebabı. Sancaktepe Yenidoğan\'da en otantik lezzetiyle servis ediyoruz.',
      ingredients: ['Kuzu kıyma', 'Özel baharat', 'Kuyruk yağı', 'Pul biber'],
      spicy: true, popular: true, prepTime: '15-20 dk' },
    { slug: 'urfa-kebap', name: 'Urfa Kebap', price: 400, desc: 'Sade ve lezzetli, baharatıyla öne çıkan Urfa kebap.' },
    { slug: 'sebzeli-kebap', name: 'Sebzeli Kebap', price: 400, desc: 'Izgara sebzelerle zenginleştirilmiş kebap.' },
    { slug: 'patlicanli-kebap', name: 'Patlıcanlı Kebap', price: 550, desc: 'Közlenmiş patlıcan üzerinde servis edilen özel kebap.' },
    { slug: 'domatesli-kebap', name: 'Domatesli Kebap', price: 500, desc: 'Taze domates sosuyla pişirilen geleneksel kebap.' },
    { slug: 'karisik-kebap', name: 'Karışık Kebap', price: 1200, desc: 'Adana, urfa, tavuk şiş ve köfteden oluşan zengin tabak.', popular: true },
    { slug: 'beyti', name: 'Beyti', price: 500, desc: 'Lavaşa sarılı, domates soslu beyti kebap.' },
    { slug: 'firin-beyti', name: 'Fırın Beyti', price: 500, desc: 'Fırında pişirilmiş, yoğurtlu beyti kebap.' },
    { slug: 'kofte', name: 'Köfte', price: 500, desc: 'El yapımı, baharatlı ızgara köfte.' },
    { slug: 'konak-kofte', name: 'Konak Köfte', price: 500, desc: "Efendi Usta'nın özel baharatlı imza köftesi." },
    { slug: 'tavuk-sis', name: 'Tavuk Şiş', price: 350, desc: 'Marine edilmiş tavuk göğsü, şişte ızgara.' },
    { slug: 'et-sis', name: 'Et Şiş', price: 550, desc: 'Dana eti şiş kebap, günlük taze.' },
    { slug: 'kanat', name: 'Kanat', price: 350, desc: 'Baharatlı marine tavuk kanadı ızgara.' },
    { slug: 'kanat-yaprak', name: 'Kanat Yaprak', price: 400, desc: 'Özel sos ile marine edilmiş kanat yaprak.' },
    { slug: 'tavuk-gogus', name: 'Tavuk Göğüs', price: 350, desc: 'Izgara tavuk göğsü, diyet dostu seçenek.' },
    { slug: 'tavuk-pirzola', name: 'Tavuk Pirzola', price: 350, desc: 'Kemikli tavuk pirzola, ızgara.' },
    { slug: 'ciger', name: 'Ciğer', price: 550, desc: 'Taze dana ciğer ızgara, soğan ve maydanozla.' },
    { slug: 'ali-nazik', name: 'Ali Nazik Kebabı', price: 550, desc: 'Közlenmiş patlıcan ve yoğurt üzerinde et kebap.' },
    { slug: 'konak-kebap-spesiyali', name: 'Konak Kebap Spesiyali', price: 750,
      desc: "Efendi Usta'nın imza lezzeti — özel baharat karışımı, özel sunum.",
      longDesc: "Efendi Usta Konak Kebap'ın imza yemeği. Özel olarak hazırlanan baharat karışımı, seçili et kalitesi ve restoran tarzı sunumla, Sancaktepe'de tadına ancak burada varabileceğiniz benzersiz bir kebap deneyimi.",
      badge: 'Şef Önerisi', popular: true, prepTime: '20-25 dk' },
    { slug: 'adana-iskender', name: 'Adana İskender', price: 400, desc: 'Pide üzerinde Adana kebap, domates sosu ve tereyağı.' },
    { slug: 'yogurtlu-kebap', name: 'Yoğurtlu Kebap', price: 500, desc: 'Yoğurt ve domates sosuyla servis edilen kebap.' },
    { slug: 'alti-ezmeli-kebap', name: 'Altı Ezmeli Kebap', price: 500, desc: '6 çeşit özel ezme ile servis edilen zengin kebap tabağı.' },
    { slug: 'cigkofte-porsiyon', name: 'Çiğköfte Porsiyon', price: 200, desc: 'Acılı/acısız çiğköfte, limon ve nar ekşisiyle.' },
  ],
  'Dürümler': [
    { slug: 'adana-durum', name: 'Adana Dürüm', price: 275, desc: 'İnce lavaşa sarılı Adana kebap dürüm.', spicy: true },
    { slug: 'urfa-durum', name: 'Urfa Dürüm', price: 275, desc: 'İnce lavaşa sarılı Urfa kebap dürüm.' },
    { slug: 'tavuk-sis-durum', name: 'Tavuk Şiş Dürüm', price: 200, desc: 'Izgara tavuk şiş dürüm, sebzeli.' },
    { slug: 'et-sis-durum', name: 'Et Şiş Dürüm', price: 350, desc: 'Dana et şiş dürüm.' },
    { slug: 'ciger-durum', name: 'Ciğer Dürüm', price: 350, desc: 'Taze ciğer dürüm, soğan ve maydanozlu.' },
    { slug: 'firin-durum', name: 'Fırın Dürüm', price: 300, desc: 'Fırında ısıtılmış, kaşarlı özel dürüm.' },
  ],
  'Lahmacun': [
    { slug: 'lahmacun', name: 'Lahmacun', price: 100, desc: 'El açması, ince hamurlu, baharatlı kıymalı geleneksel lahmacun.',
      longDesc: 'El açması ince hamur, günlük taze kıyma, özel baharat karışımı ve taş fırın — Sancaktepe\'de en otantik lahmacun deneyimi.',
      popular: true },
    { slug: 'findik-lahmacun', name: 'Fındık Lahmacun', price: 50, desc: 'Küçük boy lahmacun, çocuklar ve hafif iştahlılar için.' },
    { slug: 'kasarli-lahmacun', name: 'Kaşarlı Lahmacun', price: 120, desc: 'Klasik lahmacun üzerine bol kaşar peyniri.' },
  ],
  'Pideler': [
    { slug: 'sebzeli-pide', name: 'Sebzeli Pide', price: 350, desc: 'Mevsim sebzeleriyle hazırlanan hafif pide.' },
    { slug: 'kasarli-pide', name: 'Kaşarlı Pide', price: 300, desc: 'Bol eritilmiş kaşar peynirli klasik pide.' },
    { slug: 'kiymali-kasarli-pide', name: 'Kıymalı Kaşarlı Pide', price: 300, desc: 'Kıyma ve kaşar peyniri, fırından çıktığı gibi.' },
    { slug: 'kusbasi-kasarli-pide', name: 'Kuşbaşı Kaşarlı Pide', price: 350, desc: 'İri kuşbaşı et ve kaşar peyniri ile dolu pide.' },
    { slug: 'sucuklu-kasarli-pide', name: 'Sucuklu Kaşarlı Pide', price: 350, desc: 'Sucuk ve kaşar peyniri, kahvaltılık lezzet.' },
    { slug: 'kavurmali-kasarli-pide', name: 'Kavurmalı Kaşarlı Pide', price: 450, desc: 'Özel kavurma ve bol kaşarla zengin pide.' },
    { slug: 'karisik-pide', name: 'Karışık Pide', price: 350, desc: 'Kıyma, kuşbaşı ve kaşarın bir arada olduğu doyurucu pide.', popular: true },
    { slug: 'yumurta-ek', name: 'Yumurta (ek)', price: 30, desc: 'Herhangi bir pideye ek yumurta.' },
  ],
  'Kilo İşi': [
    { slug: 'kanat-500gr', name: 'Kanat (500 gr.)', price: 450, desc: 'Toplu sipariş için 500 gr. ızgara kanat.' },
    { slug: 'kilo-kofte-500gr', name: 'Kilo Köfte (500 gr.)', price: 600, desc: '500 gr. el yapımı ızgara köfte.' },
    { slug: 'kilo-kanat', name: 'Kilo Kanat', price: 900, desc: '1 kg ızgara kanat, catering ve organizasyonlar için.' },
    { slug: 'kilo-kofte', name: 'Kilo Köfte', price: 1200, desc: '1 kg el yapımı ızgara köfte, toplu sipariş.' },
    { slug: 'kilo-pirzola', name: 'Kilo Pirzola', price: 800, desc: '1 kg ızgara tavuk pirzola.' },
  ],
  'Tatlılar': [
    { slug: 'sutlac', name: 'Sütlaç', price: 120, desc: 'Geleneksel fırın sütlaç, kadife kıvamında.' },
    { slug: 'kunefe', name: 'Künefe', price: 200, desc: 'Sıcak servis edilen tel kadayıf ve peynirli künefe.' },
    { slug: 'katmer', name: 'Katmer', price: 250, desc: 'Çıtır hamur, fıstık ve kaymakla Gaziantep usulü katmer.' },
  ],
  'İçecekler': [
    { slug: 'su', name: 'Su', price: 20, desc: '' },
    { slug: 'ayran', name: 'Ayran', price: 40, desc: 'Köpüklü, taze ayran.' },
    { slug: 'ayran-1lt', name: 'Ayran 1 Lt', price: 70, desc: '' },
    { slug: 'sade-soda', name: 'Sade Soda', price: 20, desc: '' },
    { slug: 'meyveli-soda', name: 'Meyveli Soda', price: 50, desc: '' },
    { slug: 'gazoz', name: 'Gazoz', price: 60, desc: '' },
    { slug: 'salgam', name: 'Şalgam', price: 60, desc: 'Acılı/acısız şalgam suyu.' },
    { slug: 'ice-tea', name: 'Ice Tea', price: 60, desc: '' },
    { slug: 'meyve-suyu', name: 'Meyve Suyu', price: 60, desc: '' },
    { slug: 'kola', name: 'Kola / Yedigün', price: 60, desc: '' },
    { slug: 'kola-1lt', name: 'Kola 1 Lt', price: 90, desc: '' },
    { slug: 'kola-2-5lt', name: 'Kola 2.5 Lt', price: 120, desc: '' },
  ],
};

export function getAllMenuItems(): Array<MenuItem & { category: string }> {
  return Object.entries(menuData).flatMap(([category, items]) =>
    items.map(item => ({ ...item, category }))
  );
}

export function getMenuItemBySlug(slug: string) {
  return getAllMenuItems().find(item => item.slug === slug);
}

export const featuredItems = [
  'konak-kebap-spesiyali',
  'adana-kebap',
  'lahmacun',
  'karisik-pide',
];
```

### `src/lib/google-reviews.ts` — Gerçek Google Yorumları

```typescript
import 'server-only';
import { unstable_cache } from 'next/cache';

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;             // unix timestamp
  relative_time_description: string;
  profile_photo_url: string;
}

export interface PlaceDetails {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

// 24 saat cache — Google API quota tasarrufu için
export const getGoogleReviews = unstable_cache(
  async (): Promise<PlaceDetails | null> => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      console.warn('Google Places API credentials missing — reviews unavailable');
      return null;
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=tr&key=${apiKey}`;

    try {
      const res = await fetch(url, { next: { revalidate: 86400 } });
      const data = await res.json();
      if (data.status !== 'OK') {
        console.error('Google Places error:', data.status);
        return null;
      }
      return data.result;
    } catch (e) {
      console.error('Google Reviews fetch failed:', e);
      return null;
    }
  },
  ['google-reviews'],
  { revalidate: 86400 }
);
```

### `src/lib/schema.ts` — JSON-LD Generators

```typescript
import { siteConfig } from './site';
import type { MenuItem } from '@/types/menu';

export function getRestaurantSchema(rating?: { value: number; count: number }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: [`${siteConfig.url}${siteConfig.ogImage}`],
    priceRange: '₺₺',
    servesCuisine: ['Türk Mutfağı', 'Kebap', 'Lahmacun', 'Pide', 'Dürüm'],
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
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: siteConfig.hours.open,
      closes: siteConfig.hours.close,
    }],
    menu: `${siteConfig.url}/menu`,
    acceptsReservations: 'True',
    hasMap: siteConfig.maps.directUrl,
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
    mainEntity: faqs.map(faq => ({
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
  coverImage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.coverImage ? `${siteConfig.url}${post.coverImage}` : `${siteConfig.url}${siteConfig.ogImage}`,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` },
    },
  };
}
```

### `src/lib/faq.ts`

```typescript
export const faqs = [
  {
    q: 'Paket servis hizmeti veriyor musunuz?',
    a: 'Evet, Sancaktepe ve çevresine paket servis yapıyoruz. Sipariş için 0551 532 25 34 numaralı telefondan veya WhatsApp üzerinden bize ulaşabilirsiniz. Ayrıca Yemeksepeti, Trendyol Yemek ve Getir Yemek üzerinden de sipariş verebilirsiniz.',
  },
  {
    q: 'Rezervasyon nasıl yapabilirim?',
    a: 'Web sitemizdeki rezervasyon formundan, telefonla 0551 532 25 34 numarasını arayarak veya WhatsApp üzerinden mesaj göndererek rezervasyon yapabilirsiniz.',
  },
  {
    q: 'Çalışma saatleriniz nedir?',
    a: 'Her gün sabah 10:00\'dan gece 01:00\'e kadar açığız. Hafta sonu da dahil, hiç kapanmıyoruz.',
  },
  {
    q: 'Catering ve toplu sipariş kabul ediyor musunuz?',
    a: 'Evet, düğün, nişan, doğum günü ve kurumsal etkinlikler için catering hizmeti sunuyoruz. Kilo işi menümüzü inceleyebilir, detaylar için bizi arayabilirsiniz.',
  },
  {
    q: 'Vegan veya vejetaryen seçenekleriniz var mı?',
    a: 'Sebzeli pide, sebzeli kebap, mercimek çorbası ve sebzeli dürüm gibi vejetaryen seçeneklerimiz bulunmaktadır.',
  },
  {
    q: 'Kredi kartı kabul ediyor musunuz?',
    a: 'Evet, tüm kredi kartlarını ve nakit ödemeyi kabul ediyoruz.',
  },
];
```

### `src/app/sitemap.ts`

```typescript
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllMenuItems } from '@/lib/menu';
import { getAllBlogSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/menu', '/hakkimizda', '/galeri', '/iletisim', '/rezervasyon', '/paket-servis', '/blog'];
  const menuItems = getAllMenuItems();
  const blogSlugs = getAllBlogSlugs();

  return [
    ...routes.map(r => ({
      url: `${siteConfig.url}${r}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1.0 : 0.8,
    })),
    ...menuItems.map(item => ({
      url: `${siteConfig.url}/menu/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogSlugs.map(slug => ({
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
```

### `src/app/manifest.ts` — PWA

```typescript
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#C9A84C',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
```

### `src/components/shared/ClarityScript.tsx` — Microsoft Clarity (Heatmap)

```typescript
'use client';
import Script from 'next/script';

export function ClarityScript() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  if (!projectId) return null;

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
      `}
    </Script>
  );
}
```

---

## 🗂️ SAYFA SAYFA DETAYLAR

### 1. Ana Sayfa (`src/app/page.tsx`)

**Bölümler (yukarıdan aşağıya):**

1. **Hero** — Aceternity `Spotlight` + `BackgroundBeams`
   - Kicker (Magic UI `AnimatedGradientText`): `··· SANCAKTEPE YENİDOĞAN ···`
   - H1: `EFENDİ USTA` (italic) + `KONAK KEBAP` (altın)
   - 2 CTA: `ShimmerButton` ("Menüyü Keşfet") + outline ("Rezervasyon")
   - Sol alt: SCROLL indicator
   - Sağ alt: chip "⏰ 10:00 — 01:00 | Her Gün Açık"

2. **Features** — 3 kart (3DCard tilt)
   - 🔥 Geleneksel Lezzet | 🛵 Paket & Catering | ⭐ Uygun Fiyat

3. **FeaturedMenu** — 4 öne çıkan ürün kartı, ürün sayfasına link

4. **StatsBar** — Magic UI `NumberTicker`
   - 20+ Kebap Çeşidi | 250+ Mutlu Müşteri | Google ⭐ (gerçek puan)

5. **AboutSummary** — 2 kolon (metin + görsel)

6. **OrderPlatforms** — Yemeksepeti, Trendyol Yemek, Getir Yemek logoları/linkleri
   - `siteConfig.orderPlatforms` boş ise gizle, tek bir tane bile varsa göster

7. **GoogleReviews** — gerçek Google yorumları, Magic UI `Marquee`
   - `getGoogleReviews()` ile fetch, yatay akan kart şeridi
   - API hata verirse veya yorum yoksa bu section render etme

8. **MenuCategories** — 4 kategori grid + "Tüm Menüyü Gör"

9. **FAQ** — shadcn `Accordion` + FAQPage schema

10. **ContactMap** — 2 kolon (bilgi + Google Maps iframe)

**JSON-LD:** Restaurant schema (rating Google API'den), FAQPage schema

### 2. Menü Sayfası (`src/app/menu/page.tsx`)

- Küçük hero + Breadcrumbs (Ana Sayfa › Menü)
- Sticky `MenuTabs` (8 kategori)
- Her ürün kartı `/menu/[slug]` sayfasına link
- AnimatePresence ile kategori geçişleri
- "Şef Önerisi" badge, 🌶️ spicy ikonu
- Altta `OrderPlatforms` mini banner

### 3. Ürün Detay (`src/app/menu/[slug]/page.tsx`) — **SEO ANAHTAR**

`generateStaticParams` ile build-time SSG.

**İçerik:**
- Breadcrumbs (Ana Sayfa › Menü › Kategori › Ürün)
- Büyük görsel (next/image priority)
- Ürün adı (H1)
- Fiyat (altın, vurgulu)
- `longDesc` (250+ kelime — Claude doldursun)
- Malzeme listesi (`ingredients`)
- Hazırlık süresi
- **2 CTA:**
  - "WhatsApp'tan Sipariş Et" (prefilled message)
  - "Yemeksepeti'nden Sipariş Et" (varsa)
- İlgili ürünler (aynı kategoriden 3-4 tane)
- MenuItem + Restaurant + BreadcrumbList JSON-LD

**Metadata:**
```typescript
export async function generateMetadata({ params }) {
  const item = getMenuItemBySlug(params.slug);
  if (!item) return {};
  return {
    title: `${item.name} - Sancaktepe ${item.category} | ${siteConfig.shortName}`,
    description: `${item.desc} Fiyat: ${item.price}₺. Sancaktepe Yenidoğan'da paket servis ve dine-in.`,
  };
}
```

### 4. Hakkımızda

- Hero küçük
- Hikaye metni (uzun SEO)
- "Neden Biz?" 4 kart
- StatsBar
- Galeri preview (3-4 görsel)

### 5. Galeri

- 3 tab (shadcn Tabs): Yemekler | Mekan | Etkinlikler
- Masonry grid (CSS columns)
- Lightbox (shadcn Dialog)

### 6. İletişim

- Sol: bilgi kartı (adres, tel, WhatsApp, saatler, harita link)
- Sağ: form (RHF + Zod) → WhatsApp redirect
- Altta Google Maps iframe (lazy)

### 7. Rezervasyon

- RHF + Zod form
- Submit → WhatsApp prefilled
- "Direkt arayın" alternatifi

```typescript
const reservationSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter'),
  phone: z.string().regex(/^[0-9\s+()-]{10,}$/, 'Geçerli telefon girin'),
  date: z.string().min(1, 'Tarih seçin'),
  time: z.string().min(1, 'Saat seçin'),
  guests: z.enum(['1-2', '3-4', '5-6', '7-10', '10+']),
  note: z.string().optional(),
});
```

### 8. Paket Servis (`/paket-servis`)

Sancaktepe paket servis için SEO sayfası:
- Hizmet bölgeleri (Sancaktepe mahalleleri liste)
- En çok sipariş edilen paket ürünler
- Minimum sipariş, teslim süresi
- WhatsApp CTA + OrderPlatforms section
- Catering bilgisi
- 500+ kelime SEO metni

### 9. Blog Listesi (`/blog`)

5 blog yazısı kartı (MDX frontmatter'dan)

### 10-14. Blog Yazıları (MDX) — **5 YAZI**

Frontmatter şablonu:
```yaml
---
title: 'Başlık'
description: 'Açıklama'
publishedAt: '2025-01-15'
coverImage: '/images/blog/...'
keywords: ['anahtar1', 'anahtar2']
relatedSlugs: ['post-1', 'post-2']
---
```

**Yazı Listesi:**

1. **`sancaktepe-en-iyi-kebap.mdx`** (800+ kelime) — "sancaktepe kebap", "sancaktepe en iyi kebap"
2. **`adana-urfa-fark.mdx`** (600+ kelime) — "adana kebap urfa kebap fark"
3. **`sancaktepe-paket-servis.mdx`** (500+ kelime) — "sancaktepe paket servis kebap"
4. **`konak-kebap-nedir.mdx`** (600+ kelime) — "konak kebap nedir", "konak kebap tarifi"
5. **`el-acmasi-lahmacun.mdx`** (500+ kelime) — "el açması lahmacun"

**Her yazıda:**
- BlogPosting + BreadcrumbList schema
- Table of Contents (rehype-slug ile)
- İlgili yazılar (2-3 link)
- CTA: "Bu lezzetleri tatmak için bizi ziyaret edin: 0551 532 25 34"
- İlgili menü ürünlerine internal link

---

## ✅ KALİTE KONTROL

### SEO — Temel
- [ ] Her sayfada unique `metadata` veya `generateMetadata`
- [ ] `metadataBase` set
- [ ] OG + Twitter Card her sayfada
- [ ] Canonical URL her sayfada
- [ ] `lang="tr"` html'de

### SEO — Schema.org
- [ ] Restaurant (ana sayfa) — Google rating dahil
- [ ] MenuItem (her ürün sayfası)
- [ ] BreadcrumbList (tüm iç sayfalar)
- [ ] FAQPage (ana sayfa FAQ)
- [ ] BlogPosting (blog yazıları)

### SEO — Yapısal
- [ ] sitemap.xml otomatik (ürün + blog dahil)
- [ ] robots.txt çalışıyor
- [ ] Tüm `<Image>` anlamlı `alt`
- [ ] H1 her sayfada bir tane
- [ ] Internal linking (menü ↔ blog ↔ ilgili ürünler)

### Performans
- [ ] Hero image `priority` + `fetchPriority="high"`
- [ ] Diğer görseller lazy + responsive sizes
- [ ] `next/font` self-hosted
- [ ] Lighthouse: Performance > 90, SEO > 95, A11y > 95
- [ ] LCP < 2.5s, CLS < 0.1
- [ ] Initial JS bundle < 200kb

### Mobil
- [ ] Hamburger menu (shadcn Sheet)
- [ ] Min 44x44px tıklanabilir alanlar
- [ ] `tel:` linkleri
- [ ] WhatsApp float buton
- [ ] Test: 375px, 768px, 1024px, 1440px

### Erişilebilirlik
- [ ] `aria-label` interaktif öğelerde
- [ ] Form label'ları
- [ ] Kontrast WCAG AA
- [ ] Keyboard navigation, focus visible
- [ ] `prefers-reduced-motion` desteği

### İşlevsellik
- [ ] Form Zod validation + WhatsApp redirect
- [ ] Menü tab sistemi smooth
- [ ] Lightbox aç/kapa
- [ ] Scroll reveal animasyonları
- [ ] PWA manifest çalışıyor
- [ ] Google Reviews fetch + cache
- [ ] OrderPlatforms boş ise gizleniyor
- [ ] Microsoft Clarity script yükleniyor

### Code Quality
- [ ] `tsc --noEmit` hatasız
- [ ] `eslint` hatasız
- [ ] `any` kullanılmamış
- [ ] README.md (kurulum, env, deploy, içerik güncelleme)

---

## 🚀 CLAUDE CODE'A VERİLECEK KOMUTLAR (Sırayla)

```
1. "Master prompt'u oku. Next.js 15 projesini kur (App Router + TS + Tailwind + ESLint).
    shadcn/ui'yi başlat ve gerekli component'ları ekle. npm paketlerini yükle.
    .env.example dosyasını oluştur."

2. "Aceternity UI'dan (ui.aceternity.com): Spotlight, BackgroundBeams, 3DCard,
    MovingBorder component'larını src/components/aceternity/ klasörüne kopyala.
    Magic UI'dan (magicui.design): BlurFade, Marquee, NumberTicker, ShimmerButton,
    BorderBeam, AnimatedGradientText component'larını src/components/magicui/ kopyala."

3. "lib/site.ts, lib/menu.ts, lib/schema.ts, lib/faq.ts, lib/google-reviews.ts,
    lib/blog.ts, types/menu.ts, types/blog.ts dosyalarını master prompt'taki
    içeriklerle oluştur."

4. "globals.css ve layout.tsx'i yaz (renk paleti, fontlar, Restaurant schema,
    ClarityScript). Navbar (scroll blur + Sheet), Footer, WhatsAppFloat,
    Breadcrumbs, JsonLd shared component'larını oluştur."

5. "Ana sayfa (page.tsx) ve section component'larını yaz:
    Hero (Spotlight + BlurFade), Features (3DCard), FeaturedMenu, StatsBar
    (NumberTicker), AboutSummary, OrderPlatforms, GoogleReviews (Marquee),
    MenuCategories, FAQ (Accordion + FAQPage schema), ContactMap."

6. "Menü sayfası ve menu component'ları (MenuTabs, MenuItem). Sonra
    menu/[slug]/page.tsx — ürün detay sayfası, generateStaticParams,
    MenuItem schema, breadcrumbs, related products, dual CTA (WhatsApp + Yemeksepeti)."

7. "Hakkımızda, Galeri (Lightbox), İletişim, Rezervasyon, Paket Servis
    sayfalarını yaz. Form'larda RHF + Zod kullan."

8. "Blog listesi + 5 MDX yazısını yaz. MDX yapılandırmasını next.config.ts'e ekle
    (rehype-slug, rehype-autolink-headings). TableOfContents ve RelatedPosts
    component'ları. Her yazıya BlogPosting schema."

9. "sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx dosyalarını yaz.
    Vercel Analytics ve Microsoft Clarity script entegrasyonu."

10. "Final pass: Lighthouse kontrolü, tsc --noEmit, eslint çalıştır, hataları düzelt.
     README.md yaz. Kalite kontrol listesinin tüm maddelerini doğrula."
```

---

## 🧰 GELECEKTE EKLENECEK ÖZELLİKLER

İlk lansman sonrası eklenecek (şu an gereksiz):

1. **i18n (TR/EN)** — turist trafiği varsa
2. **Instagram Feed Embed** — Hakkımızda sayfası alt
3. **Sadakat/Loyalty Card** — "5 sipariş 1 bedava" sayfası
4. **Sesli Menü** — görme engelliler için TTS
5. **A/B Testing** — minimum 500+ günlük ziyaretçi olduğunda anlamlı

**Not:** A/B testing için trafik az olduğunda **Microsoft Clarity (ücretsiz heatmap)** çok daha fazla bilgi verir. MD'de zaten dahil — script `ClarityScript.tsx` ile yükleniyor.

---

## 🧰 PROJEYE ÖZEL CLAUDE CODE SKILLS (İsteğe bağlı)

`~/.claude/skills/` veya `.claude/skills/` altına:

- **`add-menu-item`** — Tip-güvenli yeni ürün ekleme (slug auto-generate)
- **`new-blog-post`** — MDX şablonuyla blog yazısı oluşturma
- **`update-prices`** — Toplu fiyat güncelleme
- **`verify-seo`** — Tüm sayfalarda metadata/schema/alt text kontrolü

---

*Efendi Usta Konak Kebap — Sancaktepe Yenidoğan*
*Stack: Next.js 15 + TypeScript + Tailwind v4 + shadcn/ui + Aceternity UI + Magic UI*
*Hedef: Premium görsel kalite + Sancaktepe SEO 1. sayfa*
