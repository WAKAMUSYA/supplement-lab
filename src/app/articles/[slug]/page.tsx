import { articles } from "@/data/articles";
import { supplements } from "@/data/supplements";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedIngredient = article.relatedIngredientSlug 
    ? supplements.find(s => s.slug === article.relatedIngredientSlug)
    : null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/articles" className="hover:text-primary">読み物</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium line-clamp-1">{article.title}</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
            {article.category}
          </span>
          <span className="text-xs text-gray-400">{article.publishDate}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="prose prose-blue max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
            {/* Split content by newlines and render simple markdown-like structure */}
            {article.content.split('\n').map((line, index) => {
              // Helper to render inline bold
              const renderLineContent = (text: string) => {
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
              };

              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2 border-gray-100">{renderLineContent(line.replace('## ', ''))}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-gray-800">{renderLineContent(line.replace('### ', ''))}</h3>;
              }
              if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                return <li key={index} className="ml-4 text-gray-700 mb-2">{renderLineContent(line.replace(/^[-*]\s/, ''))}</li>;
              }
              if (line.trim().match(/^\d+\.\s/)) {
                return <li key={index} className="ml-4 text-gray-700 mb-2 list-decimal">{renderLineContent(line.replace(/^\d+\.\s/, ''))}</li>;
              }
              if (line.trim() === '') return <br key={index} />;
              return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{renderLineContent(line)}</p>;
            })}
          </div>

          <div className="mt-20 p-8 bg-gray-50 rounded-3xl border border-gray-200">
            <h3 className="text-lg font-bold mb-4">この記事の著者</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">🔬</div>
              <div>
                <p className="font-bold text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-500">エビデンスに基づいた客観的な情報提供を心がけています。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 space-y-8">
            {relatedIngredient && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">関連する成分</h3>
                <Link href={`/ingredients/${relatedIngredient.slug}`} className="group">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">{relatedIngredient.name}</h4>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{relatedIngredient.overview}</p>
                  <span className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:underline">
                    成分の詳細を見る →
                  </span>
                </Link>
              </div>
            )}

            <div className="bg-blue-900 text-white rounded-3xl p-6">
              <h3 className="font-bold mb-4">研究室からのヒント</h3>
              <p className="text-sm text-blue-100 leading-relaxed italic">
                サプリメントの効果を最大限に引き出すのは、常に「基本の徹底」です。この記事を参考に、自分に合った最適なプランを組み立ててください。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-gray-100 flex justify-center">
        <Link href="/articles" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2">
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}
