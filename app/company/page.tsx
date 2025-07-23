import { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社宝探し",
  description: "株式会社宝探しの会社情報",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-12">
          会社概要
        </h1>
        
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">会社名</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              株式会社宝探し
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">設立</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              2024年4月1日
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">代表取締役</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              [非公開]
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">資本金</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              1,000万円
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">事業内容</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream space-y-2">
              <p>• 未発見資源の探索・調査</p>
              <p>• 古文書・地図の解析研究</p>
              <p>• 地理的異常現象の科学的検証</p>
              <p>• 会員向け限定コンテンツの配信</p>
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6 border-b border-takara-gold/20">
            <dt className="font-mincho text-takara-cream/60">所在地</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              [座標のみ開示: 35.6762° N, 139.6503° E]
            </dd>
          </div>

          <div className="grid md:grid-cols-3 gap-4 py-6">
            <dt className="font-mincho text-takara-cream/60">連絡方法</dt>
            <dd className="md:col-span-2 font-avenir text-takara-cream">
              必要な時に、我々から連絡いたします
            </dd>
          </div>
        </div>

        <div className="mt-16 p-8 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
          <h2 className="font-mincho text-2xl text-takara-gold mb-4">
            企業理念
          </h2>
          <p className="font-mincho text-takara-cream/80 leading-relaxed">
            「見えないものを見る。知られざるものを知る。」
          </p>
          <p className="font-avenir text-takara-cream/60 mt-4 text-sm">
            我々は、高度な知性と最新技術を駆使し、
            日本に眠る未知の真実を解き明かすことを使命としています。
          </p>
        </div>
      </div>
    </div>
  );
}