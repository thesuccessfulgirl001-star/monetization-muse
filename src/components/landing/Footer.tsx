import { BRAND } from "./constants";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center text-center md:text-left">
          <p className="text-gold text-[11px] tracking-[0.22em] uppercase font-semibold">
            {BRAND}
          </p>
          <p className="italic text-paper text-[14px] md:text-right">
            Built for fashion creators who are done waiting.
          </p>
        </div>
        <div className="mt-12 hairline" />
        <p className="mt-6 text-center text-[11px] text-[#777]">
          © 2026· All rights reserved · Checkout powered by Whop
        </p>
      </div>
    </footer>
  );
}
