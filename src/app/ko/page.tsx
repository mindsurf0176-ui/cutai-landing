import { Download, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, ArrowRight, Terminal } from "lucide-react";

export default function HomeKo() {
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
            <a href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">English</a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">GitHub</a>
            <a href="#download" className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors">다운로드</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-[64px] font-extrabold tracking-tight mb-6 leading-[1.1] text-zinc-900 break-keep">
              편집 없는<br />영상 편집.
            </h1>
            <p className="text-xl text-zinc-500 mb-10 max-w-lg mx-auto leading-relaxed break-keep">
              원하는 걸 말하면 됩니다. CutAI가 영상을 분석하고 컷, 자막, 색보정, 음악까지 한 문장으로 처리합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#download" className="flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-zinc-800 transition-colors">
                <Download className="w-4 h-4" />
                macOS 다운로드
              </a>
              <a href="https://github.com/mindsurf0176-ui/cutai" className="flex items-center gap-2 text-zinc-500 px-7 py-3.5 rounded-xl font-semibold text-base hover:text-zinc-900 transition-colors">
                소스코드 보기
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

      {/* How it works */}
      <section className="py-28 bg-gradient-to-b from-zinc-50 to-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 break-keep">
              말하면 편집됩니다.
            </h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto break-keep">
              CutAI는 LLM으로 의도를 파악하고, FFmpeg 파이프라인으로 컷·자막·색보정·렌더링을 실행합니다. 모든 처리는 내 컴퓨터에서.
            </p>
          </div>

          {/* Chat mockup */}
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
                  ✅ <span className="text-white/90 font-medium">vlog.mp4</span> 로드 완료 — 4:32, 18개 장면 감지, 음성 인식 완료
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm max-w-[80%] leading-relaxed">
                    무음 다 잘라줘, 자막 넣고, 색감 따뜻하게.
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/5 px-5 py-4 rounded-xl rounded-bl-sm text-white/85 leading-[1.8]">
                  이렇게 처리할게요:<br /><br />
                  <span className="text-indigo-400">✂️</span> <span className="text-white font-medium">무음 구간 3개 제거</span> — 47초 단축<br />
                  <span className="text-indigo-400">📝</span> <span className="text-white font-medium">자막 삽입</span> — Whisper 음성 인식 기반<br />
                  <span className="text-indigo-400">🎨</span> <span className="text-white font-medium">색보정</span> — 웜 시네마틱 프리셋<br /><br />
                  <span className="text-white/40">바로 렌더링할까요, 수정할 부분 있나요?</span>
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm">
                    바로 가자 🚀
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 border-t border-white/5 flex items-center gap-3">
                <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/5 flex items-center px-4 text-sm text-white/25">
                  어떻게 편집할지 말해주세요...
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features — what it actually does */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3 break-keep">안에서 돌아가는 것들</h2>
            <p className="text-zinc-500 text-lg">전부 내 Mac에서 로컬로 실행됩니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Scissors size={22} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">무음·공백 제거</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">장면 분석 + 오디오 분석으로 빈 구간을 찾아내고, FFmpeg로 깔끔하게 잘라냅니다.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Type size={22} className="text-sky-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Whisper 자동 자막</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">Whisper로 로컬 음성 인식 후, 스타일 자막을 영상에 직접 삽입합니다.</p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Palette size={22} className="text-violet-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">색보정 프리셋</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">FFmpeg 비디오 필터 체인으로 시네마틱, 웜, 쿨, 뉴트럴 룩을 적용합니다. 강도 조절 가능.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Music size={22} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">BGM 믹싱 & 속도 조절</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">배경음악 추가, 재생 속도 변경, 장면 전환 효과까지 처리합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLI + Desktop */}
      <section className="py-28 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 break-keep">CLI도 되고, GUI도 됩니다.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed break-keep">
                파워 유저에겐 파이프라인을 완전 제어하는 Python CLI가, 나머지에겐 채팅 인터페이스의 네이티브 macOS 앱이 있습니다. 엔진은 같습니다.
              </p>
              <div className="bg-zinc-900 rounded-xl p-5 font-mono text-sm text-zinc-300 leading-relaxed">
                <span className="text-zinc-500">$</span> pip install cutai<br />
                <span className="text-zinc-500">$</span> cutai edit vlog.mp4 -i <span className="text-emerald-400">"무음 잘라줘, 자막 넣어"</span><br />
                <span className="text-zinc-500 text-xs mt-2 block">→ 분석 중... 18개 장면, 3개 컷, 렌더링...</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
                <Terminal size={20} className="text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">CLI (pip install cutai)</h3>
                  <p className="text-sm text-zinc-500 break-keep">전체 파이프라인 제어. 스크립팅 가능. 배치 처리.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
                <Sparkles size={20} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">데스크톱 앱 (macOS)</h3>
                  <p className="text-sm text-zinc-500 break-keep">채팅 인터페이스. 드래그 앤 드롭. 터미널 불필요.</p>
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
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Shield size={14} /> MIT 라이선스</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Zap size={14} /> 100% 로컬</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">🍎 macOS 네이티브</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Sparkles size={14} /> 가입 불필요</div>
          </div>

          <h2 className="text-4xl font-extrabold mb-4 break-keep">지금 써보세요.</h2>
          <p className="text-zinc-500 mb-8 text-lg break-keep">무료. 오픈소스. 내 컴퓨터에서 실행.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-zinc-800 transition-all hover:shadow-xl">
              <Download className="w-5 h-5" />
              macOS 다운로드
            </a>
            <div className="bg-zinc-100 px-6 py-4 rounded-xl font-mono text-sm text-zinc-600">
              pip install cutai
            </div>
          </div>
          <p className="text-zinc-400 text-sm mt-6">macOS 12+ · Apple Silicon · v0.1.0-alpha · Windows/Linux 지원 예정</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10 text-center text-zinc-400 text-sm">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://github.com/mindsurf0176-ui/cutai" className="hover:text-zinc-900 transition-colors">GitHub</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Discord</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
        </div>
        <p>오픈소스 (MIT) · 100% 로컬 처리 · 데이터 수집 없음</p>
      </footer>
    </main>
  );
}
