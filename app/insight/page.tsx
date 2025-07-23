"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DynamicImage from "@/components/DynamicImage";

interface Insight {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  images: {
    type: "diagram" | "map" | "sketch" | "screenshot";
    placeholder: string;
  }[];
}

const insights: Insight[] = [
  {
    id: "insight-001",
    title: "地名の起源と方角の謎 - 古文書との符号",
    author: "深谷",
    date: "2025.01.18",
    excerpt: "「宝」の字を含む地名が示す北東の方向性。平安時代の文書に記された「丑寅の宝」との関連性を探る。",
    readTime: "12分",
    tags: ["古文書", "地名学", "方位"],
    images: [
      { type: "map", placeholder: "古地図の切り抜き" },
      { type: "diagram", placeholder: "方角の相関図" },
    ],
  },
  {
    id: "insight-002",
    title: "夢に現れた模様と実際の地形の一致",
    author: "朝霧",
    date: "2025.01.10",
    excerpt: "複数の探索者が見た共通の夢のパターン。渦巻き状の模様と、ドローン撮影で判明した地形の驚くべき一致について。",
    readTime: "15分",
    tags: ["夢一致", "地形学", "集合的無意識"],
    images: [
      { type: "sketch", placeholder: "夢のスケッチ" },
      { type: "screenshot", placeholder: "ドローン映像" },
      { type: "diagram", placeholder: "パターン分析" },
    ],
  },
  {
    id: "insight-003",
    title: 'ドローン映像に映る"不可視の輪"',
    author: "星野",
    date: "2024.12.22",
    excerpt: "特定の高度・時間帯にのみ出現する円形の影。磁場との相関、古代遺跡との位置関係から導かれる仮説。",
    readTime: "18分",
    tags: ["ドローン", "磁場", "考古学"],
    images: [
      { type: "screenshot", placeholder: "ドローン映像解析" },
      { type: "map", placeholder: "遺跡配置図" },
    ],
  },
  {
    id: "insight-004",
    title: "音響異常地点と地下水脈の関係性",
    author: "深谷",
    date: "2024.11.30",
    excerpt: "無音であるはずの場所で聞こえる水音。地質調査データと照合した結果、見えてきた地下構造の特異性。",
    readTime: "10分",
    tags: ["音響", "地質学", "水脈"],
    images: [
      { type: "diagram", placeholder: "地下構造図" },
      { type: "map", placeholder: "音響異常マップ" },
    ],
  },
];

export default function InsightPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="font-mincho text-4xl md:text-5xl text-takara-cream mb-6">
            考察
          </h1>
          <p className="font-avenir text-lg text-takara-cream/70 max-w-3xl">
            データと直感、科学と神秘。その境界で見出される真実の形。
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid gap-12">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/insight/${insight.id}`}>
                <div className="grid md:grid-cols-[1fr,2fr] gap-8 p-8 rounded-lg border border-takara-gold/10 hover:border-takara-gold/30 transition-colors">
                  {/* Images Section */}
                  <div className="space-y-4">
                    {insight.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + imgIndex * 0.05 }}
                        className="relative aspect-[4/3] rounded bg-takara-navy/30 overflow-hidden"
                      >
                        <DynamicImage
                          type={image.type === "diagram" ? "diagram" : image.type === "map" ? "map" : "photo"}
                          width={800}
                          height={600}
                          text={image.placeholder}
                          alt={image.placeholder}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                          <span className="font-acumin text-xs text-takara-cream/70">
                            {image.type}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4 text-sm text-takara-cream/60">
                        <span className="font-avenir">{insight.author}</span>
                        <span>•</span>
                        <span className="font-avenir">{insight.date}</span>
                        <span>•</span>
                        <span className="font-avenir">{insight.readTime}</span>
                      </div>

                      <h2 className="font-mincho text-2xl md:text-3xl text-takara-cream mb-4 group-hover:text-takara-gold transition-colors">
                        {insight.title}
                      </h2>

                      <p className="font-mincho text-lg text-takara-cream/70 leading-relaxed mb-6">
                        {insight.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {insight.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-acumin text-xs text-takara-gold/60 border border-takara-gold/20 rounded-full px-3 py-1"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <motion.span
                        className="font-avenir text-sm text-takara-cream/60 group-hover:text-takara-cream transition-colors"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        続きを読む →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Archive Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="font-avenir text-takara-cream/60 hover:text-takara-cream transition-colors">
            過去の考察を見る
          </button>
        </motion.div>
      </div>
    </div>
  );
}