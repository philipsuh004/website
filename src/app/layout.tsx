import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip Suh — Deep Sea",
  description: "Portfolio set in the deep ocean: calm, immersive, bioluminescent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[var(--abyss-bottom)] text-[var(--ink)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
