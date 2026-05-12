export type EvidenceLevel = '高' | '中' | '低';

export interface Supplement {
  id: string;
  name: string;
  slug: string;
  overview: string;
  benefits: string[];
  evidenceLevel: EvidenceLevel;
  mainPurposes: string[];
  dosage: string;
  timing: string;
  targetAudience: string;
  precautions: string[];
  misconceptions: string[];
  relatedSupplements: string[]; // slugs
  references?: {
    title: string;
    url: string;
  }[];
}

export const supplements: Supplement[] = [
  {
    id: 'creatine',
    name: 'クレアチン',
    slug: 'creatine',
    overview: 'クレアチンは筋肉内に貯蔵され、高強度のトレーニング時にエネルギー（ATP）の再合成を助ける成分です。最も研究が進んでいるサプリメントの一つです。',
    benefits: [
      '高強度トレーニングのパフォーマンス向上',
      '筋肥大の促進（水分保持とボリューム増加）',
      '除脂肪体重の増加',
      '脳機能のサポート'
    ],
    evidenceLevel: '高',
    mainPurposes: ['筋肥大', '筋力向上'],
    dosage: '1日3-5g程度（ローディング期を設ける場合は最初の1週間20g）',
    timing: 'トレーニング直後、または毎食後',
    targetAudience: '筋力トレーニングを行う全ての人、瞬発力を必要とする競技者',
    precautions: [
      '十分な水分摂取を心がける',
      '腎機能に疾患がある場合は医師に相談',
      '初期に数キロの体重増加（水分）が見られることがある'
    ],
    misconceptions: [
      '「ステロイドと同じ副作用がある」というのは誤解です。',
      '「ハゲる」という説は、現在の科学的根拠では否定されています。'
    ],
    relatedSupplements: ['beta-alanine', 'protein', 'hmb'],
    references: [
      {
        title: "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine",
        url: "https://pubmed.ncbi.nlm.nih.gov/28615996/"
      },
      {
        title: "Common questions and misconceptions about creatine supplementation: what does the scientific evidence really show?",
        url: "https://pubmed.ncbi.nlm.nih.gov/33557850/"
      },
      {
        title: "Effect of creatine supplementation on body composition and performance: a meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/12701815/"
      }
    ]
  },
  {
    id: 'beta-alanine',
    name: 'βアラニン',
    slug: 'beta-alanine',
    overview: '筋肉内のカルノシン濃度を高め、乳酸の蓄積による筋肉のpH低下（酸性化）を抑えるアミノ酸です。',
    benefits: [
      '持久力の向上（特に1〜4分程度の運動）',
      '疲労感の軽減',
      'トレーニングボリュームの増加'
    ],
    evidenceLevel: '高',
    mainPurposes: ['持久力', '筋力向上'],
    dosage: '1日3.2-6.4g（分割して摂取するのが一般的）',
    timing: 'タイミングよりも1日の総摂取量が重要',
    targetAudience: '高強度のトレーニングを長く続けたい人、持久系アスリート',
    precautions: [
      '「ベータアラニンフラッシュ」と呼ばれる皮膚のピリピリ感が出ることがありますが、無害です。',
      'ピリピリ感を避けたい場合は、少量ずつ分割して摂取してください。'
    ],
    misconceptions: [
      '「即効性がある」わけではなく、数週間継続して筋肉内の濃度を高める必要があります。'
    ],
    relatedSupplements: ['creatine', 'caffeine'],
    references: [
      {
        title: "International Society of Sports Nutrition position stand: Beta-Alanine",
        url: "https://pubmed.ncbi.nlm.nih.gov/26175657/"
      },
      {
        title: "Beta-alanine supplementation to improve exercise capacity and performance: a systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/27797740/"
      }
    ]
  },
  {
    id: 'caffeine',
    name: 'カフェイン',
    slug: 'caffeine',
    overview: '世界中で最も利用されている興奮剤の一つで、持久力向上や集中力アップに強いエビデンスがあります。',
    benefits: [
      '持久的パフォーマンスの向上',
      '主観的疲労感の軽減',
      '集中力・機敏性の向上',
      '脂肪燃焼のわずかな促進'
    ],
    evidenceLevel: '高',
    mainPurposes: ['集中力', '持久力', '減量'],
    dosage: '体重1kgあたり3-6mg（慣れていない場合は少量から）',
    timing: 'トレーニングの30-60分前',
    targetAudience: '集中力を高めたい人、限界まで追い込みたい人',
    precautions: [
      '過剰摂取は動悸、不安感、睡眠障害の原因になります。',
      '夕方以降の摂取は睡眠の質を低下させる可能性があります。',
      '耐性がつくため、時々摂取を控える期間を設けると効果が持続します。'
    ],
    misconceptions: [
      '「強い脱水作用がある」と言われますが、運動中の摂取であれば大きな問題にはならないことが示されています。'
    ],
    relatedSupplements: ['citrulline', 'beta-alanine'],
    references: [
      {
        title: "International Society of Sports Nutrition position stand: caffeine and exercise performance",
        url: "https://pubmed.ncbi.nlm.nih.gov/33388079/"
      },
      {
        title: "Effects of caffeine intake on muscle strength and power: a systematic review and meta-analysis",
        url: "https://pubmed.ncbi.nlm.nih.gov/29420388/"
      }
    ]
  },
  {
    id: 'citrulline',
    name: 'シトルリン',
    slug: 'citrulline',
    overview: '一酸化窒素（NO）の産生を促し、血管を拡張させることで血流を改善するアミノ酸です。',
    benefits: [
      'パンプ感（血流促進）の向上',
      '筋肉への栄養・酸素供給の改善',
      '疲労物質の除去促進',
      'トレーニング後の筋肉痛の軽減'
    ],
    evidenceLevel: '中',
    mainPurposes: ['筋肥大', '疲労回復'],
    dosage: 'L-シトルリンとして6-8g（シトルリンマレートの場合は8-10g）',
    timing: 'トレーニングの30-60分前',
    targetAudience: 'パンプ感を重視する人、回復を早めたい人',
    precautions: [
      '大量摂取により胃の不快感を感じる場合があります。'
    ],
    misconceptions: [
      '「アルギニンよりもシトルリンの方が血中のアルギニン濃度を効率よく高める」ことが分かっています。'
    ],
    relatedSupplements: ['caffeine', 'beta-alanine', 'arginine'],
    references: [
      {
        title: "Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness",
        url: "https://pubmed.ncbi.nlm.nih.gov/20386132/"
      },
      {
        title: "Effects of Citrulline Supplementation on Exercise Performance in Humans: A Review of the Current Literature",
        url: "https://pubmed.ncbi.nlm.nih.gov/31974471/"
      }
    ]
  },
  {
    id: 'protein',
    name: 'プロテイン',
    slug: 'protein',
    overview: 'タンパク質そのものであり、筋肉の材料となる最も基本的なサプリメントです。',
    benefits: [
      '筋肉の合成をサポート',
      '筋肉の分解を抑制',
      '必要タンパク質量の確保が容易になる'
    ],
    evidenceLevel: '高',
    mainPurposes: ['筋肥大', '筋力向上', '疲労回復', '減量'],
    dosage: '1日の総タンパク質摂取量（体重×1.6-2.2g）の不足分を補う量',
    timing: 'いつでも（トレーニング前後、食事の間、寝る前など）',
    targetAudience: '食事から十分なタンパク質を摂るのが難しい全ての人',
    precautions: [
      'あくまで食品の補助であり、過剰摂取は内臓への負担やカロリーオーバーに繋がります。',
      '乳糖不耐症の人はWPI（ホエイプロテイン・アイソレート）を選びましょう。'
    ],
    misconceptions: [
      '「飲むだけで筋肉がつく魔法の粉」ではありません。',
      '「女性が飲むとムキムキになる」というのも間違いです。'
    ],
    relatedSupplements: ['eaa', 'bcaa', 'creatine', 'hmb'],
    references: [
      {
        title: "A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/"
      },
      {
        title: "International Society of Sports Nutrition position stand: protein and exercise",
        url: "https://pubmed.ncbi.nlm.nih.gov/28642676/"
      }
    ]
  },
  {
    id: 'eaa',
    name: 'EAA',
    slug: 'eaa',
    overview: 'Essential Amino Acids（必須アミノ酸）の略で、体内で合成できない9種類のアミノ酸すべてを含みます。',
    benefits: [
      '筋肉の合成スイッチを素早く入れる',
      'トレーニング中の筋分解を抑制',
      '吸収が非常に早い'
    ],
    evidenceLevel: '中',
    mainPurposes: ['筋肥大', '疲労回復'],
    dosage: '1回10-15g程度',
    timing: 'トレーニング中、または起床直後',
    targetAudience: 'トレーニング強度が高い人、空腹状態でトレーニングをする人',
    precautions: [
      '一度に大量に飲むと、浸透圧性の下痢を引き起こすことがあります。',
      'プロテインに比べてコストが高いです。'
    ],
    misconceptions: [
      '「プロテインがあればEAAは不要」とも言われますが、吸収速度の速さを活かした使い分けが有効です。'
    ],
    relatedSupplements: ['bcaa', 'protein'],
    references: [
      {
        title: "Branched-Chain Amino Acid Ingestion Can Stimulate Muscle Protein Synthesis Following Resistance Exercise in Humans",
        url: "https://pubmed.ncbi.nlm.nih.gov/28638350/"
      }
    ]
  },
  {
    id: 'bcaa',
    name: 'BCAA',
    slug: 'bcaa',
    overview: '分岐鎖アミノ酸（バリン・ロイシン・イソロイシン）の3種。筋肉のエネルギー源になりやすい性質があります。',
    benefits: [
      '運動中の疲労感の軽減',
      '筋分解の抑制',
      '集中力の維持'
    ],
    evidenceLevel: '中',
    mainPurposes: ['持久力', '疲労回復'],
    dosage: '1回5-10g',
    timing: 'トレーニング中、またはトレーニング前後',
    targetAudience: '長時間のトレーニングを行う人、減量中の人',
    precautions: [
      'タンパク質合成の材料としてはEAAの方が優れていますが、BCAAは安価で飲みやすいという利点があります。'
    ],
    misconceptions: [
      '「筋肉を大きくするためにBCAAだけ飲む」のは非効率です。全ての必須アミノ酸が必要です。'
    ],
    relatedSupplements: ['eaa', 'citrulline'],
    references: [
      {
        title: "Branched-chain amino acids and muscle protein synthesis in humans: myth or reality?",
        url: "https://pubmed.ncbi.nlm.nih.gov/28852372/"
      }
    ]
  },
  {
    id: 'multivitamin',
    name: 'マルチビタミン',
    slug: 'multivitamin',
    overview: 'ビタミン・ミネラル全般をバランスよく配合した、健康の土台を作るサプリメントです。',
    benefits: [
      'エネルギー代謝のサポート',
      'コンディションの維持',
      '栄養バランスの補完'
    ],
    evidenceLevel: '高',
    mainPurposes: ['睡眠・回復', '疲労回復'],
    dosage: '製品の推奨量',
    timing: '食後（吸収を良くするため）',
    targetAudience: '食事のバランスが偏りがちな人、ハードなトレーニングをする人',
    precautions: [
      '脂溶性ビタミンの過剰摂取に注意。',
      '高品質な食事の代わりにはなりません。'
    ],
    misconceptions: [
      '「飲めば風邪をひかない」というわけではありませんが、リスク軽減には役立つ可能性があります。'
    ],
    relatedSupplements: ['vitamin-d', 'magnesium', 'zinc']
  },
  {
    id: 'vitamin-d',
    name: 'ビタミンD',
    slug: 'vitamin-d',
    overview: '日光を浴びることで合成されるビタミンで、ホルモンに近い働きをします。',
    benefits: [
      '骨の健康維持',
      '免疫力のサポート',
      'テストステロン値の維持に関与する可能性',
      '筋力の維持'
    ],
    evidenceLevel: '中',
    mainPurposes: ['筋力向上', '睡眠・回復'],
    dosage: '1日1,000-2,000IU（不足している場合は医師の指導のもと調整）',
    timing: '脂質を含む食事の後',
    targetAudience: '日照時間の短い地域に住む人、屋内での活動が多い人',
    precautions: [
      '脂溶性のため、極端な過剰摂取は毒性が出る場合があります。'
    ],
    misconceptions: [
      '「飲むだけでテストステロンが爆増する」というわけではなく、不足している場合に正常値に戻す助けになります。'
    ],
    relatedSupplements: ['multivitamin', 'magnesium'],
    references: [
      {
        title: "Vitamin D and the Athlete: Current Perspectives and New Challenges",
        url: "https://pubmed.ncbi.nlm.nih.gov/29420871/"
      }
    ]
  },
  {
    id: 'magnesium',
    name: 'マグネシウム',
    slug: 'magnesium',
    overview: '体内の300種類以上の酵素反応に関わる重要なミネラルです。',
    benefits: [
      '筋肉の弛緩（こわばりの緩和）',
      '睡眠の質の向上',
      'エネルギー産生のサポート',
      '筋痙攣の予防'
    ],
    evidenceLevel: '中',
    mainPurposes: ['睡眠・回復', '疲労回復'],
    dosage: '1日200-400mg',
    timing: '就寝前、または食後',
    targetAudience: '足がつりやすい人、睡眠の質を上げたい人、ストレスが多い人',
    precautions: [
      '一度に大量に摂ると、お腹が緩くなる（下剤効果）があります。',
      '腎機能が低下している場合は注意が必要です。'
    ],
    misconceptions: [
      '「吸収率が非常に低い」形態（酸化マグネシウムなど）があるため、選ぶ際は形態に注意が必要です。'
    ],
    relatedSupplements: ['vitamin-d', 'multivitamin'],
    references: [
      {
        title: "Can Magnesium Enhance Exercise Performance?",
        url: "https://pubmed.ncbi.nlm.nih.gov/28854833/"
      }
    ]
  },
  {
    id: 'hmb',
    name: 'HMB',
    slug: 'hmb',
    overview: 'ロイシンの代謝産物であり、筋肉の分解抑制（アンチカタボリック）に特化した成分です。',
    benefits: [
      '筋肉の分解を抑制',
      'トレーニング初心者の筋量増加サポート',
      '高齢者の筋力低下抑制'
    ],
    evidenceLevel: '低',
    mainPurposes: ['筋肥大', '疲労回復'],
    dosage: '1日3g（1gを3回に分けて摂取）',
    timing: 'トレーニング前後、または食後',
    targetAudience: 'トレーニングを始めたばかりの人、減量中の人、高齢者',
    precautions: [
      '上級者への効果についてはエビデンスが分かれています。',
      'プロテインやEAAと併用するのが一般的です。'
    ],
    misconceptions: [
      '「プロテイン20杯分の効果がある」という広告表現は誤解を招きやすいですが、あくまでロイシンからの代謝効率の話です。'
    ],
    relatedSupplements: ['protein', 'eaa', 'creatine'],
    references: [
      {
        title: "International Society of Sports Nutrition Position Stand: beta-hydroxy-beta-methylbutyrate (HMB)",
        url: "https://pubmed.ncbi.nlm.nih.gov/23374455/"
      },
      {
        title: "Effect of beta-hydroxy-beta-methylbutyrate (HMB) supplementation on muscle mass, muscle strength, and body composition",
        url: "https://pubmed.ncbi.nlm.nih.gov/26135345/"
      }
    ]
  },
  {
    id: 'ashwagandha',
    name: 'アシュワガンダ',
    slug: 'ashwagandha',
    overview: 'インドの伝統医学アーユルヴェーダで使われるハーブで、ストレスへの抵抗力を高める「アダプトゲン」の一種です。',
    benefits: [
      'ストレスホルモン（コルチゾール）の低減',
      '睡眠の質の向上',
      'テストステロン値のサポート',
      '筋力向上と回復の促進'
    ],
    evidenceLevel: '中',
    mainPurposes: ['睡眠・回復', '筋力向上'],
    dosage: '根エキスとして1日300-600mg',
    timing: '夕食後、または就寝前',
    targetAudience: 'ストレスが多い人、睡眠の質を改善したい人、ハードに追い込む人',
    precautions: [
      '妊娠中や授乳中の人は使用を避けてください。',
      '甲状腺疾患がある場合は医師に相談してください。'
    ],
    misconceptions: [
      '「飲んですぐに筋力が上がる」即効性のある成分ではなく、数週間の継続摂取が必要です。'
    ],
    relatedSupplements: ['magnesium', 'vitamin-d'],
    references: [
      {
        title: "Examining the effect of Withania somnifera supplementation on muscle strength and recovery",
        url: "https://pubmed.ncbi.nlm.nih.gov/26609282/"
      }
    ]
  },
  {
    id: 'zinc',
    name: '亜鉛',
    slug: 'zinc',
    overview: '体内の数百種類の酵素に関わる必須ミネラルで、タンパク質合成やホルモンバランスに不可欠です。',
    benefits: [
      '正常なテストステロン値の維持',
      '免疫力のサポート',
      'タンパク質代謝の円滑化',
      '味覚の維持'
    ],
    evidenceLevel: '中',
    mainPurposes: ['筋力向上', '睡眠・回復'],
    dosage: '1日10-30mg（上限40mg程度）',
    timing: '空腹時（吸収が良い）または就寝前',
    targetAudience: '汗を多くかく人、加工食品が多い人、活力を維持したい人',
    precautions: [
      '過剰摂取は銅の吸収を阻害するため注意が必要です。',
      '空腹時に飲むと吐き気を感じる場合があります。その場合は食後に。'
    ],
    misconceptions: [
      '「飲むだけで性機能が爆発的に上がる」というわけではなく、不足による低下を防ぐ役割が大きいです。'
    ],
    relatedSupplements: ['magnesium', 'multivitamin'],
    references: [
      {
        title: "Zinc and its importance for human health: An integrative review",
        url: "https://pubmed.ncbi.nlm.nih.gov/23628174/"
      }
    ]
  },
  {
    id: 'potassium',
    name: 'カリウム',
    slug: 'potassium',
    overview: '細胞内の水分バランスを保ち、筋肉の正常な収縮と神経伝達をサポートする必須ミネラルです。',
    benefits: [
      '筋肉の収縮の正常化',
      '細胞内の水分保持（パンプ感の維持）',
      '過剰なナトリウムの排出をサポート（血圧調整）',
      '疲労感の軽減'
    ],
    evidenceLevel: '高',
    mainPurposes: ['疲労回復', '持久力'],
    dosage: '1日合計2,500-3,000mg程度（食品からの摂取が主。サプリメントは上限に注意）',
    timing: '毎食後、またはトレーニング前後',
    targetAudience: '筋肉のこわばりを感じる人、ナトリウム摂取が多い人、持久系アスリート',
    precautions: [
      '腎機能に疾患がある場合は、摂取量を厳格に制限する必要があるため、必ず医師に相談してください。',
      'サプリメントでの大量摂取は心臓への負担になるリスクがあります。'
    ],
    misconceptions: [
      '「飲めば飲むほど良い」わけではなく、ナトリウムとのバランスが最も重要です。'
    ],
    relatedSupplements: ['sodium', 'magnesium'],
    references: [
      {
        title: "Potassium Intake, Bioavailability, Hypertension, and Skeletal Muscle",
        url: "https://pubmed.ncbi.nlm.nih.gov/27455317/"
      }
    ]
  },
  {
    id: 'glutamine',
    name: 'グルタミン',
    slug: 'glutamine',
    overview: '体内に最も多く存在するアミノ酸で、ハードなトレーニング時や体調不良時に需要が高まります。',
    benefits: [
      '免疫機能の維持',
      '腸内環境のサポート',
      '筋分解の抑制（ハードな局面において）',
      'グリコーゲンの蓄積サポート'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '持久力'],
    dosage: '1日5-20g',
    timing: 'トレーニング直後、就寝前、起床直後',
    targetAudience: '風邪を引きやすい人、ハードなトレーニングが続く人、胃腸が弱い人',
    precautions: [
      '熱に弱いため、熱い飲み物に混ぜるのは避けてください。'
    ],
    misconceptions: [
      '「健常な人の筋肥大には直接的な効果は薄い」という研究データが多いですが、コンディション維持には非常に有用です。'
    ],
    relatedSupplements: ['protein', 'eaa'],
    references: [
      {
        title: "The Influence of Oral L-Glutamine Supplementation on Muscle Recovery Performance and Muscle Soreness",
        url: "https://pubmed.ncbi.nlm.nih.gov/25811544/"
      }
    ]
  },
  {
    id: 'arginine',
    name: 'アルギニン',
    slug: 'arginine',
    overview: '血管拡張を促す一酸化窒素（NO）の材料となるアミノ酸です。',
    benefits: [
      '血流の促進（パンプ感）',
      '成長ホルモンの分泌サポート',
      '免疫力の向上'
    ],
    evidenceLevel: '低',
    mainPurposes: ['筋肥大', '疲労回復'],
    dosage: '1回3-6g',
    timing: 'トレーニング前、または就寝前',
    targetAudience: 'パンプ感を高めたい人、成長ホルモンを意識する人',
    precautions: [
      'ヘルペスウイルスを持っている人は、再発を促す可能性があるため注意が必要です。',
      'シトルリンと併用することで、より効率的に血中NO濃度を高められます。'
    ],
    misconceptions: [
      '「アルギニンだけで劇的に成長ホルモンが増える」という期待は過大評価の側面があります。'
    ],
    relatedSupplements: ['citrulline', 'caffeine']
  },
  {
    id: 'gaba',
    name: 'GABA',
    slug: 'gaba',
    overview: '抑制性の神経伝達物質で、興奮を鎮め、リラックスを促す働きがあります。',
    benefits: [
      'リラックス効果とストレス緩和',
      '入眠のサポート',
      '成長ホルモン分泌へのポジティブな影響の可能性'
    ],
    evidenceLevel: '低',
    mainPurposes: ['睡眠・回復', '疲労回復'],
    dosage: '1日200-500mg',
    timing: '就寝前、またはリラックスしたい時',
    targetAudience: '寝付きが悪い人、ストレスを感じやすい人',
    precautions: [
      '経口摂取による脳内への直接的な移行については研究が続いています。',
      '食品からの摂取が基本ですが、ハードな局面ではサプリメントも選択肢に入ります。'
    ],
    misconceptions: [
      '「飲めばすぐに深い眠りに入れる」という睡眠薬のような強力な作用を期待するのは過剰です。'
    ],
    relatedSupplements: ['magnesium', 'theanine', 'ashwagandha']
  },
  {
    id: 'maca',
    name: 'マカ',
    slug: 'maca',
    overview: '南米アンデスの高地で栽培される根菜で、古くから活力を高める滋養強壮剤として知られています。',
    benefits: [
      '活力・元気のサポート',
      '性機能・リビドーの維持',
      '抗酸化作用と抗疲労効果'
    ],
    evidenceLevel: '低',
    mainPurposes: ['筋力向上', '睡眠・回復'],
    dosage: '乾燥粉末として1日1,500-3,000mg',
    timing: '朝食後、または毎食後に分けて',
    targetAudience: '活力を高めたい人、日々の倦怠感を感じる人',
    precautions: [
      'ホルモンバランスに影響を与える可能性があるため、疾患がある場合は注意が必要です。',
      'テストステロン値を直接劇的に上げるエビデンスは限定的です。'
    ],
    misconceptions: [
      '「飲めばムキムキになる」という魔法の効果ではなく、あくまで全身のコンディションを整える役割です。'
    ],
    relatedSupplements: ['zinc', 'ashwagandha']
  },
  {
    id: 'maltodextrin',
    name: 'マルトデキストリン',
    slug: 'maltodextrin',
    overview: 'トウモロコシなどのデンプンを加水分解して作られる多糖類で、吸収の早いエネルギー源（カーボ）です。',
    benefits: [
      'トレーニング中の迅速なエネルギー補給',
      'トレーニング後の筋グリコーゲン回復の促進',
      'インスリン分泌を促し、栄養素の運び込みをサポート'
    ],
    evidenceLevel: '高',
    mainPurposes: ['筋肥大', '持久力', '疲労回復'],
    dosage: '目的と体重に応じて（一般的にトレーニング中に30-60gなど）',
    timing: 'トレーニング中（イントラ）、またはトレーニング直後',
    targetAudience: '体を大きくしたい人（バルクアップ）、長時間の激しい運動をする人',
    precautions: [
      '血糖値を急激に上げるため、糖尿病予備軍の人は注意が必要です。',
      '過剰摂取は脂肪蓄積の原因になります。'
    ],
    misconceptions: [
      '「ただの砂糖と同じ」ではありません。浸透圧が低く、胃腸への負担を抑えながら素早くエネルギーを補給できます。'
    ],
    relatedSupplements: ['protein', 'eaa', 'creatine'],
    references: [
      {
        title: "International society of sports nutrition conference and expo review: exercise & sports nutrition review update",
        url: "https://pubmed.ncbi.nlm.nih.gov/30068354/"
      }
    ]
  },
  {
    id: 'melatonin',
    name: 'メラトニン',
    slug: 'melatonin',
    overview: '脳の松果体から分泌されるホルモンで、体内時計（サーカディアンリズム）を調節する役割があります。',
    benefits: [
      '入眠時間の短縮',
      '睡眠の質の向上',
      '時差ぼけの緩和',
      '強力な抗酸化作用'
    ],
    evidenceLevel: '高',
    mainPurposes: ['睡眠・回復'],
    dosage: '1mg-3mg程度（少量から開始）',
    timing: '就寝の30-60分前',
    targetAudience: '不規則な生活の人、夜眠れない人、時差ぼけがある人',
    precautions: [
      '日本では医薬品扱いのため、店頭での販売はなく個人輸入等の形になります。',
      '日中に眠気が残る場合があるため、運転前などは控えてください。'
    ],
    misconceptions: [
      '「依存性が非常に高い」と誤解されがちですが、適切に使用すれば安全性は高いとされています（ただし長期使用は専門家に相談）。'
    ],
    relatedSupplements: ['magnesium', 'gaba', 'ashwagandha'],
    references: [
      {
        title: "Meta-Analysis: Melatonin for the Treatment of Primary Sleep Disorders",
        url: "https://pubmed.ncbi.nlm.nih.gov/23691095/"
      }
    ]
  },
  {
    id: 'coq10',
    name: 'コエンザイムQ10',
    slug: 'coq10',
    overview: '細胞内のミトコンドリアでエネルギー（ATP）を産生する際に不可欠な補酵素です。',
    benefits: [
      'エネルギー産生の効率化',
      '強力な抗酸化作用（細胞保護）',
      '心機能や血管の健康維持',
      '疲労感の軽減'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '持久力', '睡眠・回復'],
    dosage: '1日100-300mg',
    timing: '食後（脂溶性のため吸収が良い）',
    targetAudience: '加齢とともに体力が落ちてきたと感じる人、ハードな有酸素運動をする人',
    precautions: [
      '還元型（ユビキノール）の方が吸収効率が良いとされています。',
      '血液凝固阻止薬（ワーファリンなど）を服用中の場合は注意が必要です。'
    ],
    misconceptions: [
      '「ダイエットに劇的な効果がある」と言われた時期もありましたが、あくまでエネルギー代謝のサポート役です。'
    ],
    relatedSupplements: ['multivitamin', 'magnesium']
  },
  {
    id: 'l-carnitine',
    name: 'L-カルニチン',
    slug: 'l-carnitine',
    overview: '脂肪酸をミトコンドリアへ運び込み、エネルギーとして燃焼させるのを助ける成分です。',
    benefits: [
      '脂肪燃焼の効率化サポート',
      '運動パフォーマンスの向上',
      '筋肉痛の軽減と回復促進'
    ],
    evidenceLevel: '中',
    mainPurposes: ['減量', '持久力'],
    dosage: '1日1,000-2,000mg',
    timing: '運動の30-60分前、または食後',
    targetAudience: '脂肪燃焼を加速させたい人、持久力を高めたい人',
    precautions: [
      '過剰摂取は下痢や魚臭い体臭の原因になる場合があります。',
      '炭水化物と一緒に摂ることで、筋肉への取り込みが良くなるとされています。'
    ],
    misconceptions: [
      '「飲むだけで脂肪が溶ける」わけではなく、運動と組み合わせることで効果を発揮します。'
    ],
    relatedSupplements: ['cla', 'caffeine']
  },
  {
    id: 'cla',
    name: 'CLA（共役リノール酸）',
    slug: 'cla',
    overview: '不飽和脂肪酸の一種で、脂肪の分解を促し、筋肉量を維持しながら減量するのを助けます。',
    benefits: [
      '脂肪細胞への脂肪蓄積の抑制',
      '基礎代謝の向上サポート',
      '筋肉量の維持（減量中）'
    ],
    evidenceLevel: '低',
    mainPurposes: ['減量'],
    dosage: '1日3,000-6,000mg',
    timing: '食後（脂溶性のため）',
    targetAudience: '筋肉を落とさずに体脂肪を絞りたい人',
    precautions: [
      '空腹時に摂ると胃の不快感を感じる場合があります。',
      '効果を実感するには数ヶ月の継続が必要です。'
    ],
    misconceptions: [
      '「短期間で劇的に痩せる」成分ではなく、長期的なボディコンポジションの改善を目的とします。'
    ],
    relatedSupplements: ['l-carnitine', 'protein']
  },
  {
    id: 'glucosamine',
    name: 'グルコサミン',
    slug: 'glucosamine',
    overview: '軟骨の材料となる成分で、激しいトレーニングによる関節への負担をケアします。',
    benefits: [
      '関節の痛みの緩和',
      '軟骨の保護と修復サポート',
      '可動域の維持'
    ],
    evidenceLevel: '低',
    mainPurposes: ['疲労回復', '睡眠・回復'],
    dosage: '1日1,500mg',
    timing: '食後',
    targetAudience: '重量を扱うトレーニー、関節に違和感がある人、中高年の運動愛好家',
    precautions: [
      'カニやエビ由来のものが多いため、甲殻類アレルギーの人は注意が必要です。',
      '効果を感じるまでに時間がかかる場合が多いです。'
    ],
    misconceptions: [
      '「飲めば関節が新品になる」わけではなく、あくまで摩耗の抑制や痛みの緩和が主目的です。'
    ],
    relatedSupplements: ['curcumin', 'fish-oil']
  },
  {
    id: 'curcumin',
    name: 'クルクミン（ウコン）',
    slug: 'curcumin',
    overview: 'ターメリックに含まれるポリフェノールで、強力な抗炎症作用を持ちます。',
    benefits: [
      '激しい運動による炎症の抑制',
      '筋肉痛（DOMS）の軽減',
      '抗酸化作用によるリカバリー促進'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '睡眠・回復'],
    dosage: '1日500mg（吸収率を高めた製品を推奨）',
    timing: '食後',
    targetAudience: 'オーバートレーニングを防ぎたい人、関節の健康を保ちたい人',
    precautions: [
      'クルクミン単体では吸収率が非常に低いため、黒胡椒成分（ピペリン）配合のものなどが推奨されます。'
    ],
    misconceptions: [
      '「お酒を飲む人だけのもの」ではなく、実はアスリートのコンディショニングに非常に有用です。'
    ],
    relatedSupplements: ['fish-oil', 'glucosamine']
  },
  {
    id: 'theanine',
    name: 'テアニン',
    slug: 'theanine',
    overview: '緑茶に含まれるアミノ酸で、カフェインの興奮作用を和らげつつ集中力を高める効果があります。',
    benefits: [
      'リラックス効果と集中力の両立',
      'カフェインによる「ジッター（震えや不安）」の抑制',
      '睡眠の質の改善'
    ],
    evidenceLevel: '中',
    mainPurposes: ['集中力', '睡眠・回復'],
    dosage: '100-200mg',
    timing: 'プレワークアウト（カフェインと同時）、または就寝前',
    targetAudience: 'カフェインの副作用を抑えたい人、ゾーンに入りたい人',
    precautions: [
      '非常に安全性が高い成分です。'
    ],
    misconceptions: [
      '「眠くなる成分」と思われがちですが、日中に摂っても眠気より「落ち着いた集中」をもたらします。'
    ],
    relatedSupplements: ['caffeine', 'tyrosine', 'gaba']
  },
  {
    id: 'tyrosine',
    name: 'チロシン',
    slug: 'tyrosine',
    overview: 'ドーパミンやアドレナリンの材料となるアミノ酸で、精神的な持久力と集中力を支えます。',
    benefits: [
      'ストレス下での認知機能維持',
      'モチベーションの維持',
      'メンタル疲労の軽減'
    ],
    evidenceLevel: '中',
    mainPurposes: ['集中力'],
    dosage: '500-2,000mg',
    timing: 'トレーニングの30-60分前',
    targetAudience: '仕事終わりでトレーニングのやる気が出ない人、集中力を切らしたくない人',
    precautions: [
      '甲状腺ホルモンの材料にもなるため、甲状腺疾患がある人は医師に相談してください。'
    ],
    misconceptions: [
      '「飲めばハイになる」ような薬物的な効果ではなく、あくまで精神的リソースを枯渇させないためのサポートです。'
    ],
    relatedSupplements: ['caffeine', 'theanine']
  },
  {
    id: 'fish-oil',
    name: 'フィッシュオイル（オメガ3）',
    slug: 'fish-oil',
    overview: 'EPA・DHAを豊富に含む良質な脂質。心血管の健康から抗炎症まで、あらゆるトレーニーの必須成分です。',
    benefits: [
      '筋肉の炎症抑制とリカバリー促進',
      'タンパク質合成のわずかな促進サポート',
      '関節の健康維持',
      'インスリン感受性の改善'
    ],
    evidenceLevel: '高',
    mainPurposes: ['疲労回復', '睡眠・回復', '筋肥大'],
    dosage: 'EPA/DHAの合計として1日1,000-2,000mg',
    timing: '食後',
    targetAudience: '魚をあまり食べない全ての人、ハードなトレーニングをする人',
    precautions: [
      '血液をサラサラにする作用があるため、手術前や抗凝固薬を飲んでいる場合は医師に相談。',
      '酸化しやすいため、高品質なものを選び、涼しい場所で保管してください。'
    ],
    misconceptions: [
      '「脂肪だから太る」と避けがちですが、むしろ代謝を整えるために不可欠な「油」です。'
    ],
    relatedSupplements: ['multivitamin', 'curcumin'],
    references: [
      {
        title: "Applications of omega-3 polyunsaturated fatty acid supplementation for sport performance",
        url: "https://pubmed.ncbi.nlm.nih.gov/30484738/"
      }
    ]
  },
  {
    id: 'ala',
    name: 'ALA（α-リポ酸）',
    slug: 'ala',
    overview: '強力な抗酸化作用を持ち、糖代謝（エネルギー産生）を助けるビタミン様物質です。',
    benefits: [
      'インスリン感受性の向上（糖の取り込み促進）',
      '他のビタミンの再利用サポート',
      '脂肪燃焼のサポート'
    ],
    evidenceLevel: '中',
    mainPurposes: ['減量', '疲労回復'],
    dosage: '300-600mg',
    timing: '炭水化物を含む食事と一緒に',
    targetAudience: '減量中の人、糖質の代謝を効率化したい人',
    precautions: [
      '一部の人で低血糖症状（冷や汗、震えなど）が出る場合があるため、注意が必要です。'
    ],
    misconceptions: [
      '「ただの燃焼系サプリ」ではなく、細胞レベルでエネルギー効率を高める働きをします。'
    ],
    relatedSupplements: ['creatine', 'multivitamin']
  },
  {
    id: 'casein',
    name: 'カゼインプロテイン',
    slug: 'casein',
    overview: '牛乳に含まれるタンパク質の80%を占める成分。ホエイと異なり、ゆっくりと吸収されるのが特徴です。',
    benefits: [
      'アミノ酸を長時間（7-8時間）供給し続ける',
      '就寝中の筋分解を強力に抑制',
      '腹持ちが非常に良い'
    ],
    evidenceLevel: '高',
    mainPurposes: ['筋肥大', '睡眠・回復', '減量'],
    dosage: '1回20-40g',
    timing: '就寝前、または長時間食事が摂れない時',
    targetAudience: 'バルクアップ中の人、減量中で空腹感を抑えたい人',
    precautions: [
      'ホエイに比べてドロっとしており、飲みにくいと感じる場合があります。',
      '吸収が遅いため、トレーニング直後の摂取には向きません。'
    ],
    misconceptions: [
      '「ホエイより劣る」わけではなく、用途（タイミング）が異なるだけです。'
    ],
    relatedSupplements: ['protein', 'magnesium']
  },
  {
    id: 'sodium',
    name: 'ナトリウム（食塩）',
    slug: 'sodium',
    overview: '汗とともに失われる主要な電解質です。水分補給の効率を高め、筋肉の収縮をスムーズに保つために不可欠な成分です。',
    benefits: [
      '脱水の予防（水分の保持）',
      '筋肉の痙攣（足がつる等）の防止',
      '神経伝達と筋肉収縮のサポート',
      '運動中のパフォーマンス維持'
    ],
    evidenceLevel: '高',
    mainPurposes: ['持久力', '疲労回復'],
    dosage: '運動強度や発汗量に応じて、水1Lあたり0.5〜1g程度（塩一つまみ）',
    timing: 'トレーニング前、およびトレーニング中',
    targetAudience: '激しく発汗する人、長時間のトレーニングをする人、足がつりやすい人',
    precautions: [
      '日常の食事で塩分過多な場合は、追加の摂取は不要です。',
      '高血圧など持病がある場合は医師に相談してください。'
    ],
    misconceptions: [
      '「ただの水だけ」で補給すると、かえって低ナトリウム血症（水中毒）のリスクが高まる場合があります。'
    ],
    relatedSupplements: ['magnesium', 'maltodextrin'],
    references: [
      {
        title: "Optimizing the restoration and maintenance of fluid balance after exercise-induced dehydration",
        url: "https://pubmed.ncbi.nlm.nih.gov/28400033/"
      }
    ]
  },
  {
    id: 'taurine',
    name: 'タウリン',
    slug: 'taurine',
    overview: '含硫アミノ酸の一種。細胞内の水分バランスを整え、筋肉の収縮をサポートします。',
    benefits: [
      '持久的パフォーマンスの向上',
      '筋肉のけいれんやこわばりの予防',
      '抗酸化作用と心臓保護'
    ],
    evidenceLevel: '中',
    mainPurposes: ['持久力', '疲労回復'],
    dosage: '1,000-3,000mg',
    timing: '運動前、または食後',
    targetAudience: 'ハードな有酸素運動をする人、筋肉がつりやすい人',
    precautions: [
      '非常に安全性が高い成分です。'
    ],
    misconceptions: [
      '「エナジードリンクにしか入っていない」と思われがちですが、単体でのサプリメント摂取も有効です。'
    ],
    relatedSupplements: ['caffeine', 'magnesium']
  },
  {
    id: 'rhodiola',
    name: 'ロディオラ',
    slug: 'rhodiola',
    overview: '高山地帯に自生するハーブで、精神的・肉体的な疲労への抵抗力を高めるアダプトゲンです。',
    benefits: [
      'ストレスによる疲労感の軽減',
      '集中力と認知機能の維持',
      '持久的パフォーマンスの向上'
    ],
    evidenceLevel: '中',
    mainPurposes: ['集中力', '疲労回復'],
    dosage: 'ロザビン3%規格として300-600mg',
    timing: '朝、またはトレーニングの30-60分前',
    targetAudience: 'ハードワークとトレーニングを両立させている人',
    precautions: [
      '夕方以降に摂ると、興奮して眠れなくなる場合があります。'
    ],
    misconceptions: [
      '「ただの気休め」ではなく、複数の臨床試験で疲労軽減効果が確認されています。'
    ],
    relatedSupplements: ['ashwagandha', 'caffeine']
  },
  {
    id: 'cordyceps',
    name: '冬虫夏草 (Cordyceps)',
    slug: 'cordyceps',
    overview: 'キノコの一種で、酸素摂取効率を高め、持久力を向上させる働きがあります。',
    benefits: [
      '最大酸素摂取量（VO2 max）の向上サポート',
      'ATP産生の効率化',
      '免疫機能の調整'
    ],
    evidenceLevel: '低',
    mainPurposes: ['持久力', '疲労回復'],
    dosage: '1日1,000-3,000mg',
    timing: 'トレーニング前、または毎食後',
    targetAudience: '持久系アスリート、高強度のインターバルトレーニングをする人',
    precautions: [
      'キノコアレルギーがある場合は注意。',
      '高品質なCS-4株などが推奨されます。'
    ],
    misconceptions: [
      '「虫から生えるグロテスクなもの」というイメージが強いですが、サプリメントは菌糸体を培養したものが主流です。'
    ],
    relatedSupplements: ['rhodiola', 'coq10']
  },
  {
    id: 'tongkat-ali',
    name: 'トンカットアリ',
    slug: 'tongkat-ali',
    overview: '東南アジア原産のハーブで、男性ホルモンの最適化と活力を支えるために使われます。',
    benefits: [
      '自由テストステロン値のサポート',
      '筋力向上と除脂肪体重の増加',
      'リビドー（活力）の向上'
    ],
    evidenceLevel: '低',
    mainPurposes: ['筋力向上', '睡眠・回復'],
    dosage: '200:1濃縮エキスとして200-400mg',
    timing: '朝食後、または毎食後',
    targetAudience: '加齢による活力低下を感じるトレーニー、ハードに追い込む男性',
    precautions: [
      '偽物や低品質な製品が多いため、信頼できるメーカーを選ぶことが重要です。',
      '過剰摂取はイライラ感や不眠を招く可能性があります。'
    ],
    misconceptions: [
      '「ステロイドのような劇的な変化」を期待するものではなく、あくまで自然な範囲での最適化です。'
    ],
    relatedSupplements: ['zinc', 'ashwagandha', 'maca']
  },
  {
    id: 'panax-ginseng',
    name: '高麗人参 (Ginseng)',
    slug: 'panax-ginseng',
    overview: '最も有名なアダプトゲンの一つ。滋養強壮だけでなく、認知機能や免疫力にも関与します。',
    benefits: [
      '全身の倦怠感の軽減',
      '集中力と気分の改善',
      'インスリン感受性のサポート'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '集中力'],
    dosage: 'ジンセノサイド含有量に応じて1日200-500mg',
    timing: '朝、またはトレーニング前',
    targetAudience: '常に疲れを感じている人、メンタル面も強化したい人',
    precautions: [
      'カフェインと一緒に摂ると、興奮が強まりすぎることがあります。',
      '長期間の連続使用より、時々休みを入れる「サイクル」が推奨されます。'
    ],
    misconceptions: [
      '「高齢者向け」と思われがちですが、若年層のパフォーマンス維持にも有効です。'
    ],
    relatedSupplements: ['rhodiola', 'multivitamin']
  },
  {
    id: 'fenugreek',
    name: 'フェヌグリーク',
    slug: 'fenugreek',
    overview: 'スパイスとしても使われるハーブで、糖代謝の改善や男性ホルモンのサポートに利用されます。',
    benefits: [
      '血糖値の安定化サポート',
      'テストステロンの遊離を助ける可能性',
      '食欲のコントロール（減量時）'
    ],
    evidenceLevel: '低',
    mainPurposes: ['筋力向上', '減量'],
    dosage: '標準化エキスとして500-600mg',
    timing: '夕食後、または就寝前',
    targetAudience: '体脂肪を抑えつつ筋力を維持したい人',
    precautions: [
      '体臭や尿がメープルシロップのような甘い匂いになることがあります。',
      '糖尿病薬を服用中の場合は医師に相談。'
    ],
    misconceptions: [
      '「カレーに入っているからサプリは不要」ということはなく、有効成分（テストフェン等）を濃縮したサプリが一般的です。'
    ],
    relatedSupplements: ['zinc', 'ala']
  },
  {
    id: 'alpha-gpc',
    name: 'アルファGPC',
    slug: 'alpha-gpc',
    overview: 'コリンの補給源として優れており、脳内のアセチルコリン濃度を高め、集中力や成長ホルモンに関与します。',
    benefits: [
      '爆発的なパワー出力の向上',
      'フォーカス（集中力）の劇的な向上',
      '運動後の成長ホルモン分泌サポート'
    ],
    evidenceLevel: '中',
    mainPurposes: ['集中力', '筋力向上'],
    dosage: '1回300-600mg',
    timing: 'トレーニングの30-60分前',
    targetAudience: '最大重量に挑戦する人、一瞬の集中力が必要な競技者',
    precautions: [
      '非常に吸湿性が高いため、保存状態に注意が必要です。'
    ],
    misconceptions: [
      '「ただの脳サプリ」ではなく、近年の研究では瞬発的なパワー向上への有効性が注目されています。'
    ],
    relatedSupplements: ['tyrosine', 'caffeine']
  },
  {
    id: 'huperzine-a',
    name: 'ヒューペルジンA',
    slug: 'huperzine-a',
    overview: 'トウゲシバという植物から抽出される成分で、アセチルコリンの分解を抑えるノートロピック（脳機能改善）成分です。',
    benefits: [
      '記憶力と学習能力のサポート',
      'マインドマッスルコネクション（意識と筋肉の連動）の強化',
      '集中力の持続'
    ],
    evidenceLevel: '中',
    mainPurposes: ['集中力'],
    dosage: '50-200mcg (マイクログラム)',
    timing: 'トレーニング前',
    targetAudience: 'フォームを細かく意識したい人、集中を切らしたくない人',
    precautions: [
      '非常に強力なため、過剰摂取は厳禁です。',
      '1ヶ月使用したら1週間休むなどのサイクルが推奨されます。'
    ],
    misconceptions: [
      '「副作用が怖い」と思われがちですが、用量を守れば安全性は高い成分です。'
    ],
    relatedSupplements: ['alpha-gpc', 'theanine']
  },
  {
    id: 'bacopa',
    name: 'バコパ (Bacopa Monnieri)',
    slug: 'bacopa',
    overview: '伝統的なハーブで、長期的な記憶力向上やストレス緩和に優れた効果を発揮します。',
    benefits: [
      '記憶形成のサポート',
      '不安感の軽減とリラックス',
      '抗酸化作用による脳の保護'
    ],
    evidenceLevel: '高',
    mainPurposes: ['集中力', '睡眠・回復'],
    dosage: 'バコシド50%規格として300mg',
    timing: '食後（脂溶性のため）',
    targetAudience: 'トレーニングのルーティンを確実にこなしたい人、メンタルを安定させたい人',
    precautions: [
      '即効性はなく、効果を実感するまでに8〜12週間の継続が必要です。',
      '空腹時に摂ると胃腸に違和感が出ることがあります。'
    ],
    misconceptions: [
      '「受験生向け」だけでなく、運動学習（技術習得）が必要なアスリートにも適しています。'
    ],
    relatedSupplements: ['ashwagandha', 'theanine']
  },
  {
    id: 'resveratrol',
    name: 'レスベラトロール',
    slug: 'resveratrol',
    overview: '赤ワインなどに含まれるポリフェノール。抗酸化・抗炎症のほか、ミトコンドリアの活性化が期待されます。',
    benefits: [
      '細胞のエイジングケア',
      '心血管系の健康維持',
      '持久力向上のサポート'
    ],
    evidenceLevel: '低',
    mainPurposes: ['睡眠・回復', '持久力'],
    dosage: '1日100-500mg',
    timing: '朝食後',
    targetAudience: 'いつまでも若々しくトレーニングを続けたい人',
    precautions: [
      '高用量の摂取がトレーニングの適応（筋肉の成長）をわずかに阻害するという説もあり、タイミングに注意。'
    ],
    misconceptions: [
      '「ワインを飲めば足りる」わけではありません。有効量を摂るには数リットルのワインが必要なため、サプリが効率的です。'
    ],
    relatedSupplements: ['coq10', 'fish-oil']
  },
  {
    id: 'quercetin',
    name: 'ケルセチン',
    slug: 'quercetin',
    overview: 'タマネギなどに含まれるフラボノイド。抗酸化・抗炎症作用により、ハードな運動後の免疫低下を防ぎます。',
    benefits: [
      '運動後の風邪予防（免疫維持）',
      '持久的パフォーマンスの向上',
      '血流の改善サポート'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '持久力'],
    dosage: '1日500-1,000mg',
    timing: '運動前、または毎食後',
    targetAudience: 'ハードな追い込みで体調を崩しやすい人',
    precautions: [
      '単体では吸収率が低いため、ビタミンCや脂質と一緒に摂ることが推奨されます。'
    ],
    misconceptions: [
      '「ただの健康成分」ではなく、近年は持久力のスタミナ強化成分としても研究されています。'
    ],
    relatedSupplements: ['vitamin-c', 'fish-oil']
  },
  {
    id: 'spirulina',
    name: 'スピルリナ',
    slug: 'spirulina',
    overview: '強力な抗酸化物質「フィコシアニン」を含むスーパーフード。筋肉のダメージ軽減に寄与します。',
    benefits: [
      '運動による酸化ストレスの軽減',
      '筋損傷マーカー（CKなど）の低下',
      '鉄分補給による持久力維持'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '持久力'],
    dosage: '1日2-5g',
    timing: 'いつでも（食後が一般的）',
    targetAudience: '天然由来のサプリメントを好む人、回復を早めたい人',
    precautions: [
      '重金属汚染のない、管理された環境で育てられた製品を選んでください。'
    ],
    misconceptions: [
      '「タンパク質源」として紹介されますが、サプリメントの量ではタンパク質補給としては不十分です。'
    ],
    relatedSupplements: ['multivitamin', 'chlorella']
  },
  {
    id: 'chlorella',
    name: 'クロレラ',
    slug: 'chlorella',
    overview: '豊富なクロロフィルを含む藻類。デトックスや免疫サポートのほか、栄養補給に優れています。',
    benefits: [
      '免疫機能の強化',
      '体内の有害物質の排出サポート',
      'ビタミンB12の補給（ベジタリアンに有効）'
    ],
    evidenceLevel: '低',
    mainPurposes: ['睡眠・回復', '疲労回復'],
    dosage: '1日3-6g',
    timing: 'いつでも',
    targetAudience: '腸内環境を整えたい人、クリーンな体作りを目指す人',
    precautions: [
      '消化が少し悪いため、細胞壁破砕処理がされている製品を選びましょう。'
    ],
    misconceptions: [
      '「スピルリナと同じ」と思われがちですが、成分構成が異なり、クロレラの方が解毒作用に重点があります。'
    ],
    relatedSupplements: ['spirulina', 'multivitamin']
  },
  {
    id: 'beetroot',
    name: 'ビートルート (Beetroot)',
    slug: 'beetroot',
    overview: '硝酸塩を豊富に含み、体内で一酸化窒素（NO）に変換されることで爆発的なパフォーマンスを生みます。',
    benefits: [
      '運動効率の向上（より少ない酸素で動ける）',
      '持久力の底上げ',
      '血圧の安定化'
    ],
    evidenceLevel: '高',
    mainPurposes: ['持久力', '筋力向上'],
    dosage: '硝酸塩として300-600mg（ジュースなら500ml程度）',
    timing: 'トレーニングの2-3時間前',
    targetAudience: 'タイムを縮めたい持久系アスリート、パンプ感を最大化したい人',
    precautions: [
      '摂取後に尿や便が赤くなることがありますが、無害です（ベーツリア）。',
      'マウスウォッシュを使うと、口内の細菌が減りNOへの変換が阻害されます。'
    ],
    misconceptions: [
      '「野菜ジュースだからマイルド」と思いきや、オリンピック選手も活用するほど強力なエビデンスがあります。'
    ],
    relatedSupplements: ['citrulline', 'arginine']
  },
  {
    id: 'green-tea-extract',
    name: '緑茶エキス (EGCG)',
    slug: 'green-tea-extract',
    overview: '緑茶のカテキン、特にEGCGを濃縮したもの。脂肪燃焼の加速と抗酸化に寄与します。',
    benefits: [
      '脂質代謝の向上',
      '運動中の脂肪利用率の増加',
      '強力な細胞保護（抗酸化）'
    ],
    evidenceLevel: '中',
    mainPurposes: ['減量', '疲労回復'],
    dosage: 'EGCGとして1日400-500mg',
    timing: '運動前、または食後',
    targetAudience: '体脂肪を効率よく落としたい人、健康レベルを上げたい人',
    precautions: [
      '空腹時の高用量摂取は肝臓に負担をかける可能性があるため、必ず食後に。'
    ],
    misconceptions: [
      '「緑茶を飲むだけで痩せる」わけではなく、運動時の脂肪燃焼を「加速」させるためのツールです。'
    ],
    relatedSupplements: ['caffeine', 'l-carnitine']
  },
  {
    id: 'ginger-extract',
    name: 'ショウガエキス (Ginger)',
    slug: 'ginger-extract',
    overview: '古くからの生薬。近年の研究では、筋損傷の軽減や関節の健康に有効であることが示されています。',
    benefits: [
      '筋肉痛（DOMS）の強度の低下',
      '関節の違和感の緩和',
      '消化機能のサポート'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '睡眠・回復'],
    dosage: '粉末として1日1,000-2,000mg',
    timing: '食後、または毎食後',
    targetAudience: '激しい筋肉痛に悩まされている人、胃腸を整えたい人',
    precautions: [
      '一度に大量に摂ると胸焼けの原因になることがあります。'
    ],
    misconceptions: [
      '「体を温めるだけ」ではなく、サプリメントとしての高用量摂取は炎症マーカーを下げる働きがあります。'
    ],
    relatedSupplements: ['curcumin', 'fish-oil']
  },
  {
    id: 'astaxanthin',
    name: 'アスタキサンチン',
    slug: 'astaxanthin',
    overview: 'サケやエビに含まれる赤い色素。ビタミンEの数百倍とも言われる強力な抗酸化力を持ちます。',
    benefits: [
      '筋肉の持久力向上サポート',
      '運動後の疲労感の軽減',
      '目や肌の健康維持'
    ],
    evidenceLevel: '低',
    mainPurposes: ['持久力', '疲労回復'],
    dosage: '1日4-12mg',
    timing: '脂質を含む食事の後',
    targetAudience: '屋外での活動が多い人、長時間動き続けるアスリート',
    precautions: [
      '即効性はなく、1ヶ月程度の継続摂取が推奨されます。'
    ],
    misconceptions: [
      '「美容成分」としてのイメージが強いですが、スポーツ界でもスタミナ維持成分として注目されています。'
    ],
    relatedSupplements: ['coq10', 'resveratrol']
  },
  {
    id: 'collagen',
    name: 'コラーゲンペプチド',
    slug: 'collagen',
    overview: 'タンパク質の一種で、特に関節、腱、靭帯、肌の構成要素になります。',
    benefits: [
      '関節の違和感や痛みの軽減',
      '腱や靭帯の強化サポート',
      '肌の弾力維持'
    ],
    evidenceLevel: '中',
    mainPurposes: ['睡眠・回復', '疲労回復'],
    dosage: '1日10-15g',
    timing: 'ビタミンCと一緒に、トレーニング前後または寝る前',
    targetAudience: '関節への不安がある人、高強度のトレーニングを長く続けたい人',
    precautions: [
      '筋タンパク質合成の材料としては、プロテインの方が効率的です。'
    ],
    misconceptions: [
      '「食べてもアミノ酸に分解されるから意味がない」というのは古い考えです。一部のペプチドが直接信号を送ることが分かっています。'
    ],
    relatedSupplements: ['vitamin-c', 'glucosamine']
  },
  {
    id: 'biotin',
    name: 'ビオチン (ビタミンB7)',
    slug: 'biotin',
    overview: '糖・脂質・タンパク質の代謝を助ける補酵素。エネルギー産生の土台を支えます。',
    benefits: [
      'エネルギー代謝の正常化',
      '髪、肌、爪の健康維持',
      '筋分解のわずかな抑制サポート'
    ],
    evidenceLevel: '高',
    mainPurposes: ['睡眠・回復', '疲労回復'],
    dosage: '1日500-5,000mcg (マイクログラム)',
    timing: 'いつでも',
    targetAudience: 'ハードな食事制限中の人、美容面もケアしたいトレーニー',
    precautions: [
      '生卵の白身を大量に食べるとビオチンの吸収が阻害されます（アビジン結合）。'
    ],
    misconceptions: [
      '「髪を増やす薬」ではありません。不足している場合に、正常な成長をサポートするものです。'
    ],
    relatedSupplements: ['multivitamin', 'zinc']
  },
  {
    id: 'chromium',
    name: 'クロム (Chromium)',
    slug: 'chromium',
    overview: 'インスリンの働きを助け、血糖値のコントロールと筋肉への栄養取り込みをスムーズにするミネラルです。',
    benefits: [
      'インスリン感受性の向上',
      '血糖値の安定による食欲抑制',
      '除脂肪体重の維持サポート'
    ],
    evidenceLevel: '低',
    mainPurposes: ['減量', '筋肥大'],
    dosage: 'ピコリン酸クロムとして200-400mcg',
    timing: '高炭水化物の食事の前',
    targetAudience: '糖質制限中の人、バルクアップで脂肪をつけたくない人',
    precautions: [
      '糖尿病薬を服用中の場合は必ず医師に相談してください。'
    ],
    misconceptions: [
      '「飲むだけで痩せる」わけではなく、インスリンの働きを正常化させるための「下地作り」です。'
    ],
    relatedSupplements: ['ala', 'fenugreek']
  },
  {
    id: 'probiotics',
    name: 'プロバイオティクス (乳酸菌等)',
    slug: 'probiotics',
    overview: '腸内環境を整える善玉菌。栄養の吸収効率を高め、免疫力を維持するために不可欠です。',
    benefits: [
      'タンパク質の吸収効率の向上',
      '免疫力の強化（ハードな運動後の低下を防止）',
      '腸内フローラの改善による体調維持'
    ],
    evidenceLevel: '中',
    mainPurposes: ['疲労回復', '睡眠・回復', '筋肥大'],
    dosage: '製品の推奨量（菌数10億以上が目安）',
    timing: '食後、または就寝前',
    targetAudience: 'プロテインを飲むとお腹が張る人、体調管理を徹底したい人',
    precautions: [
      '自分に合う菌株を見つけることが重要。1ヶ月試して効果がなければ別の種類を。'
    ],
    misconceptions: [
      '「お腹の調子を整えるだけ」ではありません。最新の研究では、腸内環境が筋肉の成長やメンタルにまで影響することが示されています。'
    ],
    relatedSupplements: ['glutamine', 'multivitamin']
  }
];

export interface Purpose {
  slug: string;
  name: string;
  icon: string;
  description: string;
}

export const purposes: Purpose[] = [
  { 
    slug: 'muscle-gain', 
    name: '筋肥大', 
    icon: '💪',
    description: '筋繊維を太くし、筋肉のボリュームを増やすことを目的としたカテゴリーです。タンパク質合成の促進と筋分解の抑制が鍵となります。'
  },
  { 
    slug: 'strength', 
    name: '筋力向上', 
    icon: '🏋️',
    description: '扱える重量を増やす、爆発的なパワーを発揮するためのカテゴリーです。神経系の活性化やエネルギー再合成の効率化が重要です。'
  },
  { 
    slug: 'endurance', 
    name: '持久力', 
    icon: '🏃',
    description: '長時間の運動を維持し、パフォーマンスの低下を防ぐためのカテゴリーです。エネルギー供給の持続と疲労物質の処理能力をサポートします。'
  },
  { 
    slug: 'focus', 
    name: '集中力', 
    icon: '🧠',
    description: 'トレーニング中の精神的な集中力や、脳の機敏性を高めるためのカテゴリーです。中枢神経系へのアプローチで「最後の一レップ」を支えます。'
  },
  { 
    slug: 'recovery', 
    name: '疲労回復', 
    icon: '🔋',
    description: 'トレーニング後のダメージからの回復を早めるカテゴリーです。血流促進による栄養運搬や、老廃物の除去、筋肉痛の軽減に焦点を当てます。'
  },
  { 
    slug: 'weight-loss', 
    name: '減量', 
    icon: '🔥',
    description: '体脂肪を効率よく燃焼させ、筋肉量を維持しながら絞るためのカテゴリーです。代謝の向上や空腹感のコントロール、トレーニング強度の維持をサポートします。'
  },
  { 
    slug: 'sleep', 
    name: '睡眠・回復', 
    icon: '🌙',
    description: '質の高い睡眠を確保し、成長ホルモンの分泌や内臓の休息を促すカテゴリーです。ハードなトレーニングを継続するための基盤作りを支援します。'
  },
];
