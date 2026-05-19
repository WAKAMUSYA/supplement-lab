import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoJp = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-jp" });

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.name,
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/ogp.png"],
    creator: "@supplement_lab",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ja" className={`${inter.variable} ${notoJp.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.name,
              "url": siteConfig.url,
              "logo": `${siteConfig.url}/icon.png`,
              "description": siteConfig.description,
              "sameAs": [
                siteConfig.links.twitter
              ]
            })
          }}
        />
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Link href="/" className="text-lg font-bold gradient-text">筋トレサプリ研究室</Link>
              <p className="text-sm text-gray-500 mt-2">エビデンスに基づいた中立的なサプリメント図鑑</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-600 mb-8">
              <Link href="/ingredients" className="hover:text-primary transition-colors">成分一覧</Link>
              <Link href="/purposes" className="hover:text-primary transition-colors">目的から探す</Link>
              <Link href="/stacks" className="hover:text-primary transition-colors">スタックガイド</Link>
              <Link href="/articles" className="hover:text-primary transition-colors">読み物</Link>
              <Link href="/supplements" className="hover:text-primary transition-colors">参考サプリ</Link>
              <Link href="/faq" className="hover:text-primary transition-colors">よくある質問</Link>
              <Link href="/about" className="hover:text-primary transition-colors">研究室について</Link>
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
