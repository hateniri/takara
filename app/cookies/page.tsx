import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookieポリシー | 株式会社宝探し",
  description: "株式会社宝探しのCookie使用に関する方針",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-8">
          Cookieポリシー
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="font-avenir text-takara-cream/70 mb-8">
            最終更新日: 2025年1月23日
          </p>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              1. Cookieとは
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              Cookieとは、ウェブサイトを訪問したときに、ブラウザに保存される小さなデータファイルです。
              これにより、ウェブサイトはユーザーの設定を記憶し、より良い体験を提供することができます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              2. Cookieの使用目的
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              当サイトでは、以下の目的でCookieを使用しています：
            </p>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• 会員認証の維持（アクセスキー認証状態の保持）</li>
              <li>• ユーザーの設定やプリファレンスの保存</li>
              <li>• サイトの利用状況の分析と改善</li>
              <li>• セキュリティの向上</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              3. 使用するCookieの種類
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-mincho text-xl text-takara-cream mb-2">
                  必須Cookie
                </h3>
                <p className="font-avenir text-takara-cream/80">
                  ウェブサイトの基本的な機能を有効にするために必要です。
                  これらのCookieなしでは、サイトは正常に機能しません。
                </p>
              </div>

              <div>
                <h3 className="font-mincho text-xl text-takara-cream mb-2">
                  機能性Cookie
                </h3>
                <p className="font-avenir text-takara-cream/80">
                  ユーザーの選択（言語設定、テーマなど）を記憶し、
                  パーソナライズされた体験を提供します。
                </p>
              </div>

              <div>
                <h3 className="font-mincho text-xl text-takara-cream mb-2">
                  分析Cookie
                </h3>
                <p className="font-avenir text-takara-cream/80">
                  ウェブサイトの利用状況を理解し、改善するために使用します。
                  これらのCookieは匿名化された情報を収集します。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              4. Cookieの管理
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              ほとんどのブラウザでは、Cookieの受け入れを管理することができます。
              ブラウザの設定から、以下の操作が可能です：
            </p>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• すべてのCookieを受け入れる</li>
              <li>• すべてのCookieを拒否する</li>
              <li>• Cookieが設定される前に通知を受ける</li>
              <li>• 既存のCookieを削除する</li>
            </ul>
            <p className="font-avenir text-takara-cream/80 mt-4">
              ただし、Cookieを無効にすると、本サービスの一部機能が正常に動作しない可能性があります。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              5. 第三者Cookie
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当サイトでは、分析ツールやソーシャルメディアプラグインなど、
              第三者サービスからのCookieを使用する場合があります。
              これらの第三者Cookieは、それぞれのプライバシーポリシーに従って管理されます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              6. ポリシーの更新
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当社は、必要に応じて本Cookieポリシーを更新することがあります。
              重要な変更がある場合は、ウェブサイト上で通知いたします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              7. お問い合わせ
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              Cookieの使用に関するご質問は、
              <a href="/contact" className="text-takara-gold hover:underline">お問い合わせページ</a>
              よりご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}