import { WHOP_URL, BRAND } from "./constants";

export function StickyNav() {
  return (
    <header className="sticky top-0 z-40 bg-ink text-paper border-b border-[rgba(201,168,76,0.25)]">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="text-gold text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase whitespace-nowrap">
          {BRAND}
        </a>
        <div className="hidden lg:flex flex-1 overflow-hidden mx-8 relative">
          <div className="flex whitespace-nowrap animate-[marquee_38s_linear_infinite] gap-12 text-gold/80 text-[11px] tracking-[0.18em] uppercase">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>The system fashion creators use to turn followers into revenue</span>
                <span>·</span>
                <span>Built with AI</span>
                <span>·</span>
                <span>Instant download</span>
                <span>·</span>
                <span>Available now</span>
                <span>·</span>
              </div>
            ))}
          </div>
        </div>
        <a
          href={WHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 border border-gold text-gold text-[10px] md:text-[11px] font-semibold tracking-[0.18em] uppercase rounded-md hover:bg-gold hover:text-ink transition-all duration-300 whitespace-nowrap"
        >
          Get Instant Access <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
