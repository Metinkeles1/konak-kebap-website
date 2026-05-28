export const siteConfig = {
  name: 'Konak Kebap Efendi Usta',
  shortName: 'Konak Kebap',
  description:
    "Sancaktepe Yenidoğan'ın en lezzetli kebap adresi. Konak kebap, Adana dürüm, el açması lahmacun ve pide çeşitleri.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://konak-kebap-website.vercel.app').replace(/\/+$/, ''),
  ogImage: '/opengraph-image',
  rating: { value: 4.3, count: 68 },
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
    coordinates: { lat: 41.013094, lng: 29.243201 },
  },
  areaServed: [
    'Sancaktepe',
    'Sarıgazi',
    'Samandıra',
    'Sultanbeyli',
    'Alemdağ (Çekmeköy)',
  ],
  paymentAccepted:
    'Nakit, Kredi Kartı, Banka Kartı, NFC mobil ödeme, Yemek Kartı (Edenred, Multinet, Sodexo, Pluxee, Setcard, Metropol)',
  mealCards: ['Edenred', 'Multinet', 'Sodexo', 'Pluxee', 'Setcard', 'Metropol'],
  hours: {
    display: 'Her gün açık',
    schedule: [
      { day: 'Pazartesi', dow: 'Monday', open: '10:00', close: '02:00' },
      { day: 'Salı', dow: 'Tuesday', open: '10:00', close: '01:00' },
      { day: 'Çarşamba', dow: 'Wednesday', open: '10:00', close: '01:00' },
      { day: 'Perşembe', dow: 'Thursday', open: '10:00', close: '01:00' },
      { day: 'Cuma', dow: 'Friday', open: '10:00', close: '01:00' },
      { day: 'Cumartesi', dow: 'Saturday', open: '10:00', close: '01:00' },
      { day: 'Pazar', dow: 'Sunday', open: '11:00', close: '02:00' },
    ],
  },
  social: {
    instagram: 'https://www.instagram.com/konakkebapefendiusta/',
    facebook: 'https://www.facebook.com/profile.php?id=61581258665612',
  },
  orderPlatforms: {
    yemeksepeti: '',
    trendyolYemek: '',
    getirYemek: '',
  },
  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5558494081433!2d29.243200677245856!3d41.01309361912666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad1b6b23f5ce1%3A0xc1c4323d19eeebc0!2sKonak%20Kebap%20Efendi%20Usta!5e0!3m2!1str!2str!4v1779955907129!5m2!1str!2str',
    directUrl:
      'https://maps.google.com/?q=Konak+Kebap+Efendi+Usta+Sancaktepe',
  },
  keywords: [
    'sancaktepe kebap',
    'yenidoğan lahmacun',
    'sancaktepe adana kebap',
    'sancaktepe pide',
    'konak kebap',
    'sancaktepe restoran',
    'sancaktepe paket servis',
    'sancaktepe yenidoğan kebap',
    'sancaktepe en iyi kebap',
  ],
} as const;

export type SiteConfig = typeof siteConfig;
