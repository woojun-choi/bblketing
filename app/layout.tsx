import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const MEAT_TITLE = "인테리어 전문 브랜드블로그 마케팅, 쁠케팅";
const META_OG_TITLE = "인테리어 전문 브랜드블로그 마케팅, 쁠케팅";
const META_OG_DESCRIPTION = "\“대표님의 이름이 선택의 기준이 될 수 있도록\” 월 단위 계약, 장기계약 강요 절대 없음, 단순 상위노출이 아닌 '구매 전환 중심' 콘텐츠 기획을 합니다.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: MEAT_TITLE,
  description: META_OG_DESCRIPTION,
  openGraph: {
    type: "website",
    title: META_OG_TITLE,
    description: META_OG_DESCRIPTION,
    siteName: MEAT_TITLE,
    images: [
      {
        url: "https://bblketing.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "쁠케팅",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
