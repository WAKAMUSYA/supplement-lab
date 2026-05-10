import Link from "next/link";
import { supplements } from "@/data/supplements";

export default function IngredientsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">成分一覧</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">成分一覧</h1>
        <p className="text-gray-600 max-w-2xl">
          現在、当研究室で詳しく解説しているサプリメント成分の一覧です。
          エビデンスレベルや目的に応じて比較検討の材料としてお使いください。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {supplements.map((item) => (
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
                  エビデンス: {item.evidenceLevel}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                {item.overview}
              </p>
              
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">主な目的</span>
                  <div className="flex flex-wrap gap-2">
                    {item.mainPurposes.map(p => (
                      <span key={p} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-sm font-bold text-primary">
                <span>詳細を見る</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
