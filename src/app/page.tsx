import { Download, MessageSquare, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

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
            <a href="/ko" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">
              한국어
            </a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href="#download" className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
              <Sparkles className="w-3.5 h-3.5" />
              AI-powered video editing
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-zinc-900">
              Edit videos by<br />
              <span className="text-indigo-600">talking to AI.</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-xl mx-auto">
              Descript made editing like writing.<br />
              We made it like talking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#download" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                <Download className="w-4 h-4" />
                Download for macOS
              </a>
              <a href="https://github.com/mindsurf0176-ui/cutai" className="flex items-center gap-2 bg-zinc-100 text-zinc-700 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
                View on GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Demo Video */}
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-950 shadow-2xl shadow-zinc-900/10 overflow-hidden aspect-video">
            <video 
              src="/videos/demo.mp4?v=10" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">How it works</h2>
            <p className="text-zinc-500 text-lg">Three steps. No timeline. No learning curve.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-5">1</div>
              <h3 className="text-lg font-bold mb-2">Import your video</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Drag and drop any video file. CutAI analyzes scenes, speech, and structure automatically.</p>
            </div>
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-5">2</div>
              <h3 className="text-lg font-bold mb-2">Tell AI what you want</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">"Remove silence, add subtitles, make it cinematic." Just type naturally — CutAI builds an edit plan.</p>
            </div>
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-5">3</div>
              <h3 className="text-lg font-bold mb-2">Review & render</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Preview the plan, refine with follow-up messages, then render your final video. All local.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chat-first UX */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4 border border-indigo-100">
                <MessageSquare className="w-3.5 h-3.5" />
                Chat-first editing
              </div>
              <h2 className="text-3xl font-bold mb-4">Your editor is a conversation.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed">
                No timeline. No razor tool. No 47-step tutorial. Just tell CutAI what you want in plain language. Refine with follow-ups until it's perfect.
              </p>
              <div className="space-y-3">
                {[
                  "\"Remove all the awkward pauses\"",
                  "\"Add subtitles in yellow, MKBHD style\"",
                  "\"Speed up the boring middle part\"",
                  "\"Make the intro shorter, under 5 seconds\"",
                ].map((example, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-50 border border-zinc-100 text-sm text-zinc-600">
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

      {/* Features grid */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Built for real editing</h2>
            <p className="text-zinc-500 text-lg">Not a toy. A serious tool that runs locally.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "100% Local", desc: "Nothing leaves your machine. No cloud. No upload." },
              { icon: Sparkles, title: "Smart Cuts", desc: "AI detects scenes, silence, and low-energy segments." },
              { icon: MessageSquare, title: "Natural Language", desc: "Edit by describing what you want in plain words." },
              { icon: Shield, title: "Open Source", desc: "MIT licensed. Inspect, modify, contribute." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white border border-zinc-100 p-6 rounded-xl shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start editing by talking.</h2>
          <p className="text-zinc-500 mb-8">
            Free. Open source. No account required. Just download and go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors shadow-lg">
              <Download className="w-5 h-5" />
              Download for macOS
            </a>
          </div>
          <p className="text-zinc-400 text-sm mt-4">macOS 12+ · Apple Silicon · v0.1.0-alpha</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10 text-center text-zinc-400 text-sm">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://github.com/mindsurf0176-ui/cutai" className="hover:text-zinc-900 transition-colors">GitHub</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Discord</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
        </div>
        <p>Open source (MIT) · 100% local processing · No data collection</p>
      </footer>
    </main>
  );
}
