import { Download, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, ArrowRight, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
            <img src="/icon.svg" className="w-7 h-7" alt="CutAI" />
            CutAI
          </div>
          <div className="flex items-center gap-6">
            <a href="/ko" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">한국어</a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">GitHub</a>
            <a href="#download" className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-[64px] font-extrabold tracking-tight mb-6 leading-[1.1] text-zinc-900">
              Video editing<br />without the editing.
            </h1>
            <p className="text-xl text-zinc-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Just say what you want. CutAI analyzes your video and edits it — cuts, subtitles, color, music — all from one sentence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#download" className="flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-zinc-800 transition-colors">
                <Download className="w-4 h-4" />
                Download for macOS
              </a>
              <a href="https://github.com/mindsurf0176-ui/cutai" className="flex items-center gap-2 text-zinc-500 px-7 py-3.5 rounded-xl font-semibold text-base hover:text-zinc-900 transition-colors">
                View source
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Demo */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.25)] overflow-hidden aspect-video">
              <video src="/videos/demo.mp4?v=10" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How it actually works — honest, concrete */}
      <section className="py-28 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You talk. It edits.
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
              CutAI uses an LLM to understand your intent, then runs FFmpeg pipelines to cut, subtitle, color grade, and render your video. Everything happens on your machine.
            </p>
          </div>

          {/* Chat mockup — the real product */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#16162b] rounded-2xl border border-zinc-800/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">✦</span>
                </div>
                <span className="text-white/80 text-sm font-semibold">CutAI</span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              <div className="p-6 space-y-4 text-[15px]">
                <div className="bg-white/5 border border-white/5 px-5 py-3 rounded-xl text-white/50 text-sm">
                  ✅ <span className="text-white/90 font-medium">vlog.mp4</span> loaded — 4:32, 18 scenes detected, transcript ready
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm max-w-[80%] leading-relaxed">
                    Remove all the dead air, add subtitles, and warm up the colors.
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/5 px-5 py-4 rounded-xl rounded-bl-sm text-white/85 leading-[1.8]">
                  Got it. Here's what I'll do:<br /><br />
                  <span className="text-indigo-400">✂️</span> <span className="text-white font-medium">Cut 3 silent segments</span> — saves 47s<br />
                  <span className="text-indigo-400">📝</span> <span className="text-white font-medium">Burn in subtitles</span> — Whisper transcription<br />
                  <span className="text-indigo-400">🎨</span> <span className="text-white font-medium">Color grade</span> — warm cinematic preset<br /><br />
                  <span className="text-white/40">Ready to render, or want to adjust anything?</span>
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm">
                    Ship it 🚀
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-white/5 flex items-center gap-3">
                <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/5 flex items-center px-4 text-sm text-white/25">
                  Describe your edit...
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it actually does — honest feature list */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">What's under the hood</h2>
            <p className="text-zinc-500 text-lg">Real features. All running locally on your Mac.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Scissors size={22} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Silence & dead air removal</h3>
              <p className="text-zinc-500 leading-relaxed">Scene detection + audio analysis finds gaps. FFmpeg cuts them out cleanly.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Type size={22} className="text-sky-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Whisper-powered subtitles</h3>
              <p className="text-zinc-500 leading-relaxed">Transcribes speech locally with Whisper, then burns styled subtitles into the video.</p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Palette size={22} className="text-violet-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Color grading presets</h3>
              <p className="text-zinc-500 leading-relaxed">FFmpeg video filter chains for cinematic, warm, cool, and neutral looks with adjustable intensity.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Music size={22} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">BGM mixing & speed control</h3>
              <p className="text-zinc-500 leading-relaxed">Mix background music, adjust playback speed, and add transitions between scenes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLI + Desktop */}
      <section className="py-28 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">CLI or GUI. Your call.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed">
                Power users get a Python CLI with full pipeline control. Everyone else gets a native macOS app with a chat interface. Same engine underneath.
              </p>
              <div className="bg-zinc-900 rounded-xl p-5 font-mono text-sm text-zinc-300 leading-relaxed">
                <span className="text-zinc-500">$</span> pip install cutai<br />
                <span className="text-zinc-500">$</span> cutai edit vlog.mp4 -i <span className="text-emerald-400">"remove silence, add subs"</span><br />
                <span className="text-zinc-500 text-xs mt-2 block">→ Analyzing... 18 scenes, 3 cuts, rendering...</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
                <Terminal size={20} className="text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">CLI (pip install cutai)</h3>
                  <p className="text-sm text-zinc-500">Full pipeline control. Scriptable. Batch processing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
                <Sparkles size={20} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Desktop App (macOS)</h3>
                  <p className="text-sm text-zinc-500">Chat interface. Drag & drop. No terminal needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm text-zinc-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Shield size={14} /> MIT License</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Zap size={14} /> 100% Local</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">🍎 macOS Native</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Sparkles size={14} /> No Account</div>
          </div>

          <h2 className="text-4xl font-extrabold mb-4">Try it now.</h2>
          <p className="text-zinc-500 mb-8 text-lg">Free, open source, runs on your machine.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-zinc-800 transition-all hover:shadow-xl">
              <Download className="w-5 h-5" />
              Download for macOS
            </a>
            <div className="bg-zinc-100 px-6 py-4 rounded-xl font-mono text-sm text-zinc-600">
              pip install cutai
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-6">macOS 12+ · Apple Silicon · v0.1.0-alpha · Windows/Linux soon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10 text-center text-zinc-400 text-sm">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://github.com/mindsurf0176-ui/cutai" className="hover:text-zinc-900 transition-colors">GitHub</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Discord</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
        </div>
        <p>Open source (MIT) · 100% local · No data collection</p>
      </footer>
    </main>
  );
}
