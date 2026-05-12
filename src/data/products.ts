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
    id: 'savas-whey-protein-100',
    name: 'ザバス(SAVAS) ホエイプロテイン100 リッチショコラ味 1kg',
    category: 'プロテイン',
    image: '/images/products/savas.jpg',
    comment: '日本を代表するプロテイン。プロテインの基準はザバスにすると判断しやすい一品です。セールも多く、安い時期を狙うのがおすすめ。※ウエイトゲインやピュアプロテインなどはタンパク質含有量が20gを下回る場合があるので注意が必要です。',
    points: ['国内シェアNo.1の安心感', '水でも美味しく飲める高い再現性', 'ビタミンB群・C・Dを独自配合'],
    target: 'プロテイン選びの基準を知りたい人、国産ブランドの安心感を重視する人',
    amazonUrl: 'https://amzn.to/4d14zpC',
    rakutenUrl: 'https://a.r10.to/hX3pIF',
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
  },
  {
    id: 'grong-creatine-500g',
    name: 'グロング クレアチン モノハイドレート 500g',
    category: 'クレアチン',
    image: '/images/products/grong-creatine.jpg',
    comment: '高純度99.9%のクレアチン。クレアチンは非常にシンプルな成分のため、高価なものを選ぶ必要はありません。信頼できるブランドの安価なもので十分です。',
    points: ['高純度99.9%', '抜群のコストパフォーマンス', '国内ブランドの安心感'],
    target: 'サプリメント代を抑えつつ、確実に成果を出したい全ての人',
    amazonUrl: 'https://amzn.to/4ni2lWi',
    rakutenUrl: 'https://a.r10.to/hgCMsc',
    isPersonalUse: true
  },
  {
    id: 'naturemade-super-multi',
    name: 'ネイチャーメイド スーパーマルチビタミン&ミネラル',
    category: 'ビタミン・ミネラル',
    image: '/images/products/naturemade.jpg',
    comment: 'ドラッグストア等でも容易に入手可能な定番のマルチビタミン。1日1粒で12種類のビタミンと7種類のミネラルを補給できる利便性が最大の特徴です。ベースサプリとして非常に信頼性の高い一品です。',
    points: ['1日1粒の圧倒的な手軽さ', '広範なビタミン・ミネラルを網羅', '大塚製薬による国内品質管理'],
    target: 'サプリメントの数を増やしたくない人、食事の偏りが気になる全ての方',
    amazonUrl: 'https://amzn.to/4dhyE2Y',
    rakutenUrl: 'https://a.r10.to/h5YTpS',
    isPersonalUse: true
  },
  {
    id: 'yukishio-120g',
    name: 'パラダイスプラン 雪塩 宮古島の海の恵み 120g',
    category: 'ビタミン・ミネラル',
    image: '/images/products/yukishio.jpg',
    comment: '圧倒的なミネラル含有量を誇る宮古島の天然塩。非常に粒子が細かく、ワークアウトドリンクに溶かしやすいため、イントラワークアウトの電解質補給に最適です。',
    points: ['世界でも稀なミネラル含有数', 'パウダー状でドリンクに溶けやすい', '宮古島の地下海水100%'],
    target: 'トレーニング中の足のつりを防ぎたい人、こだわりの電解質補給をしたい人',
    amazonUrl: 'https://amzn.to/4u8DRBB',
    rakutenUrl: 'https://a.r10.to/hPEXhf',
    isPersonalUse: true
  }
];
