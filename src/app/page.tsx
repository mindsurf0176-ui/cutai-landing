"use client";

import { Download, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, ArrowRight, Terminal, Check, Bot, FileText, Plug } from "lucide-react";
import { Animate, FloatingGlow, TypingRotation, CountUp, DemoVideo } from "@/components/motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base tracking-tight">
            <img src="/icon.svg" className="w-6 h-6" alt="CutAI" />
            CutAI
          </div>
          <div className="flex items-center gap-5">
            <a href="/ko" className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm">한국어</a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm">GitHub</a>
            <a href="#download" className="bg-zinc-900 text-white px-3.5 py-1.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />
        <FloatingGlow className="w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px] top-[-200px] left-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <Animate className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-[56px] md:text-[80px] font-black tracking-[-0.03em] mb-8 leading-[0.95] text-zinc-900">
              Video editing<br />without the editing.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-4 max-w-xl mx-auto leading-relaxed font-light">
              Just say what you want.
            </p>
            <div className="h-10 mb-8 flex flex-col items-center">
              <span className="text-lg md:text-xl text-indigo-600 font-medium">
                <TypingRotation phrases={[
                  "\"Remove all the dead air\"",
                  "\"Add subtitles, cinematic style\"",
                  "\"Cut the intro to 5 seconds\"",
                  "\"Warm up the colors\"",
                  "\"Add background music\"",
                ]} />
              </span>
              <span className="mt-4 inline-block px-3 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                ✨ v0.2.0 — Agent Mode, MCP Server, EDITSTYLE.md
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#download" className="flex items-center gap-2.5 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-semibold text-[15px] hover:bg-zinc-800 transition-all hover:shadow-2xl hover:shadow-zinc-900/20 active:scale-[0.98]">
                <Download className="w-[18px] h-[18px]" />
                Download for Free
              </a>
              <a href="https://github.com/mindsurf0176-ui/cutai" className="flex items-center gap-2 text-zinc-400 px-6 py-4 rounded-2xl font-medium text-[15px] hover:text-zinc-900 transition-colors">
                View source
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Animate>

          <Animate delay={0.2} variant="scaleIn">
            <div className="relative mx-auto max-w-[1100px]">
              <div className="absolute -inset-4 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.3)] overflow-hidden aspect-video">
                <DemoVideo src="/videos/demo.mp4?v=10" className="w-full h-full" />
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
        <FloatingGlow className="w-[400px] h-[400px] bg-violet-400/8 rounded-full blur-[100px] top-[10%] right-[-100px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Animate className="text-center mb-20">
            <p className="text-indigo-600 font-semibold text-sm mb-4 tracking-wide uppercase">Features</p>
            <h2 className="text-4xl font-bold mb-4">What's under the hood</h2>
            <p className="text-zinc-400 text-lg">Real features. All running locally on your Mac.</p>
          </Animate>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Scissors, from: "from-rose-50/80", to: "to-orange-50/30", border: "border-rose-100/60", iconColor: "text-rose-500", title: "Silence & dead air removal", desc: "Scene detection + audio analysis finds gaps. FFmpeg cuts them out cleanly." },
              { icon: Type, from: "from-sky-50/80", to: "to-indigo-50/30", border: "border-sky-100/60", iconColor: "text-sky-500", title: "Whisper-powered subtitles", desc: "Transcribes speech locally with Whisper, then burns styled subtitles into the video." },
              { icon: Palette, from: "from-violet-50/80", to: "to-purple-50/30", border: "border-violet-100/60", iconColor: "text-violet-500", title: "Color grading presets", desc: "FFmpeg video filter chains for cinematic, warm, cool, and neutral looks." },
              { icon: Music, from: "from-emerald-50/80", to: "to-teal-50/30", border: "border-emerald-100/60", iconColor: "text-emerald-500", title: "BGM mixing & speed control", desc: "Mix background music, adjust playback speed, and add transitions." },
            ].map(({ icon: Icon, from, to, border, iconColor, title, desc }, i) => (
              <Animate key={i} delay={i * 0.1}>
                <div className={`bg-gradient-to-br ${from} ${to} border ${border} p-10 rounded-2xl group hover:shadow-lg transition-all duration-300 h-full`}>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className={iconColor} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-[15px]">{desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* What's New in v0.2.0 */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">What's new in v0.2.0</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Bot, title: "Agent Mode", description: "Your AI editing agent analyzes goals, plans iterations, renders, and evaluates autonomously." },
              { icon: FileText, title: "EDITSTYLE.md", description: "Define your editing style in a portable markdown format inspired by DESIGN.md." },
              { icon: Plug, title: "MCP Server", description: "Integrate CutAI with Claude Code, Cursor, and other MCP-compatible agents." },
            ].map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-md">
                  <Icon size={28} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional edits for MCP and ETC */}
      {/* Additional component structure follows */}
    </main>
  );
}