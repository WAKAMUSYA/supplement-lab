import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Decoration */}
      <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-400 w-full" />

      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-4">
            <span className="text-3xl">🔬</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            研究室について
          </h1>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="prose prose-blue max-w-none space-y-12 text-gray-700 leading-relaxed">
          {/* Story Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-blue-600">01.</span> はじまりの場所
            </h2>
            <p>
              私たちは、日々の現場で数多くのクライアントと向き合うトレーナーチームです。
            </p>
            <p>
              パーソナル指導やジムの現場では、毎日同じような質問をいただきます。
            </p>
            <div className="bg-gray-50 border-l-4 border-blue-200 p-6 my-8 rounded-r-2xl italic space-y-2">
              <p>「結局、プロテインは何を選べばいいんですか？」</p>
              <p>「クレアチンって本当に必要ですか？」</p>
              <p>「ダイエット中、何を飲めば効率がいいんでしょう？」</p>
              <p>「疲れが取れないとき、おすすめはありますか？」</p>
            </div>
            <p>
              研究や論文を探せば、答えに近い情報は確かに存在します。しかし、忙しい毎日を送る方々が、新しい論文を自ら読み込み、その真偽を確かめるのは非常に困難です。
            </p>
          </section>

          {/* Conflict Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-blue-600">02.</span> 理想と、現実の狭間で
            </h2>
            <p>
              さらに、私たちは「現場」を知っています。
            </p>
            <p>
              たとえ研究データ上は「理想」とされる摂取タイミングや量であっても、生活スタイルや予算、そして「継続しやすさ」といった現実的な壁にぶつかることが多々あります。
            </p>
            <p>
              最新のエビデンスだけでは語れない、コストパフォーマンスや生活への馴染みやすさ。一方で、体験談だけでは偏ってしまう科学的根拠。
            </p>
            <p>
              その両方を整理し、トレーナーもクライアントも「迷ったときに立ち寄れる場所」を作りたいと考えたのが、この『筋トレサプリ研究室』の原点です。
            </p>
          </section>

          {/* Policy Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-blue-600">03.</span> 研究室のスタンス
            </h2>
            <p>
              このサイトは、特定の製品を売るための「ランキングサイト」や、煽り文句を並べる「アフィリエイトサイト」ではありません。
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              <li className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                <div className="font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  目的・成分別の整理
                </div>
                <div className="text-sm text-gray-500">あなたの目標に合わせて、中立的な立場から情報を整理しています。</div>
              </li>
              <li className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                <div className="font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  断定しない誠実さ
                </div>
                <div className="text-sm text-gray-500">「最強」「絶対」という言葉は使いません。可能性とリスクを公平に提示します。</div>
              </li>
            </ul>
            <p>
              あくまで「学べる場所」として、成分の質や科学的根拠、そして現場での扱いやすさを中心にまとめています。
            </p>
          </section>

          {/* Closing Section */}
          <section className="pt-12 border-t border-gray-100">
            <div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">探究に終わりはありません</h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  私たちの「研究」はまだ途中です。サプリメントの世界は常に新しい発見があり、昨日の常識が今日の疑問に変わることもあります。
                </p>
                <p className="mb-8 opacity-90 leading-relaxed">
                  答えを一方的に押し付けるのではなく、皆さんと一緒に「自分の体に最適なものは何か」を考え、探究し続けられる場所になれば嬉しいです。
                </p>
                <div className="text-sm font-bold tracking-widest uppercase opacity-70">
                  筋トレサプリ研究室 運営チーム一同
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
          >
            ← 研究室のトップへ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
