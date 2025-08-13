'use client';

import "./globals.css";
import { Dancing_Script } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-logo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0d1117] text-white">
      <head>
        <title>Fabien Halaby</title>
      </head>
      <body className={`min-h-screen flex flex-col ${dancingScript.variable} font-sans`}>
        <Header />
        <main className="flex-1 pt-20 max-w-7xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}