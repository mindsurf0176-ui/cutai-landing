import { Download, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, MessageSquare, ArrowRight } from "lucide-react";

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
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-indigo-600 font-semibold text-sm mb-4">AI will help you</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-zinc-900">
              Anyone can edit videos,<br />easily and joyfully.
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Tell AI what you want, and it edits for you.<br />No timeline. No learning curve.
            </p>
            <a href="#download" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
              <Download className="w-4 h-4" />
              Download for Free
            </a>
          </div>

          {/* Demo */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden aspect-video">
              <video src="/videos/demo.mp4?v=10" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Chat editing */}
      <section className="py-28 bg-gradient-to-b from-indigo-50/50 to-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4 border border-indigo-100">
              <MessageSquare className="w-3.5 h-3.5" />
              Chat-first editing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Edit by talking.<br />AI does the rest.
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto">
              Instead of dragging a timeline, chat with AI to describe your edits.
            </p>
          </div>

          {/* Large chat mockup */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#16162b] rounded-2xl border border-zinc-800/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">✦</span>
                </div>
                <span className="text-white/80 text-sm font-semibold">CutAI</span>
                <div className="flex-1" />
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="p-6 space-y-4 text-[15px]">
                <div className="bg-white/5 border border-white/5 px-5 py-3 rounded-xl text-white/50 text-sm">
                  ✅ <span className="text-white/90 font-medium">vlog.mp4</span> loaded — 4:32, 1920×1080
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm max-w-[80%] leading-relaxed">
                    Remove silence, add subtitles, and color grade it cinematic.
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/5 px-5 py-4 rounded-xl rounded-bl-sm text-white/85 leading-[1.8]">
                  Here's my edit plan:<br /><br />
                  <span className="text-indigo-400 font-medium">①</span> <span className="text-white font-medium">Remove Silence</span> — 3 segments (47s saved)<br />
                  <span className="text-indigo-400 font-medium">②</span> <span className="text-white font-medium">Color Grade</span> — Cinematic warm (Teal & Orange)<br />
                  <span className="text-indigo-400 font-medium">③</span> <span className="text-white font-medium">Subtitles</span> — Burned-in, bold, English<br /><br />
                  <span className="text-white/40">Preview first, or render now?</span>
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm">
                    Render it! 🎬
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-white/5 flex items-center gap-3">
                <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/5 flex items-center px-4 text-sm text-white/25">
                  Tell me what to edit...
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards — colored 2x2 */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Powerful features</h2>
            <p className="text-zinc-500 text-lg">Everything you need. Nothing you don't.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Scissors size={22} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Silence Removal</h3>
              <p className="text-zinc-500 leading-relaxed">AI detects dead air, filler gaps, and low-energy segments. Remove them all with one command.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Type size={22} className="text-sky-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Auto Subtitles (Whisper AI)</h3>
              <p className="text-zinc-500 leading-relaxed">Transcribe speech and burn in styled subtitles automatically. 50+ languages supported.</p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Palette size={22} className="text-violet-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Color Grading</h3>
              <p className="text-zinc-500 leading-relaxed">"Make it cinematic" — CutAI applies color profiles inspired by popular creators and film looks.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Music size={22} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Background Music</h3>
              <p className="text-zinc-500 leading-relaxed">Add royalty-free BGM that dynamically adjusts to your video's energy and pacing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-28 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Built for every kind of video</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🎬", title: "YouTube Videos", desc: "Edit vlogs, tutorials, reviews by talking.", bg: "bg-amber-50 border-amber-100" },
              { emoji: "📱", title: "Short-form", desc: "Turn long videos into TikTok & Shorts.", bg: "bg-pink-50 border-pink-100" },
              { emoji: "🎙️", title: "Podcasts", desc: "Remove filler words + auto captions.", bg: "bg-sky-50 border-sky-100" },
              { emoji: "🏢", title: "Corporate", desc: "Polished training videos, no editor needed.", bg: "bg-emerald-50 border-emerald-100" },
            ].map(({ emoji, title, desc, bg }, i) => (
              <div key={i} className={`text-center p-8 rounded-2xl border ${bg}`}>
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-zinc-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Shield size={14} /> Open Source (MIT)</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Zap size={14} /> 100% Local</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Sparkles size={14} /> No Account</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">🍎 macOS Native</div>
          </div>

          <p className="text-indigo-600 font-semibold text-sm mb-4">AI will help you</p>
          <h2 className="text-4xl font-extrabold mb-4">Start editing by talking.</h2>
          <p className="text-zinc-500 mb-8 text-lg">Free. Open source. No signup. Download and go.</p>
          <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-zinc-800 transition-all hover:shadow-xl">
            <Download className="w-5 h-5" />
            Download for macOS
          </a>
          <p className="text-zinc-400 text-sm mt-4">macOS 12+ · Apple Silicon · v0.1.0-alpha</p>
          <p className="text-zinc-400 text-sm mt-1">Windows & Linux coming soon</p>
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
