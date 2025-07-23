import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | 株式会社宝探し",
  description: "株式会社宝探しのサービス利用規約",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-8">
          利用規約
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="font-avenir text-takara-cream/70 mb-8">
            最終更新日: 2025年1月23日
          </p>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第1条（適用）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              本規約は、株式会社宝探し（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
              登録会員の皆様（以下「ユーザー」）には、本規約に従って本サービスをご利用いただきます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第2条（会員登録）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              本サービスの利用を希望する方は、当社の定める方法によって会員登録を申請し、
              当社がこれを承認することによって会員登録が完了するものとします。
            </p>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• アクセスキーの適切な管理</li>
              <li>• 虚偽の情報を登録しないこと</li>
              <li>• 複数アカウントの作成禁止</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第3条（禁止事項）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• 法令または公序良俗に違反する行為</li>
              <li>• 当社のサーバーまたはネットワークの機能を破壊・妨害する行為</li>
              <li>• 本サービスの運営を妨害するおそれのある行為</li>
              <li>• 他のユーザーの情報を収集または蓄積する行為</li>
              <li>• 探索情報の無断転載・商用利用</li>
              <li>• その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第4条（知的財産権）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権は、
              すべて当社または当社にその利用を許諾した権利者に帰属し、
              ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、
              伝送、配布、出版、営業使用等をしてはならないものとします。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第5条（サービスの変更・中断）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              当社は、ユーザーに通知することなく本サービスの内容を変更または本サービスの提供を中断することができるものとし、
              これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第6条（免責事項）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed mb-4">
              当社は、本サービスに関して、以下の事項について一切責任を負いません。
            </p>
            <ul className="font-avenir text-takara-cream/80 space-y-2">
              <li>• 本サービスの情報の正確性、有用性、適時性、完全性</li>
              <li>• 探索活動に伴う事故、損害、トラブル</li>
              <li>• ユーザー間のトラブル</li>
              <li>• 本サービスの利用により期待される成果</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-mincho text-2xl text-takara-cream mb-4">
              第7条（準拠法・裁判管轄）
            </h2>
            <p className="font-avenir text-takara-cream/80 leading-relaxed">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}