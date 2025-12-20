import type { Metadata } from "next";
import { Geist, Geist_Mono, Ruslan_Display, Heebo } from "next/font/google";
import "./globals.css";

const rusSans = Ruslan_Display({
  variable: "--font-ruslan_display",
  subsets: ["latin"],
  weight: "400"
});

const hebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: "100"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "abdulzz.studio",
  description: "Abdulzz Studio | Custom Web Design and Saas Development - abdullzz.studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Preload background images here */}
        <link rel="preload" href="/images/bg-1.png" as="image" />
        <link rel="preload" href="/images/bg-1.jpg" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rusSans.variable} ${hebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
