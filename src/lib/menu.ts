import type { MenuData, MenuItem } from '@/types/menu';
import { productImages } from './menu-images';

export const menuData: MenuData = {
  'Çorbalar': [
    { slug: 'az-mercimek', name: 'Az Mercimek', price: 50, desc: 'Hafif ve lezzetli kırmızı mercimek çorbası.' },
    { slug: 'porsiyon-salata', name: 'Porsiyon Salata', price: 50, desc: 'Taze ve serinletici porsiyon salata.' },
    { slug: 'suzme-mercimek', name: 'Süzme Mercimek', price: 120, desc: 'Geleneksel süzme mercimek çorbası, limon ve tereyağlı.' },
    { slug: 'yayla-corbasi', name: 'Yayla Çorbası', price: 120, desc: 'Yoğurtlu, naneli, Türk mutfağının klasik yayla çorbası.', hidden: true },
    { slug: 'kelle-paca', name: 'Kelle Paça', price: 300, desc: 'Geleneksel Türk mutfağının vazgeçilmezi, sabah servisi.', hidden: true },
  ],
  'Kebaplar': [
    {
      slug: 'adana-kebap',
      name: 'Adana Kebap',
      price: 450,
      desc: 'Günlük taze kıyma ile hazırlanan acılı Adana kebap.',
      longDesc:
        "Adana yöresine özgü tariflerle, günlük taze kuzu kıyması ve özel baharat karışımıyla şiş üzerinde hazırlanan, közde pişirilen geleneksel Adana kebabı. Sancaktepe Yenidoğan'da en otantik lezzetiyle servis ediyoruz.",
      ingredients: ['Kuzu kıyma', 'Özel baharat', 'Kuyruk yağı', 'Pul biber'],
      image: '/images/menu/adana-kebap.webp',
      spicy: true,
      popular: true,
      prepTime: '15-20 dk',
    },
    { slug: 'biftek', name: 'Biftek', price: 650, desc: 'Özel olarak hazırlanan biftek porsiyonu.' },
    { slug: 'cigkofte-porsiyon', name: 'Çiğköfte Porsiyon', price: 200, desc: 'Acılı/acısız çiğköfte, limon ve nar ekşisiyle.' },
    { slug: 'urfa-kebap', name: 'Urfa Kebap', price: 450, desc: 'Sade ve lezzetli, baharatıyla öne çıkan Urfa kebap.', image: '/images/menu/urfa-kebap.webp' },
    { slug: 'sebzeli-kebap', name: 'Sebzeli Kebap', price: 400, desc: 'Izgara sebzelerle zenginleştirilmiş kebap.', hidden: true },
    { slug: 'patlicanli-kebap', name: 'Patlıcanlı Kebap', price: 600, desc: 'Közlenmiş patlıcan üzerinde servis edilen özel kebap.' },
    { slug: 'domatesli-kebap', name: 'Domatesli Kebap', price: 550, desc: 'Taze domates sosuyla pişirilen geleneksel kebap.' },
    { slug: 'karisik-kebap', name: 'Karışık Kebap', price: 1200, desc: 'Adana, urfa, tavuk şiş ve köfteden oluşan zengin tabak.', image: '/images/menu/karisik-kebap.webp', popular: true },
    { slug: 'beyti', name: 'Beyti', price: 600, desc: 'Lavaşa sarılı, domates soslu beyti kebap.' },
    { slug: 'firin-beyti', name: 'Fırın Beyti', price: 600, desc: 'Fırında pişirilmiş, yoğurtlu beyti kebap.' },
    { slug: 'kofte', name: 'Köfte', price: 550, desc: 'El yapımı, baharatlı ızgara köfte.' },
    { slug: 'konak-kofte', name: 'Konak Köfte', price: 550, desc: "Efendi Usta'nın özel baharatlı imza köftesi." },
    { slug: 'tavuk-sis', name: 'Tavuk Şiş', price: 400, desc: 'Marine edilmiş tavuk göğsü, şişte ızgara.' },
    { slug: 'et-sis', name: 'Et Şiş', price: 600, desc: 'Dana eti şiş kebap, günlük taze.' },
    { slug: 'kanat', name: 'Kanat', price: 400, desc: 'Baharatlı marine tavuk kanadı ızgara.' },
    { slug: 'kanat-yaprak', name: 'Kanat Yaprak', price: 400, desc: 'Özel sos ile marine edilmiş kanat yaprak.' },
    { slug: 'tavuk-gogus', name: 'Tavuk Göğüs', price: 400, desc: 'Izgara tavuk göğsü, diyet dostu seçenek.' },
    { slug: 'tavuk-pirzola', name: 'Tavuk Pirzola', price: 400, desc: 'Kemikli tavuk pirzola, ızgara.' },
    { slug: 'ciger', name: 'Ciğer', price: 600, desc: 'Taze dana ciğer ızgara, soğan ve maydanozla.' },
    { slug: 'ali-nazik', name: 'Ali Nazik Kebabı', price: 600, desc: 'Közlenmiş patlıcan ve yoğurt üzerinde et kebap.' },
    {
      slug: 'konak-kebap-spesiyali',
      name: 'Konak Kebap Spesiyali',
      price: 900,
      desc: "Efendi Usta'nın imza lezzeti — özel baharat karışımı, özel sunum.",
      longDesc:
        "Efendi Usta Konak Kebap'ın imza yemeği. Özel olarak hazırlanan baharat karışımı, seçili et kalitesi ve restoran tarzı sunumla, Sancaktepe'de tadına ancak burada varabileceğiniz benzersiz bir kebap deneyimi.",
      image: '/images/menu/konak-kebap-spesiyali.webp',
      badge: 'Şef Önerisi',
      popular: true,
      prepTime: '20-25 dk',
    },
    { slug: 'adana-iskender', name: 'Adana İskender', price: 600, desc: 'Pide üzerinde Adana kebap, domates sosu ve tereyağı.' },
    { slug: 'yogurtlu-kebap', name: 'Yoğurtlu Kebap', price: 600, desc: 'Yoğurt ve domates sosuyla servis edilen kebap.' },
    { slug: 'alti-ezmeli-kebap', name: 'Altı Ezmeli Kebap', price: 600, desc: '6 çeşit özel ezme ile servis edilen zengin kebap tabağı.' },
  ],
  'Dürümler': [
    { slug: 'tam-tavuk-ekmek', name: 'Tam Tavuk Ekmek', price: 250, desc: 'Taze ekmek arasında tavuklu dürüm.', image: '/images/menu/tam-tavuk-ekmek.webp' },
    { slug: 'adana-durum', name: 'Adana Dürüm', price: 300, desc: 'İnce lavaşa sarılı Adana kebap dürüm.', image: '/images/menu/adana-durum.webp', spicy: true },
    { slug: 'urfa-durum', name: 'Urfa Dürüm', price: 300, desc: 'İnce lavaşa sarılı Urfa kebap dürüm.' },
    { slug: 'tavuk-sis-durum', name: 'Tavuk Şiş Dürüm', price: 250, desc: 'Izgara tavuk şiş dürüm, sebzeli.' },
    { slug: 'et-sis-durum', name: 'Et Şiş Dürüm', price: 375, desc: 'Dana et şiş dürüm.' },
    { slug: 'ciger-durum', name: 'Ciğer Dürüm', price: 375, desc: 'Taze ciğer dürüm, soğan ve maydanozlu.' },
    { slug: 'firin-durum', name: 'Fırın Dürüm', price: 350, desc: 'Fırında ısıtılmış, kaşarlı özel dürüm.' },
  ],
  'Lahmacun': [
    { slug: 'findik-lahmacun', name: 'Fındık Lahmacun', price: 50, desc: 'Küçük boy lahmacun, çocuklar ve hafif iştahlılar için.' },
    {
      slug: 'lahmacun',
      name: 'Lahmacun',
      price: 100,
      desc: 'El açması, ince hamurlu, baharatlı kıymalı geleneksel lahmacun.',
      longDesc:
        "El açması ince hamur, günlük taze kıyma, özel baharat karışımı ve taş fırın — Sancaktepe'de en otantik lahmacun deneyimi.",
      popular: true,
    },
    { slug: 'kasarli-lahmacun', name: 'Kaşarlı Lahmacun', price: 130, desc: 'Klasik lahmacun üzerine bol kaşar peyniri.' },
  ],
  'Pideler': [
    { slug: 'pizza-buyuk-boy', name: 'Pizza Büyük Boy', price: 500, desc: 'Büyük boy pizza.' },
    { slug: 'pizza-kucuk', name: 'Pizza Küçük', price: 400, desc: 'Küçük boy pizza.' },
    { slug: 'pizza-orta', name: 'Pİzza Orta', price: 450, desc: 'Orta boy pizza.' },
    { slug: 'sebzeli-pide', name: 'Sebzeli Pide', price: 350, desc: 'Mevsim sebzeleriyle hazırlanan hafif pide.' },
    { slug: 'yumurta', name: 'Yumurta', price: 30, desc: 'Herhangi bir pideye ek yumurta.' },
    { slug: 'kusbasi-kasarli-pide', name: 'Kuşbaşı Kaşarlı Pide', price: 375, desc: 'İri kuşbaşı et ve kaşar peyniri ile dolu pide.' },
    { slug: 'kiymali-kasarli-pide', name: 'Kıymalı Kaşarlı Pide', price: 350, desc: 'Kıyma ve kaşar peyniri, fırından çıktığı gibi.' },
    { slug: 'kavurmali-kasarli-pide', name: 'Kavurmalı Kaşarlı Pide', price: 475, desc: 'Özel kavurma ve bol kaşarla zengin pide.' },
    { slug: 'sucuklu-kasarli-pide', name: 'Sucuklu Kaşarlı Pide', price: 375, desc: 'Sucuk ve kaşar peyniri, kahvaltılık lezzet.' },
    { slug: 'kasarli-pide', name: 'Kaşarlı Pide', price: 350, desc: 'Bol eritilmiş kaşar peynirli klasik pide.' },
    { slug: 'karisik-pide', name: 'Karışık Pide', price: 375, desc: 'Kıyma, kuşbaşı ve kaşarın bir arada olduğu doyurucu pide.', image: '/images/menu/karisik-pide.webp', popular: true },
  ],
  'Kilo İşi': [
    { slug: 'kanat-500gr', name: 'Kanat (500gr.)', price: 450, desc: 'Toplu sipariş için 500 gr. ızgara kanat.' },
    { slug: 'kilo-kofte-500gr', name: 'Kilo Köfte (500 gr.)', price: 600, desc: '500 gr. el yapımı ızgara köfte.' },
    { slug: 'kilo-kanat', name: 'Kilo Kanat', price: 900, desc: '1 kg ızgara kanat, catering ve organizasyonlar için.' },
    { slug: 'kilo-kofte', name: 'Kilo Köfte', price: 1200, desc: '1 kg el yapımı ızgara köfte, toplu sipariş.' },
    { slug: 'kilo-pirzola', name: 'Kilo Pirzola', price: 800, desc: '1 kg ızgara tavuk pirzola.' },
  ],
  'Tatlılar': [
    { slug: 'sutlac', name: 'Sütlaç', price: 120, desc: 'Geleneksel fırın sütlaç, kadife kıvamında.' },
    { slug: 'kunefe', name: 'Künefe', price: 225, desc: 'Sıcak servis edilen tel kadayıf ve peynirli künefe.' },
    { slug: 'katmer', name: 'Katmer', price: 300, desc: 'Çıtır hamur, fıstık ve kaymakla Gaziantep usulü katmer.' },
  ],
  'İçecekler': [
    { slug: 'aci-eksi-ayran', name: 'Acı & Ekşi Ayran', price: 60, desc: 'Acılı ve ekşili ayran.' },
    { slug: 'kola-2-5lt', name: 'Kola 2.5 lt.', price: 130, desc: 'Aile boy 2.5 litre kola.' },
    { slug: 'cay', name: 'Çay', price: 25, desc: 'Geleneksel Türk çayı.' },
    { slug: 'ayran', name: 'Ayran', price: 50, desc: 'Köpüklü, taze ayran.' },
    { slug: 'kola-yedigun', name: 'Kola/Yedigün', price: 70, desc: 'Kutu kola veya Yedigün.' },
    { slug: 'gazoz', name: 'Gazoz', price: 70, desc: 'Klasik gazoz.' },
    { slug: 'salgam', name: 'Şalgam', price: 70, desc: 'Acılı/acısız şalgam suyu.' },
    { slug: 'ice-tea', name: 'Ice Tea', price: 70, desc: 'Soğuk şeftali çayı.' },
    { slug: 'meyve-suyu', name: 'Meyve Suyu', price: 70, desc: 'Şeftali, vişne veya portakal aromalı.' },
    { slug: 'su', name: 'Su', price: 25, desc: 'Şişe su.' },
    { slug: 'meyveli-soda', name: 'Meyveli Soda', price: 50, desc: 'Limon, elma ya da çilek aromalı soda.' },
    { slug: 'sade-soda', name: 'Sade Soda', price: 40, desc: 'Sade maden suyu.' },
    { slug: 'kola-1lt', name: 'Kola 1 Lt', price: 100, desc: '1 litre pet kola.' },
    { slug: 'ayran-1lt', name: 'Ayran 1 Lt', price: 100, desc: 'Aile boy ayran, 1 litre.' },
  ],
};

// Ürün görsellerini isimle eşleyerek menüye uygula — yalnızca yerel görseli olmayanlara.
// (Yerel jpg'ler 1600px yüksek çözünürlüklü; düşük çözünürlüklü webp ile ezmiyoruz.)
for (const items of Object.values(menuData)) {
  for (const item of items) {
    if (!item.image) {
      const image = productImages[item.name];
      if (image) item.image = image;
    }
  }
}

// hidden: true olan ürünleri çıkar, boş kalan kategorileri de ele. Site her yerde bunu kullanır.
export const visibleMenuData = Object.fromEntries(
  Object.entries(menuData)
    .map(([category, items]) => [category, items.filter((item) => !item.hidden)] as const)
    .filter(([, items]) => items.length > 0)
) as MenuData;

// Menü çeşit sayısı — görünür ürünlerden türetilir (elle güncelleme yok).
export const menuItemCount = Object.values(visibleMenuData).reduce((n, items) => n + items.length, 0);
// Pazarlama metinleri için aşağı yuvarlanmış değer (ör. 64 → 60).
export const menuItemCountRounded = Math.floor(menuItemCount / 10) * 10;

export function getAllMenuItems(): Array<MenuItem & { category: string }> {
  return Object.entries(visibleMenuData).flatMap(([category, items]) =>
    items.map((item) => ({ ...item, category }))
  );
}

export function getMenuItemBySlug(slug: string) {
  return getAllMenuItems().find((item) => item.slug === slug);
}

export function getCategorySlugMap(): Record<string, string> {
  const map: Record<string, string> = {
    'Çorbalar': 'corbalar',
    'Kebaplar': 'kebaplar',
    'Dürümler': 'durumler',
    'Lahmacun': 'lahmacun',
    'Pideler': 'pideler',
    'Kilo İşi': 'kilo-isi',
    'Tatlılar': 'tatlilar',
    'İçecekler': 'icecekler',
  };
  return map;
}

export const featuredItems = [
  'konak-kebap-spesiyali',
  'adana-kebap',
  'karisik-kebap',
  'urfa-kebap',
  'lahmacun',
  'karisik-pide',
  'adana-durum',
  'kunefe',
];
