export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  comment: string;
  points: string[];
  target: string;
  amazonUrl: string;
  rakutenUrl?: string;
  isPersonalUse?: boolean;
}

export const productCategories = [
  "すべて",
  "クレアチン",
  "プロテイン",
  "EAA / BCAA",
  "カフェイン",
  "ビタミン・ミネラル",
  "その他"
];

export const products: Product[] = [
  {
    id: 'on-gold-standard-whey',
    name: 'ON Gold Standard 100% Whey',
    category: 'プロテイン',
    image: '/images/products/gold-standard.jpg',
    comment: '老舗の定番プロテイン。溶けやすく味も飽きにくいため、初めての方にも扱いやすい製品です。昨今の円安で価格変動があるため、状況を見て検討するのが賢明です。',
    points: ['抜群の溶けやすさ', '定番のダブルリッチチョコ', '世界的な信頼性'],
    target: '定番の味で失敗したくない人、溶けやすさを最優先する人',
    amazonUrl: 'https://amzn.to/4tASug0',
    rakutenUrl: 'https://a.r10.to/hgkF6P',
    isPersonalUse: true
  },
  {
    id: 'x-plosion-whey-3kg',
    name: 'エクスプロージョン ホエイプロテイン 3kg',
    category: 'プロテイン',
    image: '/images/products/x-plosion.jpg',
    comment: '日本発のコストパフォーマンスに特化したプロテイン。学生やアスリートを支援する誠実な価格設定が魅力です。少し溶けにくい面もありますが、日常使いに最適です。',
    points: ['圧倒的な低価格', '国内製造の安心感', '大容量3kgパック'],
    target: 'コスパを最優先する人、日常的に大量に消費するアスリート',
    amazonUrl: 'https://amzn.to/4nof8GP',
    rakutenUrl: 'https://a.r10.to/h9oUJN',
    isPersonalUse: true
  }
];
