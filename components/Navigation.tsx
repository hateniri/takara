"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/exploration", label: "探索記録" },
  { href: "/insight", label: "考察" },
  { href: "/team", label: "メンバー" },
  { href: "/map", label: "地図" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-takara-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="w-10 h-10 relative"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-takara-gold/20 rounded-full animate-magnetic-field" />
              <div className="absolute inset-0 border-2 border-takara-gold rounded-full" />
              <div className="absolute inset-2 border border-takara-gold/50 rounded-full" />
            </motion.div>
            <span className="font-mincho text-xl tracking-widest text-takara-cream">
              株式会社宝探し
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <span
                  className={`font-avenir text-sm tracking-wider transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-takara-gold"
                      : "text-takara-cream/70 hover:text-takara-cream"
                  }`}
                >
                  {item.label}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navigation-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-takara-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-px bg-takara-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}