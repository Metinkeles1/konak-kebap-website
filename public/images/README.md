# Görseller

Bu klasör, sitenin tüm görsellerini içerir. Şu an klasörler boş — gerçek görselleri eklemek site sahibinin sorumluluğundadır.

## Klasör Yapısı ve Görsel İsimlendirme

```
public/images/
├── hero/
│   └── hero-bg.jpg           → Ana sayfa hero arka planı (önerilen: 1920x1080)
├── menu/                     → Her menü ürünü için 1 görsel
│   ├── adana-kebap.jpg       → src/lib/menu.ts'deki slug ile eşleşmeli
│   ├── konak-kebap-spesiyali.jpg
│   ├── lahmacun.jpg
│   ├── karisik-pide.jpg
│   └── ... (her ürün için)
├── gallery/                  → Galeri sayfası fotoğrafları
│   ├── food-1.jpg
│   ├── food-2.jpg
│   ├── interior-1.jpg
│   └── ...
├── about/                    → Hakkımızda sayfası
│   └── interior.jpg          → İç mekan fotoğrafı
└── blog/                     → Blog yazılarının kapak görselleri
    ├── sancaktepe-kebap.jpg
    ├── adana-urfa.jpg
    ├── paket-servis.jpg
    ├── konak-kebap.jpg
    └── el-acmasi-lahmacun.jpg
```

## Önerilen Boyutlar ve Format

| Konum | Boyut | Format |
|-------|-------|--------|
| Hero | 1920 × 1080 | JPG (kalite 80) |
| Menü ürün kartı | 800 × 600 | JPG/WebP |
| Menü ürün detay | 1200 × 1200 | JPG/WebP |
| Galeri | 1200 × 1200 | JPG/WebP |
| Hakkımızda | 1200 × 1500 | JPG/WebP |
| Blog kapak | 1600 × 900 | JPG/WebP |
| OG image (root) | 1200 × 630 | JPG/PNG |

Next.js otomatik olarak WebP/AVIF'e dönüştürür — JPG yüklemen yeterli.

## Eksik Görseller İçin Geçici Çözümler

1. **CSS gradient placeholder** (mevcut durum) — Şu an siyah/altın/turuncu degradeli kartlar gösteriliyor
2. **Unsplash** — Ücretsiz stok fotoğraflar:
   - https://unsplash.com/s/photos/kebab
   - https://unsplash.com/s/photos/turkish-food
3. **AI-generated** — Midjourney, DALL-E, vb.

## Görsel Eklemek

1. Doğru klasöre uygun isimle koyun (slug ile eşleşmeli)
2. `src/lib/menu.ts`'de ilgili ürün için `image: '/images/menu/adana-kebap.jpg'` alanını ekleyin
3. Build edip kontrol edin: `pnpm build`
