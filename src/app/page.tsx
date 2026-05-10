import Image from "next/image";
import Link from "next/link";
import { supplements, purposes } from "@/data/supplements";
import { articles } from "@/data/articles";

export default function Home() {
  const popularIngredients = supplements.filter(s => 
    ['creatine', 'protein', 'caffeine', 'citrulline'].includes(s.id)
  );

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="Supplement Lab" 
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            成分を知れば、<br className="md:hidden" />
            <span className="text-blue-400">サプリ</span>はもっと面白くなる。
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            「筋トレサプリ研究室」は、ランキングや煽り文句に頼らず、エビデンスに基づいた中立的な視点でサプリメント成分を解説するオンライン図鑑です。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ingredients" 
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all transform hover:scale-105"
            >
              成分一覧を見る
            </Link>
            <Link 
              href="/purposes" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-bold transition-all transform hover:scale-105"
            >
              目的から探す
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-blue-100">
          <div className="text-4xl md:text-6xl">🔬</div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">筋トレサプリ研究室とは</h2>
            <p className="text-gray-700 leading-relaxed">
              巷にあふれる「飲むだけで筋肉がつく」「最強のサプリランキング」といった情報ではなく、
              一つひとつの成分にフォーカスし、科学的なエビデンス（証拠）に基づいて、その役割や摂取方法を整理しています。
              初心者が自分の体と目的に合ったものを選べるようになるための「学びの場」を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Popular Ingredients */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">人気・定番の成分</h2>
            <p className="text-gray-500 text-sm">まず知っておきたい、エビデンスレベルの高い成分</p>
          </div>
          <Link href="/ingredients" className="hidden md:flex text-primary font-medium hover:underline items-center gap-1">
            すべて見る <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularIngredients.map((item) => (
            <Link 
              key={item.slug} 
              href={`/ingredients/${item.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all card-hover flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${
                  item.evidenceLevel === '高' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  エビデンス: {item.evidenceLevel}
                </span>
                <span className="text-gray-300 group-hover:text-primary transition-colors">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed flex-grow">
                {item.overview}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                {item.mainPurposes.slice(0, 2).map(p => (
                  <span key={p} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    #{p}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Link href="/ingredients" className="flex justify-center items-center gap-2 py-4 border border-gray-200 rounded-xl text-primary font-bold">
            すべての成分を見る <span>→</span>
          </Link>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 bg-gray-50 rounded-[2rem] md:rounded-[3rem]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">目的から探す</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            あなたの現在の目標に最適な成分をチェックしましょう。
            各カテゴリーをクリックすると、推奨される成分とその理由を確認できます。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.slice(0, 4).map((purpose) => (
            <Link 
              key={purpose.slug} 
              href={`/purposes/${purpose.slug}`}
              className="flex flex-col p-8 bg-white rounded-3xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group card-hover"
            >
              <span className="text-4xl mb-6 group-hover:scale-110 transition-transform w-fit">{purpose.icon}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{purpose.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                {purpose.description}
              </p>
            </Link>
          ))}
          <Link 
            href="/purposes"
            className="flex flex-col items-center justify-center p-8 bg-blue-600 rounded-3xl text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 group"
          >
            <span className="text-2xl font-bold mb-2">すべての目的を見る</span>
            <span className="text-blue-200 group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">読み物・特集</h2>
            <p className="text-gray-500">サプリメントをより深く知るための専門コラム</p>
          </div>
          <Link href="/articles" className="hidden md:flex text-primary font-medium hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...articles].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()).slice(0, 6).map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`} className="group">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all card-hover h-full flex flex-col overflow-hidden">
                <div className={`h-4 border-b border-gray-50 bg-gradient-to-r ${
                  article.category === '基礎知識' ? 'from-blue-500 to-blue-300' :
                  article.category === '栄養学' ? 'from-green-500 to-green-300' :
                  article.category === 'トレーニング' ? 'from-orange-500 to-red-400' :
                  article.category === '成分検証' ? 'from-purple-500 to-indigo-400' :
                  article.category === '比較解説' ? 'from-teal-500 to-cyan-400' :
                  'from-gray-700 to-gray-500'
                }`}></div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4 block">{article.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-grow">{article.excerpt}</p>
                  <div className="text-xs text-gray-400 pt-4 border-t border-gray-50">
                    {article.publishDate} • {article.author}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Link href="/articles" className="flex justify-center items-center gap-2 py-4 border border-gray-200 rounded-xl text-primary font-bold">
            すべての記事を見る <span>→</span>
          </Link>
        </div>
      </section>

      {/* Reference Supplements Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative group border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/30 transition-colors"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -ml-24 -mb-24"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-bold tracking-widest text-blue-300 mb-6 uppercase">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Recommendation Guide
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                どの製品を選べばいいか、<br className="md:hidden" />
                迷っている方へ
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                「成分はわかったけれど、結局どれを買えばいいの？」という声に応え、
                成分の質・コストパフォーマンス・信頼性の観点から、当研究室が選定した参考資料をまとめています。
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link 
                  href="/supplements" 
                  className="px-10 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
                >
                  参考サプリメントを見る
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="text-8xl md:text-9xl opacity-20 transform -rotate-12">📦</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl drop-shadow-2xl">💊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section className="container mx-auto px-4">
        <div className="bg-blue-50 border border-blue-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">疑問は解決しましたか？</h2>
          <p className="text-blue-800 opacity-70 mb-8 max-w-lg mx-auto text-sm md:text-base">
            サプリメントに関する基本的な疑問から、マニアックな質問までをまとめたFAQページをご用意しています。
          </p>
          <Link 
            href="/faq" 
            className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-200"
          >
            <span>よくある質問 (FAQ) を見る</span>
            <span className="text-xl">?</span>
          </Link>
        </div>
      </section>

      {/* Core Principle Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center border-l-4 border-primary pl-8 py-4">
          <p className="text-xl md:text-2xl font-bold text-gray-800 italic leading-relaxed">
            「サプリメントは、正しい食事・十分な睡眠・適切なトレーニングの補助にすぎません。」
          </p>
          <p className="mt-4 text-gray-500 text-sm">
            当研究室では、この3つの土台を何よりも大切に考えています。
          </p>
        </div>
      </section>
    </div>
  );
}
