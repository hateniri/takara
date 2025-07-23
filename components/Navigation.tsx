"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMembership } from "@/contexts/MembershipContext";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/exploration", label: "探索記録" },
  { href: "/insight", label: "考察" },
  { href: "/team", label: "メンバー" },
  { href: "/map", label: "地図" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { isAuthenticated, logout } = useMembership();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-takara-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-takara-cream"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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

          {/* Support Member Button - Always Visible */}
          <Link
            href="/auth"
            className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-takara-gold/10 border-2 border-takara-gold/50 rounded-lg text-takara-gold font-avenir hover:bg-takara-gold/20 hover:border-takara-gold transition-all group"
          >
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </motion.svg>
            <span className="tracking-wider">サポートメンバーになる</span>
          </Link>

          {/* Desktop Auth Status */}
          <div className="hidden lg:flex items-center space-x-6 ml-6 pl-6 border-l border-takara-gold/20">
            {isAuthenticated ? (
              <>
                <Link
                  href="/members"
                  className="relative group"
                >
                  <span className={`font-avenir text-sm tracking-wider transition-colors duration-300 ${
                    pathname === "/members"
                      ? "text-takara-gold"
                      : "text-takara-gold/70 hover:text-takara-gold"
                  }`}>
                    Members
                  </span>
                  {pathname === "/members" && (
                    <motion.div
                      layoutId="navigation-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-takara-gold"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                <button
                  onClick={logout}
                  className="font-avenir text-sm text-takara-cream/50 hover:text-takara-cream transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/support"
                className="font-avenir text-sm text-takara-gold/70 hover:text-takara-gold transition-colors"
              >
                Support
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: mobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 font-avenir text-sm ${
                  pathname === item.href
                    ? "text-takara-gold"
                    : "text-takara-cream/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="border-t border-takara-gold/20 pt-4">
              <Link
                href="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 mx-4 px-4 py-3 bg-takara-gold/10 border border-takara-gold/50 rounded-lg text-takara-gold font-avenir"
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
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                <span>サポートメンバーになる</span>
              </Link>
              
              {isAuthenticated ? (
                <div className="mt-4 px-4 space-y-2">
                  <Link
                    href="/members"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-takara-gold/70 font-avenir text-sm"
                  >
                    Members Area
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="block text-takara-cream/50 font-avenir text-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/support"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-4 px-4 text-takara-gold/70 font-avenir text-sm"
                >
                  Support Options
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}