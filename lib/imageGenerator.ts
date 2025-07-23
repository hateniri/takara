// 画像生成ユーティリティ
// Canvas APIを使用してプレースホルダー画像を動的に生成

interface ImageOptions {
  width: number;
  height: number;
  text?: string;
  type?: 'map' | 'document' | 'photo' | 'diagram' | 'video' | 'hunter-card';
  style?: 'ancient' | 'modern' | 'mystical' | 'technical';
}

export function generateImageDataURL(options: ImageOptions): string {
  const { width, height, text = '', type = 'photo', style = 'mystical' } = options;
  
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  
  // Style configurations
  const styles = {
    ancient: {
      bg: '#2a1810',
      fg: '#d4af37',
      accent: '#8b6914',
      pattern: 'crosshatch'
    },
    modern: {
      bg: '#0a0a0a',
      fg: '#d4af37',
      accent: '#0f1b3c',
      pattern: 'grid'
    },
    mystical: {
      bg: '#0f1b3c',
      fg: '#d4af37',
      accent: '#fff8e1',
      pattern: 'circles'
    },
    technical: {
      bg: '#0a0a0a',
      fg: '#00ff00',
      accent: '#0f1b3c',
      pattern: 'hexagon'
    }
  };
  
  const currentStyle = styles[style];
  
  // Fill background
  ctx.fillStyle = currentStyle.bg;
  ctx.fillRect(0, 0, width, height);
  
  // Add texture/pattern
  ctx.strokeStyle = currentStyle.accent + '20';
  ctx.lineWidth = 1;
  
  if (currentStyle.pattern === 'crosshatch') {
    // Ancient map style crosshatch
    for (let i = 0; i < width; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width - i, 0);
      ctx.lineTo(width - i - height, height);
      ctx.stroke();
    }
  } else if (currentStyle.pattern === 'grid') {
    // Modern grid
    for (let i = 0; i < width; i += 30) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }
    for (let i = 0; i < height; i += 30) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
  } else if (currentStyle.pattern === 'circles') {
    // Mystical circles
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, (i + 1) * Math.min(width, height) / 10, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  
  // Type-specific elements
  if (type === 'map') {
    // Draw map elements
    ctx.strokeStyle = currentStyle.fg + '40';
    ctx.lineWidth = 2;
    // Random paths
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      for (let j = 0; j < 4; j++) {
        ctx.lineTo(Math.random() * width, Math.random() * height);
      }
      ctx.stroke();
    }
    // Location markers
    for (let i = 0; i < 5; i++) {
      const x = Math.random() * (width - 40) + 20;
      const y = Math.random() * (height - 40) + 20;
      ctx.fillStyle = currentStyle.fg + '60';
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'document') {
    // Draw document lines
    ctx.strokeStyle = currentStyle.fg + '30';
    ctx.lineWidth = 1;
    const lineHeight = 20;
    const margin = 40;
    for (let y = margin; y < height - margin; y += lineHeight) {
      const lineWidth = margin + Math.random() * (width - margin * 2);
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(lineWidth, y);
      ctx.stroke();
    }
  } else if (type === 'diagram') {
    // Draw diagram elements
    ctx.strokeStyle = currentStyle.fg + '50';
    ctx.lineWidth = 2;
    // Central hexagon
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 4;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  } else if (type === 'hunter-card') {
    // Hunter License Card style
    ctx.fillStyle = currentStyle.accent + '10';
    ctx.fillRect(20, 20, width - 40, height - 40);
    ctx.strokeStyle = currentStyle.fg;
    ctx.lineWidth = 3;
    ctx.strokeRect(20, 20, width - 40, height - 40);
    
    // Add hunter association symbol (simplified)
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 - 20, 30, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(width / 2 - 20, height / 2);
    ctx.lineTo(width / 2 + 20, height / 2);
    ctx.moveTo(width / 2, height / 2 - 20);
    ctx.lineTo(width / 2, height / 2 + 20);
    ctx.stroke();
  }
  
  // Add border
  ctx.strokeStyle = currentStyle.fg + '40';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, width - 2, height - 2);
  
  // Add text if provided
  if (text) {
    ctx.fillStyle = currentStyle.fg + '80';
    ctx.font = `${Math.min(width / 20, 16)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height - 30);
  }
  
  // Add subtle noise
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 20;
    data[i] += noise;
    data[i + 1] += noise;
    data[i + 2] += noise;
  }
  ctx.putImageData(imageData, 0, 0);
  
  return canvas.toDataURL('image/png');
}

// 画像タイプ別のプリセット
export const imagePresets = {
  // 探索記録用
  fieldPhoto: (index: number) => ({
    width: 400,
    height: 300,
    text: `Field ${index}`,
    type: 'photo' as const,
    style: 'mystical' as const
  }),
  
  droneFootage: () => ({
    width: 640,
    height: 360,
    text: 'DRONE CAM',
    type: 'video' as const,
    style: 'modern' as const
  }),
  
  // 考察用
  ancientMap: () => ({
    width: 600,
    height: 450,
    text: '古地図',
    type: 'map' as const,
    style: 'ancient' as const
  }),
  
  diagram: (title: string) => ({
    width: 500,
    height: 400,
    text: title,
    type: 'diagram' as const,
    style: 'technical' as const
  }),
  
  document: () => ({
    width: 400,
    height: 600,
    text: '機密文書',
    type: 'document' as const,
    style: 'ancient' as const
  }),
  
  // ハンターカード風
  hunterLicense: (name: string) => ({
    width: 400,
    height: 250,
    text: name,
    type: 'hunter-card' as const,
    style: 'modern' as const
  })
};