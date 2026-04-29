import { useFadeIn } from "@/hooks/use-fade-in";

const COLS = [
  "You post for hours. A reel hits 500K views. Your DMs explode. And at the end of the month — you made $0 from it. You answered every \"where is that from?\" for free. You styled the looks, shot the content, edited the videos. And the only person who got paid was the brand who used your audience.",
  "You know you should be selling something. You've thought about it a hundred times. But every time you sit down to start, you don't know what to build, how to price it, how to sell it, or where to even begin. So you post another reel instead.",
  "Meanwhile, other creators with smaller followings than yours are pulling $3K, $5K, $10K from a single launch. Not because they're more talented. Because they have a system. This playbook is that system.",
];

export function RealityCheck() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-28 md:py-40">
        <p className="label-eyebrow text-center">The Problem</p>
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1] max-w-3xl mx-auto text-paper">
          The Fashion Creator Trap <span className="italic">Nobody Talks About.</span>
        </h2>
        <div className="mt-20 grid gap-12 md:gap-10 md:grid-cols-3">
          {COLS.map((text, i) => (
            <div key={i} className="pt-8 border-t border-gold/60">
              <span className="label-eyebrow">0{i + 1}</span>
              <p className="mt-5 text-[15px] leading-[1.85] text-[#C9C4BA]">{text}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-24 mx-auto max-w-3xl pl-8 border-l-2 border-gold">
          <p className="font-display italic text-2xl md:text-[34px] leading-[1.35] text-paper">
            "Every time you answer 'where did you get that?' for free — you're giving away
            the thing people would pay for."
          </p>
        </blockquote>
      </div>
    </section>
  );
}
