import { Metadata } from "next";

export const metadata: Metadata = {
  title: "成分一覧",
  description: "クレアチン、プロテイン、BCAAなど、30種類以上のサプリメント成分について、エビデンスレベルや効果、摂取方法を詳しく解説しています。",
  alternates: {
    canonical: "/ingredients",
  },
};

import { BreadcrumbJsonLd } from "@/components/JsonLd";

export default function IngredientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "ホーム", item: "/" },
    { name: "成分一覧", item: "/ingredients" },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {children}
    </>
  );
}
