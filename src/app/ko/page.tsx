import { Download, MessageSquare, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";

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
            <a href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">
              English
            </a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a href="#download" className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors">
              다운로드
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
              AI 영상 편집
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-zinc-900 break-keep">
              영상 편집,<br />
              <span className="text-indigo-600">말로 하세요.</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-xl mx-auto break-keep">
              Descript는 편집을 글쓰기로 바꿨습니다.<br />
              우리는 대화로 바꿨습니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#download" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                <Download className="w-4 h-4" />
                macOS 다운로드
              </a>
              <a href="https://github.com/mindsurf0176-ui/cutai" className="flex items-center gap-2 bg-zinc-100 text-zinc-700 px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
                GitHub에서 보기
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
            <h2 className="text-3xl font-bold mb-3">이렇게 작동합니다</h2>
            <p className="text-zinc-500 text-lg">세 단계. 타임라인 없음. 배울 것 없음.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-5">1</div>
              <h3 className="text-lg font-bold mb-2">영상 불러오기</h3>
              <p className="text-zinc-500 text-sm leading-relaxed break-keep">영상 파일을 드래그 앤 드롭하세요. CutAI가 장면, 음성, 구조를 자동으로 분석합니다.</p>
            </div>
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-5">2</div>
              <h3 className="text-lg font-bold mb-2">AI에게 말하기</h3>
              <p className="text-zinc-500 text-sm leading-relaxed break-keep">"무음 구간 잘라줘, 자막 넣어줘, 시네마틱하게 만들어줘." 자연스럽게 입력하면 CutAI가 편집 계획을 짭니다.</p>
            </div>
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-5">3</div>
              <h3 className="text-lg font-bold mb-2">확인 & 렌더링</h3>
              <p className="text-zinc-500 text-sm leading-relaxed break-keep">계획을 미리보고, 추가 대화로 수정한 뒤 최종 영상을 렌더링하세요. 모두 로컬에서.</p>
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
                대화형 편집
              </div>
              <h2 className="text-3xl font-bold mb-4 break-keep">편집기가 아니라 대화입니다.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed break-keep">
                타임라인 없음. 레이저 도구 없음. 47단계 튜토리얼 없음. CutAI에게 원하는 걸 말하세요. 추가 대화로 계속 다듬을 수 있습니다.
              </p>
              <div className="space-y-3">
                {[
                  "\"어색한 침묵 다 없애줘\"",
                  "\"노란색 자막 넣어줘, MKBHD 스타일로\"",
                  "\"중간에 지루한 부분 배속 올려줘\"",
                  "\"인트로를 5초 이내로 줄여줘\"",
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
                  ✅ <span className="text-white/90 font-medium">vlog.mp4</span> 로드 완료 (4:32)
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg rounded-br-sm max-w-[75%]">
                    무음 잘라주고 자막 넣어줘, 시네마틱하게
                  </div>
                </div>
                <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-lg rounded-bl-sm text-white/80 leading-relaxed">
                  편집 계획입니다:<br /><br />
                  • <span className="text-white font-medium">무음 제거</span> — 3개 구간<br />
                  • <span className="text-white font-medium">색보정</span> — 시네마틱 웜톤<br />
                  • <span className="text-white font-medium">자막</span> — 화면 내장, 볼드체
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-4 py-2.5 rounded-lg rounded-br-sm">
                    좋아, 렌더링해줘! 🎬
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
            <h2 className="text-3xl font-bold mb-3">진짜 편집을 위한 도구</h2>
            <p className="text-zinc-500 text-lg">장난감이 아닙니다. 로컬에서 돌아가는 진지한 도구.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "100% 로컬", desc: "영상이 컴퓨터 밖으로 나가지 않습니다. 클라우드 없음." },
              { icon: Sparkles, title: "스마트 컷", desc: "AI가 장면, 무음 구간, 불필요한 부분을 자동 감지." },
              { icon: MessageSquare, title: "자연어 편집", desc: "원하는 걸 말로 설명하면 끝." },
              { icon: Shield, title: "오픈소스", desc: "MIT 라이선스. 코드를 보고, 수정하고, 기여하세요." },
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
          <h2 className="text-3xl font-bold mb-4 break-keep">말로 편집을 시작하세요.</h2>
          <p className="text-zinc-500 mb-8 break-keep">
            무료. 오픈소스. 계정 필요 없음. 다운로드하고 바로 시작.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors shadow-lg">
              <Download className="w-5 h-5" />
              macOS 다운로드
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
        <p>오픈소스 (MIT) · 100% 로컬 처리 · 데이터 수집 없음</p>
      </footer>
    </main>
  );
}
