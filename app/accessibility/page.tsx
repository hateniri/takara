import { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセシビリティ | 株式会社宝探し",
  description: "株式会社宝探しウェブサイトのアクセシビリティへの取り組み",
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-8">
          アクセシビリティ
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="font-avenir text-takara-cream/70 mb-8">
            株式会社宝探しは、すべての方が当ウェブサイトを快適にご利用いただけるよう、
            アクセシビリティの向上に努めています。
          </p>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              基本方針
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当社は、年齢や身体的条件に関わらず、すべてのユーザーが情報にアクセスし、
              サービスを利用できる環境の提供を目指しています。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              実施している取り組み
            </h2>
            <ul className="font-avenir text-takara-cream/80 space-y-3">
              <li className="flex items-start">
                <span className="text-takara-gold mr-3">•</span>
                <div>
                  <strong>コントラスト比の確保</strong><br />
                  文字と背景のコントラスト比を十分に確保し、読みやすさを向上させています。
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-takara-gold mr-3">•</span>
                <div>
                  <strong>キーボード操作への対応</strong><br />
                  マウスを使用しなくても、キーボードのみでサイト内を移動できます。
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-takara-gold mr-3">•</span>
                <div>
                  <strong>適切な見出し構造</strong><br />
                  スクリーンリーダーでの読み上げに配慮した、論理的な見出し構造を採用しています。
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-takara-gold mr-3">•</span>
                <div>
                  <strong>代替テキストの提供</strong><br />
                  画像には適切な代替テキストを設定し、視覚的情報を文字でも伝えています。
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-takara-gold mr-3">•</span>
                <div>
                  <strong>レスポンシブデザイン</strong><br />
                  様々なデバイスや画面サイズに対応したデザインを採用しています。
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              推奨環境
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              当ウェブサイトは、以下の環境での利用を推奨しています：
            </p>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• 最新版のChrome、Firefox、Safari、Edge</li>
              <li>• JavaScript有効</li>
              <li>• Cookie有効（一部機能）</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              今後の取り組み
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当社は、Web Content Accessibility Guidelines (WCAG) 2.1の
              レベルAAへの準拠を目指し、継続的な改善を行っています。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              フィードバック
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              アクセシビリティに関するご意見やご要望がございましたら、
              <a href="/contact" className="text-takara-gold hover:underline">お問い合わせページ</a>
              よりご連絡ください。皆様のフィードバックを参考に、
              より使いやすいウェブサイトを目指してまいります。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}