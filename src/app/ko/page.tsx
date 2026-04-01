import { Download, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, MessageSquare, ArrowRight } from "lucide-react";

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
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-indigo-600 font-semibold text-sm mb-4">AI가 도와줄게요</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-zinc-900 break-keep">
              누구나 영상 편집을<br />쉽고 즐겁게
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-lg mx-auto break-keep leading-relaxed">
              원하는 걸 말하면 AI가 편집합니다.<br />타임라인도, 배울 것도 필요 없어요.
            </p>
            <a href="#download" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
              <Download className="w-4 h-4" />
              무료 다운로드
            </a>
          </div>

          {/* Demo — actual app screenshot */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-950 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden aspect-video">
              <video src="/videos/demo.mp4?v=10" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Chat editing — with large visual */}
      <section className="py-28 bg-gradient-to-b from-indigo-50/50 to-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4 border border-indigo-100">
              <MessageSquare className="w-3.5 h-3.5" />
              대화형 편집
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 break-keep">
              말로 편집하세요.<br />AI가 알아서 합니다.
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto break-keep">
              타임라인을 드래그하는 대신, 채팅으로 AI에게 지시하세요.
            </p>
          </div>

          {/* Large chat mockup — centered, prominent */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#16162b] rounded-2xl border border-zinc-800/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Header */}
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

              {/* Messages */}
              <div className="p-6 space-y-4 text-[15px]">
                <div className="bg-white/5 border border-white/5 px-5 py-3 rounded-xl text-white/50 text-sm">
                  ✅ <span className="text-white/90 font-medium">vlog.mp4</span> 로드 완료 — 4분 32초, 1920×1080
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm max-w-[80%] leading-relaxed">
                    무음 잘라주고 자막 넣어줘. 시네마틱하게 색보정도.
                  </div>
                </div>
                <div className="bg-white/[0.04] border border-white/5 px-5 py-4 rounded-xl rounded-bl-sm text-white/85 leading-[1.8]">
                  편집 계획을 세웠습니다:<br /><br />
                  <span className="text-indigo-400 font-medium">①</span> <span className="text-white font-medium">무음 제거</span> — 3개 구간 (총 47초 단축)<br />
                  <span className="text-indigo-400 font-medium">②</span> <span className="text-white font-medium">색보정</span> — 시네마틱 웜톤 (Teal & Orange)<br />
                  <span className="text-indigo-400 font-medium">③</span> <span className="text-white font-medium">자막</span> — 화면 내장, 볼드체, 한국어<br /><br />
                  <span className="text-white/40">미리보기 하시겠어요, 바로 렌더링할까요?</span>
                </div>
                <div className="flex justify-end">
                  <div className="bg-indigo-600 text-white px-5 py-3 rounded-xl rounded-br-sm">
                    바로 렌더링해줘! 🎬
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="px-5 py-3 border-t border-white/5 flex items-center gap-3">
                <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/5 flex items-center px-4 text-sm text-white/25">
                  편집하고 싶은 걸 말해보세요...
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards — 2x2 grid with colored backgrounds */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">강력한 기능들</h2>
            <p className="text-zinc-500 text-lg">필요한 것만. 복잡한 건 없습니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Scissors size={22} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">스마트 무음 제거</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">AI가 무음 구간, 필러, 에너지 낮은 부분을 자동으로 감지하고 한마디로 전부 제거합니다. 수동으로 구간 찾을 필요 없어요.</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Type size={22} className="text-sky-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">자동 자막 (Whisper AI)</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">음성을 텍스트로 변환하고 스타일 자막을 자동 삽입합니다. 한국어, 영어 등 50개 이상의 언어를 지원해요.</p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Palette size={22} className="text-violet-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI 색보정</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">"시네마틱하게 만들어줘" 한마디면 인기 크리에이터와 영화 느낌의 컬러 프로필이 자동으로 적용됩니다.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                <Music size={22} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">배경음악 믹싱</h3>
              <p className="text-zinc-500 leading-relaxed break-keep">영상의 분위기와 호흡에 맞춰 자동으로 볼륨이 조절되는 로열티 프리 BGM을 추가합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases — visual cards */}
      <section className="py-28 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">이런 영상에 딱이에요</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🎬", title: "유튜브 영상", desc: "브이로그, 튜토리얼, 리뷰를 말로 편집.", bg: "bg-amber-50 border-amber-100" },
              { emoji: "📱", title: "숏폼 콘텐츠", desc: "긴 영상을 쇼츠, 릴스로 자동 변환.", bg: "bg-pink-50 border-pink-100" },
              { emoji: "🎙️", title: "팟캐스트", desc: "필러 제거 + 자막을 원클릭으로.", bg: "bg-sky-50 border-sky-100" },
              { emoji: "🏢", title: "기업 교육", desc: "편집자 없이 깔끔한 교육 영상.", bg: "bg-emerald-50 border-emerald-100" },
            ].map(({ emoji, title, desc, bg }, i) => (
              <div key={i} className={`text-center p-8 rounded-2xl border ${bg}`}>
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-zinc-500 break-keep">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + Download CTA */}
      <section id="download" className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-zinc-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Shield size={14} /> 오픈소스 (MIT)</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Zap size={14} /> 100% 로컬 처리</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100"><Sparkles size={14} /> 가입 불필요</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100">🍎 macOS 네이티브</div>
          </div>

          <p className="text-indigo-600 font-semibold text-sm mb-4">AI가 도와줄게요</p>
          <h2 className="text-4xl font-extrabold mb-4 break-keep">말로 편집을 시작하세요.</h2>
          <p className="text-zinc-500 mb-8 text-lg break-keep">무료. 오픈소스. 가입 없음. 다운로드하고 바로.</p>
          <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-zinc-800 transition-all hover:shadow-xl">
            <Download className="w-5 h-5" />
            macOS 다운로드
          </a>
          <p className="text-zinc-400 text-sm mt-4">macOS 12+ · Apple Silicon · v0.1.0-alpha</p>
          <p className="text-zinc-400 text-sm mt-1">Windows, Linux 지원 예정</p>
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
