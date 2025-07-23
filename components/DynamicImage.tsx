"use client";

import { useEffect, useState } from "react";
import { generateImageDataURL, imagePresets } from "@/lib/imageGenerator";
import { generatePlaceholder } from "@/lib/imagePlaceholder";

interface DynamicImageProps {
  preset?: keyof typeof imagePresets;
  options?: Parameters<typeof generateImageDataURL>[0];
  className?: string;
  alt: string;
  // New props for placeholder mode
  type?: 'hero' | 'video' | 'photo' | 'map' | 'document' | 'diagram' | 'thumbnail';
  width?: number;
  height?: number;
  text?: string;
}

export default function DynamicImage({ 
  preset, 
  options, 
  className, 
  alt,
  type,
  width,
  height,
  text
}: DynamicImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    // If width/height are provided, use the new placeholder generator
    if (width && height) {
      const dataUrl = generatePlaceholder({
        width,
        height,
        text,
        type,
        variant: Math.floor(Math.random() * 10)
      });
      setImageSrc(dataUrl);
    } else {
      // Use the original image generator
      let imageOptions;
      
      if (preset) {
        // Use preset with any required parameters
        if (preset === 'fieldPhoto') {
          imageOptions = imagePresets[preset](Math.floor(Math.random() * 9) + 1);
        } else if (preset === 'diagram') {
          imageOptions = imagePresets[preset]('Analysis');
        } else if (preset === 'hunterLicense') {
          imageOptions = imagePresets[preset]('Member');
        } else {
          imageOptions = imagePresets[preset]();
        }
      } else if (options) {
        imageOptions = options;
      } else {
        // Default options
        imageOptions = {
          width: 400,
          height: 300,
          type: 'photo' as const,
          style: 'mystical' as const
        };
      }

      const dataUrl = generateImageDataURL(imageOptions);
      setImageSrc(dataUrl);
    }
  }, [preset, options, type, width, height, text]);

  if (!imageSrc) {
    return (
      <div className={`bg-takara-navy/30 animate-pulse ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-takara-gold/30 text-sm">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imageSrc} 
      alt={alt}
      className={className}
    />
  );
}