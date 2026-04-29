import { useFadeIn } from "@/hooks/use-fade-in";

const BEFORE = [
  "Answering style questions for free in your DMs",
  "Posting content that gets views but no revenue",
  "Waiting for brand deals that underpay you",
  "Building someone else's business with your audience",
  "Feeling like a content machine with nothing to show for it",
];
const AFTER = [
  "Selling a digital product your audience is already asking for",
  "Waking up to Whop notifications while you slept",
  "Owning your revenue — no brand approval needed",
  "Building an asset that pays you again and again",
  "Knowing exactly what to post, when to post it, and why it converts",
];

export function Shift() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-28 md:py-40">
        <p className="label-eyebrow text-center">The Shift</p>
        <h2 className="mt-6 text-center font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto text-paper">
          Stop Being a Source of Inspiration.
          <br />
          <span className="italic gold-text">Become a Source of Transformation.</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-2 relative gap-10 md:gap-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/40" />
          <div className="md:pr-12">
            <p className="label-eyebrow text-[#888] text-base tracking-[0.3em]">Before</p>
            <ul className="mt-8 space-y-5 bg-[#0A0A0A] border border-[#1A1A1A] rounded-lg p-8">
              {BEFORE.map((item) => (
                <li
                  key={item}
                  className="text-[#777] text-[16px] leading-[1.6] line-through decoration-[#444] font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-12">
            <p
              className="label-eyebrow text-base tracking-[0.3em]"
              style={{
                background: "var(--gradient-gold-shimmer)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "shimmer 4s linear infinite",
              }}
            >
              After
            </p>
            <ul
              className="mt-8 space-y-5 bg-[#0F0F0F] border border-gold rounded-lg p-8"
              style={{
                boxShadow:
                  "0 25px 60px -25px rgba(201,168,76,0.45), inset 0 0 40px rgba(201,168,76,0.06)",
              }}
            >
              {AFTER.map((item) => (
                <li
                  key={item}
                  className="text-[16px] leading-[1.6] font-bold flex gap-3"
                >
                  <span className="text-gold mt-0.5">✦</span>
                  <span
                    style={{
                      background: "var(--gradient-gold-shimmer)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      animation: "shimmer 5s linear infinite",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
