import { useFadeIn } from "@/hooks/use-fade-in";

const TOOLS = ["Manus","Gamma","Canva","Figma","Lovable","Carrd","Systeme.io","ConvertKit","MailerLite","Stripe","Gumroad","Whop"];

export function Tools() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10 py-28 md:py-40 text-center">
        <p className="label-eyebrow">What You'll Use</p>
        <h2 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] text-paper">
          Every Tool Is Named. <span className="italic">Every Prompt Is Written.</span>
        </h2>
        <p className="mt-6 text-[15px] leading-[1.7] text-[#9D9D9D] max-w-2xl mx-auto">
          You don't need to figure out which tools to use or how to use them. The playbook
          tells you exactly — with copy-paste prompts for each one.
        </p>
        <div className="mt-14 flex flex-wrap justify-center gap-3 md:gap-4">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="px-6 py-3 rounded-full bg-[#0F0F0F] text-gold text-[12px] tracking-[0.22em] uppercase font-semibold border border-gold/40 hover:border-gold hover:bg-gold hover:text-ink transition-all duration-500"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-12 italic text-[#777] text-[14px]">
          Whether you're starting from zero or already posting consistently — these tools
          cost little to nothing to start.
        </p>
      </div>
    </section>
  );
}
