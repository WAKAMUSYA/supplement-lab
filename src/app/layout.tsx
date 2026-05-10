import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoJp = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-jp" });

export const metadata: Metadata = {
  title: "筋トレサプリ研究室 | エビデンスに基づくサプリメント図鑑",
  description: "クレアチン、プロテイン、カフェインなど、筋トレサプリの成分を科学的根拠に基づいて解説する研究室風メディア。初心者にも分かりやすく、中立的な立場から情報をお届けします。",
  keywords: "筋トレ, サプリメント, エビデンス, クレアチン, プロテイン, EAA, ビタミン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoJp.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 glass border-b border-gray-200">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold flex items-center gap-2">
              <span className="text-primary text-2xl">🔬</span>
              <span className="gradient-text">筋トレサプリ研究室</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/ingredients" className="hover:text-primary transition-colors">成分一覧</Link>
              <Link href="/purposes" className="hover:text-primary transition-colors">目的から探す</Link>
              <Link href="/articles" className="hover:text-primary transition-colors">読み物</Link>
              <Link href="/faq" className="hover:text-primary transition-colors">よくある質問</Link>
              <Link href="/about" className="hover:text-primary transition-colors">研究室について</Link>
            </nav>
            <div className="md:hidden">
              {/* Mobile Menu Icon Placeholder */}
              <button className="p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Link href="/" className="text-lg font-bold gradient-text">筋トレサプリ研究室</Link>
              <p className="text-sm text-gray-500 mt-2">エビデンスに基づいた中立的なサプリメント図鑑</p>
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-600 mb-8">
              <Link href="/ingredients" className="hover:text-primary">成分一覧</Link>
              <Link href="/purposes" className="hover:text-primary">目的別</Link>
              <Link href="/articles" className="hover:text-primary">読み物</Link>
              <Link href="/faq" className="hover:text-primary">FAQ</Link>
              <Link href="/about" className="hover:text-primary">研究室について</Link>
            </div>
            <div className="max-w-2xl mx-auto px-4 py-4 bg-yellow-50 border border-yellow-100 rounded-lg text-xs text-yellow-800 mb-8">
              <p className="font-bold mb-1">【免責事項】</p>
              <p>当サイトの情報は、科学的根拠に基づいた一般的な知識の提供を目的としており、特定の製品の購入を勧誘したり、医学的アドバイスを提供したりするものではありません。サプリメントはあくまで食事・睡眠・トレーニングの補助であり、健康状態や体質に合わせて適切にご利用ください。疾患がある場合や薬を服用中の場合は、必ず医師にご相談ください。</p>
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Muscle Training Supplement Lab. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
