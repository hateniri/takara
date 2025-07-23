# 画像プレースホルダー仕様書

このドキュメントは、宝探しウェブサイトで使用される画像プレースホルダーの仕様を記載しています。

## 実装済みのプレースホルダー

### 1. ホームページ (`/`)
- **古地図**: 600x450px (aspect-ratio: 4:3) - `DynamicImage preset="ancientMap"`
- **動画サムネイル**: 640x360px (aspect-ratio: 16:9) - 探索記録用
- **考察図解**: 640x360px (aspect-ratio: 16:9) - 考察記事用

### 2. 探索記録ページ (`/exploration`)
- **ドローン映像**: 640x360px (aspect-ratio: 16:9) - `DynamicImage preset="droneFootage"`
- **フィールド写真**: 200x200px (aspect-ratio: 1:1) - 正方形サムネイル

### 3. 考察・研究ページ (`/insight`)
- **記事画像**: 800x600px (aspect-ratio: 4:3) - 地図、図解、スケッチ用
- **詳細ページ画像**: 800x600px (aspect-ratio: 4:3) - ドキュメント画像

### 4. 会員サイト (`/members`)
- **ヒーローバナー**: 1920x600px - Featured コンテンツ用
- **コンテンツカード**: 640x360px (aspect-ratio: 16:9) - 動画・記事サムネイル

### 5. 認証ページ (`/auth`)
- **ハンターライセンス**: 400x250px - `DynamicImage preset="hunterLicense"`

## プレースホルダーのタイプ

### `type` パラメータで指定可能：
- **hero**: ヒーローバナー用（グラデーション背景）
- **video**: 動画サムネイル（再生ボタン付き）
- **photo**: 写真プレースホルダー（カメラアイコン）
- **map**: 地図用（グリッド線と位置マーカー）
- **document**: 文書用（紙のテクスチャ）
- **diagram**: 図解用（接続線とノード）
- **thumbnail**: 汎用サムネイル

## 使用方法

```jsx
// サイズ指定でプレースホルダーを生成
<DynamicImage
  type="hero"
  width={1920}
  height={1080}
  text="メインビジュアル"
  alt="Hero image"
  className="w-full h-full object-cover"
/>

// プリセットを使用
<DynamicImage
  preset="ancientMap"
  alt="古地図"
  className="w-full h-full object-cover"
/>
```

## カラーパレット
- 背景: `#1a1a1a` ~ `#2a2416`
- アクセント: `#d4af37` (takara-gold)
- テキスト: `#f5f5dc` (takara-cream)

## 今後Photoshopで作成予定の画像

1. **ヒーローイメージ**
   - トップページメインビジュアル
   - 各ページのヒーローバナー

2. **探索記録**
   - ドローン空撮写真
   - 現地調査写真
   - 地形図・航空写真

3. **考察資料**
   - 古文書のスキャン画像
   - 手描きの図解・スケッチ
   - データ分析グラフ

4. **会員コンテンツ**
   - 動画サムネイル
   - レポート表紙
   - ミーティング風景

5. **その他**
   - チームメンバーのシルエット
   - 装備品・道具の写真
   - 発見物の記録写真