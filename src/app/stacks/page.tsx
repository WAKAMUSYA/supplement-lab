import Link from "next/link";
import { stacks } from "@/data/stacks";

export default function StacksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">スタックガイド</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">スタックガイド</h1>
        <p className="text-gray-600 max-w-2xl">
          単体でも効果的ですが、組み合わせることで相乗効果（スタック）を発揮する成分があります。
          当研究室が推奨する、目的別の「最強の組み合わせ」をご紹介します。
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {stacks.map((stack) => (
          <div key={stack.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col">
            <div className="p-8 md:p-10 flex-grow">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{stack.title}</h2>
              </div>
              
              <p className="text-gray-500 mb-8 leading-relaxed">
                {stack.description}
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">スタック構成成分</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stack.items.map((item) => (
                    <Link 
                      key={item.ingredientSlug} 
                      href={`/ingredients/${item.ingredientSlug}`}
                      className="group flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-primary transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                        +
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">{item.name}</p>
                        <p className="text-[11px] text-gray-400 leading-tight mt-0.5">{item.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-2">
                    🎯 対象となる人
                  </h4>
                  <p className="text-sm text-gray-600">{stack.target}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-2">
                    💡 このスタックのメリット
                  </h4>
                  <ul className="space-y-2">
                    {stack.pros.map((pro, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 md:px-10 border-t border-primary/10">
              <div>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">摂取の目安</p>
                <p className="text-sm font-medium text-gray-700">{stack.usage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-gray-900 rounded-[3rem] text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">スタックを試してみましょう</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            まずは「王道のバルクアップスタック」から始めるのがおすすめです。
            自分のコンディションに合わせて、少しずつ調整していきましょう。
          </p>
          <Link 
            href="/ingredients" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all shadow-xl"
          >
            <span>全ての成分を詳しく見る</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
