import Link from "next/link";
import { purposes } from "@/data/supplements";

export default function PurposesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">目的からサプリ成分を探す</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          「筋肉を大きくしたい」「疲れを取りたい」など、あなたの今の目的に関連する成分をピックアップしました。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {purposes.map((p) => (
          <Link 
            key={p.slug} 
            href={`/purposes/${p.slug}`}
            className="flex flex-col p-8 bg-white border border-gray-200 rounded-3xl hover:border-primary hover:shadow-xl transition-all card-hover group"
          >
            <span className="text-4xl mb-6 group-hover:scale-110 transition-transform w-fit">{p.icon}</span>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{p.name}</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-grow">
              {p.description}
            </p>
            <p className="text-sm font-bold text-primary flex items-center gap-2">
              成分を見る <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
