"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Location {
  id: string;
  name: string;
  status: "investigating" | "past-clue" | "classified";
  coordinates: { x: number; y: number };
  description: string;
  dreamMatch?: boolean;
}

const locations: Location[] = [
  {
    id: "loc-001",
    name: "磁場の揺れる道",
    status: "investigating",
    coordinates: { x: 45, y: 30 },
    description: "方位磁針が12度ずれる地点。夢で見た三本の木が実在。",
    dreamMatch: true,
  },
  {
    id: "loc-002",
    name: "音無し川跡",
    status: "past-clue",
    coordinates: { x: 65, y: 55 },
    description: "江戸時代の古地図に記載。現在は枯れているが特定周波数で水音が聞こえる。",
  },
  {
    id: "loc-003",
    name: "北斗の石群",
    status: "investigating",
    coordinates: { x: 25, y: 20 },
    description: "巨石が北斗七星の配置。冬至の日の出と完全に一致。",
  },
  {
    id: "loc-004",
    name: "[検閲済]",
    status: "classified",
    coordinates: { x: 80, y: 40 },
    description: "詳細非公開",
  },
  {
    id: "loc-005",
    name: "螺旋の丘",
    status: "past-clue",
    coordinates: { x: 35, y: 70 },
    description: "上空から見ると渦巻き模様。複数の探索者が同じ夢を見た場所。",
    dreamMatch: true,
  },
  {
    id: "loc-006",
    name: "共鳴する洞窟",
    status: "investigating",
    coordinates: { x: 55, y: 25 },
    description: "特定の音程で全体が振動。地下水脈との関連を調査中。",
  },
];

const statusConfig = {
  investigating: {
    label: "調査中",
    color: "text-takara-gold",
    bgColor: "bg-takara-gold/20",
    borderColor: "border-takara-gold/50",
    symbol: "◉",
  },
  "past-clue": {
    label: "過去の手がかり",
    color: "text-takara-cream/60",
    bgColor: "bg-takara-cream/10",
    borderColor: "border-takara-cream/30",
    symbol: "◎",
  },
  classified: {
    label: "未公開",
    color: "text-red-400/60",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
    symbol: "◈",
  },
};

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

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
            地図
          </h1>
          <p className="font-avenir text-lg text-takara-cream/70 max-w-3xl">
            現実と夢が交差する座標。見える者だけが辿り着ける場所。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-takara-navy/20 rounded-lg overflow-hidden border border-takara-gold/20"
          >
            {/* Grid Overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-takara-gold/30"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>

            {/* Map Background Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-acumin text-takara-gold/30 text-sm">
                地図画像プレースホルダー（現実と夢の混合地図）
              </span>
            </div>

            {/* Location Markers */}
            {locations.map((location) => (
              <motion.div
                key={location.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                whileHover={{ scale: 1.2 }}
                onClick={() => setSelectedLocation(location)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <div
                  className={`relative w-12 h-12 flex items-center justify-center rounded-full ${
                    statusConfig[location.status].bgColor
                  } ${statusConfig[location.status].borderColor} border-2`}
                >
                  <span
                    className={`text-2xl ${statusConfig[location.status].color}`}
                  >
                    {statusConfig[location.status].symbol}
                  </span>
                  {location.dreamMatch && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-takara-gold rounded-full animate-pulse" />
                  )}
                </div>

                {/* Tooltip */}
                {hoveredLocation === location.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm rounded px-3 py-2 whitespace-nowrap border border-takara-gold/30"
                  >
                    <p className="font-mincho text-sm text-takara-cream">
                      {location.name}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Legend */}
            <div className="p-6 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
              <h3 className="font-mincho text-xl text-takara-cream mb-4">
                凡例
              </h3>
              <div className="space-y-3">
                {Object.entries(statusConfig).map(([key, config]) => (
                  <div key={key} className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${config.bgColor} ${config.borderColor} border`}
                    >
                      <span className={`text-sm ${config.color}`}>
                        {config.symbol}
                      </span>
                    </div>
                    <span className="font-avenir text-sm text-takara-cream/70">
                      {config.label}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-takara-gold/20">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-2 h-2 bg-takara-gold rounded-full animate-pulse" />
                  </div>
                  <span className="font-avenir text-sm text-takara-cream/70">
                    夢との一致
                  </span>
                </div>
              </div>
            </div>

            {/* Selected Location Details */}
            {selectedLocation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 bg-takara-navy/20 rounded-lg border border-takara-gold/20"
              >
                <h3 className="font-mincho text-xl text-takara-cream mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="font-acumin text-sm text-takara-gold/60 mb-4">
                  {statusConfig[selectedLocation.status].label}
                </p>
                <p className="font-mincho text-takara-cream/80 leading-relaxed">
                  {selectedLocation.description}
                </p>
                {selectedLocation.dreamMatch && (
                  <div className="mt-4 pt-4 border-t border-takara-gold/20">
                    <p className="font-avenir text-sm text-takara-gold/70">
                      ※ 複数の探索者の夢に出現
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Note */}
            <div className="p-6 bg-black/50 rounded-lg border border-takara-gold/10">
              <p className="font-mincho text-sm text-takara-cream/60 leading-relaxed">
                この地図は物理的な座標と夢で見た地形を重ね合わせたものである。
                正確性は保証されない。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}