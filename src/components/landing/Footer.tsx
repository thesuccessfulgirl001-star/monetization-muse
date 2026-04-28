import { BRAND } from "./constants";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-3 items-center text-center md:text-left">
          <p className="text-gold text-[11px] tracking-[0.22em] uppercase font-semibold">
            {BRAND}
          </p>
          <p className="italic text-paper text-[14px] md:text-center">
            Built for fashion creators who are done waiting.
          </p>
          <div className="text-[13px] text-paper md:text-right space-x-4">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <span className="text-[#444]">·</span>
            <a href="#" className="hover:text-gold transition-colors">Whop Store</a>
            <span className="text-[#444]">·</span>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-12 hairline" />
        <p className="mt-6 text-center text-[11px] text-[#777]">
          © 2025 · All rights reserved · Checkout powered by Whop
        </p>
      </div>
    </footer>
  );
}
