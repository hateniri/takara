"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMembership } from "@/contexts/MembershipContext";
import { useRouter } from "next/navigation";

interface ExclusiveContent {
  id: string;
  type: "video" | "article" | "report";
  title: string;
  subtitle: string;
  thumbnail: string;
  duration?: string;
  premium?: boolean;
}

const exclusiveContents: ExclusiveContent[] = [
  {
    id: "vid-001",
    type: "video",
    title: "未公開ドローン映像 #07",
    subtitle: "磁場異常地点の上空撮影",
    thumbnail: "drone-07.jpg",
    duration: "23:45",
  },
  {
    id: "vid-002",
    type: "video",
    title: "高IQブレスト会議 Vol.3",
    subtitle: "夢一致現象についての仮説検証",
    thumbnail: "meeting-03.jpg",
    duration: "1:42:30",
    premium: true,
  },
  {
    id: "art-001",
    type: "article",
    title: "暗号解読進捗レポート",
    subtitle: "古文書に隠された座標の解析",
    thumbnail: "cipher-01.jpg",
  },
  {
    id: "rep-001",
    type: "report",
    title: "第12回 夢分析会ログ",
    subtitle: "参加者6名の共通ビジョンについて",
    thumbnail: "dream-12.jpg",
    premium: true,
  },
  {
    id: "vid-003",
    type: "video",
    title: "現場での偶然 - 記録映像",
    subtitle: "説明のつかない現象の瞬間",
    thumbnail: "phenomenon.jpg",
    duration: "08:32",
  },
  {
    id: "art-002",
    type: "article",
    title: "一致率レポート 2025.01",
    subtitle: "予測と実地調査の相関分析",
    thumbnail: "analysis.jpg",
  },
];

export default function MembersPage() {
  const { isAuthenticated, accessLevel, login } = useMembership();
  const [accessKey, setAccessKey] = useState("");
  const [error, setError] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ExclusiveContent | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(accessKey)) {
      setError(false);
      setAccessKey("");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-mincho text-4xl text-takara-gold mb-4">
                限定アクセス
              </h1>
              <p className="font-avenir text-takara-cream/70">
                投資家・特別協力者の皆様へ
              </p>
            </motion.div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="text"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                placeholder="ACCESS KEY"
                className="w-full px-6 py-4 bg-transparent border-2 border-takara-gold/30 rounded-lg text-takara-cream placeholder-takara-cream/30 font-acumin tracking-widest text-center focus:border-takara-gold focus:outline-none transition-all duration-300"
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-takara-gold/20 border-2 border-takara-gold/50 rounded-lg text-takara-gold font-avenir tracking-wider hover:bg-takara-gold/30 hover:border-takara-gold transition-all duration-300"
            >
              ENTER
            </motion.button>
          </form>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-center text-sm text-red-400/70 font-avenir"
              >
                Invalid Access Key
              </motion.p>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="font-avenir text-sm text-takara-cream/50 mb-4">
              アクセスキーをお持ちでない方は
            </p>
            <button
              onClick={() => router.push("/support")}
              className="font-avenir text-sm text-takara-gold/70 hover:text-takara-gold transition-colors"
            >
              サポーター登録はこちら →
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-takara-navy/20">
      {/* Header */}
      <div className="relative z-10 px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-mincho text-3xl md:text-4xl text-takara-gold mb-2">
                会員限定コンテンツ
              </h1>
              <p className="font-avenir text-takara-cream/70">
                Exclusive Contents
              </p>
            </div>
            <div className="text-right">
              <p className="font-acumin text-sm text-takara-cream/50 mb-1">
                アクセスレベル: {accessLevel === "member" ? "メンバー" : "プレミアム"}
              </p>
              <button
                onClick={() => router.push("/")}
                className="font-avenir text-sm text-takara-gold/70 hover:text-takara-gold transition-colors"
              >
                公開エリアへ戻る
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Grid - Netflix Style */}
      <div className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Featured Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-avenir text-xl text-takara-cream mb-6">
              Featured
            </h2>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gradient-to-r from-takara-navy/50 to-transparent">
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-2xl">
                  <h3 className="font-mincho text-4xl text-takara-cream mb-4">
                    高IQブレスト会議 Vol.3
                  </h3>
                  <p className="font-avenir text-lg text-takara-cream/70 mb-6">
                    夢一致現象についての仮説検証 - 6名の研究者による2時間の討論
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-takara-gold/20 border border-takara-gold/50 rounded-full text-takara-cream font-avenir hover:bg-takara-gold/30 transition-all"
                  >
                    再生する
                  </motion.button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent" />
            </div>
          </motion.section>

          {/* Content Categories */}
          <div className="space-y-12">
            {/* Videos */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="font-avenir text-xl text-takara-cream mb-6">
                限定動画
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {exclusiveContents
                  .filter((content) => content.type === "video")
                  .map((content) => (
                    <ContentCard
                      key={content.id}
                      content={content}
                      accessLevel={accessLevel}
                      onClick={() => setSelectedContent(content)}
                    />
                  ))}
              </div>
            </motion.section>

            {/* Articles & Reports */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-avenir text-xl text-takara-cream mb-6">
                考察・レポート
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {exclusiveContents
                  .filter((content) => content.type !== "video")
                  .map((content) => (
                    <ContentCard
                      key={content.id}
                      content={content}
                      accessLevel={accessLevel}
                      onClick={() => setSelectedContent(content)}
                    />
                  ))}
              </div>
            </motion.section>
          </div>

          {/* Progress Report */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-8 bg-takara-gold/10 border border-takara-gold/30 rounded-lg"
          >
            <h2 className="font-mincho text-2xl text-takara-gold mb-4">
              探索進捗レポート
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-acumin text-3xl text-takara-cream mb-2">127</p>
                <p className="font-avenir text-sm text-takara-cream/70">調査地点</p>
              </div>
              <div>
                <p className="font-acumin text-3xl text-takara-cream mb-2">89%</p>
                <p className="font-avenir text-sm text-takara-cream/70">夢一致率</p>
              </div>
              <div>
                <p className="font-acumin text-3xl text-takara-cream mb-2">12</p>
                <p className="font-avenir text-sm text-takara-cream/70">有力な手がかり</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

function ContentCard({ 
  content, 
  accessLevel, 
  onClick 
}: { 
  content: ExclusiveContent; 
  accessLevel: string;
  onClick: () => void;
}) {
  const isLocked = content.premium && accessLevel !== "premium";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative cursor-pointer group"
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="aspect-video bg-takara-navy/30 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-acumin text-xs text-takara-gold/50">
            {content.thumbnail}
          </span>
        </div>
        {isLocked && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 border-2 border-takara-gold/50 rounded-full flex items-center justify-center">
                <span className="text-takara-gold">🔒</span>
              </div>
              <p className="font-avenir text-xs text-takara-cream/70">Premium</p>
            </div>
          </div>
        )}
        {content.duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-takara-cream/90 font-acumin">
            {content.duration}
          </div>
        )}
      </div>
      <h3 className="font-mincho text-sm text-takara-cream mt-2 group-hover:text-takara-gold transition-colors">
        {content.title}
      </h3>
      <p className="font-avenir text-xs text-takara-cream/60">
        {content.subtitle}
      </p>
    </motion.div>
  );
}