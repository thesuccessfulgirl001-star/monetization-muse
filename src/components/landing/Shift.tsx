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
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1] max-w-3xl mx-auto text-paper">
          Stop Being a Source of Inspiration.
          <br />
          <span className="italic">Become a Source of Transformation.</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-2 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/40" />
          <div className="md:pr-12 pb-12 md:pb-0">
            <p className="label-eyebrow text-[#888]">Before</p>
            <ul className="mt-8 space-y-5 bg-[#0A0A0A] border border-[#1A1A1A] rounded-md p-7">
              {BEFORE.map((item) => (
                <li key={item} className="text-[#777] text-[15px] leading-[1.6] line-through decoration-[#444]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-12 pt-12 md:pt-0 border-t md:border-t-0 border-gold/40">
            <p className="label-eyebrow">After</p>
            <ul className="mt-8 space-y-5 bg-[#0F0F0F] border border-gold/40 rounded-md p-7"
              style={{ boxShadow: "0 25px 60px -25px rgba(201,168,76,0.3)" }}>
              {AFTER.map((item) => (
                <li key={item} className="text-paper text-[15px] leading-[1.6] font-medium flex gap-3">
                  <span className="text-gold mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
