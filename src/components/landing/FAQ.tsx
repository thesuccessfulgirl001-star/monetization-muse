import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFadeIn } from "@/hooks/use-fade-in";

const FAQS = [
  { q: "What exactly do I receive?", a: "You get the complete PDF playbook — 11 parts covering research, product creation, offer design, landing page copy, content warm-up, two launch paths, the full money model, and the rescue plan. Instant download the moment you complete checkout on Whop." },
  { q: "Do I need a big following?", a: "No. The system is specifically designed to work at any follower count. The low-ticket launch path is built for accounts that are still growing. Creators with under 1,000 followers have generated thousands from a single launch using this model." },
  { q: "Do I need to be tech-savvy?", a: "No. Every tool recommended has a free tier and a beginner-friendly interface. Every prompt is copy-paste ready. You do not need design skills, coding knowledge, or marketing experience." },
  { q: "How quickly can I launch after reading this?", a: "If you follow the low-ticket path, you can have a validated product, a live landing page, and an open cart within 14 days. Most of the creation work is done by AI in a few hours." },
  { q: "What if I don't know what product to sell?", a: "Part Three walks you through the exact research and validation process — including the survey questions, the Story poll script, and the TikTok test method — that tells you exactly what your audience wants before you build anything." },
  { q: "What if it doesn't work for me?", a: "Part Eleven covers every failure scenario with a specific fix. If you follow the system and feel stuck, reach out directly." },
];

export function FAQ() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="bg-paper text-ink">
      <div className="mx-auto max-w-[820px] px-5 md:px-10 py-24 md:py-36">
        <p className="label-eyebrow text-center">Questions</p>
        <h2 className="mt-6 text-center font-display text-3xl md:text-5xl leading-[1.1]">
          Everything <span className="italic">You're Wondering.</span>
        </h2>
        <Accordion type="single" collapsible className="mt-14 divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-0">
              <AccordionTrigger className="py-6 text-left text-[16px] md:text-[17px] font-semibold text-ink hover:no-underline [&>svg]:text-gold [&>svg]:size-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-[1.75] text-[#555]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
