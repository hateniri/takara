"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMembership } from "@/contexts/MembershipContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
  const { login } = useMembership();
  const [accessKey, setAccessKey] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (login(accessKey)) {
      router.push("/members");
    } else {
      setError(true);
      setIsLoading(false);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Key Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 bg-takara-gold/10 rounded-full animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-takara-gold"
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
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="font-mincho text-3xl md:text-4xl text-takara-cream mb-4">
            メンバー認証
          </h1>
          <p className="font-avenir text-takara-cream/70">
            ACCESS KEYを入力してください
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value.toUpperCase())}
              placeholder="例：KH-3298-TAKARA"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-transparent border-2 border-takara-gold/30 rounded-lg text-takara-cream placeholder-takara-cream/30 font-acumin tracking-widest text-center text-lg focus:border-takara-gold focus:outline-none transition-all duration-300 disabled:opacity-50"
              autoFocus
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading || !accessKey}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-takara-gold/20 border-2 border-takara-gold/50 rounded-lg text-takara-gold font-avenir tracking-wider hover:bg-takara-gold/30 hover:border-takara-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          >
            {isLoading ? (
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-takara-gold/20"
              />
            ) : null}
            <span className="relative z-10">
              {isLoading ? "認証中..." : "ENTER"}
            </span>
          </motion.button>
        </motion.form>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
          >
            <p className="text-sm text-red-400 text-center font-avenir">
              無効なACCESS KEYです
            </p>
          </motion.div>
        )}

        {/* Support Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-avenir text-sm text-takara-cream/50 mb-4">
            ACCESS KEYをお持ちでない方はこちら
          </p>
          <Link
            href="/support"
            className="inline-flex items-center space-x-2 text-takara-gold/70 hover:text-takara-gold transition-colors group"
          >
            <span className="font-avenir text-sm">サポーターになる</span>
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 inset-0">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-takara-gold/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-takara-navy/20 rounded-full filter blur-3xl" />
        </div>
      </motion.div>
    </div>
  );
}