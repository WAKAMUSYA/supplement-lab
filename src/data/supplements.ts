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
    relatedSupplements: ['beta-alanine', 'protein', 'hmb']
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
    relatedSupplements: ['creatine', 'caffeine']
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
    relatedSupplements: ['citrulline', 'beta-alanine']
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
    relatedSupplements: ['caffeine', 'beta-alanine', 'arginine']
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
    relatedSupplements: ['eaa', 'bcaa', 'creatine', 'hmb']
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
    relatedSupplements: ['bcaa', 'protein']
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
    relatedSupplements: ['eaa', 'citrulline']
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
    relatedSupplements: ['multivitamin', 'magnesium']
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
    relatedSupplements: ['vitamin-d', 'multivitamin']
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
    relatedSupplements: ['protein', 'eaa', 'creatine']
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
    relatedSupplements: ['magnesium', 'vitamin-d']
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
    relatedSupplements: ['magnesium', 'multivitamin']
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
    relatedSupplements: ['protein', 'eaa']
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
    relatedSupplements: ['protein', 'eaa', 'creatine']
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
    relatedSupplements: ['magnesium', 'gaba', 'ashwagandha']
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
