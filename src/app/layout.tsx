import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cutai.dev"),
  title: "CutAI - AI Video Editing Reimagined | v0.2.0",
  description: "CutAI is a local-first AI video editor for Mac. Version 0.2.0 introduces Agent Mode, MCP Server compatibility, and EDITSTYLE.md for customizable workflows.",
  keywords: ["CutAI", "AI video editor", "local AI editing", "Agent Mode", "EDITSTYLE.md", "MCP Server", "FFmpeg automation"],
  openGraph: {
    title: "CutAI - AI Video Editing Reimagined | v0.2.0",
    description: "CutAI is a local-first AI video editor for Mac. Version 0.2.0 introduces Agent Mode, MCP Server compatibility, and EDITSTYLE.md for customizable workflows.",
    url: "https://cutai.dev",
    type: "website",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "CutAI v0.2.0" }
    ],
    siteName: "CutAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CutAI - AI Video Editing Reimagined | v0.2.0",
    description: "CutAI is a local-first AI video editor for Mac. Version 0.2.0 introduces Agent Mode, MCP Server compatibility, and EDITSTYLE.md for customizable workflows.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://cutai.dev",
    languages: {
      en: "https://cutai.dev",
      ko: "https://cutai.dev/ko",
    },
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "CutAI",
                "description": "Open-source, local-first AI video editor with natural language instructions. Features Agent Mode for autonomous editing, EDITSTYLE.md for portable editing styles, and MCP Server for AI agent integration.",
                "url": "https://cutai.dev",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "macOS",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
                "author": { "@type": "Person", "name": "Minseo" },
                "softwareVersion": "0.2.0",
                "license": "https://opensource.org/licenses/MIT",
                "downloadUrl": "https://pypi.org/project/cutai/",
                "codeRepository": "https://github.com/mindsurf0176-ui/cutai"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is CutAI?",
                    "acceptedAnswer": { "@type": "Answer", "text": "CutAI is an open-source, local-first AI video editor. You describe edits in natural language, and CutAI analyzes scenes, generates an edit plan, and renders the result — all on your machine. No cloud upload required." }
                  },
                  {
                    "@type": "Question",
                    "name": "Is CutAI free?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes, CutAI is completely free and open source under the MIT license. Install via pip install cutai or download the macOS desktop app." }
                  },
                  {
                    "@type": "Question",
                    "name": "Does CutAI upload my videos to the cloud?",
                    "acceptedAnswer": { "@type": "Answer", "text": "No. CutAI is 100% local-first. All video analysis, planning, and rendering happens on your machine. Your videos never leave your computer." }
                  },
                  {
                    "@type": "Question",
                    "name": "What is EDITSTYLE.md?",
                    "acceptedAnswer": { "@type": "Answer", "text": "EDITSTYLE.md is a portable, markdown-based format for video editing styles — inspired by Google Stitch's DESIGN.md for UI design. It captures rhythm, transitions, color grading, audio, and subtitle preferences in a human-readable file that AI editors can follow automatically." }
                  },
                  {
                    "@type": "Question",
                    "name": "What is Agent Mode in CutAI?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Agent Mode is goal-driven autonomous video editing. Instead of step-by-step instructions, you give CutAI a high-level goal like 'make a warm casual vlog'. The agent analyzes, plans, renders, self-evaluates, and iterates until the result meets the quality threshold." }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use CutAI with Claude Code or Cursor?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. CutAI includes an MCP (Model Context Protocol) Server that exposes 8 tools — analyze, plan, edit, agent, style-extract, highlights, engagement, and editstyle-parse — compatible with Claude Code, Cursor, Gemini CLI, and any MCP-compatible AI coding agent." }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0A0A0B] text-zinc-100 antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}