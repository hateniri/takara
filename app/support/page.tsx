"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SupportTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  recommended?: boolean;
}

const supportTiers: SupportTier[] = [
  {
    id: "explorer",
    name: "Explorer",
    price: "¥10,000",
    benefits: [
      "メンバー限定コンテンツへのアクセス",
      "月次進捗レポート",
      "探索記録の先行公開",
    ],
  },
  {
    id: "seeker",
    name: "Gold Seeker",
    price: "¥50,000",
    benefits: [
      "全ての Explorer 特典",
      "プレミアムコンテンツへのアクセス",
      "高IQブレスト会議の録画視聴",
      "夢分析レポートの閲覧",
      "オンライン考察会への参加権",
    ],
    recommended: true,
  },
  {
    id: "partner",
    name: "Strategic Partner",
    price: "¥300,000〜",
    benefits: [
      "全ての Gold Seeker 特典",
      "探索計画への意見提案権",
      "現地調査への同行権（年2回）",
      "非公開情報への完全アクセス",
      "専用コミュニケーションチャンネル",
    ],
  },
];

export default function SupportPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [supportType, setSupportType] = useState<"investor" | "technical" | "information">("investor");
  const router = useRouter();

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-mincho text-4xl md:text-5xl text-takara-cream mb-6">
            この探索に参加する
          </h1>
          <p className="font-avenir text-lg text-takara-cream/70 max-w-3xl mx-auto">
            真実を求める旅に、あなたも加わりませんか
          </p>
        </motion.div>

        {/* Support Types */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setSupportType("investor")}
            className={`px-6 py-3 rounded-full border-2 transition-all ${
              supportType === "investor"
                ? "bg-takara-gold/20 border-takara-gold text-takara-gold"
                : "border-takara-gold/30 text-takara-cream/70 hover:border-takara-gold/50"
            }`}
          >
            <span className="font-avenir">投資家として</span>
          </button>
          <button
            onClick={() => setSupportType("technical")}
            className={`px-6 py-3 rounded-full border-2 transition-all ${
              supportType === "technical"
                ? "bg-takara-gold/20 border-takara-gold text-takara-gold"
                : "border-takara-gold/30 text-takara-cream/70 hover:border-takara-gold/50"
            }`}
          >
            <span className="font-avenir">技術パートナーとして</span>
          </button>
          <button
            onClick={() => setSupportType("information")}
            className={`px-6 py-3 rounded-full border-2 transition-all ${
              supportType === "information"
                ? "bg-takara-gold/20 border-takara-gold text-takara-gold"
                : "border-takara-gold/30 text-takara-cream/70 hover:border-takara-gold/50"
            }`}
          >
            <span className="font-avenir">情報提供者として</span>
          </button>
        </motion.div>

        {/* Content based on support type */}
        {supportType === "investor" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Investment Tiers */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative p-8 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedTier === tier.id
                      ? "border-takara-gold bg-takara-gold/10"
                      : "border-takara-gold/30 hover:border-takara-gold/50"
                  } ${tier.recommended ? "transform scale-105" : ""}`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-takara-gold text-black text-sm font-avenir rounded-full">
                        RECOMMENDED
                      </span>
                    </div>
                  )}
                  
                  <h3 className="font-avenir text-2xl text-takara-cream mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-acumin text-3xl text-takara-gold mb-6">
                    {tier.price}
                  </p>
                  
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-takara-gold mr-2">✓</span>
                        <span className="font-avenir text-sm text-takara-cream/80">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-8 py-3 border border-takara-gold/50 rounded-lg text-takara-cream font-avenir hover:bg-takara-gold/20 transition-colors"
                  >
                    選択する
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Access Key Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center p-8 bg-takara-navy/20 rounded-lg border border-takara-gold/20"
            >
              <p className="font-mincho text-lg text-takara-cream/80 mb-4">
                サポーターになると、専用のアクセスキーが発行されます
              </p>
              <button
                onClick={() => router.push("/members")}
                className="font-avenir text-sm text-takara-gold/70 hover:text-takara-gold transition-colors"
              >
                メンバーエリアを見る →
              </button>
            </motion.div>
          </motion.div>
        )}

        {supportType === "technical" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
                <h3 className="font-mincho text-2xl text-takara-gold mb-4">
                  求める技術
                </h3>
                <ul className="space-y-3">
                  <li className="font-avenir text-takara-cream/80">
                    • ドローン操縦・空撮技術
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • 地質調査・測量技術
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • データ解析・パターン認識
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • 暗号解読・古文書解析
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • 磁場測定・電磁波解析
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
                <h3 className="font-mincho text-2xl text-takara-gold mb-4">
                  パートナー特典
                </h3>
                <ul className="space-y-3">
                  <li className="font-avenir text-takara-cream/80">
                    • 研究データへのアクセス
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • 共同研究の機会
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • 論文・特許の共同出願
                  </li>
                  <li className="font-avenir text-takara-cream/80">
                    • 専門家ネットワークへの参加
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {supportType === "information" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-12 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
              <h3 className="font-mincho text-3xl text-takara-gold mb-6">
                地図にない場所をご存じの方へ
              </h3>
              <p className="font-mincho text-lg text-takara-cream/80 mb-8 leading-relaxed">
                忘れられた道、消えた集落、語り継がれる伝説。
                <br />
                あなたの知識が、真実への鍵となるかもしれません。
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-takara-gold/10 flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <p className="font-avenir text-sm text-takara-cream/70">
                    未記載の場所
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-takara-gold/10 flex items-center justify-center">
                    <span className="text-2xl">📜</span>
                  </div>
                  <p className="font-avenir text-sm text-takara-cream/70">
                    古い言い伝え
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-takara-gold/10 flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <p className="font-avenir text-sm text-takara-cream/70">
                    古地図・古文書
                  </p>
                </div>
              </div>
              
              <p className="font-avenir text-sm text-takara-cream/60">
                情報提供者には、調査結果の優先共有をお約束します
              </p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-mincho text-takara-cream/60">
            すべての協力者が、真実を見つける仲間です
          </p>
        </motion.div>
      </div>
    </div>
  );
}