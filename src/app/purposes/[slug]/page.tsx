import { supplements, purposes } from "@/data/supplements";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return purposes.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PurposePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const purpose = purposes.find((p) => p.slug === slug);

  if (!purpose) {
    notFound();
  }

  // Filter supplements by purpose name (matching strings in mainPurposes)
  const filteredSupplements = supplements.filter(s => 
    s.mainPurposes.includes(purpose.name)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/purposes" className="hover:text-primary">目的一覧</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{purpose.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-16 p-8 bg-blue-50 rounded-3xl border border-blue-100">
        <div className="text-6xl">{purpose.icon}</div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">「{purpose.name}」におすすめの成分</h1>
          <p className="text-blue-800 opacity-80 leading-relaxed">
            {purpose.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSupplements.length > 0 ? (
          filteredSupplements.map((item) => (
            <Link 
              key={item.slug} 
              href={`/ingredients/${item.slug}`}
              className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all card-hover"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.name}</h2>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    item.evidenceLevel === '高' ? 'bg-green-100 text-green-700' : 
                    item.evidenceLevel === '中' ? 'bg-blue-100 text-blue-700' : 
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.evidenceLevel}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                  {item.overview}
                </p>
                <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-sm font-bold text-primary">
                  <span>詳しく学ぶ</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500">
            現在、この目的に関連する成分データは準備中です。
          </div>
        )}
      </div>

      <section className="mt-20 max-w-2xl mx-auto p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
        <h3 className="font-bold mb-4">お探しの成分が見つかりませんか？</h3>
        <p className="text-sm text-gray-600 mb-6">
          筋トレサプリ研究室では、今後も新しいエビデンスに基づき成分データを追加していく予定です。
        </p>
        <Link href="/purposes" className="text-primary font-bold hover:underline">
          すべての目的を見る
        </Link>
      </section>

      <div className="mt-12 text-center">
        <Link href="/purposes" className="text-gray-500 hover:text-primary transition-colors text-sm">
          ← 目的一覧に戻る
        </Link>
      </div>
    </div>
  );
}
