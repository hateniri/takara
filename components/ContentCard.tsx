"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ContentCardProps {
  title: string;
  subtitle: string;
  href: string;
  imageUrl?: string;
  tag?: string;
  date?: string;
  variant?: "default" | "video" | "premium";
}

export default function ContentCard({
  title,
  subtitle,
  href,
  imageUrl,
  tag,
  date,
  variant = "default",
}: ContentCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="group cursor-pointer"
      >
        <div className="relative aspect-video rounded-lg overflow-hidden bg-takara-navy/30">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-acumin text-takara-gold/30 text-sm">
                {variant === "video" ? "動画サムネイル" : "画像"}
              </span>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {variant === "premium" && (
            <div className="absolute top-2 right-2 px-2 py-1 bg-takara-gold/90 text-black text-xs font-avenir rounded">
              PREMIUM
            </div>
          )}
          
          {tag && (
            <div className="absolute bottom-2 left-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded text-xs font-acumin text-takara-cream">
              {tag}
            </div>
          )}
        </div>
        
        <div className="mt-3">
          <h3 className="font-mincho text-lg text-takara-cream group-hover:text-takara-gold transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="font-avenir text-sm text-takara-cream/60 mt-1 line-clamp-2">
            {subtitle}
          </p>
          {date && (
            <p className="font-acumin text-xs text-takara-cream/40 mt-2">
              {date}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}