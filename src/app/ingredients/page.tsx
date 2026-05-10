"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { supplements, purposes } from "@/data/supplements";

export default function IngredientsPage() {
  const [selectedEvidence, setSelectedEvidence] = useState<string>("すべて");
  const [selectedPurpose, setSelectedPurpose] = useState<string>("すべて");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSupplements = useMemo(() => {
    return supplements.filter((item) => {
      const matchesEvidence = selectedEvidence === "すべて" || item.evidenceLevel === selectedEvidence;
      const matchesPurpose = selectedPurpose === "すべて" || item.mainPurposes.includes(selectedPurpose);
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.overview.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesEvidence && matchesPurpose && matchesSearch;
    });
  }, [selectedEvidence, selectedPurpose, searchQuery]);

  const evidenceLevels = ["すべて", "高", "中", "低"];
  const purposeList = ["すべて", ...purposes.map(p => p.name)];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-primary">ホーム</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">成分一覧</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">成分一覧</h1>
        <p className="text-gray-600 max-w-2xl">
          現在、当研究室で詳しく解説している全30種類のサプリメント成分です。
          エビデンスレベルや目的に応じてフィルタリングして探すことができます。
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 mb-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Search */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">キーワード検索</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="成分名やキーワード..." 
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-4 top-3 text-gray-300 text-lg">🔍</span>
            </div>
          </div>

          {/* Evidence Level */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">エビデンスレベル</label>
            <div className="flex flex-wrap gap-2">
              {evidenceLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedEvidence(level)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                    selectedEvidence === level 
                      ? "bg-primary text-white border-primary shadow-lg shadow-blue-100" 
                      : "bg-white text-gray-500 border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Purpose */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">主な目的</label>
            <select 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium text-gray-700"
              value={selectedPurpose}
              onChange={(e) => setSelectedPurpose(e.target.value)}
            >
              {purposeList.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          該当件数: <span className="font-bold text-gray-900">{filteredSupplements.length}</span> 件
        </p>
        {(selectedEvidence !== "すべて" || selectedPurpose !== "すべて" || searchQuery !== "") && (
          <button 
            onClick={() => {
              setSelectedEvidence("すべて");
              setSelectedPurpose("すべて");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-primary hover:underline"
          >
            リセットする
          </button>
        )}
      </div>

      {filteredSupplements.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSupplements.map((item) => (
            <Link 
              key={item.slug} 
              href={`/ingredients/${item.slug}`}
              className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all card-hover"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors text-gray-900">{item.name}</h2>
                  <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${
                    item.evidenceLevel === '高' ? 'bg-green-50 text-green-700 border-green-100' : 
                    item.evidenceLevel === '中' ? 'bg-blue-50 text-blue-700 border-blue-100' : 
                    'bg-gray-50 text-gray-700 border-gray-100'
                  }`}>
                    {item.evidenceLevel}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3 h-[4.5rem]">
                  {item.overview}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {item.mainPurposes.slice(0, 3).map(p => (
                        <span key={p} className="text-[10px] bg-gray-50 text-gray-500 px-2 py-1 rounded">
                          #{p}
                        </span>
                      ))}
                      {item.mainPurposes.length > 3 && <span className="text-[10px] text-gray-400">...</span>}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-50 flex justify-between items-center text-sm font-bold text-primary">
                  <span>詳細を確認</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-400">条件に一致する成分が見つかりませんでした。</p>
        </div>
      )}
    </div>
  );
}
