import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center">筋トレサプリ研究室について</h1>
      
      <div className="prose prose-blue max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">コンセプト</h2>
          <p className="text-gray-700 leading-relaxed">
            サプリメント業界は、時に過剰な期待を煽る広告や、根拠の薄いランキング情報で溢れています。
            「筋トレサプリ研究室」は、そのような現状に対し、科学的エビデンス（証拠）に基づく中立的な情報を提供するために設立されました。
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-4">私たちが大切にしていること</h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>
              <strong>中立性：</strong> 特定のメーカーや製品を不当に推奨することはありません。
            </li>
            <li>
              <strong>エビデンス重視：</strong> 査読済みの論文や国際的なスポーツ栄養学会の見解をベースに解説します。
            </li>
            <li>
              <strong>土台の尊重：</strong> サプリメントよりも「食事・睡眠・トレーニング」が重要であることを常に強調します。
            </li>
            <li>
              <strong>誠実な表現：</strong> 「必ず効く」といった断定は避け、「可能性が期待できる」といった誠実な表現を心がけます。
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-xl font-bold mb-4">運営メッセージ</h2>
          <p className="text-gray-600 text-sm italic">
            「サプリメントを正しく選べるようになることは、自分の体と向き合うことでもあります。
            賢く、安全に、そして効果的にサプリメントを活用し、あなたの理想の体作りをサポートできれば幸いです。」
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-primary font-bold hover:underline">
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
