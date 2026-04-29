import { useFadeIn } from "@/hooks/use-fade-in";

const TESTIMONIALS = [
  {
    quote:
      "I've been sitting on the idea of a digital product for eight months. I read this in one afternoon and had my outline done by the same evening. The Manus prompts alone are worth the price.",
  },
  {
    quote:
      "I always assumed you needed a huge following to make money. The low-ticket launch path showed me exactly how to do it with the audience I already have. So practical.",
  },
  {
    quote:
      "The landing page prompt generated my entire sales page in 20 minutes. I changed a few words, connected my Whop link, and it was live. This playbook pays for itself on day one.",
  },
];

export function SocialProof() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-28 md:py-40">
        <p className="label-eyebrow text-center">What Creators Are Saying</p>
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1] text-paper">
          Real Creators. <span className="italic">Real Results.</span>
        </h2>
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="card-luxe p-8 border-t-[3px] border-t-gold"
            >
              <p className="text-gold tracking-[0.15em] text-sm">★★★★★</p>
              <p className="mt-5 italic text-[15px] leading-[1.7] text-[#C9C4BA]">
                "{t.quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
