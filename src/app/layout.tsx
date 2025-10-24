import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philip Suh - Personal Website",
  description: "My personal website, a playground for projects and ideas that I keep building over time.",
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
