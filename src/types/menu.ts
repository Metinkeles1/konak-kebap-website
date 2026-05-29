export interface MenuItem {
  slug: string;
  name: string;
  price: number;
  desc: string;
  longDesc?: string;
  ingredients?: string[];
  badge?: string;
  image?: string;
  popular?: boolean;
  spicy?: boolean;
  prepTime?: string;
  /** true ise ürün sitede hiçbir yerde görünmez (veri silinmeden gizlenir). */
  hidden?: boolean;
}

export type CategoryName =
  | 'Çorbalar'
  | 'Kebaplar'
  | 'Dürümler'
  | 'Lahmacun'
  | 'Pideler'
  | 'Kilo İşi'
  | 'Tatlılar'
  | 'İçecekler';

export type MenuData = Record<CategoryName, MenuItem[]>;
