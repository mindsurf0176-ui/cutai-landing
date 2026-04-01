import { Terminal, Wand2, Dna, Video, Download } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <img src="/icon.svg" className="w-8 h-8 drop-shadow-md" alt="CutAI Logo" />
            CutAI
          </div>
          <div className="flex items-center gap-4">
            <a href="/ko" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium mr-4">
              🇰🇷 한국어
            </a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0B] to-[#0A0A0B] -z-10" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-balance leading-tight">
            Edit videos by telling it <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">what you want.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-balance">
            One sentence → scene detection, smart cuts, auto subtitles, color grading. <br className="hidden md:block" />
            <strong className="text-zinc-200 font-semibold">Plus: learn any video's editing style and reuse it.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-zinc-900 border border-white/10 rounded-xl px-6 py-3 flex items-center gap-4 text-sm font-mono text-zinc-300 shadow-2xl">
              <span className="text-blue-400">$</span> pip install cutai
              <button className="text-zinc-500 hover:text-white transition-colors" title="Copy">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>
            <a href="#desktop" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
              <Download className="w-4 h-4" />
              Download macOS App
            </a>
          </div>

          {/* Hero Demo Video */}
          <div className="mt-20 relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
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

      {/* Natural Language Section */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Descript made editing like writing. We made it like talking.</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Describe your edits in plain English or Korean. CutAI analyzes your video, detects scene boundaries, and translates your intent into a concrete edit plan.
              </p>
              <ul className="space-y-4">
                {[
                  "Scene detection & silence trimming",
                  "Auto subtitles via Whisper",
                  "Color grading (warm, cinematic, cool)",
                  "Background music mixing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0D0D0E] border border-white/10 rounded-2xl p-6 font-mono text-sm leading-relaxed shadow-xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-zinc-400 mb-4">$ cutai plan vlog.mp4 -i "cut dead air and add subtitles"</p>
              <div className="text-blue-300 mb-2">🎬 Analyzing vlog.mp4...</div>
              <div className="text-zinc-300 pl-4 mb-4">
                ✓ Detected 14 scenes<br/>
                ✓ Transcribed speech<br/>
                ✓ Found 3 low-value segments
              </div>
              <div className="text-purple-300 mb-2">📋 Edit Plan:</div>
              <div className="text-zinc-300 pl-4">
                • Remove dead air (0:12-0:15, 0:45-0:48)<br/>
                • Add burned-in subtitles<br/>
                • Apply neutral color grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Style Transfer (EST) Section */}
      <section className="py-32 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-6xl mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
            <Dna className="w-4 h-4" /> Edit Style Transfer (EST)
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Steal any YouTuber's editing style.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-balance">
            Extract the editing patterns from a reference video and apply them to your own footage. It's like style transfer, but for editing decisions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-lg font-bold mb-2">Pick a reference</h3>
              <p className="text-zinc-400 text-sm">Give CutAI a video from a creator whose style you admire.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative">
              <div className="hidden md:block absolute top-12 -left-4 w-8 h-px bg-white/20" />
              <div className="w-12 h-12 rounded-xl bg-blue-900/50 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-500/20">2</div>
              <h3 className="text-lg font-bold mb-2">Extract Edit DNA</h3>
              <p className="text-zinc-400 text-sm">It automatically analyzes pacing, cuts, colors, and subtitle patterns.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative">
              <div className="hidden md:block absolute top-12 -left-4 w-8 h-px bg-white/20" />
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-lg font-bold mb-2">Apply to your video</h3>
              <p className="text-zinc-400 text-sm">Render your raw footage using the extracted style.</p>
            </div>
          </div>

          <div className="mt-16 bg-[#0D0D0E] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl">
            <div className="flex-1 font-mono text-sm">
              <p className="text-zinc-500 mb-4"># Extract style from MKBHD</p>
              <p className="text-zinc-300 mb-6">$ cutai style-extract reference.mp4 -o style.yaml</p>
              
              <div className="bg-black/50 p-4 rounded-lg border border-white/5 text-zinc-400">
                <span className="text-purple-400">rhythm:</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">mean_scene_duration:</span> 2.4<br/>
                &nbsp;&nbsp;<span className="text-blue-300">pacing_curve:</span> "dynamic"<br/>
                <span className="text-purple-400">visual:</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">temperature:</span> "warm"<br/>
                <span className="text-purple-400">subtitles:</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">presence_ratio:</span> 0.85
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-2">What does Edit DNA capture?</h4>
              <ul className="space-y-4 mt-6">
                <li><strong className="text-white block">✂️ Cut Rhythm</strong> <span className="text-sm text-zinc-400">Scene durations and pacing curves</span></li>
                <li><strong className="text-white block">🎨 Visual Style</strong> <span className="text-sm text-zinc-400">Color temperature, brightness, saturation</span></li>
                <li><strong className="text-white block">📝 Subtitles</strong> <span className="text-sm text-zinc-400">Timing patterns and presence</span></li>
                <li><strong className="text-white block">🎵 Audio Mixing</strong> <span className="text-sm text-zinc-400">BGM presence and volume balance</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop App */}
      <section id="desktop" className="py-24 bg-blue-950/10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prefer a GUI? Try the Desktop App.</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            A native macOS app built with Tauri. Drag and drop videos, pick a style preset, and render locally. No command line required.
          </p>
          <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
            <Download className="w-5 h-5" />
            Download for macOS (Alpha)
          </a>
          <p className="text-zinc-500 text-sm mt-4">Requires macOS 12+ (Apple Silicon)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-zinc-500 text-sm">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="https://github.com/mindsurf0176-ui/cutai" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <p>100% Local. Open Source (MIT). No cloud upload required.</p>
      </footer>
    </main>
  );
}