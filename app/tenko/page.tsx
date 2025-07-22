"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TenkoPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // パスワード: "イリュージョン"
    if (password === "イリュージョン") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="font-mincho text-3xl text-takara-cream mb-4">
              特別な部屋
            </h1>
            <p className="font-avenir text-takara-cream/60 text-sm">
              知る者のみが入ることを許される
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="合言葉を入力"
                className="w-full px-6 py-4 bg-transparent border border-takara-gold/30 rounded-lg text-takara-cream placeholder-takara-cream/30 font-mincho focus:border-takara-gold focus:outline-none transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-takara-gold/10 border border-takara-gold/30 rounded-lg text-takara-cream font-avenir hover:bg-takara-gold/20 transition-colors"
            >
              入室
            </motion.button>
          </form>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-sm text-red-400/70 font-avenir"
            >
              その言葉では扉は開かない
            </motion.p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-mincho text-4xl md:text-5xl text-takara-gold mb-6">
            プリンセス天功
          </h1>
          <p className="font-mincho text-xl text-takara-cream/80">
            消えゆくものと現れるもの、その狭間に真実がある
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-16">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="bg-takara-navy/20 border border-takara-gold/20 rounded-lg p-8">
              <h2 className="font-mincho text-2xl text-takara-cream mb-6">
                幻想の系譜
              </h2>
              <p className="font-mincho text-lg text-takara-cream/80 leading-relaxed mb-4">
                引田天功（二代目）、またの名をプリンセス天功。彼女は単なるイリュージョニストではない。
                現実と幻想の境界を自在に行き来する、現代の魔術師である。
              </p>
              <p className="font-mincho text-lg text-takara-cream/80 leading-relaxed">
                我々が「宝」を探すように、彼女もまた見えないものを見えるようにし、
                存在しないはずのものを現出させる。その技法には、我々の探索と通じる何かがある。
              </p>
            </div>
          </motion.section>

          {/* Research Notes */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-mincho text-3xl text-takara-cream mb-8">
              研究ノート
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 border border-takara-gold/20 rounded-lg p-6">
                <h3 className="font-mincho text-xl text-takara-gold mb-4">
                  空間転移の考察
                </h3>
                <p className="font-mincho text-takara-cream/70 leading-relaxed">
                  彼女の「瞬間移動」は、単なるトリックなのか。
                  量子もつれの概念を応用すれば、理論的には不可能ではない。
                  我々が探す「宝」もまた、複数の場所に同時に存在しているのかもしれない。
                </p>
              </div>

              <div className="bg-black/50 border border-takara-gold/20 rounded-lg p-6">
                <h3 className="font-mincho text-xl text-takara-gold mb-4">
                  時間軸の操作
                </h3>
                <p className="font-mincho text-takara-cream/70 leading-relaxed">
                  「消失」と「出現」の間にある時間。その空白の瞬間に何が起きているのか。
                  我々の夢に現れる座標も、時間を超越した情報伝達なのではないか。
                </p>
              </div>

              <div className="bg-black/50 border border-takara-gold/20 rounded-lg p-6">
                <h3 className="font-mincho text-xl text-takara-gold mb-4">
                  集合意識への介入
                </h3>
                <p className="font-mincho text-takara-cream/70 leading-relaxed">
                  観客全員が同じ幻を見る。これは暗示なのか、それとも別の何かか。
                  複数の探索者が同じ夢を見る現象との関連性を調査中。
                </p>
              </div>

              <div className="bg-black/50 border border-takara-gold/20 rounded-lg p-6">
                <h3 className="font-mincho text-xl text-takara-gold mb-4">
                  エネルギー場の変動
                </h3>
                <p className="font-mincho text-takara-cream/70 leading-relaxed">
                  彼女のパフォーマンス中、磁場測定器に異常な数値が記録されている。
                  これは我々が「磁場の揺れる道」で観測した現象と酷似している。
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sacred Items */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="font-mincho text-3xl text-takara-cream mb-8">
              聖なる道具
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-takara-gold/10 border border-takara-gold/30 flex items-center justify-center">
                  <span className="text-4xl">🎭</span>
                </div>
                <h3 className="font-mincho text-lg text-takara-cream mb-2">
                  変容の仮面
                </h3>
                <p className="font-avenir text-sm text-takara-cream/60">
                  アイデンティティの境界を溶かす
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-takara-gold/10 border border-takara-gold/30 flex items-center justify-center">
                  <span className="text-4xl">💎</span>
                </div>
                <h3 className="font-mincho text-lg text-takara-cream mb-2">
                  幻影の宝石
                </h3>
                <p className="font-avenir text-sm text-takara-cream/60">
                  見る角度によって存在が変わる
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-takara-gold/10 border border-takara-gold/30 flex items-center justify-center">
                  <span className="text-4xl">🌙</span>
                </div>
                <h3 className="font-mincho text-lg text-takara-cream mb-2">
                  月光の鍵
                </h3>
                <p className="font-avenir text-sm text-takara-cream/60">
                  次元の扉を開く触媒
                </p>
              </div>
            </div>
          </motion.section>

          {/* Secret Message */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center py-12"
          >
            <div className="inline-block p-8 bg-takara-gold/5 border border-takara-gold/30 rounded-lg">
              <p className="font-mincho text-lg text-takara-gold mb-4">
                「消えることは、別の場所に現れること」
              </p>
              <p className="font-avenir text-sm text-takara-cream/60">
                - 彼女が残した言葉
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center pt-12 border-t border-takara-gold/20"
          >
            <p className="font-mincho text-takara-cream/60">
              この部屋の存在を他言することなかれ
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 font-avenir text-sm text-takara-gold/70 hover:text-takara-gold transition-colors"
            >
              静かに退室する
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}