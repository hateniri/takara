import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import NoiseOverlay from "@/components/NoiseOverlay";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { MembershipProvider } from "@/contexts/MembershipContext";

export const metadata: Metadata = {
  title: "株式会社宝探し | 高IQ集団による日本全国の宝探し",
  description: "誰にでも見つけていい宝なんて、きっとない。高IQ集団が最新技術と古代の知恵を融合させ、日本に眠る未知の真実を解き明かす。",
  keywords: "宝探し, 探索, 高IQ, 日本, 知的探求, 古文書, 地図解析",
  authors: [{ name: "株式会社宝探し" }],
  creator: "株式会社宝探し",
  publisher: "株式会社宝探し",
  openGraph: {
    title: "株式会社宝探し",
    description: "高IQ集団による日本全国の宝探し",
    url: "https://takara-sagashi.com",
    siteName: "株式会社宝探し",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社宝探し",
    description: "高IQ集団による日本全国の宝探し",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script src="https://use.typekit.net/yne2hwv.js" strategy="beforeInteractive" />
        <Script
          id="adobe-fonts"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{Typekit.load({async:true});}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-black text-white min-h-screen antialiased">
        <MembershipProvider>
          <NoiseOverlay />
          <Navigation />
          <PageTransition>
            <main className="pt-20 min-h-screen">
              {children}
            </main>
            <Footer />
          </PageTransition>
          <CookieConsent />
        </MembershipProvider>
      </body>
    </html>
  );
}
