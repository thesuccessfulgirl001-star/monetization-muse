import { createFileRoute } from "@tanstack/react-router";
import { StickyNav } from "@/components/landing/StickyNav";
import { Hero } from "@/components/landing/Hero";
import { RealityCheck } from "@/components/landing/RealityCheck";
import { Shift } from "@/components/landing/Shift";
import { WhatsInside } from "@/components/landing/WhatsInside";
import { WhoFor } from "@/components/landing/WhoFor";
import { Pricing } from "@/components/landing/Pricing";
import { Urgency } from "@/components/landing/Urgency";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { DiscountPopup } from "@/components/landing/DiscountPopup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Fashion Creator's Monetization Playbook" },
      {
        name: "description",
        content:
          "The complete AI-powered playbook that shows fashion creators how to research, build, launch and sell their first digital product — step by step.",
      },
      { property: "og:title", content: "The Fashion Creator's Monetization Playbook" },
      {
        property: "og:description",
        content:
          "Turn your audience into income. The 11-part AI-powered system fashion creators use to launch and sell digital products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ink text-paper">
      <StickyNav />
      <Hero />
      <RealityCheck />
      <Shift />
      <WhatsInside />
      <WhoFor />
      <Pricing />
      <Urgency />
      <FAQ />
      <Footer />
      <DiscountPopup />
    </main>
  );
}
