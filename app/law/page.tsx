import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 株式会社宝探し",
  description: "株式会社宝探しの特定商取引法に基づく表記",
};

export default function LawPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-8">
          特定商取引法に基づく表記
        </h1>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">販売業者</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              株式会社宝探し
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">運営責任者</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              [非公開]
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">所在地</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              [座標のみ開示: 35.6762° N, 139.6503° E]
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">電話番号</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              必要な場合のみ、個別にお知らせいたします
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">メールアドレス</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              お問い合わせフォームよりご連絡ください
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">販売価格</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              各サービスページに記載
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">商品代金以外の必要料金</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              なし
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">支払方法</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              クレジットカード決済、銀行振込
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">支払時期</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              お申込み時
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">商品引渡し時期</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              デジタルコンテンツ：決済確認後、即時<br />
              その他：個別にご案内
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">返品・キャンセル</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              デジタルコンテンツの性質上、返品・キャンセルは原則として承っておりません。<br />
              サービスに重大な不具合がある場合は個別に対応いたします。
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6">
            <dt className="font-mincho text-takara-cream/60">特記事項</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              本サービスは知的探求活動の支援を目的としており、<br />
              実際の宝物の発見を保証するものではありません。
            </dd>
          </div>
        </div>

        <div className="mt-16 p-8 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
          <p className="font-avenir text-sm text-takara-cream/60 leading-relaxed">
            上記の内容は、特定商取引法の規定に基づき表示しております。
            ご不明な点がございましたら、お問い合わせフォームよりご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}