"use client";

import { Download, Sparkles, Zap, Shield, Scissors, Type, Palette, Music, ArrowRight, Terminal, Check } from "lucide-react";
import { Animate, FloatingGlow, TypingRotation, CountUp, DemoVideo } from "@/components/motion";

export default function HomeKo() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-base tracking-tight">
            <img src="/icon.svg" className="w-6 h-6" alt="CutAI" />
            CutAI
          </div>
          <div className="flex items-center gap-5">
            <a href="/" className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm">English</a>
            <a href="https://github.com/mindsurf0176-ui/cutai" className="text-zinc-400 hover:text-zinc-900 transition-colors text-sm">GitHub</a>
            <a href="#download" className="bg-zinc-900 text-white px-3.5 py-1.5 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">다운로드</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />
        <FloatingGlow className="w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px] top-[-200px] left-1/2 -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <Animate className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-[56px] md:text-[80px] font-black tracking-[-0.03em] mb-8 leading-[0.95] text-zinc-900 break-keep">
              편집 없는<br />영상 편집.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-4 max-w-xl mx-auto leading-relaxed break-keep font-light">
              원하는 걸 말하면 됩니다.
            </p>
            <div className="h-10 mb-8 flex items-center justify-center">
              <span className="text-lg md:text-xl text-indigo-600 font-medium">
                <TypingRotation phrases={[
                  "\"무음 구간 다 잘라줘\"",
                  "\"자막 넣어줘, 시네마틱하게\"",
                  "\"인트로 5초로 줄여\"",
                  "\"색감 따뜻하게 바꿔줘\"",
                  "\"배경음악 넣어줘\"",
                ]} />
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#download" className="flex items-center gap-2.5 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-semibold text-[15px] hover:bg-zinc-800 transition-all hover:shadow-2xl hover:shadow-zinc-900/20 active:scale-[0.98]">
                <Download className="w-[18px] h-[18px]" />
                무료 다운로드
              </a>
              <a href="https://github.com/mindsurf0176-ui/cutai" className="flex items-center gap-2 text-zinc-400 px-6 py-4 rounded-2xl font-medium text-[15px] hover:text-zinc-900 transition-colors">
                소스코드 보기
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Animate>

          {/* Hero demo — LARGE with glow */}
          <Animate delay={0.2} variant="scaleIn">
            <div className="relative mx-auto max-w-[1100px]">
              <div className="absolute -inset-4 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl border border-zinc-200/80 bg-zinc-950 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.3)] overflow-hidden aspect-video">
                <DemoVideo src="/videos/demo.mp4?v=10" className="w-full h-full" />
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Core UX — Chat */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-20 items-center">
            <Animate variant="slideLeft">
              <div>
                <p className="text-indigo-600 font-semibold text-sm mb-5 tracking-wide uppercase">핵심 경험</p>
                <h2 className="text-4xl md:text-[44px] font-bold mb-6 leading-[1.15] tracking-[-0.02em] break-keep">
                  말하면<br />편집됩니다.
                </h2>
                <p className="text-lg text-zinc-400 mb-10 leading-relaxed break-keep">
                  타임라인을 드래그하는 대신 채팅으로 지시하세요. LLM이 의도를 파악하고, FFmpeg가 실행합니다. 모든 처리는 내 컴퓨터에서.
                </p>
                <div className="space-y-4">
                  {[
                    "\"무음 구간 다 잘라줘\"",
                    "\"자막 넣어줘, 노란색 볼드로\"",
                    "\"인트로 5초로 줄여\"",
                    "\"색감 따뜻하게, 시네마틱\"",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-[15px] text-zinc-500">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-indigo-600" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </Animate>

            <Animate variant="slideRight" delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 rounded-[32px] blur-xl pointer-events-none" />
                <div className="relative bg-[#16162b] rounded-2xl border border-zinc-800/50 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">✦</span>
                    </div>
                    <span className="text-white/90 text-sm font-semibold">CutAI</span>
                    <div className="flex-1" />
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                  </div>
                  <div className="p-6 space-y-5 min-h-[380px]">
                    <div className="bg-white/[0.04] border border-white/[0.06] px-5 py-3.5 rounded-xl text-white/50 text-[13px]">
                      ✅ <span className="text-white/90 font-medium">vlog.mp4</span> 로드 완료 — 4:32, <CountUp target={18} suffix="개 장면" className="text-white/90 font-medium" />, 음성 인식 완료
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-indigo-600 text-white px-5 py-3.5 rounded-2xl rounded-br-md max-w-[75%] text-[15px] leading-relaxed">
                        무음 다 잘라줘, 자막 넣고, 색감 따뜻하게.
                      </div>
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] px-5 py-5 rounded-2xl rounded-bl-md text-white/85 text-[14px] leading-[1.9]">
                      이렇게 처리할게요:<br /><br />
                      <span className="text-indigo-400 font-mono text-xs mr-1">01</span> <span className="text-white font-medium">무음 구간 3개 제거</span> <span className="text-white/30">— <CountUp target={47} suffix="초 단축" /></span><br />
                      <span className="text-indigo-400 font-mono text-xs mr-1">02</span> <span className="text-white font-medium">자막 삽입</span> <span className="text-white/30">— Whisper 기반</span><br />
                      <span className="text-indigo-400 font-mono text-xs mr-1">03</span> <span className="text-white font-medium">색보정</span> <span className="text-white/30">— 웜 시네마틱</span><br /><br />
                      <span className="text-white/30">바로 렌더링할까요?</span>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-indigo-600 text-white px-5 py-3 rounded-2xl rounded-br-md text-[15px]">
                        바로 가자 🚀
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4 border-t border-white/[0.06] flex items-center gap-3">
                    <div className="flex-1 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center px-4 text-[14px] text-white/20">
                      어떻게 편집할지 말해주세요...
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100 relative overflow-hidden">
        <FloatingGlow className="w-[400px] h-[400px] bg-violet-400/8 rounded-full blur-[100px] top-[10%] right-[-100px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Animate className="text-center mb-20">
            <p className="text-indigo-600 font-semibold text-sm mb-4 tracking-wide uppercase">기능</p>
            <h2 className="text-4xl font-bold mb-4 break-keep">안에서 돌아가는 것들</h2>
            <p className="text-zinc-400 text-lg">전부 내 Mac에서 로컬로 실행됩니다.</p>
          </Animate>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Scissors, from: "from-rose-50/80", to: "to-orange-50/30", border: "border-rose-100/60", iconColor: "text-rose-500", title: "무음·공백 제거", desc: "장면 분석 + 오디오 분석으로 빈 구간을 찾아내고, FFmpeg로 깔끔하게 잘라냅니다." },
              { icon: Type, from: "from-sky-50/80", to: "to-indigo-50/30", border: "border-sky-100/60", iconColor: "text-sky-500", title: "Whisper 자동 자막", desc: "Whisper로 로컬 음성 인식 후, 스타일 자막을 영상에 직접 삽입합니다." },
              { icon: Palette, from: "from-violet-50/80", to: "to-purple-50/30", border: "border-violet-100/60", iconColor: "text-violet-500", title: "색보정 프리셋", desc: "FFmpeg 비디오 필터 체인으로 시네마틱, 웜, 쿨, 뉴트럴 룩을 적용합니다." },
              { icon: Music, from: "from-emerald-50/80", to: "to-teal-50/30", border: "border-emerald-100/60", iconColor: "text-emerald-500", title: "BGM 믹싱 & 속도 조절", desc: "배경음악 추가, 재생 속도 변경, 장면 전환 효과까지 처리합니다." },
            ].map(({ icon: Icon, from, to, border, iconColor, title, desc }, i) => (
              <Animate key={i} delay={i * 0.1}>
                <div className={`bg-gradient-to-br ${from} ${to} border ${border} p-10 rounded-2xl group hover:shadow-lg transition-all duration-300 h-full`}>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className={iconColor} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{title}</h3>
                  <p className="text-zinc-500 leading-relaxed break-keep text-[15px]">{desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CLI + Desktop */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Animate variant="slideLeft">
              <div>
                <p className="text-indigo-600 font-semibold text-sm mb-5 tracking-wide uppercase">두 가지 방법</p>
                <h2 className="text-4xl font-bold mb-6 leading-tight tracking-[-0.02em] break-keep">CLI도 되고,<br />GUI도 됩니다.</h2>
                <p className="text-lg text-zinc-400 mb-10 leading-relaxed break-keep">
                  파워 유저에겐 Python CLI가, 나머지에겐 채팅 인터페이스의 네이티브 macOS 앱이 있습니다.
                </p>
                <div className="bg-zinc-950 rounded-2xl p-6 font-mono text-sm text-zinc-300 leading-relaxed shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 text-xs text-zinc-500">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2">Terminal</span>
                  </div>
                  <span className="text-zinc-500">$</span> pip install cutai<br />
                  <span className="text-zinc-500">$</span> cutai edit vlog.mp4 -i <span className="text-emerald-400">"무음 잘라줘, 자막 넣어"</span><br /><br />
                  <span className="text-zinc-600 text-xs">→ 분석 중... 18개 장면, 3개 컷 발견</span><br />
                  <span className="text-zinc-600 text-xs">→ 렌더링 완료: output.mp4 (3:45)</span>
                </div>
              </div>
            </Animate>

            <Animate variant="slideRight" delay={0.1}>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-200 transition-colors">
                    <Terminal size={22} className="text-zinc-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">CLI</h3>
                    <p className="text-sm text-zinc-500 mb-2 break-keep">전체 파이프라인 제어. 스크립팅 가능. 배치 처리.</p>
                    <code className="text-xs text-zinc-400 font-mono">pip install cutai</code>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                    <Sparkles size={22} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">데스크톱 앱</h3>
                    <p className="text-sm text-zinc-500 mb-2 break-keep">채팅 인터페이스. 드래그 앤 드롭. 터미널 불필요.</p>
                    <span className="text-xs text-zinc-400">macOS 12+ · Apple Silicon</span>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* CTA — Dark */}
      <section id="download" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <FloatingGlow className="w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] bottom-[-100px] left-1/2 -translate-x-1/2" />
        <Animate className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-sm text-zinc-500">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800"><Shield size={13} /> MIT 라이선스</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800"><Zap size={13} /> 100% 로컬</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800">🍎 macOS 네이티브</div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800"><Sparkles size={13} /> 가입 불필요</div>
          </div>

          <h2 className="text-5xl font-black mb-6 tracking-[-0.03em] break-keep">지금 써보세요.</h2>
          <p className="text-zinc-400 mb-10 text-lg break-keep">무료. 오픈소스. 내 컴퓨터에서 실행.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/mindsurf0176-ui/cutai/releases/tag/v0.1.0-alpha" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 bg-white text-zinc-900 px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-zinc-100 transition-all active:scale-[0.98]">
              <Download className="w-5 h-5" />
              macOS 다운로드
            </a>
            <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl font-mono text-sm text-zinc-400">
              pip install cutai
            </div>
          </div>
          <p className="text-zinc-600 text-sm mt-8">macOS 12+ · Apple Silicon · v0.1.0-alpha · Windows/Linux 지원 예정</p>
        </Animate>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-10 text-center text-zinc-500 text-sm">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a href="https://github.com/mindsurf0176-ui/cutai" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <p className="text-zinc-600">오픈소스 (MIT) · 100% 로컬 처리 · 데이터 수집 없음</p>
      </footer>
    </main>
  );
}
