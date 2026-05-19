export interface StackItem {
  ingredientSlug: string;
  name: string;
  role: string;
}

export interface Stack {
  id: string;
  slug: string;
  title: string;
  description: string;
  target: string;
  items: StackItem[];
  usage: string;
  pros: string[];
}

export const stacks: Stack[] = [
  {
    id: 'bulk-up-essential',
    slug: 'bulk-up-essential',
    title: '王道のバルクアップスタック',
    description: '筋肉のボリュームを最大化するために、最もエビデンスの強い成分を組み合わせた基本のスタックです。',
    target: 'とにかく体を大きくしたい人、効率よく筋肥大させたい人',
    items: [
      { ingredientSlug: 'protein', name: 'プロテイン', role: '筋肉の材料となるタンパク質を確保' },
      { ingredientSlug: 'creatine', name: 'クレアチン', role: 'エネルギー再合成を高め、トレーニング強度を向上' },
      { ingredientSlug: 'maltodextrin', name: 'マルトデキストリン', role: 'インスリン分泌を促し、栄養素の運び込みを加速' },
      { ingredientSlug: 'eaa', name: 'EAA', role: 'トレーニング中の血中アミノ酸濃度を維持し分解を抑制' }
    ],
    usage: 'トレーニング前にクレアチン、トレーニング中にEAAとマルトデキストリン、トレーニング後にプロテインを摂取します。',
    pros: [
      '科学的根拠が非常に強い成分のみで構成',
      'エネルギー補給から材料補給まで完璧にカバー',
      '初心者から上級者まで効果を実感しやすい'
    ]
  },
  {
    id: 'fat-loss-warrior',
    slug: 'fat-loss-warrior',
    title: '脂肪燃焼特化・減量スタック',
    description: '筋肉量を守りながら、体脂肪の燃焼効率を一段階引き上げるための組み合わせです。',
    target: 'ダイエット中の人、腹筋を割りたい人、代謝を上げたい人',
    items: [
      { ingredientSlug: 'caffeine', name: 'カフェイン', role: '代謝を促し、運動のパフォーマンスを維持' },
      { ingredientSlug: 'l-carinitine', name: 'L-カルニチン', role: '脂肪を燃焼場であるミトコンドリアへ運搬' },
      { ingredientSlug: 'cla', name: 'CLA', role: '脂肪の蓄積を抑え、筋肉の分解を抑制' },
      { ingredientSlug: 'fish-oil', name: 'フィッシュオイル', role: '脂質代謝を整え、減量中の炎症を抑える' }
    ],
    usage: '朝食後にCLAとフィッシュオイル、運動30分前にカフェインとカルニチンを摂取します。',
    pros: [
      '「運搬」と「燃焼」の両面からアプローチ',
      '減量中のトレーニング強度の低下を防止',
      '健康的な脂質バランスを維持'
    ]
  },
  {
    id: 'mental-focus-zone',
    slug: 'mental-focus-zone',
    title: '集中力・メンタルフォーカススタック',
    description: '仕事終わりでも「ゾーン」に入り、圧倒的な集中力でトレーニングを完遂するためのスタックです。',
    target: '集中力が切れるのを防ぎたい人、メンタル疲労が強い人',
    items: [
      { ingredientSlug: 'caffeine', name: 'カフェイン', role: '覚醒レベルを向上させ疲労をブロック' },
      { ingredientSlug: 'theanine', name: 'テアニン', role: 'カフェインの焦燥感を抑え、冷静な集中を促す' },
      { ingredientSlug: 'tyrosine', name: 'チロシン', role: 'ドーパミンの材料となり意欲を維持' },
      { ingredientSlug: 'citrulline', name: 'シトルリン', role: '血流を促し、脳と筋肉へ酸素を供給' }
    ],
    usage: 'トレーニングの45〜60分前にすべてまとめて摂取します。',
    pros: [
      '「キレ」のある集中力と「パンプ感」を両立',
      'カフェインの離脱症状や動悸を軽減',
      '最後の一レップまで意識を研ぎ澄ませる'
    ]
  },
  {
    id: 'ultimate-recovery',
    slug: 'ultimate-recovery',
    title: '究極のリカバリー・睡眠スタック',
    description: 'ハードなトレーニングのダメージから素早く回復し、翌朝の活力を最大化する夜用スタックです。',
    target: '疲れが抜けにくい人、睡眠の質を上げたい人、怪我を防ぎたい人',
    items: [
      { ingredientSlug: 'magnesium', name: 'マグネシウム', role: '筋肉の緊張を解き、神経系をリラックスさせる' },
      { ingredientSlug: 'ashwagandha', name: 'アシュワガンダ', role: 'ストレスホルモンを抑え、ホルモン値を最適化' },
      { ingredientSlug: 'zinc', name: '亜鉛', role: 'タンパク質合成とテストステロン維持をサポート' },
      { ingredientSlug: 'casein', name: 'カゼインプロテイン', role: '睡眠中ずっと筋肉へアミノ酸を供給し続ける' }
    ],
    usage: '就寝の30〜60分前に摂取します。カゼインは水や牛乳に溶かして飲みます。',
    pros: [
      '「寝ている間にデカくなる」を体現',
      'ストレス対策と回復のダブルアプローチ',
      '翌朝の体のこわばりが軽減'
    ]
  },
  {
    id: 'marathon-ultimate-endurance',
    slug: 'marathon-ultimate-endurance',
    title: '限界に挑む・フルマラソン完走スタック',
    description: '長距離ランにおける最大の敵である「エネルギー枯渇（30kmの壁）」と「脱水によるパフォーマンス低下」を防ぐための持久系特化スタックです。',
    target: 'フルマラソンでサブ4・サブ3を目指すランナー、長距離のロードレースやトレイルランに挑む人',
    items: [
      { ingredientSlug: 'maltodextrin', name: 'マルトデキストリン / 糖質', role: 'レース前・中のエネルギー源としてグリコーゲンの枯渇を防止' },
      { ingredientSlug: 'glycerol', name: 'グリセロール', role: '体内に水分を溜め込み（過加水）、脱水症状と体温上昇を抑制' },
      { ingredientSlug: 'caffeine', name: 'カフェイン', role: '中枢神経を刺激し、長時間の運動による主観的疲労感を大幅に軽減' },
      { ingredientSlug: 'beta-alanine', name: 'βアラニン', role: '筋肉内のカルノシン濃度を高め、終盤のペース維持や坂道での粘りをサポート' }
    ],
    usage: '数週間前からβアラニンを摂取して筋肉に蓄積。レース2-3時間前にグリセロールと多めの水をゆっくり摂取（ハイパーハイドレーション）。レース前〜レース中にマルトデキストリン（糖質）とカフェインを適宜補給します。',
    pros: [
      '「エネルギー補給」と「脱水対策」の強力なシナジー効果',
      '「30kmの壁」に対する確実な科学的アプローチ',
      '心肺の疲労感を軽減し、一定のペース維持を容易にする'
    ]
  }
];
