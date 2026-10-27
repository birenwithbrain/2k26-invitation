# ZENITH · Reimagined

A complete visual reset for the BCA Department's Freshers' Welcome at Science College (Autonomous), Hinjilicut.

## Design direction
- Editorial / cinematic hybrid, with oversized kinetic typography and deliberate motion.
- Burgundy, midnight, champagne, and ivory palette.
- A newly choreographed opening sequence: individually animated ZENITH letters, sweeping highlight, gold rule draw, and timed handoff into the page. A new standalone “When & Where” chapter gives date and venue a clear visual spotlight.
- Continuous brand ticker, scroll-linked hero parallax, section reveals, staggered invitation content, a gently floating ticket, a glowing energy-flower emblem in place of the QR placeholder, animated gallery cards, and responsive hover/press feedback.
- Responsive layouts for mobile and desktop, reduced-motion support, scroll-linked motion, section reveals, staggered text, hover states, and a reading-progress line.
- No login, RSVP, or backend.

## Motion references
- Motion for React: scroll-linked effects and viewport-triggered reveals ([scroll-linked effects](https://motion.dev/docs/react-scroll-animations), [text animation](https://motion.dev/docs/text-animation)).
- 21st.dev community Reveal Text: staggered letter entrances for cinematic typography ([component reference](https://preview.21st.dev/%40tom_ui/components/slide-up-text)).

## Run locally

```bash
npm install
npm run dev
```

## Before launch
1. Confirm the final event date and time, then replace “COMING SOON” and “DATE: TO BE ANNOUNCED” in the `when-where` section of `components/zenith-experience.tsx`.
2. The invitation card currently uses the animated energy-bloom illustration. The permanent event URL/subdomain can be linked from the site navigation when configured; a QR code is not part of this design.
3. Replace the gallery placeholders with manually uploaded event photos after the event.
4. Set up the intended subdomain and deploy the static export to Cloudflare Pages.

The invitation card uses a custom animated energy-bloom illustration instead of a QR placeholder or scanning instruction.


## v1.3 updates
- Hero copy changed to “A WARM / WELCOME.” with faculty-friendly supporting copy.
- Hero background rebuilt with layered burgundy gradients, a glowing architectural arch, subtle texture, and light-sweep motion.
- Removed the QR placeholder and scan instruction, replacing them with a custom animated flower-energy emblem.
- Improved narrow-screen navigation, hero typography, ticket composition, section spacing, and touch target sizing.
