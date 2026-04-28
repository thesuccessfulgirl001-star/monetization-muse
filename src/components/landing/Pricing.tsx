import { WHOP_URL, PRICE_FULL } from "./constants";
import { useFadeIn } from "@/hooks/use-fade-in";

const INCLUDES = [
  "11-part complete execution system",
  "3 copy-paste Manus research prompts",
  "Full AI product creation prompt",
  "Gamma, Canva & Figma design prompts",
  "Full Lovable landing page prompt",
  "21-day content warm-up plan with hooks and CTAs",
  "Two launch paths — low-ticket and high-ticket",
  "The 7-layer money model",
  "The complete rescue plan",
  "Instant download via Whop",
];

export function Pricing() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} id="pricing" className="bg-cream text-ink">
      <div className="mx-auto max-w-[900px] px-5 md:px-10 py-24 md:py-36 text-center">
        <p className="label-eyebrow">Get Access Today</p>
        <h2 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1]">
          The Fashion Creator's <span className="italic">$1,000+</span> Monetization Playbook.
        </h2>
        <p className="mt-6 text-[#555] text-[15px] max-w-xl mx-auto">
          One investment. Everything you need to research, build, launch, and sell.
        </p>

        <div
          className="mt-14 mx-auto max-w-[560px] rounded-lg bg-ink text-paper p-8 md:p-12 border border-gold text-left"
          style={{ boxShadow: "0 30px 80px -25px rgba(201,168,76,0.45), 0 0 0 1px rgba(201,168,76,0.4)" }}
        >
          <p className="text-gold text-center text-[12px] tracking-[0.28em] uppercase font-semibold">
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
          <div className="my-7 hairline" />
          <div className="text-center">
            <p className="text-[#888] text-[13px] line-through">Total value: $322</p>
            <p className="mt-2 font-display text-gold text-5xl md:text-6xl tracking-tight">
              ${PRICE_FULL}
            </p>
          </div>
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full btn-gold-fill"
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
