export interface CuratedReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  source: string;
}

// Sipariş platformlarından elle seçilmiş gerçek yorumlar (API'siz, manuel güncellenir).
export const curatedReviews: CuratedReview[] = [
  {
    author_name: 'Trendyol Yemek müşterisi',
    rating: 5,
    relative_time_description: 'Trendyol Yemek · 23 gün önce',
    source: 'Trendyol Yemek',
    text: '4 yıldır bu çevrede oturuyorum, lahmacundan yana ümidimi yitirmiştim bir de sizi denemek istedim açıkçası şaşırdım. Gerçekten güzeldi, lezzetliydi, sıcaktı. Elinize sağlık, umarım bu şekilde devam eder.',
  },
  {
    author_name: 'Trendyol Yemek müşterisi',
    rating: 5,
    relative_time_description: 'Trendyol Yemek',
    source: 'Trendyol Yemek',
    text: 'Gerçekten bu civarda sipariş verdiğim en iyi yer. Salatalar gayet yeterli ve temizdi. Lahmacun iç harcı ve boyutu da gayet normaldi, ellerine sağlık umarım bozmazlar.',
  },
  {
    author_name: 'Trendyol Yemek müşterisi',
    rating: 5,
    relative_time_description: 'Trendyol Yemek',
    source: 'Trendyol Yemek',
    text: 'Lahmacunları çıtır ve güzeldi, ellerinize sağlık.',
  },
];
