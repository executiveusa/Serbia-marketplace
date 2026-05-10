import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serbia Marketplace — Open Market Serbia",
  description: "A modern open marketplace connecting buyers and sellers across Serbia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${GeistSans.variable} ${GeistMono.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
