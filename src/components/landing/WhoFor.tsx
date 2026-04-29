import { useFadeIn } from "@/hooks/use-fade-in";

const ITEMS = [
  "You have an audience on Instagram or TikTok and you're not making consistent money from it",
  "You've thought about selling something but don't know what to build or where to start",
  "You're tired of brand deals that underpay you and come with too many restrictions",
  "You want to own your revenue instead of depending on an algorithm or a brand's budget",
  "You're ready to use AI to do most of the heavy lifting — research, writing, design, and copy",
  "You don't want theory — you want a step-by-step system you can open and execute today",
];

export function WhoFor() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto max-w-[900px] px-5 md:px-10 py-24 md:py-36">
        <p className="label-eyebrow text-center">Is This For You?</p>
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1] text-paper">
          This Was Built for You <span className="italic">If —</span>
        </h2>
        <ul className="mt-16 space-y-6">
          {ITEMS.map((it) => (
            <li key={it} className="flex gap-5 text-[16px] md:text-[17px] leading-[1.6] text-paper">
              <span className="text-gold text-xl shrink-0 mt-0.5">✦</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <div className="mt-14 hairline" />
        <div
          className="mt-10 mx-auto max-w-2xl rounded-lg border border-gold/50 bg-[#0A0A0A] px-7 py-8 text-center"
          style={{ boxShadow: "0 0 60px -15px rgba(201,168,76,0.35), inset 0 0 30px rgba(201,168,76,0.05)" }}
        >
          <p className="label-eyebrow">Important</p>
          <p className="mt-4 font-display italic text-paper text-[18px] md:text-[22px] leading-[1.55]">
            This is <span className="not-italic font-bold gold-underline">NOT</span> for you if
            you're looking for a shortcut with no execution required.
          </p>
          <p className="mt-3 text-[14px] md:text-[15px] text-[#C9C4BA] leading-[1.7]">
            This is a system. <span className="text-gold font-semibold">It works when you work it.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
