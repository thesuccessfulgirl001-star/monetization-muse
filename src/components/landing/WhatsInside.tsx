import { useFadeIn } from "@/hooks/use-fade-in";

const PARTS: { n: string; title: string; body: string }[] = [
  { n: "01", title: "The Psychology of the Fashion Creator", body: "Understand the exact mental trap keeping you broke — and the three hidden desires your audience has that they'll pay to fulfill." },
  { n: "02", title: "The Style Utility Gap", body: "Why \"inspo\" is free and always will be — and how to position yourself in the one zone of the market where people actually spend money." },
  { n: "03", title: "Research & Validation", body: "Three copy-paste Manus prompts that do your entire competitor research, audience pain analysis, and Instagram audit in under 48 hours." },
  { n: "04", title: "Product Creation with AI", body: "The exact Manus prompt that generates your complete digital product — outline, module content, offer name, and sales copy — in one session." },
  { n: "05", title: "Design with Gamma, Canva & Figma", body: "Word-for-word design prompts for every tool. Turn your AI-generated content into a premium, beautiful product without touching a template from scratch." },
  { n: "06", title: "The Grand Slam Offer", body: "How to package your product so it feels worth $300 and sells for $47. The value stack formula, the three pricing tiers, and the price anchor line that makes buyers feel smart for purchasing." },
  { n: "07", title: "The Landing Page", body: "Section-by-section copy for your entire sales page — plus a full Lovable prompt that generates the whole thing in minutes." },
  { n: "08", title: "The 21-Day Content Warm-Up", body: "A day-by-day plan across 6 emotional layers with hooks, post ideas, story formats, and CTAs — all designed to have your audience ready to buy before the cart even opens." },
  { n: "09", title: "Two Launch Paths", body: "Low-ticket launch (14 days, no webinar) and high-ticket launch (21 days, masterclass) — laid out side by side so you pick what matches your offer." },
  { n: "10", title: "The Full Money Model", body: "All 7 revenue layers: lead magnet, core offer, order bump, one-click upsell, VIP tier, premium, and monthly continuity. Most creators leave 80% of this on the table." },
  { n: "11", title: "The Rescue Plan", body: "Every failure scenario covered with a specific fix. What to do if nobody shows up, nobody buys, or sales die mid-launch." },
];

export function WhatsInside() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} id="whats-inside" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-24 md:py-36">
        <p className="label-eyebrow text-center">The Playbook</p>
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1] text-paper">
          Everything You Need. <span className="italic">Nothing You Don't.</span>
        </h2>
        <p className="mt-6 text-center text-[#C9C4BA] text-[15px] max-w-2xl mx-auto">
          11 parts. Every tool named. Every prompt written for you. Every step in order.
        </p>

        <div className="mt-16 grid gap-5 md:gap-6 md:grid-cols-2">
          {PARTS.map((p) => (
            <article
              key={p.n}
              className="rounded-lg border border-[#1F1F1F] bg-[#0F0F0F] p-7 md:p-8 hover:border-gold/60 transition-colors duration-500"
            >
              <p className="text-gold text-[11px] tracking-[0.22em] uppercase font-semibold">
                Part {p.n}
              </p>
              <h3 className="mt-3 font-display text-[22px] md:text-[26px] leading-[1.2] text-paper">
                {p.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-[#9D9D9D]">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
