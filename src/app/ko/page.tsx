import { Terminal, Wand2, Dna, Video, Download } from "lucide-react";

export default function HomeKo() {
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
            <a href="/" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium mr-4">
              🇺🇸 English
            </a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub 별 주기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A0A0B] to-[#0A0A0B] -z-10" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-balance leading-tight break-keep">
            원하는 대로 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">말로 편집하는 비디오.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-balance break-keep">
            한 문장이면 충분합니다 → 장면 인식, 스마트 컷, 자동 자막, 색보정까지. <br className="hidden md:block" />
            <strong className="text-zinc-200 font-semibold">그리고 다른 영상의 편집 스타일을 복제해서 내 영상에 적용하세요.</strong>
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
              macOS 앱 다운로드
            </a>
          </div>

          {/* Hero Demo Video */}
          <div className="mt-20 relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
            <video 
              src="/videos/demo.mp4" 
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
              <h2 className="text-3xl font-bold mb-4 break-keep">타임라인 드래그는 이제 그만. 그냥 말하세요.</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed break-keep">
                한국어나 영어로 어떻게 편집할지 설명하면 됩니다. CutAI가 영상을 분석하고, 장면의 경계를 찾아내어 당신의 의도를 구체적인 편집 계획으로 번역합니다.
              </p>
              <ul className="space-y-4">
                {[
                  "장면 인식 및 무음 구간 자동 컷",
                  "Whisper AI 기반 자동 자막",
                  "색상 보정 (따뜻하게, 시네마틱, 차갑게 등)",
                  "배경음악 믹싱"
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
              <p className="text-zinc-400 mb-4">$ cutai plan vlog.mp4 -i "무음 구간 다 자르고 자막 달아줘"</p>
              <div className="text-blue-300 mb-2">🎬 Analyzing vlog.mp4...</div>
              <div className="text-zinc-300 pl-4 mb-4">
                ✓ 14개의 장면 감지됨<br/>
                ✓ 음성 텍스트 변환 완료<br/>
                ✓ 3개의 불필요한 구간 발견
              </div>
              <div className="text-purple-300 mb-2">📋 Edit Plan:</div>
              <div className="text-zinc-300 pl-4">
                • 무음 구간 제거 (0:12-0:15, 0:45-0:48)<br/>
                • 화면에 박히는(Burned-in) 자막 추가<br/>
                • 뉴트럴 색보정 적용
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
            <Dna className="w-4 h-4" /> 편집 스타일 전이 (Edit Style Transfer)
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 break-keep">유명 유튜버의 편집 스타일을 훔치세요.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-balance break-keep">
            레퍼런스 영상에서 편집 패턴을 추출하여 당신의 원본 영상에 그대로 적용합니다. 이미지의 화풍을 바꾸듯, 편집 템포와 결정을 복사합니다.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-lg font-bold mb-2">레퍼런스 선택</h3>
              <p className="text-zinc-400 text-sm">스타일이 마음에 드는 크리에이터의 영상을 CutAI에 넘겨주세요.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative">
              <div className="hidden md:block absolute top-12 -left-4 w-8 h-px bg-white/20" />
              <div className="w-12 h-12 rounded-xl bg-blue-900/50 text-blue-400 flex items-center justify-center text-2xl font-bold mb-6 border border-blue-500/20">2</div>
              <h3 className="text-lg font-bold mb-2">편집 DNA 추출</h3>
              <p className="text-zinc-400 text-sm">페이싱, 컷 비율, 색감, 자막 표시 패턴 등을 자동으로 분석합니다.</p>
            </div>
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl relative">
              <div className="hidden md:block absolute top-12 -left-4 w-8 h-px bg-white/20" />
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-lg font-bold mb-2">내 영상에 적용</h3>
              <p className="text-zinc-400 text-sm">추출된 스타일을 씌워 내 원본 영상을 새로 렌더링합니다.</p>
            </div>
          </div>

          <div className="mt-16 bg-[#0D0D0E] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl">
            <div className="flex-1 font-mono text-sm">
              <p className="text-zinc-500 mb-4"># MKBHD의 편집 스타일 추출하기</p>
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
              <h4 className="font-bold text-lg mb-2">편집 DNA에는 무엇이 담기나요?</h4>
              <ul className="space-y-4 mt-6">
                <li><strong className="text-white block">✂️ 컷 리듬 (Cut Rhythm)</strong> <span className="text-sm text-zinc-400">장면의 길이와 호흡(페이싱 곡선)</span></li>
                <li><strong className="text-white block">🎨 비주얼 스타일</strong> <span className="text-sm text-zinc-400">색온도, 밝기, 대비, 채도 세팅</span></li>
                <li><strong className="text-white block">📝 자막 (Subtitles)</strong> <span className="text-sm text-zinc-400">자막이 등장하는 빈도와 타이밍 패턴</span></li>
                <li><strong className="text-white block">🎵 오디오 믹싱</strong> <span className="text-sm text-zinc-400">BGM의 볼륨 밸런스와 등장 시점</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop App */}
      <section id="desktop" className="py-24 bg-blue-950/10 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 break-keep">CLI가 부담스럽다면, 데스크탑 앱을 써보세요.</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto break-keep">
            Tauri로 빌드된 네이티브 macOS 앱이 준비되어 있습니다. 영상을 드래그 앤 드롭하고, 원하는 스타일을 고른 후 당신의 기기 안에서 오프라인으로 렌더링하세요.
          </p>
          <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
            <Download className="w-5 h-5" />
            macOS용 다운로드 (Alpha)
          </a>
          <p className="text-zinc-500 text-sm mt-4">macOS 12 이상 (Apple Silicon 전용)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-zinc-500 text-sm">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="https://github.com/mindsurf0176-ui/cutai" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <p>100% 로컬 작동. 오픈소스 (MIT 라이선스). 클라우드 업로드가 필요 없습니다.</p>
      </footer>
    </main>
  );
}
