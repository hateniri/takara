"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMagneticPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Magnetic Field Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          x: magneticPosition.x,
          y: magneticPosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-takara-gold/10 via-transparent to-transparent" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="magnetic-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="1"
                fill="currentColor"
                className="text-takara-gold/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#magnetic-pattern)" />
        </svg>
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-mincho text-4xl md:text-6xl lg:text-7xl text-takara-cream mb-8 leading-tight">
            誰にでも見つけていい
            <br />
            宝なんて、きっとない
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-avenir text-lg md:text-xl text-takara-cream/70 mb-12 tracking-wider"
          >
            高次の知性が導く、真の探求への道標
          </motion.p>

          {/* Ancient Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-full max-w-2xl aspect-[4/3] mx-auto mb-16 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-takara-navy/50 backdrop-blur-sm flex items-center justify-center">
              <span className="font-acumin text-takara-gold/50 text-sm tracking-widest">
                古地図画像プレースホルダー
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Latest Content Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mincho text-3xl md:text-4xl text-takara-cream mb-12"
          >
            最新の記録
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Video Record */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link href="/exploration">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-takara-navy/50 flex items-center justify-center">
                    <span className="font-acumin text-takara-gold/50 text-sm">
                      動画サムネイルプレースホルダー
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute bottom-4 left-4 text-takara-cream"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <span className="font-avenir text-sm">探索記録を見る →</span>
                  </motion.div>
                </div>
                <h3 className="font-mincho text-xl text-takara-cream mb-2">
                  磁場の揺れる道 - 第七次調査
                </h3>
                <p className="font-avenir text-sm text-takara-cream/60">
                  探索者：朝霧 | 2025.01.15
                </p>
                <div className="flex gap-2 mt-3">
                  <span className="font-acumin text-xs text-takara-gold/70">#夢一致</span>
                  <span className="font-acumin text-xs text-takara-gold/70">#山中</span>
                  <span className="font-acumin text-xs text-takara-gold/70">#方位磁針</span>
                </div>
              </Link>
            </motion.div>

            {/* Latest Insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link href="/insight">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-takara-navy/50 flex items-center justify-center">
                    <span className="font-acumin text-takara-gold/50 text-sm">
                      考察図解プレースホルダー
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute bottom-4 left-4 text-takara-cream"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <span className="font-avenir text-sm">考察を読む →</span>
                  </motion.div>
                </div>
                <h3 className="font-mincho text-xl text-takara-cream mb-2">
                  地名の起源と方角の謎 - 古文書との符号
                </h3>
                <p className="font-avenir text-sm text-takara-cream/60">
                  考察者：深谷 | 2025.01.18
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12 bg-takara-navy/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-mincho text-lg md:text-xl text-takara-cream/80 leading-relaxed">
            我々は呼ばれたときに動く。
            <br />
            見つけるべき者が、見つけるべきときに。
          </p>
        </motion.div>
      </section>

      {/* Join Section */}
      <section className="relative z-10 py-24 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-mincho text-3xl md:text-4xl text-takara-cream mb-6">
                真実への投資
              </h2>
              <p className="font-mincho text-lg text-takara-cream/70 mb-8 leading-relaxed">
                私たちの探索は、単なる宝探しではありません。
                日本に眠る未知の真実を、最先端の技術と古の知恵を融合させて解き明かす、
                壮大な知的プロジェクトです。
              </p>
              <Link href="/support">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-takara-gold/10 border-2 border-takara-gold/50 rounded-lg text-takara-gold font-avenir tracking-wider hover:bg-takara-gold/20 hover:border-takara-gold transition-all"
                >
                  探索に参加する →
                </motion.button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-takara-gold/10 to-takara-navy/30 p-8">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="text-center">
                    <p className="font-acumin text-4xl text-takara-gold mb-2">127</p>
                    <p className="font-avenir text-sm text-takara-cream/60">調査完了地点</p>
                  </div>
                  <div className="text-center">
                    <p className="font-acumin text-4xl text-takara-gold mb-2">89%</p>
                    <p className="font-avenir text-sm text-takara-cream/60">夢一致率</p>
                  </div>
                  <div className="text-center">
                    <p className="font-acumin text-4xl text-takara-gold mb-2">∞</p>
                    <p className="font-avenir text-sm text-takara-cream/60">可能性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}