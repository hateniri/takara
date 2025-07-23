"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  探索活動: [
    { href: "/exploration", label: "探索記録" },
    { href: "/insight", label: "考察・研究" },
    { href: "/map", label: "調査地点マップ" },
  ],
  組織情報: [
    { href: "/company", label: "会社概要" },
    { href: "/team", label: "メンバー" },
    { href: "/support", label: "サポーター募集" },
  ],
  法的情報: [
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/terms", label: "利用規約" },
    { href: "/cookies", label: "Cookieポリシー" },
    { href: "/law", label: "特定商取引法に基づく表記" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-takara-navy/20 border-t border-takara-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-takara-gold/20 rounded-full animate-magnetic-field" />
                  <div className="absolute inset-0 border-2 border-takara-gold rounded-full" />
                </div>
                <span className="font-mincho text-lg text-takara-cream">
                  株式会社宝探し
                </span>
              </motion.div>
            </Link>
            <p className="font-avenir text-sm text-takara-cream/60 leading-relaxed">
              高IQ集団による日本全国の宝探し。
              知性と技術で、見えない真実を解き明かす。
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h3 className="font-mincho text-takara-cream mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-avenir text-sm text-takara-cream/60 hover:text-takara-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-takara-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-avenir text-xs text-takara-cream/40">
              © {currentYear} 株式会社宝探し. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link
                href="/contact"
                className="font-avenir text-xs text-takara-cream/40 hover:text-takara-cream/60 transition-colors"
              >
                お問い合わせ
              </Link>
              <Link
                href="/sitemap"
                className="font-avenir text-xs text-takara-cream/40 hover:text-takara-cream/60 transition-colors"
              >
                サイトマップ
              </Link>
              <Link
                href="/accessibility"
                className="font-avenir text-xs text-takara-cream/40 hover:text-takara-cream/60 transition-colors"
              >
                アクセシビリティ
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="font-avenir text-xs text-takara-cream/30 max-w-3xl mx-auto">
              本サイトは知的探求活動の記録であり、実際の宝物の発見を保証するものではありません。
              探索活動は自己責任で行ってください。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}