"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TeamMember {
  id: string;
  codename: string;
  element: string;
  hypothesis: string;
  lastDream: string;
  symbol: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "member-001",
    codename: "朝霧",
    element: "水銀 (Hg)",
    hypothesis: "夢は未来の記憶である",
    lastDream: "螺旋を描いて上昇する光の柱",
    symbol: "☿",
  },
  {
    id: "member-002",
    codename: "深谷",
    element: "金 (Au)",
    hypothesis: "地名には座標が暗号化されている",
    lastDream: "地図が生き物のように脈動する",
    symbol: "☉",
  },
  {
    id: "member-003",
    codename: "星野",
    element: "銀 (Ag)",
    hypothesis: "石は天体の動きを記録している",
    lastDream: "逆さまの星座が大地に映る",
    symbol: "☽",
  },
  {
    id: "member-004",
    codename: "霧島",
    element: "銅 (Cu)",
    hypothesis: "音は時空を超えて伝わる",
    lastDream: "聞こえない周波数の歌",
    symbol: "♀",
  },
  {
    id: "member-005",
    codename: "月影",
    element: "鉄 (Fe)",
    hypothesis: "磁場は意識に影響を与える",
    lastDream: "コンパスが全方向を指す場所",
    symbol: "♂",
  },
  {
    id: "member-006",
    codename: "風間",
    element: "錫 (Sn)",
    hypothesis: "パターンは自己組織化する",
    lastDream: "フラクタルの森を歩く",
    symbol: "♃",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="font-mincho text-4xl md:text-5xl text-takara-cream mb-6">
            メンバー
          </h1>
          <p className="font-avenir text-lg text-takara-cream/70 max-w-3xl mx-auto">
            我々は選ばれたのではない。呼ばれたのだ。
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 border border-takara-gold/20 rounded-lg hover:border-takara-gold/40 transition-all duration-500">
                {/* Symbol */}
                <motion.div
                  className="absolute -top-6 left-8 w-12 h-12 bg-black border border-takara-gold/30 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-2xl text-takara-gold">
                    {member.symbol}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="mt-8 space-y-6">
                  <div>
                    <h2 className="font-mincho text-2xl text-takara-cream mb-2">
                      {member.codename}
                    </h2>
                    <div className="h-px bg-takara-gold/20 w-12 group-hover:w-full transition-all duration-500" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-acumin text-xs text-takara-gold/60 uppercase tracking-widest">
                        好きな元素
                      </span>
                      <p className="font-avenir text-takara-cream/90 mt-1">
                        {member.element}
                      </p>
                    </div>

                    <div>
                      <span className="font-acumin text-xs text-takara-gold/60 uppercase tracking-widest">
                        信じる仮説
                      </span>
                      <p className="font-mincho text-takara-cream/90 mt-1">
                        {member.hypothesis}
                      </p>
                    </div>

                    <div>
                      <span className="font-acumin text-xs text-takara-gold/60 uppercase tracking-widest">
                        最後に見た夢
                      </span>
                      <p className="font-mincho text-takara-cream/70 mt-1 italic">
                        「{member.lastDream}」
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-takara-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="font-mincho text-takara-cream/60 max-w-2xl mx-auto">
            我々に連絡を取る必要はない。
            <br />
            必要なときに、我々は現れる。
          </p>
          
          {/* Hidden link to Tenko page */}
          <div className="mt-12">
            <Link 
              href="/tenko"
              className="inline-block w-3 h-3 rounded-full bg-takara-gold/5 hover:bg-takara-gold/20 transition-all duration-1000"
              aria-label="Secret entrance"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}