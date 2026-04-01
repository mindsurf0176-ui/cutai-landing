import { Download, MessageSquare, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, Quote } from "lucide-react";

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
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 mb-10">
              <span>✦ 자연어로 편집</span>
              <span>✦ AI 자동 자막</span>
              <span>✦ 스마트 컷 & 무음 제거</span>
              <span>✦ 100% 로컬, 오픈소스</span>
            </div>
            <a href="#download" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
              <Download className="w-4 h-4" />
              무료 다운로드
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
              <h2 className="text-3xl font-bold mb-4 break-keep">원하는 걸 말하면<br />AI가 편집해줍니다.</h2>
              <p className="text-zinc-500 mb-6 leading-relaxed break-keep">
                타임라인도 없고, 배울 것도 없습니다. 한국어로 어떻게 편집할지 설명하면 CutAI가 장면을 분석하고 자동으로 편집 계획을 세웁니다.
              </p>
              <div className="space-y-3">
                {[
                  "\"어색한 침묵 다 없애줘\"",
                  "\"자막 넣어줘, 시네마틱하게\"",
                  "\"중간에 지루한 부분 배속 올려줘\"",
                  "\"인트로를 5초 이내로 줄여줘\"",
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

      {/* Feature 2: Capabilities */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">강력하고 놀라운 기능들</h2>
          <p className="text-zinc-500 text-lg">필요한 건 다 있고, 필요 없는 건 없습니다.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {[
            { icon: Scissors, title: "스마트 무음 제거", desc: "AI가 무음 구간, 필러, 저에너지 구간을 감지합니다. 한마디로 전부 제거." },
            { icon: Type, title: "자동 자막 (Whisper)", desc: "음성을 텍스트로 변환하고 스타일 자막을 자동으로 삽입합니다. 한국어, 영어 등 50개+ 언어 지원." },
            { icon: Palette, title: "AI 색보정", desc: "\"시네마틱하게 만들어줘\" — 인기 크리에이터와 영화 느낌의 컬러 프로필을 자동 적용." },
            { icon: Music, title: "배경음악 믹싱", desc: "영상의 분위기와 호흡에 맞춰 자동으로 조절되는 로열티 프리 BGM을 추가합니다." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed break-keep">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">이렇게 사용하고 있어요</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "30분짜리 브이로그를 2분 만에 편집했어요. 뭘 자를지 말하니까 그대로 해주더라고요.", author: "유튜버, 구독자 1.2만" },
              { quote: "채팅으로 편집하는 게 타임라인보다 훨씬 직관적이에요. 왜 지금까지 없었는지 모르겠어요.", author: "프리랜서 마케터" },
              { quote: "편집을 아예 못하는데 이건 진짜 됩니다. 말만 하면 끝이에요.", author: "온라인 강의 크리에이터" },
            ].map(({ quote, author }, i) => (
              <div key={i} className="bg-white border border-zinc-100 p-6 rounded-2xl shadow-sm">
                <Quote size={20} className="text-indigo-300 mb-3" />
                <p className="text-sm text-zinc-600 leading-relaxed mb-4 break-keep">{quote}</p>
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
            <h2 className="text-3xl font-bold mb-3">이런 영상에 딱이에요</h2>
            <p className="text-zinc-500 text-lg">유튜브부터 기업 교육까지.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🎬", title: "유튜브 영상", desc: "브이로그, 튜토리얼, 리뷰 영상을 말로 편집하세요." },
              { emoji: "📱", title: "숏폼 콘텐츠", desc: "긴 영상을 틱톡, 쇼츠 클립으로 변환." },
              { emoji: "🎙️", title: "팟캐스트", desc: "필러 단어를 제거하고 자막을 자동 추가." },
              { emoji: "🏢", title: "기업 / 교육", desc: "전문 편집자 없이 깔끔한 교육 영상 제작." },
            ].map(({ emoji, title, desc }, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-zinc-500 break-keep">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-16 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2"><Shield size={16} /> 오픈소스 (MIT)</div>
          <div className="flex items-center gap-2"><Zap size={16} /> 100% 로컬 처리</div>
          <div className="flex items-center gap-2"><Sparkles size={16} /> 가입 불필요</div>
          <div className="flex items-center gap-2">🍎 macOS 네이티브 (Tauri)</div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-indigo-600 font-semibold text-sm mb-4">AI가 도와줄게요</p>
          <h2 className="text-4xl font-extrabold mb-4 break-keep">말로 편집을 시작하세요.</h2>
          <p className="text-zinc-500 mb-8 text-lg">무료. 오픈소스. 가입 없음. 다운로드하고 바로.</p>
          <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-zinc-800 transition-colors shadow-lg">
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
