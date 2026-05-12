import { faqs } from "@/data/faq";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくあるご質問 (FAQ)",
  description: "サプリメントの選び方、飲み方、安全性など、筋トレサプリに関するよくある疑問にエビデンスベースでお答えします。",
  alternates: {
    canonical: "/faq",
  },
};

import { BreadcrumbJsonLd } from "@/components/JsonLd";

export default function FAQPage() {
  const categories = ['基本', '摂取方法', '安全性', '効果'] as const;

  const breadcrumbItems = [
    { name: "ホーム", item: "/" },
    { name: "よくある質問", item: "/faq" },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">よくあるご質問 (FAQ)</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          サプリメントの利用にあたって、初心者の方からよく寄せられる疑問にお答えします。
          解決しない場合は、各成分の詳細ページもあわせてご確認ください。
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((cat) => (
          <section key={cat}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl font-bold text-blue-900 bg-blue-50 px-4 py-1 rounded-lg border border-blue-100">
                {cat}に関する質問
              </h2>
              <div className="h-px bg-gray-100 flex-grow"></div>
            </div>
            
            <div className="grid gap-6">
              {faqs.filter(f => f.category === cat).map((faq) => (
                <div key={faq.id} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4 items-start mb-4">
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex gap-4 items-start pl-12 border-l-2 border-blue-50">
                    <p className="text-gray-600 leading-relaxed italic">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 p-10 bg-gray-900 text-white rounded-[2.5rem] text-center">
        <h3 className="text-2xl font-bold mb-4">疑問は解決しましたか？</h3>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          特定の成分についてさらに詳しく知りたい場合は、成分図鑑の個別ページをご覧ください。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/ingredients" className="px-8 py-3 bg-primary hover:bg-blue-600 rounded-full font-bold transition-all">
            成分図鑑を見る
          </Link>
          <Link href="/articles" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-bold transition-all border border-white/10">
            特集記事を読む
          </Link>
        </div>
      </div>
    </div>
  );
}
