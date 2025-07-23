"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data - In real app, this would come from CMS or API
const insights = {
  "insight-001": {
    title: "地名の起源と方角の謎 - 古文書との符号",
    author: "深谷",
    date: "2025.01.18",
    readTime: "12分",
    content: `
      平安時代の文書『陰陽寮記録』に、興味深い記述がある。
      
      「丑寅の方角に宝あり。されど宝の字を含む地には近づくべからず」
      
      この一文に注目したのは、全国に散在する「宝」の字を含む地名の分布を調査していた時のことだった。
      驚くべきことに、これらの地名の85%が、ある特定の地点から見て北東（丑寅）の方角に位置していたのだ。
      
      さらに調査を進めると、これらの地点を結ぶと、巨大な五芒星が浮かび上がる。
      その中心点は、現在の地図には載っていない、ある山間の集落跡だった。
      
      古文書の警告は、宝そのものへの接近を禁じているのか、
      それとも、宝を守る何かの存在を示唆しているのか。
      
      我々の磁場測定では、この五芒星の各頂点で異常な数値が記録されている。
      まるで、大地そのものが何かを記憶しているかのように。
    `,
    images: [
      { caption: "陰陽寮記録の該当箇所", placeholder: "古文書の写真" },
      { caption: "地名分布図と五芒星", placeholder: "地図上の五芒星パターン" },
      { caption: "磁場測定データ", placeholder: "グラフと数値データ" },
    ],
  },
};

export default function InsightDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const insight = insights[slug as keyof typeof insights];

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-mincho text-takara-cream/60">記事が見つかりません</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/insight"
            className="inline-flex items-center space-x-2 text-takara-gold/70 hover:text-takara-gold transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-avenir text-sm">考察一覧へ戻る</span>
          </Link>

          <h1 className="font-mincho text-3xl md:text-4xl text-takara-cream mb-6">
            {insight.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm text-takara-cream/60">
            <span className="font-avenir">{insight.author}</span>
            <span>•</span>
            <span className="font-avenir">{insight.date}</span>
            <span>•</span>
            <span className="font-avenir">{insight.readTime}</span>
          </div>
        </motion.header>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {insight.images.map((image, index) => (
            <div key={index} className="space-y-2">
              <div className="aspect-[4/3] bg-takara-navy/30 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-acumin text-xs text-takara-gold/50">
                    {image.placeholder}
                  </span>
                </div>
              </div>
              <p className="font-avenir text-xs text-takara-cream/60 text-center">
                {image.caption}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="font-mincho text-takara-cream/90 leading-relaxed whitespace-pre-line">
            {insight.content}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 p-12 bg-gradient-to-br from-takara-gold/10 to-takara-navy/20 rounded-lg border border-takara-gold/20 text-center"
        >
          <h2 className="font-mincho text-2xl text-takara-cream mb-4">
            この謎の続きを、共に見届けたい方へ
          </h2>
          <p className="font-avenir text-takara-cream/70 mb-8">
            限定コンテンツでは、より詳細な調査データと未公開の考察をご覧いただけます
          </p>
          <Link href="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-takara-gold/20 border-2 border-takara-gold/50 rounded-lg text-takara-gold font-avenir tracking-wider hover:bg-takara-gold/30 hover:border-takara-gold transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <span>サポートメンバーになる</span>
            </motion.button>
          </Link>
        </motion.section>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-12 border-t border-takara-gold/20 flex justify-between"
        >
          <Link
            href="/insight"
            className="font-avenir text-sm text-takara-cream/60 hover:text-takara-cream transition-colors"
          >
            ← 前の考察
          </Link>
          <Link
            href="/insight"
            className="font-avenir text-sm text-takara-cream/60 hover:text-takara-cream transition-colors"
          >
            次の考察 →
          </Link>
        </motion.nav>
      </div>
    </article>
  );
}