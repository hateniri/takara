"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Metadata } from "next";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ category: "general", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-8">
          お問い合わせ
        </h1>

        <p className="font-avenir text-takara-cream/70 mb-12">
          必要な時に、我々から連絡いたします。
          ただし、どうしても連絡が必要な場合は、以下のフォームをご利用ください。
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-takara-gold/10 border border-takara-gold/30 rounded-lg text-center"
          >
            <div className="text-3xl mb-4">📨</div>
            <p className="font-mincho text-takara-cream">
              メッセージを受信しました
            </p>
            <p className="font-avenir text-takara-cream/60 text-sm mt-2">
              必要と判断した場合のみ、返信いたします
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mincho text-takara-cream mb-2">
                お問い合わせ種別
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-takara-gold/30 rounded-lg font-avenir text-takara-cream focus:outline-none focus:border-takara-gold transition-colors"
              >
                <option value="general">一般的なお問い合わせ</option>
                <option value="membership">会員登録について</option>
                <option value="exploration">探索活動について</option>
                <option value="technical">技術的な問題</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label className="block font-mincho text-takara-cream mb-2">
                メッセージ
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                required
                className="w-full px-4 py-3 bg-black/50 border border-takara-gold/30 rounded-lg font-avenir text-takara-cream focus:outline-none focus:border-takara-gold transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください..."
              />
            </div>

            <div className="bg-takara-navy/20 p-4 rounded-lg border border-takara-gold/10">
              <p className="font-avenir text-xs text-takara-cream/50">
                注意事項:
              </p>
              <ul className="font-avenir text-xs text-takara-cream/50 mt-2 space-y-1">
                <li>• 返信は保証されません</li>
                <li>• 探索地点の具体的な情報は提供できません</li>
                <li>• 緊急の連絡には対応できません</li>
              </ul>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-takara-gold/20 border border-takara-gold/50 rounded-lg font-avenir text-takara-gold hover:bg-takara-gold/30 transition-all"
            >
              送信する
            </motion.button>
          </form>
        )}

        <div className="mt-12 text-center">
          <p className="font-avenir text-xs text-takara-cream/40">
            重要な連絡は、適切なタイミングで我々から行います
          </p>
        </div>
      </div>
    </div>
  );
}