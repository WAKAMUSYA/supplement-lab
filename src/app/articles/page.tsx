import Link from "next/link";
import { articles } from "@/data/articles";

function CategoryThumbnail({ category }: { category: string }) {
  const themes: Record<string, { gradient: string; icon: string }> = {
    '基礎知識': { gradient: 'from-blue-500 to-blue-700', icon: '📖' },
    '栄養学': { gradient: 'from-green-500 to-green-700', icon: '🥗' },
    'トレーニング': { gradient: 'from-orange-500 to-red-600', icon: '🏋️' },
    '成分検証': { gradient: 'from-purple-500 to-indigo-700', icon: '🧪' },
    '比較解説': { gradient: 'from-teal-500 to-cyan-600', icon: '⚖️' },
    '最新トレンド': { gradient: 'from-gray-700 to-gray-900', icon: '✨' },
  };

  const theme = themes[category] || { gradient: 'from-gray-400 to-gray-600', icon: '📄' };

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="text-6xl filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500">
        {theme.icon}
      </div>
    </div>
  );
}

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4">読み物・特集</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          サプリメントの最新研究や、効率的な活用方法を深掘りする特集記事です。
          エビデンスに基づき、あなたのボディメイクを科学的にサポートします。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <article key={article.id} className="flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-hover group">
            <div className="h-48 relative">
              <CategoryThumbnail category={article.category} />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold rounded-full shadow-sm">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                <span>{article.publishDate}</span>
                <span>•</span>
                <span>{article.author}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug hover:text-primary transition-colors">
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <Link 
                  href={`/articles/${article.slug}`} 
                  className="text-sm font-bold text-primary flex items-center gap-1 group"
                >
                  記事を読む 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
