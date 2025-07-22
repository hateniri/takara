"use client";

import { useEffect, useState } from "react";

export default function NoiseOverlay() {
  const [opacity, setOpacity] = useState(0.03);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(Math.random() * 0.02 + 0.02);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="noise-overlay"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}