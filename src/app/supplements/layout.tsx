import { Metadata } from "next";

export const metadata: Metadata = {
  title: "参考サプリメント資料",
  description: "成分の質、コストパフォーマンス、信頼性の観点から厳選した、選定の参考となるサプリメント製品の一覧です。特定のブランドへの忖度はなく、中立的な視点でまとめています。",
};

export default function SupplementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
