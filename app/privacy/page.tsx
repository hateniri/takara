import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 株式会社宝探し",
  description: "株式会社宝探しのプライバシーポリシーについて",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-8">
          プライバシーポリシー
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="font-avenir text-takara-cream/70 mb-8">
            最終更新日: 2025年1月23日
          </p>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              1. 個人情報の取り扱いについて
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              株式会社宝探し（以下「当社」）は、お客様の個人情報を適切に保護し、管理することを重要な責務と考えています。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              2. 収集する情報
            </h2>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• アクセスキー認証時の認証情報</li>
              <li>• ウェブサイト利用時のアクセスログ</li>
              <li>• お問い合わせ時にご提供いただく情報</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              3. 情報の利用目的
            </h2>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• 会員限定コンテンツの提供</li>
              <li>• サービスの改善・開発</li>
              <li>• お問い合わせへの対応</li>
              <li>• 法令に基づく対応</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              4. 第三者への提供
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              5. Cookieの使用
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当サイトでは、より良いサービスを提供するためCookieを使用しています。
              詳細は<a href="/cookies" className="text-takara-gold hover:underline">Cookieポリシー</a>をご確認ください。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              6. お問い合わせ
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              本ポリシーに関するお問い合わせは、
              <a href="/contact" className="text-takara-gold hover:underline">お問い合わせページ</a>
              よりご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}