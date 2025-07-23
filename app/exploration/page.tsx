"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import DynamicImage from "@/components/DynamicImage";

interface ExplorationRecord {
  id: string;
  title: string;
  explorer: string;
  date: string;
  videoUrl: string;
  tags: string[];
  description: string;
  images: string[];
}

const explorationRecords: ExplorationRecord[] = [
  {
    id: "ep007",
    title: "磁場の揺れる道 - 第七次調査",
    explorer: "朝霧",
    date: "2025.01.15",
    videoUrl: "https://youtube.com/embed/placeholder",
    tags: ["夢一致", "山中", "方位磁針"],
    description: "前夜の夢に現れた三本の木の配置と、実際の山道で発見した同じ配置。方位磁針が示す北が通常より12度ずれている地点。",
    images: ["field-1.jpg", "field-2.jpg", "field-3.jpg"],
  },
  {
    id: "ep006",
    title: "水音の記憶 - 第六次調査",
    explorer: "深谷",
    date: "2024.12.28",
    videoUrl: "https://youtube.com/embed/placeholder",
    tags: ["水脈", "古地図", "音響異常"],
    description: "江戸時代の古地図に記された「音無し川」の痕跡を追跡。現在は枯れているが、特定の周波数で水の流れる音が聞こえる。",
    images: ["field-4.jpg", "field-5.jpg", "field-6.jpg"],
  },
  {
    id: "ep005",
    title: "石の羅針盤 - 第五次調査",
    explorer: "星野",
    date: "2024.11.11",
    videoUrl: "https://youtube.com/embed/placeholder",
    tags: ["巨石", "配列", "天体"],
    description: "山頂付近に発見した巨石群。冬至の日の出の方向に正確に配置されており、中心の石には北斗七星と思われる窪みが。",
    images: ["field-7.jpg", "field-8.jpg", "field-9.jpg"],
  },
];

export default function ExplorationPage() {
  const [selectedRecord, setSelectedRecord] = useState<ExplorationRecord | null>(null);

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="font-mincho text-4xl md:text-5xl text-takara-cream mb-6">
            探索記録
          </h1>
          <p className="font-avenir text-lg text-takara-cream/70 max-w-3xl">
            夢と現実の境界線上に浮かび上がる座標。我々はそこに何を見出すのか。
          </p>
        </motion.div>

        {/* Records Grid */}
        <div className="grid gap-16">
          {explorationRecords.map((record, index) => (
            <motion.article
              key={record.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-takara-gold/20 pb-16 last:border-0"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Video Section */}
                <div className="relative">
                  <div className="aspect-video relative rounded-lg overflow-hidden bg-takara-navy/30">
                    <DynamicImage
                      preset="droneFootage"
                      alt={`${record.title} - ドローン映像`}
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute inset-0 flex items-center justify-center group"
                      onClick={() => setSelectedRecord(record)}
                    >
                      <div className="w-20 h-20 bg-takara-gold/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-takara-gold/20 transition-colors">
                        <div className="w-0 h-0 border-l-[20px] border-l-takara-cream border-y-[12px] border-y-transparent ml-2" />
                      </div>
                    </motion.button>
                  </div>

                  {/* Field Images */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {record.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square rounded bg-takara-navy/30 overflow-hidden"
                      >
                        <DynamicImage
                          options={{
                            width: 200,
                            height: 200,
                            text: `Point ${imgIndex + 1}`,
                            type: 'photo',
                            style: imgIndex === 0 ? 'ancient' : imgIndex === 1 ? 'mystical' : 'technical'
                          }}
                          alt={`フィールド画像 ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="font-acumin text-sm text-takara-gold/70">
                      {record.id.toUpperCase()}
                    </span>
                  </div>
                  
                  <h2 className="font-mincho text-2xl md:text-3xl text-takara-cream mb-4">
                    {record.title}
                  </h2>
                  
                  <p className="font-avenir text-takara-cream/60 mb-6">
                    探索者：{record.explorer} | {record.date}
                  </p>
                  
                  <p className="font-mincho text-lg text-takara-cream/80 leading-relaxed mb-6">
                    {record.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {record.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-acumin text-sm text-takara-gold/70 border border-takara-gold/30 rounded-full px-4 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="font-avenir text-takara-cream/60 hover:text-takara-cream transition-colors">
            過去の記録を見る
          </button>
        </motion.div>
      </div>
    </div>
  );
}