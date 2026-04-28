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
    <section ref={ref} className="bg-cream text-ink">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-24 md:py-36">
        <p className="label-eyebrow text-center">The Shift</p>
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1] max-w-3xl mx-auto">
          Stop Being a Source of Inspiration.
          <br />
          <span className="italic">Become a Source of Transformation.</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-2 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold/60" />
          <div className="md:pr-12 pb-12 md:pb-0">
            <p className="label-eyebrow text-[#888]">Before</p>
            <ul className="mt-8 space-y-5 bg-[#EFEAE0] rounded-md p-7">
              {BEFORE.map((item) => (
                <li key={item} className="text-[#777] text-[15px] leading-[1.6] line-through decoration-[#bbb]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-12 pt-12 md:pt-0 border-t md:border-t-0 border-gold/60">
            <p className="label-eyebrow">After</p>
            <ul className="mt-8 space-y-5 bg-paper rounded-md p-7 shadow-[0_20px_50px_-30px_rgba(10,10,10,0.18)]">
              {AFTER.map((item) => (
                <li key={item} className="text-ink text-[15px] leading-[1.6] font-semibold flex gap-3">
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
