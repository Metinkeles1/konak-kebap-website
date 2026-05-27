import type { MenuData, MenuItem } from '@/types/menu';

export const menuData: MenuData = {
  'Çorbalar': [
    { slug: 'az-mercimek', name: 'Az Mercimek', price: 50, desc: 'Hafif ve lezzetli kırmızı mercimek çorbası.' },
    { slug: 'suzme-mercimek', name: 'Süzme Mercimek', price: 100, desc: 'Geleneksel süzme mercimek çorbası, limon ve tereyağlı.' },
    { slug: 'yayla-corbasi', name: 'Yayla Çorbası', price: 120, desc: 'Yoğurtlu, naneli, Türk mutfağının klasik yayla çorbası.' },
    { slug: 'kelle-paca', name: 'Kelle Paça', price: 300, desc: 'Geleneksel Türk mutfağının vazgeçilmezi, sabah servisi.' },
  ],
  'Kebaplar': [
    {
      slug: 'adana-kebap',
      name: 'Adana Kebap',
      price: 400,
      desc: 'Günlük taze kıyma ile hazırlanan acılı Adana kebap.',
      longDesc:
        "Adana yöresine özgü tariflerle, günlük taze kuzu kıyması ve özel baharat karışımıyla şiş üzerinde hazırlanan, közde pişirilen geleneksel Adana kebabı. Sancaktepe Yenidoğan'da en otantik lezzetiyle servis ediyoruz.",
      ingredients: ['Kuzu kıyma', 'Özel baharat', 'Kuyruk yağı', 'Pul biber'],
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1200&q=80&auto=format&fit=crop',
      spicy: true,
      popular: true,
      prepTime: '15-20 dk',
    },
    { slug: 'urfa-kebap', name: 'Urfa Kebap', price: 400, desc: 'Sade ve lezzetli, baharatıyla öne çıkan Urfa kebap.', image: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=1200&q=80&auto=format&fit=crop' },
    { slug: 'sebzeli-kebap', name: 'Sebzeli Kebap', price: 400, desc: 'Izgara sebzelerle zenginleştirilmiş kebap.' },
    { slug: 'patlicanli-kebap', name: 'Patlıcanlı Kebap', price: 550, desc: 'Közlenmiş patlıcan üzerinde servis edilen özel kebap.' },
    { slug: 'domatesli-kebap', name: 'Domatesli Kebap', price: 500, desc: 'Taze domates sosuyla pişirilen geleneksel kebap.' },
    { slug: 'karisik-kebap', name: 'Karışık Kebap', price: 1200, desc: 'Adana, urfa, tavuk şiş ve köfteden oluşan zengin tabak.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80&auto=format&fit=crop', popular: true },
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
    {
      slug: 'konak-kebap-spesiyali',
      name: 'Konak Kebap Spesiyali',
      price: 750,
      desc: "Efendi Usta'nın imza lezzeti — özel baharat karışımı, özel sunum.",
      longDesc:
        "Efendi Usta Konak Kebap'ın imza yemeği. Özel olarak hazırlanan baharat karışımı, seçili et kalitesi ve restoran tarzı sunumla, Sancaktepe'de tadına ancak burada varabileceğiniz benzersiz bir kebap deneyimi.",
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200&q=80&auto=format&fit=crop',
      badge: 'Şef Önerisi',
      popular: true,
      prepTime: '20-25 dk',
    },
    { slug: 'adana-iskender', name: 'Adana İskender', price: 400, desc: 'Pide üzerinde Adana kebap, domates sosu ve tereyağı.' },
    { slug: 'yogurtlu-kebap', name: 'Yoğurtlu Kebap', price: 500, desc: 'Yoğurt ve domates sosuyla servis edilen kebap.' },
    { slug: 'alti-ezmeli-kebap', name: 'Altı Ezmeli Kebap', price: 500, desc: '6 çeşit özel ezme ile servis edilen zengin kebap tabağı.' },
    { slug: 'cigkofte-porsiyon', name: 'Çiğköfte Porsiyon', price: 200, desc: 'Acılı/acısız çiğköfte, limon ve nar ekşisiyle.' },
  ],
  'Dürümler': [
    { slug: 'adana-durum', name: 'Adana Dürüm', price: 275, desc: 'İnce lavaşa sarılı Adana kebap dürüm.', image: 'https://images.unsplash.com/photo-1561626423-a51b45aef0a1?w=1200&q=80&auto=format&fit=crop', spicy: true },
    { slug: 'urfa-durum', name: 'Urfa Dürüm', price: 275, desc: 'İnce lavaşa sarılı Urfa kebap dürüm.' },
    { slug: 'tavuk-sis-durum', name: 'Tavuk Şiş Dürüm', price: 200, desc: 'Izgara tavuk şiş dürüm, sebzeli.' },
    { slug: 'et-sis-durum', name: 'Et Şiş Dürüm', price: 350, desc: 'Dana et şiş dürüm.' },
    { slug: 'ciger-durum', name: 'Ciğer Dürüm', price: 350, desc: 'Taze ciğer dürüm, soğan ve maydanozlu.' },
    { slug: 'firin-durum', name: 'Fırın Dürüm', price: 300, desc: 'Fırında ısıtılmış, kaşarlı özel dürüm.' },
  ],
  'Lahmacun': [
    {
      slug: 'lahmacun',
      name: 'Lahmacun',
      price: 100,
      desc: 'El açması, ince hamurlu, baharatlı kıymalı geleneksel lahmacun.',
      longDesc:
        "El açması ince hamur, günlük taze kıyma, özel baharat karışımı ve taş fırın — Sancaktepe'de en otantik lahmacun deneyimi.",
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80&auto=format&fit=crop',
      popular: true,
    },
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
    { slug: 'karisik-pide', name: 'Karışık Pide', price: 350, desc: 'Kıyma, kuşbaşı ve kaşarın bir arada olduğu doyurucu pide.', image: 'https://images.unsplash.com/photo-1574936145840-28808d77a0b6?w=1200&q=80&auto=format&fit=crop', popular: true },
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
    { slug: 'su', name: 'Su', price: 20, desc: 'Şişe su.' },
    { slug: 'ayran', name: 'Ayran', price: 40, desc: 'Köpüklü, taze ayran.' },
    { slug: 'ayran-1lt', name: 'Ayran 1 Lt', price: 70, desc: 'Aile boy ayran, 1 litre.' },
    { slug: 'sade-soda', name: 'Sade Soda', price: 20, desc: 'Sade maden suyu.' },
    { slug: 'meyveli-soda', name: 'Meyveli Soda', price: 50, desc: 'Limon, elma ya da çilek aromalı soda.' },
    { slug: 'gazoz', name: 'Gazoz', price: 60, desc: 'Klasik gazoz.' },
    { slug: 'salgam', name: 'Şalgam', price: 60, desc: 'Acılı/acısız şalgam suyu.' },
    { slug: 'ice-tea', name: 'Ice Tea', price: 60, desc: 'Soğuk şeftali çayı.' },
    { slug: 'meyve-suyu', name: 'Meyve Suyu', price: 60, desc: 'Şeftali, vişne veya portakal aromalı.' },
    { slug: 'kola', name: 'Kola / Yedigün', price: 60, desc: 'Kutu kola veya Yedigün.' },
    { slug: 'kola-1lt', name: 'Kola 1 Lt', price: 90, desc: '1 litre pet kola.' },
    { slug: 'kola-2-5lt', name: 'Kola 2.5 Lt', price: 120, desc: 'Aile boy 2.5 litre pet kola.' },
  ],
};

export function getAllMenuItems(): Array<MenuItem & { category: string }> {
  return Object.entries(menuData).flatMap(([category, items]) =>
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
