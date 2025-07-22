import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import NoiseOverlay from "@/components/NoiseOverlay";

export const metadata: Metadata = {
  title: "株式会社宝探し",
  description: "誰にでも見つけていい宝なんて、きっとない",
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
        <NoiseOverlay />
        <Navigation />
        <PageTransition>
          <main className="pt-20">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
