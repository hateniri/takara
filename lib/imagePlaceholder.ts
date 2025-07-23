// Image placeholder generator for various sizes and types
// These will be replaced with actual images in Photoshop

interface PlaceholderOptions {
  width: number;
  height: number;
  text?: string;
  type?: 'hero' | 'video' | 'photo' | 'map' | 'document' | 'diagram' | 'thumbnail';
  variant?: number;
}

export function generatePlaceholder({
  width,
  height,
  text,
  type = 'photo',
  variant = 0
}: PlaceholderOptions): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';

  // Background patterns based on type
  const backgrounds: Record<string, (ctx: CanvasRenderingContext2D) => void> = {
    hero: (ctx) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(0.5, '#16213e');
      gradient.addColorStop(1, '#0f3460');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Add noise pattern
      for (let i = 0; i < 5000; i++) {
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.random() * 0.05})`;
        ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
      }
    },
    video: (ctx) => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      
      // Play button
      ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
      ctx.beginPath();
      ctx.moveTo(width / 2 - 30, height / 2 - 40);
      ctx.lineTo(width / 2 - 30, height / 2 + 40);
      ctx.lineTo(width / 2 + 40, height / 2);
      ctx.closePath();
      ctx.fill();
    },
    map: (ctx) => {
      ctx.fillStyle = '#2a2416';
      ctx.fillRect(0, 0, width, height);
      
      // Grid lines
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // Random "locations"
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    document: (ctx) => {
      ctx.fillStyle = '#f4e8d0';
      ctx.fillRect(0, 0, width, height);
      
      // Aged paper effect
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
      gradient.addColorStop(0, 'rgba(244, 232, 208, 0)');
      gradient.addColorStop(1, 'rgba(139, 69, 19, 0.3)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Text lines
      ctx.fillStyle = '#3a3a3a';
      for (let y = 50; y < height - 50; y += 25) {
        ctx.fillRect(30, y, width - 60, 2);
      }
    },
    diagram: (ctx) => {
      ctx.fillStyle = '#1a1a1a';
      ctx.fillRect(0, 0, width, height);
      
      // Random connections
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
      ctx.lineWidth = 2;
      const points: [number, number][] = [];
      for (let i = 0; i < 6; i++) {
        points.push([Math.random() * width, Math.random() * height]);
      }
      
      points.forEach((point, i) => {
        if (i < points.length - 1) {
          ctx.beginPath();
          ctx.moveTo(point[0], point[1]);
          ctx.lineTo(points[i + 1][0], points[i + 1][1]);
          ctx.stroke();
        }
        
        ctx.fillStyle = '#d4af37';
        ctx.beginPath();
        ctx.arc(point[0], point[1], 8, 0, Math.PI * 2);
        ctx.fill();
      });
    },
    photo: (ctx) => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#2a2a2a');
      gradient.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Camera icon
      ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
      const iconSize = Math.min(width, height) * 0.2;
      ctx.fillRect(width/2 - iconSize/2, height/2 - iconSize/3, iconSize, iconSize * 0.6);
      ctx.beginPath();
      ctx.arc(width/2, height/2, iconSize * 0.25, 0, Math.PI * 2);
      ctx.fill();
    },
    thumbnail: (ctx) => {
      ctx.fillStyle = '#2a2416';
      ctx.fillRect(0, 0, width, height);
      
      // Pattern based on variant
      ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
      if (variant % 2 === 0) {
        for (let i = 0; i < 10; i++) {
          ctx.fillRect(0, i * height/10, width, 1);
        }
      } else {
        for (let i = 0; i < 10; i++) {
          ctx.fillRect(i * width/10, 0, 1, height);
        }
      }
    }
  };

  // Apply background
  const bgFunction = backgrounds[type] || backgrounds.photo;
  bgFunction(ctx);

  // Add border
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, width - 2, height - 2);

  // Add text if provided
  if (text) {
    ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';
    ctx.font = `${Math.min(width, height) * 0.05}px "Avenir Next", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    // Add size info
    ctx.font = `${Math.min(width, height) * 0.03}px "Avenir Next", sans-serif`;
    ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.fillText(`${width}x${height}`, width / 2, height - 20);
  }

  return canvas.toDataURL('image/png');
}

// Common placeholder sizes
export const PLACEHOLDER_SIZES = {
  hero: { width: 1920, height: 1080 },
  heroBanner: { width: 1920, height: 600 },
  videoThumbnail: { width: 640, height: 360 },
  contentCard: { width: 800, height: 450 },
  squareThumbnail: { width: 400, height: 400 },
  articleHeader: { width: 1200, height: 600 },
  mapLarge: { width: 1000, height: 750 },
  documentTall: { width: 400, height: 600 },
  diagramMedium: { width: 800, height: 600 },
  galleryImage: { width: 600, height: 400 },
};