import { Metadata } from "next";

export const metadata: Metadata = {
  title: "読み物・特集",
  description: "サプリメントの最新研究や、効率的な活用方法を深掘りする専門コラム。エビデンスに基づき、あなたのボディメイクを科学的にサポートします。",
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
