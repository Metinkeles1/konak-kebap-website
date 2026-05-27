export const siteConfig = {
  name: 'Efendi Usta Konak Kebap',
  shortName: 'Konak Kebap',
  description:
    "Sancaktepe Yenidoğan'ın en lezzetli kebap adresi. Konak kebap, Adana dürüm, el açması lahmacun ve pide çeşitleri.",
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
  orderPlatforms: {
    yemeksepeti: '',
    trendyolYemek: '',
    getirYemek: '',
  },
  maps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.4!2d29.2566!3d41.0078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI4LjEiTiAyOcKwMTUnMjMuOCJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str',
    directUrl:
      'https://maps.google.com/?q=Sancaktar+Caddesi+2B+Sancaktepe+Istanbul',
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
