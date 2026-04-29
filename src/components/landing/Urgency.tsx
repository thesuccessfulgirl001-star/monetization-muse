import { useEffect, useState } from "react";
import { WHOP_URL } from "./constants";
import { useFadeIn } from "@/hooks/use-fade-in";
import { AnalogClock } from "./AnalogClock";

const KEY = "fcmp:urgency-deadline";
const DURATION = 24 * 60 * 60 * 1000;

function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + DURATION;
  // Per-session: restart for every new visit
  const saved = Number(sessionStorage.getItem(KEY));
  if (saved && saved > Date.now()) return saved;
  const next = Date.now() + DURATION;
  sessionStorage.setItem(KEY, String(next));
  return next;
}

function format(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(total / 3600)).padStart(2, "0");
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return { h, m, s };
}

export function Urgency() {
  const ref = useFadeIn<HTMLElement>();
  const [now, setNow] = useState(Date.now());
  const [deadline, setDeadline] = useState<number>(() => Date.now() + DURATION);

  useEffect(() => {
    setDeadline(getDeadline());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { h, m, s } = format(deadline - now);

  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto max-w-[900px] px-5 md:px-10 py-24 md:py-36 text-center">
        <p className="label-eyebrow">Founding Member Pricing</p>
        <h2 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] text-paper">
          This Price <span className="italic gold-underline">Will Not Stay Here.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-[#C9C4BA] text-[15px] leading-[1.75]">
          You are seeing the founding member price. As more creators access this and results
          come in, this price goes up. This is not a marketing tactic — it is the model.
          Early buyers get the best price. That's you, right now.
        </p>

        <div className="mt-14 mx-auto inline-flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#080808] border border-gold/40 rounded-lg px-7 md:px-16 py-9 md:py-12"
          style={{ boxShadow: "0 0 80px -10px rgba(201,168,76,0.3), inset 0 0 50px rgba(201,168,76,0.06)" }}>
          <AnalogClock size={160} />
          <div className="flex items-end gap-4 md:gap-7">
            {[
              { v: h, l: "Hours" },
              { v: m, l: "Minutes" },
              { v: s, l: "Seconds" },
            ].map((u, i, arr) => (
              <div key={u.l} className="flex items-end gap-4 md:gap-7">
                <div className="text-center">
                  <div className="font-display text-5xl md:text-7xl tabular-nums leading-none glow-pulse"
                    style={{ background: "var(--gradient-gold-shimmer)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {u.v}
                  </div>
                  <div className="mt-3 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#9D9D9D]">
                    {u.l}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-gold text-3xl md:text-5xl pb-7 md:pb-10 opacity-60">:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <a
          href={WHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 btn-gold-fill"
        >
          Yes — I'm Ready. Get Me In. →
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[12px] text-[#9D9D9D]">
          <span><span className="text-gold mr-1">✦</span>Instant download</span>
          <span><span className="text-gold mr-1">✦</span>Secure via Whop</span>
          <span><span className="text-gold mr-1">✦</span>Works at any follower count</span>
        </div>
      </div>
    </section>
  );
}
