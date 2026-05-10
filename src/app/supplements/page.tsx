"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products, productCategories } from "@/data/products";

export default function SupplementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "すべて") return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Header Section */}
      <div className="max-w-3xl mb-16">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">参考サプリメント</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">参考サプリメント資料</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            当研究室では特定の製品を推奨・販売しているわけではありませんが、
            「どの製品を選べばいいか」というご質問を多くいただくため、
            成分構成やコストパフォーマンスの観点から、選定の参考となる製品を一覧にまとめています。
          </p>
          <p className="text-sm bg-gray-50 border-l-4 border-gray-200 p-4 rounded-r-xl italic">
            ※掲載している製品の中には、研究員が実際に愛用しているものも含まれます。
            本ページからのリンクを通じて購入いただいた場合、その収益は当研究室の活動維持と最新研究の調査費に充てられます。
          </p>
        </div>
      </div>

      {/* Research Criteria Section */}
      <div className="mb-16 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <span className="text-primary">📋</span>
          研究室で見ているプロテインの判断基準
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                価格の相場感
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                現在は1kgあたり5,500円前後が平均的な相場だと考えています。円安や原材料費の影響で変動はありますが、この数値を基準にコスパを判断しています。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                タンパク質含有量と質
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                1杯あたり20g前後が目安ですが、数字だけでは判断しません。安価なアミノ酸を追加して数値を嵩増ししている製品もあるため、原料の信頼性を重視します。
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                品質管理体制
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                自社工場の有無や「インフォームドチョイス」等の第三者認証をチェックします。重金属や異物混入のリスク管理が公開されているものは安心材料になります。
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                追加成分への考え方
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ビタミンやアミノ酸の追加訴求は最優先しません。プロテインはタンパク質補給が主目的。必要ならマルチビタミンを別で摂る方が調整がシンプルです。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-2 whitespace-nowrap">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat 
                  ? "bg-gray-900 text-white shadow-lg" 
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white border border-gray-100 rounded-[2rem] overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500">
            {/* Image Area */}
            <div className="h-48 bg-gray-50 flex items-center justify-center relative border-b border-gray-50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent opacity-50"></div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
              {product.isPersonalUse && (
                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  RESEARCHER'S CHOICE
                </div>
              )}
              <div className="absolute bottom-4 left-6 z-10">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/80 backdrop-blur px-2 py-0.5 rounded">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                {product.comment}
              </p>

              <div className="space-y-6 mb-8">
                {/* Points */}
                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    選定のポイント
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.points.map(p => (
                      <span key={p} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-lg border border-gray-100">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target */}
                <div>
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    向いている人
                  </h4>
                  <p className="text-sm text-gray-700 font-medium">
                    {product.target}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={`mt-auto pt-6 border-t border-gray-50 grid ${product.rakutenUrl ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
                <a 
                  href={product.amazonUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#FF9900]/10 text-[#FF9900] text-xs font-bold rounded-xl hover:bg-[#FF9900] hover:text-white transition-all border border-[#FF9900]/20"
                >
                  <span>Amazonで見る</span>
                  <span className="text-lg">🛒</span>
                </a>
                {product.rakutenUrl && (
                  <a 
                    href={product.rakutenUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#BF0000]/10 text-[#BF0000] text-xs font-bold rounded-xl hover:bg-[#BF0000] hover:text-white transition-all border border-[#BF0000]/20"
                  >
                    <span>楽天で見る</span>
                    <span className="text-lg">🛍️</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-20 p-10 bg-gray-50 rounded-[3rem] text-center max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-4">製品選定のポリシー</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          当研究室の参考製品は、価格の安さだけではなく、原料の透明性、第三者機関によるテスト、
          および科学的エビデンスに基づいた配合量を満たしているかを基準に選定しています。
          特定のブランドへの忖度は一切ありません。
        </p>
        <p className="text-xs text-gray-400">
          ※各製品の最新価格や在庫状況については、リンク先の販売サイトにてご確認ください。
        </p>
      </div>
    </div>
  );
}
