import { Metadata } from "next";

export const metadata: Metadata = {
  title: "読み物・特集",
  description: "サプリメントの最新研究や、効率的な活用方法を深掘りする専門コラム。エビデンスに基づき、あなたのボディメイクを科学的にサポートします。",
  alternates: {
    canonical: "/articles",
  },
};

import { BreadcrumbJsonLd } from "@/components/JsonLd";

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "ホーム", item: "/" },
    { name: "読み物", item: "/articles" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {children}
    </>
  );
}
