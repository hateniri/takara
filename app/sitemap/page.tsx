import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サイトマップ | 株式会社宝探し",
  description: "株式会社宝探しウェブサイトの全ページ一覧",
};

const siteStructure = [
  {
    section: "メインコンテンツ",
    pages: [
      { href: "/", label: "ホーム" },
      { href: "/exploration", label: "探索記録" },
      { href: "/insight", label: "考察・研究" },
      { href: "/map", label: "調査地点マップ" },
    ],
  },
  {
    section: "会員向け",
    pages: [
      { href: "/support", label: "サポートメンバーになる" },
      { href: "/member", label: "会員サイト（要認証）" },
    ],
  },
  {
    section: "組織情報",
    pages: [
      { href: "/company", label: "会社概要" },
      { href: "/team", label: "メンバー" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    section: "法的情報",
    pages: [
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
      { href: "/cookies", label: "Cookieポリシー" },
      { href: "/law", label: "特定商取引法に基づく表記" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-12">
          サイトマップ
        </h1>

        <div className="space-y-12">
          {siteStructure.map((section) => (
            <div key={section.section}>
              <h2 className="font-mincho text-2xl text-takara-gold mb-6">
                {section.section}
              </h2>
              <ul className="space-y-3">
                {section.pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="font-avenir text-takara-cream/80 hover:text-takara-gold transition-colors flex items-center"
                    >
                      <span className="text-takara-gold/50 mr-3">→</span>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
          <p className="font-avenir text-sm text-takara-cream/60">
            一部のページは会員限定コンテンツです。
            アクセスには適切な認証が必要となります。
          </p>
        </div>
      </div>
    </div>
  );
}