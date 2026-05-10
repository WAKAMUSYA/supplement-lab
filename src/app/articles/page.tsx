"use client";

import { useState, useMemo } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["すべて", "基礎知識", "栄養学", "トレーニング", "成分検証", "比較解説", "最新トレンド"];

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === "すべて" || article.category === selectedCategory;
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">読み物・特集</h1>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          サプリメントの最新研究や、効率的な活用方法を深掘りする特集記事です。
          エビデンスに基づき、あなたのボディメイクを科学的にサポートします。
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 mb-12 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8 items-end">
          <div className="flex-1 w-full space-y-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">記事を検索</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="キーワードを入力..." 
                className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-4 top-3 text-gray-300">🔍</span>
            </div>
          </div>
          
          <div className="w-full lg:w-auto space-y-3">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">カテゴリー</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedCategory === cat 
                      ? "bg-gray-900 text-white border-gray-900 shadow-lg" 
                      : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-medium">
          該当記事: <span className="text-gray-900 font-bold">{filteredArticles.length}</span> 件
        </p>
        {(selectedCategory !== "すべて" || searchQuery !== "") && (
          <button 
            onClick={() => { setSelectedCategory("すべて"); setSearchQuery(""); }}
            className="text-xs font-bold text-primary hover:underline"
          >
            フィルターをクリア
          </button>
        )}
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <article key={article.id} className="flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all card-hover group animate-in fade-in duration-500">
              <div className="h-48 relative">
                <CategoryThumbnail category={article.category} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-blue-600 text-[10px] font-bold rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs text-gray-400 mb-3 flex items-center gap-2 font-medium">
                  <span>{article.publishDate}</span>
                  <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                  <span>{article.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors">
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
                    詳しく読む 
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-32 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">条件に一致する記事が見つかりませんでした。</p>
        </div>
      )}
    </div>
  );
}
