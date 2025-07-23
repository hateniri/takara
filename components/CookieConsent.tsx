"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setShowConsent(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/90 backdrop-blur-md border border-takara-gold/30 rounded-lg p-6 shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-mincho text-takara-cream mb-2">
                    Cookieの使用について
                  </h3>
                  <p className="font-avenir text-sm text-takara-cream/70">
                    当サイトでは、より良い体験を提供するためCookieを使用しています。
                    詳細は
                    <Link 
                      href="/cookies" 
                      className="text-takara-gold hover:underline mx-1"
                    >
                      Cookieポリシー
                    </Link>
                    をご確認ください。
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-2 font-avenir text-sm text-takara-cream/70 hover:text-takara-cream transition-colors"
                  >
                    拒否する
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2 bg-takara-gold/20 border border-takara-gold/50 rounded font-avenir text-sm text-takara-gold hover:bg-takara-gold/30 transition-all"
                  >
                    同意する
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}