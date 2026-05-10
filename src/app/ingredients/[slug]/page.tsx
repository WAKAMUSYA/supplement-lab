import { supplements } from "@/data/supplements";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return supplements.map((s) => ({
    slug: s.slug,
  }));
}

export default async function IngredientPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = supplements.find((s) => s.slug === slug);

  if (!item) {
    notFound();
  }

  const related = supplements.filter(s => item.relatedSupplements.includes(s.slug));

  return (
    <article className="container mx-auto px-4 py-12 max-w-5xl">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/ingredients" className="hover:text-primary">成分一覧</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{item.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <header>
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-1.5 text-xs font-bold rounded-full ${
                item.evidenceLevel === '高' ? 'bg-green-100 text-green-700 border border-green-200' : 
                item.evidenceLevel === '中' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 
                'bg-gray-100 text-gray-700 border border-gray-200'
              }`}>
                エビデンスレベル: {item.evidenceLevel}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{item.name}</h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              {item.overview}
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-blue-500">■</span> 期待できること
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-primary font-bold">✓</span>
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-8">研究データに基づく摂取ガイド</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">摂取量の目安</h3>
                <p className="text-gray-800 font-medium">{item.dosage}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">摂取タイミング</h3>
                <p className="text-gray-800 font-medium">{item.timing}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">向いている人</h3>
                <p className="text-gray-800 font-medium">{item.targetAudience}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-red-500">■</span> 注意点
            </h2>
            <ul className="space-y-3">
              {item.precautions.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 bg-red-50 p-4 rounded-lg border border-red-100">
                  <span className="text-red-500">⚠️</span>
                  {p}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-yellow-400">💡</span> よくある誤解
            </h2>
            <div className="space-y-4">
              {item.misconceptions.map((m, i) => (
                <p key={i} className="text-blue-100 italic leading-relaxed">
                  「{m}」
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="sticky top-24 space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">主な目的</h3>
              <div className="flex flex-wrap gap-2">
                {item.mainPurposes.map(p => (
                  <span key={p} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">関連成分</h3>
              <div className="space-y-4">
                {related.map(r => (
                  <Link key={r.slug} href={`/ingredients/${r.slug}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">{r.name}</p>
                      <p className="text-[10px] text-gray-400 line-clamp-1">{r.overview}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="font-bold text-primary mb-2">研究室のメモ</h3>
              <p className="text-xs text-blue-800 leading-relaxed">
                この成分はエビデンスが非常に豊富ですが、体感には個人差があります。まずは推奨量の範囲内で試し、体調の変化を観察することをお勧めします。
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
