# GENMENU-INDEX — Mobile-Only Interaction Chrome (24 Components)

Self-contained single-file HTML components built with Tailwind CSS CDN and vanilla JavaScript.
Every component enforces `md:hidden` (mobile-only), `>=44px` touch targets, `pointer-events-none` when hidden, `IntersectionObserver` / scroll thresholds, and `prefers-reduced-motion` compliance.

## A. Scroll-Revealed Sticky Bars (8)

- [`mobfx-dual-action-bar-01.html`](./mobfx-dual-action-bar-01.html) — Split Chat | Call bottom bar with red brand accent that slides up after the first-viewport fold. _(Dark-on-light · Plumbing & Heating)_
- [`mobfx-call-now-price-02.html`](./mobfx-call-now-price-02.html) — Single full-width Call Now bar sliding up past the fold with phone icon and transparent "From $150" price hint. _(Dark-on-light · Drain & Pipe Clearing)_
- [`mobfx-fold-to-footer-bar-03.html`](./mobfx-fold-to-footer-bar-03.html) — Bottom booking bar that reveals past the fold and automatically hides again when the footer enters view. _(Dark-on-light · Family & Emergency Dental)_
- [`mobfx-top-quote-strip-04.html`](./mobfx-top-quote-strip-04.html) — Slim top-of-screen CTA strip ("Get a Quote" + chevron) that pins directly beneath the sticky header after scroll. _(Dark-on-light · Home & Office Cleaning)_
- [`mobfx-triple-action-bar-05.html`](./mobfx-triple-action-bar-05.html) — Three-column bottom utility bar with Call, Text, and Book stacked icon-and-label controls revealed after fold. _(Dark-on-light · Auto Mechanic & Servicing)_
- [`mobfx-scroll-progress-cta-06.html`](./mobfx-scroll-progress-cta-06.html) — Bottom CTA bar with an embedded GPU-composited scroll progress meter that fills dynamically as the page scrolls. _(Dark-on-light · HVAC & Air Conditioning)_
- [`mobfx-expandable-action-sheet-bar-07.html`](./mobfx-expandable-action-sheet-bar-07.html) — Sticky bottom bar that expands on tap into a 3-option mini action menu and collapses on outside tap or Escape. _(Dark-on-light · Roofing & Gutters)_
- [`mobfx-emergency-compacting-bar-08.html`](./mobfx-emergency-compacting-bar-08.html) — Light-on-dark emergency bar with pulsing 24/7 dispatch badge that appears immediately and compacts after 4 seconds. _(Light-on-dark · 24/7 Locksmith & Security)_

## B. Header Morphs (4)

- [`mobfx-header-phone-morph-09.html`](./mobfx-header-phone-morph-09.html) — Header phone number ("0400 123 456") smoothly slides out and morphs into a compact Call Now button after the fold. _(Dark-on-light · Residential Plumbing)_
- [`mobfx-header-cta-icon-10.html`](./mobfx-header-cta-icon-10.html) — Header "Book Visit" text CTA link morphs into a compact 44x44 round icon-only button once scrolled past the fold. _(Dark-on-light · Family Dentistry)_
- [`mobfx-header-full-compress-11.html`](./mobfx-header-full-compress-11.html) — Light-on-dark full mobile header compresses on scroll: logo mark scales down and text CTA collapses to an icon button. _(Light-on-dark · Mobile Auto Mechanic)_
- [`mobfx-header-two-stage-12.html`](./mobfx-header-two-stage-12.html) — Two-stage header: stage 1 hides the utility phone row; stage 2 reveals a minimal compact bar with logo and call icon. _(Dark-on-light · End-of-Lease Cleaning)_

## C. Floating Action Buttons (5)

- [`mobfx-fab-call-13.html`](./mobfx-fab-call-13.html) — Minimal 56x56 round bottom-right Call FAB that scales in cleanly only after the user scrolls past the hero fold. _(Dark-on-light · Licensed Electrical)_
- [`mobfx-fab-radial-fan-14.html`](./mobfx-fab-radial-fan-14.html) — Bottom-right FAB revealed after the fold that fans out into 3 radial arc actions (Call, Message, Quote) on tap. _(Dark-on-light · Tree Care & Landscaping)_
- [`mobfx-fab-pill-collapse-15.html`](./mobfx-fab-pill-collapse-15.html) — Extended "Book Online" pill FAB that appears after the fold and smoothly collapses to an icon-only circle after 3 seconds. _(Dark-on-light · Dental Hygiene & Orthodontics)_
- [`mobfx-fab-stacked-pair-16.html`](./mobfx-fab-stacked-pair-16.html) — Stacked bottom-right pair: Call FAB appears past fold (1x viewport), Back-to-Top FAB stacks above only after 2 viewports. _(Dark-on-light · Appliance Repair)_
- [`mobfx-fab-chat-pulse-17.html`](./mobfx-fab-chat-pulse-17.html) — Light-on-dark bottom-right chat FAB with availability pulse ring that opens an inline quick-reply chat card. _(Light-on-dark · Pest & Termite Control)_

## D. Back-to-Top + Scroll UI (4)

- [`mobfx-back-to-top-circle-18.html`](./mobfx-back-to-top-circle-18.html) — Crisp 48x48 circular Back-to-Top FAB that remains hidden until 2 viewports of scroll and smooth-scrolls to top. _(Dark-on-light · Interior & Exterior Painting)_
- [`mobfx-back-to-top-edge-strip-19.html`](./mobfx-back-to-top-edge-strip-19.html) — Light-on-dark slim full-width bottom edge tap strip ("Back to top") revealed after 2 viewports for effortless thumb reach. _(Light-on-dark · Garage Door & Gate Repair)_
- [`mobfx-scroll-ring-top-20.html`](./mobfx-scroll-ring-top-20.html) — Circular SVG progress ring button that fills stroke-dashoffset as you scroll and jumps smoothly to top on tap. _(Dark-on-light · Solar & Battery Systems)_
- [`mobfx-section-jump-pill-21.html`](./mobfx-section-jump-pill-21.html) — Floating bottom pill that updates its label per active section ("Jump to Pricing ↓", "Jump to Reviews ↓", "Back to Top ↑"). _(Dark-on-light · Carpet & Upholstery Cleaning)_

## E. Bottom Sheets + Drawers (3)

- [`mobfx-bottom-sheet-handle-22.html`](./mobfx-bottom-sheet-handle-22.html) — Docked grab-handle bar revealed after fold that slides up a full service-rates bottom sheet over a dimming scrim. _(Dark-on-light · Hot Water & Gas Plumbing)_
- [`mobfx-peek-offer-card-23.html`](./mobfx-peek-offer-card-23.html) — Light-on-dark peek card showing a single offer headline after fold that expands on tap into full details and dual CTAs. _(Light-on-dark · Brakes, Tires & Alignment)_
- [`mobfx-quote-progress-drawer-24.html`](./mobfx-quote-progress-drawer-24.html) — Sticky "Step 1/3" quote progress bar revealed after fold that expands on tap into an interactive 3-step name & phone form. _(Dark-on-light · Cosmetic & Implant Dentistry)_
