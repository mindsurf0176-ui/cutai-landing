import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CutAI - Edit videos by telling it what you want",
  description: "Learn any video's editing style and apply it to yours. An open-source, local-first AI video editor.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0B] text-zinc-100 antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}