
# The Fashion Creator's Monetization Playbook — Landing Page

A premium, NET-A-PORTER–style single-page sales site. Editorial typography, generous whitespace, champagne gold accents on black/white/cream. Every CTA links to the Whop checkout. Two timed conversion mechanics (2-min discount popup + 24-hour urgency countdown) drive action.

## Design system

- **Colors**: white `#FFFFFF`, black `#0A0A0A`, gold `#C9A84C`, cream `#FAF6EE`, text-secondary `#555555`, divider `#E8DCC8`.
- **Type**: Playfair Display (headlines), Inter (body + UI), uppercase letter-spaced Inter `0.15em` (labels).
- **UI rules**: 8px radius on cards/buttons, 1px gold dividers, 2px gold underlines on key phrases, soft drop shadows on testimonial + pricing cards, scroll-triggered fade-ins (IntersectionObserver), button hover scale 1.02. Mobile-first responsive.

## Page structure (single route: `/`)

1. **Sticky nav (black)** — gold logo wordmark left, slow gold marquee ticker center, "Get Instant Access →" button right.
2. **Hero (black)** — pre-headline tag, Playfair headline with "Now Build the Income." gold-underlined on its own line, subheadline, ★★★★★ social proof, primary gold CTA + ghost "See what's inside ↓" anchor, three trust signals. Subtle radial champagne-gold glow behind headline.
3. **Reality Check (white)** — 3 columns with thin gold top borders + large italic Playfair pull-quote with gold left border.
4. **The Shift (cream)** — Before/After two-column comparison split by vertical gold line; muted gray Before, bold black After.
5. **What's Inside (black)** — 2-column grid of 11 module cards (gold part number, white title, gray body, `#1A1A1A` border).
6. **The Tools (white)** — black pill tags with gold text for all 12 tools, italic gray closing line.
7. **Who This Is For (black)** — 6-item gold ✦ bulleted list + gray "not for you if" line.
8. **Pricing (cream)** — centered black pricing card with gold border + soft gold glow, 10-item ✦ checklist, strikethrough "$322" → large gold price **$300**, full-width black/gold CTA → Whop link, secure checkout microcopy.
9. **Social Proof (white)** — 3 testimonial cards, white bg, drop shadow, 3px gold top border, 5 gold stars, italic quote, bold handle. **No follower counts or contact info** — left blank for you to fill in.
10. **Urgency (black)** — heading + body, large gold 24-hour countdown (HH:MM:SS, persisted per visitor in localStorage), full-width gold CTA, three ✦ trust microlines.
11. **FAQ (white)** — 6-item accordion using existing shadcn Accordion, gold rotating chevron, bold black questions, gray answers.
12. **Footer (black)** — 3 columns (logo / italic tagline / Instagram · Whop Store · Contact placeholders), gold divider, tiny gray copyright.

## Conversion mechanics

- **All CTAs** link to: `https://whop.com/checkout/plan_D5myA0pXWK8Tp` (opens new tab).
- **2-minute discount popup**:
  - Triggers 120s after page load if user has not clicked any checkout CTA.
  - Shown **once per session** (sessionStorage) and **dismissible** (X button).
  - Modal: black bg, gold border + glow, large premium gold clock icon next to a live countdown starting at **3:00**, headline "You've Unlocked a Limited-Time Discount", subcopy: price drops from **$300 → $263** if claimed before the timer hits zero.
  - Primary CTA "Claim My Discount →" → Whop link.
  - When timer hits 0: copy swaps to "Discount expired", popup auto-closes shortly after, discount is lost for the session.
- **24-hour urgency countdown** (Section 10): rolling per-visitor timer stored in localStorage; restarts at 24:00:00 only after expiry.
- **Smooth scroll** from hero "See what's inside ↓" to Section 5.

## Technical approach

- Single route `src/routes/index.tsx` (replaces the placeholder). No new routes — one long sales page.
- New components in `src/components/landing/`: `StickyNav`, `Marquee`, `Hero`, `RealityCheck`, `Shift`, `WhatsInside`, `Tools`, `WhoFor`, `Pricing`, `SocialProof`, `Urgency`, `FAQ`, `Footer`, `DiscountPopup`, `CountdownTimer`, `useFadeInOnScroll` hook.
- Google Fonts (Playfair Display + Inter) loaded via the route `head()` links.
- Brand tokens added in `src/styles.css` (`--color-gold`, `--color-cream`, etc.) so utilities like `bg-gold` / `text-gold` work everywhere.
- Update `__root.tsx` head metadata (title, description, og tags) for the playbook.
- Reuses existing shadcn `Accordion`, `Button`, `Dialog` primitives where appropriate.

## Placeholders you'll edit later

- Testimonial quotes are in place; **handle/follower/contact fields left blank** as requested.
- Footer Instagram / Whop Store / Contact links use `#` placeholders.
- Pricing constants centralized: full price **$300**, discounted **$263** — change in one place if needed.
