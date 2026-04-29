import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { WHOP_URL, PRICE_FULL, PRICE_DISCOUNT } from "./constants";
import { AnalogClock } from "./AnalogClock";

const SESSION_KEY = "fcmp:discount-shown";
const TRIGGER_MS = 2 * 60 * 1000; // 2 minutes
const COUNTDOWN_S = 3 * 60; // 3 minutes

export function DiscountPopup() {
  const [open, setOpen] = useState(false);
  const [seconds, setSeconds] = useState(COUNTDOWN_S);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    }, TRIGGER_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open || expired) return;
    if (seconds <= 0) {
      setExpired(true);
      const t = setTimeout(() => setOpen(false), 4000);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [open, seconds, expired]);

  if (!open) return null;

  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-md bg-ink text-paper rounded-lg border border-gold p-8 md:p-10 text-center"
        style={{ boxShadow: "0 40px 100px -20px rgba(201,168,76,0.5), 0 0 0 1px rgba(201,168,76,0.4)" }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 text-[#888] hover:text-gold transition-colors"
        >
          <X className="size-5" />
        </button>

        {!expired ? (
          <>
            <p className="label-eyebrow">Limited-Time Offer</p>
            <h3 className="mt-5 font-display text-2xl md:text-3xl leading-[1.2] text-paper">
              You've Unlocked a <span className="italic gold-underline">10% Discount.</span>
            </h3>
            <p className="mt-5 text-[14px] leading-[1.7] text-[#C9C4BA]">
              Claim it now and pay <span className="text-gold font-semibold">${PRICE_DISCOUNT}</span>{" "}
              instead of <span className="line-through">$47</span>.
              When this timer hits zero — the discount is gone.
            </p>

            <div className="mt-8 flex items-center justify-center gap-5">
              <AnalogClock size={84} />
              <div className="font-display text-5xl md:text-6xl tabular-nums tracking-tight glow-pulse" style={{ background: "var(--gradient-gold-shimmer)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                {m}:{s}
              </div>
            </div>

            <a
              href={WHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 btn-gold-fill w-full"
              style={{ width: "100%" }}
            >
              Claim Now & Pay ${PRICE_DISCOUNT} →
            </a>
            <p className="mt-4 text-[11px] text-[#888]">
              Secure checkout · Instant delivery · Powered by Whop
            </p>
          </>
        ) : (
          <>
            <p className="label-eyebrow text-[#888]">Discount Expired</p>
            <h3 className="mt-5 font-display text-2xl md:text-3xl leading-[1.2] text-paper">
              Time's Up.
            </h3>
            <p className="mt-5 text-[14px] leading-[1.7] text-[#C9C4BA]">
              The limited-time discount has ended. The playbook is still available at the
              standard price of <span className="text-gold font-semibold">$47</span>.
            </p>
            <a
              href={WHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 btn-primary-gold w-full"
              style={{ width: "100%" }}
            >
              Get Instant Access →
            </a>
          </>
        )}
      </div>
    </div>
  );
}
