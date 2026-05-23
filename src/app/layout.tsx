import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veldt Pitch — Sponsor-Ready Media Kits for Podcasters",
  description: "Stop sending ugly PDFs to sponsors. Veldt Pitch generates live, professional media kits in 2 minutes.",
  icons: {
    icon: [
      { url: "/veldt-favicon.ico", type: "image/x-icon" },
      { url: "/veldt-favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Veldt Pitch",
    description: "Stop sending ugly PDFs to sponsors. Veldt Pitch generates live, professional media kits in 2 minutes.",
  },
  twitter: {
    title: "Veldt Pitch",
    description: "Stop sending ugly PDFs to sponsors. Veldt Pitch generates live, professional media kits in 2 minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
