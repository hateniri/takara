"use client";

import DynamicImage from "@/components/DynamicImage";
import { PLACEHOLDER_SIZES } from "@/lib/imagePlaceholder";

export default function DemoImagesPage() {
  const placeholderTypes = [
    'hero', 'video', 'photo', 'map', 'document', 'diagram', 'thumbnail'
  ] as const;

  return (
    <div className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-mincho text-4xl text-takara-cream mb-12">
          画像プレースホルダー デモ
        </h1>

        {/* Common Sizes */}
        <section className="mb-16">
          <h2 className="font-mincho text-2xl text-takara-gold mb-8">
            よく使うサイズ
          </h2>
          <div className="space-y-12">
            {Object.entries(PLACEHOLDER_SIZES).map(([name, size]) => (
              <div key={name} className="space-y-4">
                <h3 className="font-avenir text-takara-cream">
                  {name} ({size.width}x{size.height})
                </h3>
                <div className="bg-takara-navy/20 p-4 rounded-lg">
                  <DynamicImage
                    type={name.includes('video') ? 'video' : 
                          name.includes('map') ? 'map' : 
                          name.includes('document') ? 'document' :
                          name.includes('diagram') ? 'diagram' :
                          name.includes('hero') ? 'hero' : 'photo'}
                    width={size.width}
                    height={size.height}
                    text={`${name} - ${size.width}x${size.height}`}
                    alt={`${name} placeholder`}
                    className="w-full h-auto max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Types */}
        <section className="mb-16">
          <h2 className="font-mincho text-2xl text-takara-gold mb-8">
            すべてのタイプ (800x450)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderTypes.map((type) => (
              <div key={type} className="space-y-4">
                <h3 className="font-avenir text-takara-cream capitalize">
                  {type}
                </h3>
                <div className="bg-takara-navy/20 p-4 rounded-lg">
                  <DynamicImage
                    type={type}
                    width={800}
                    height={450}
                    text={`${type} タイプ`}
                    alt={`${type} placeholder`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Existing Presets */}
        <section>
          <h2 className="font-mincho text-2xl text-takara-gold mb-8">
            既存のプリセット
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-avenir text-takara-cream">
                Ancient Map
              </h3>
              <DynamicImage
                preset="ancientMap"
                alt="Ancient map preset"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-avenir text-takara-cream">
                Drone Footage
              </h3>
              <DynamicImage
                preset="droneFootage"
                alt="Drone footage preset"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-avenir text-takara-cream">
                Hunter License
              </h3>
              <DynamicImage
                preset="hunterLicense"
                alt="Hunter license preset"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Usage Note */}
        <div className="mt-16 p-8 bg-takara-navy/20 rounded-lg border border-takara-gold/20">
          <h3 className="font-mincho text-xl text-takara-gold mb-4">
            使用方法
          </h3>
          <pre className="font-mono text-sm text-takara-cream/80 overflow-x-auto">
{`<DynamicImage
  type="hero"
  width={1920}
  height={1080}
  text="テキスト"
  alt="代替テキスト"
  className="w-full h-full object-cover"
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}