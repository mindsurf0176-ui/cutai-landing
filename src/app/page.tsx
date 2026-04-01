import { Download, MessageSquare, Sparkles, Zap, Shield, ArrowRight, Scissors, Type, Palette, Music, Quote } from "lucide-react";

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
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 mb-10">
              <span>✦ Natural language editing</span>
              <span>✦ Auto subtitles via AI</span>
              <span>✦ Smart cuts & silence removal</span>
              <span>✦ 100% local, open source</span>
            </div>
            <a href="#download" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
              <Download className="w-4 h-4" />
              Download for Free
            </a>
          </div>

          {/* Demo Video */}
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-950 shadow-2xl shadow-zinc-900/10 overflow-hidden aspect-video">
            <video src="/videos/demo.mp4?v=10" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Feature 1: Chat editing */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Tell AI what you want.<br />It edits for you.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed">
                No timeline. No learning curve. Just describe your edit in plain English — CutAI understands context, detects scenes, and builds an edit plan automatically.
              </p>
              <div className="space-y-3">
                {[
                  "\"Remove all the awkward pauses\"",
                  "\"Add subtitles, make it cinematic\"",
                  "\"Speed up the boring middle part\"",
                  "\"Cut the intro to under 5 seconds\"",
                ].map((example, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white border border-zinc-100 text-sm text-zinc-600 shadow-sm">
                    <span className="text-indigo-500 font-mono text-xs">→</span>
                    {example}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat mockup */}
            <div className="bg-[#16162b] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-indigo-600 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">✦</span>
                </div>
                <span className="text-white/80 text-xs font-semibold">CutAI</span>
              </div>
              <div className="p-5 space-y-3 text-sm">
                <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-lg text-white/60 text-xs">
                  ✅ <span className="text-white/90 font-medium">vlog.mp4</span> loaded (4:32)
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg rounded-br-sm max-w-[75%]">
                    Remove silence and add subtitles, cinematic style
                  </div>
                </div>
                <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-lg rounded-bl-sm text-white/80 leading-relaxed">
                  Here's my plan:<br /><br />
                  • <span className="text-white font-medium">Remove Silence</span> — 3 segments<br />
                  • <span className="text-white font-medium">Color Grade</span> — Cinematic warm<br />
                  • <span className="text-white font-medium">Subtitles</span> — Burned-in, bold
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg rounded-br-sm">
                    Looks great, render it! 🎬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Smart editing capabilities */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Powerful yet simple features</h2>
          <p className="text-zinc-500 text-lg">Everything you need, nothing you don't.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {[
            { icon: Scissors, title: "Smart Silence Removal", desc: "AI detects dead air, filler gaps, and low-energy segments. Remove them all with one command." },
            { icon: Type, title: "Auto Subtitles (Whisper)", desc: "Transcribe speech and burn in styled subtitles automatically. Supports English, Korean, and 50+ languages." },
            { icon: Palette, title: "AI Color Grading", desc: "\"Make it cinematic\" — CutAI applies color profiles inspired by popular creators and film looks." },
            { icon: Music, title: "Background Music Mixing", desc: "Add royalty-free BGM that dynamically adjusts to your video's energy and pacing." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof / Testimonials */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">People are loving it</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "I edited a 30-minute vlog in under 2 minutes. Just told it what to cut and it nailed it.", author: "YouTuber, 12K subs" },
              { quote: "The chat interface makes so much more sense than a timeline. Why didn't anyone do this before?", author: "Freelance marketer" },
              { quote: "Finally a video editor I can actually use. I have zero editing skills and this just works.", author: "Online course creator" },
            ].map(({ quote, author }, i) => (
              <div key={i} className="bg-white border border-zinc-100 p-6 rounded-2xl shadow-sm">
                <Quote size={20} className="text-indigo-300 mb-3" />
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">{quote}</p>
                <p className="text-xs text-zinc-400 font-medium">— {author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Use it for anything</h2>
            <p className="text-zinc-500 text-lg">From YouTube videos to corporate training.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🎬", title: "YouTube Videos", desc: "Edit vlogs, tutorials, and reviews by just talking." },
              { emoji: "📱", title: "Short-form Content", desc: "Turn long videos into TikTok and Shorts clips." },
              { emoji: "🎙️", title: "Podcasts", desc: "Remove filler words and add captions automatically." },
              { emoji: "🏢", title: "Corporate / Training", desc: "Create polished training videos without an editor." },
            ].map(({ emoji, title, desc }, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2"><Shield size={16} /> Open Source (MIT)</div>
          <div className="flex items-center gap-2"><Zap size={16} /> 100% Local Processing</div>
          <div className="flex items-center gap-2"><Sparkles size={16} /> No Account Required</div>
          <div className="flex items-center gap-2">🍎 macOS Native (Tauri)</div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-indigo-600 font-semibold text-sm mb-4">AI will help you</p>
          <h2 className="text-4xl font-extrabold mb-4">Start editing by talking.</h2>
          <p className="text-zinc-500 mb-8 text-lg">Free. Open source. No signup. Download and go.</p>
          <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-zinc-800 transition-colors shadow-lg">
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
