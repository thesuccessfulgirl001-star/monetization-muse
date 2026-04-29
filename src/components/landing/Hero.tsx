import { WHOP_URL } from "./constants";
import { useFadeIn } from "@/hooks/use-fade-in";

export function Hero() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} id="top" className="relative bg-ink text-paper overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(201,168,76,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px] px-5 md:px-10 pt-24 md:pt-36 pb-24 md:pb-36 text-center">
        <p
          className="mb-10 font-display italic text-2xl md:text-4xl glow-pulse"
          style={{
            background: "var(--gradient-gold-shimmer)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: "shimmer 4s linear infinite",
          }}
        >
          For Fashion Creators Who Are Done Waiting
        </p>
        <h1 className="font-display text-[44px] leading-[1.05] sm:text-6xl md:text-[88px] md:leading-[1.02] font-normal tracking-[-0.015em]">
          You Have the Audience.
          <br />
          <span className="gold-underline inline-block mt-3">Now Build the Income.</span>
        </h1>
        <p className="mx-auto mt-10 max-w-2xl text-[15px] md:text-[17px] leading-[1.7] text-[#C9C4BA]">
          The complete AI-powered playbook that shows you exactly how to research, build,
          launch, and sell your first digital product — step by step, tool by tool,
          with zero guesswork.
        </p>
        <p className="mt-8 text-gold text-[12px] md:text-[13px] tracking-[0.12em]">
          ★★★★★ <span className="text-[#C9C4BA] ml-2">Already in the hands of fashion creators who are building right now.</span>
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold-fill">
            Yes — I Want the Playbook →
          </a>
          <a
            href="#whats-inside"
            className="text-paper text-[12px] tracking-[0.18em] uppercase border-b-2 border-gold pb-1 hover:text-gold transition-colors"
          >
            See what's inside ↓
          </a>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[#C9C4BA] text-[12px] tracking-[0.06em]">
          <span><span className="text-gold mr-2">🔒</span>Instant Download</span>
          <span><span className="text-gold mr-2">✦</span>Works for any following size</span>
          <span><span className="text-gold mr-2">💳</span>Secure checkout via Whop</span>
        </div>
      </div>
      <div className="hairline mx-auto max-w-[1100px]" />
    </section>
  );
}
