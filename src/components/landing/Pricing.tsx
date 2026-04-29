import { WHOP_URL, PRICE_DISCOUNT, PRICE_FULL } from "./constants";
import { useFadeIn } from "@/hooks/use-fade-in";

const INCLUDES = [
  "11-part complete execution system",
  "Full AI product creation prompt",
  "Full no-code landing page guide",
  "21-day content warm-up plan with hooks and CTAs",
  "How to create a no-brainer offer",
  "The 7-layer money model",
  "The complete rescue plan",
  "Instant download via Whop",
];

export function Pricing() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} id="pricing" className="bg-cream text-ink relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.18), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[900px] px-5 md:px-10 py-28 md:py-40 text-center">
        <p className="label-eyebrow">Get Access Today</p>
        <h2 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] text-ink">
          The Fashion Creator's <span className="italic">$1,000+</span> Monetization Playbook.
        </h2>
        <p className="mt-6 text-[#555] text-[15px] max-w-xl mx-auto">
          One investment. Everything you need to research, build, launch, and sell.
        </p>

        <div
          className="mt-14 mx-auto max-w-[600px] rounded-lg bg-[#050505] text-paper p-10 md:p-14 border border-gold/60 text-left"
          style={{ boxShadow: "0 40px 100px -25px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.4), 0 0 60px -10px rgba(201,168,76,0.3)" }}
        >
          <p className="text-gold text-center text-[12px] tracking-[0.32em] uppercase font-semibold">
            The Playbook
          </p>
          <div className="my-6 hairline" />
          <ul className="space-y-3.5">
            {INCLUDES.map((i) => (
              <li key={i} className="flex gap-3 text-[14px] leading-[1.55] text-paper">
                <span className="text-gold shrink-0">✦</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="my-9 hairline" />
          <div className="text-center">
            <p className="text-[#888] text-[14px] tracking-[0.18em] uppercase">
              Total Value <span className="line-through ml-2">${PRICE_FULL}</span>
            </p>
            <p
              className="mt-3 font-display font-bold text-7xl md:text-[9rem] leading-none tracking-tight glow-pulse"
              style={{ background: "var(--gradient-gold-shimmer)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
            >
              ${PRICE_DISCOUNT}
            </p>
            <p className="mt-3 text-[11px] text-gold tracking-[0.28em] uppercase font-semibold">
              Today Only
            </p>
          </div>
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full btn-gold-fill"
            style={{ width: "100%" }}
          >
            Get Instant Access →
          </a>
          <p className="mt-5 text-center text-[11px] tracking-[0.1em] text-[#9D9D9D]">
            🔒 Secure checkout · Instant delivery · Powered by Whop
          </p>
        </div>
      </div>
    </section>
  );
}
