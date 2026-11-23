# Pricing sections (Pricing1–Pricing20)

React + Tailwind CSS pricing components. Each file in `components/` stands alone: it has no shared imports, and only `react` is needed (`useState` where a component is interactive).

    import { Pricing3 } from "./components";   // or: import Pricing3 from "./components/Pricing3";

`preview.html` shows all 20 on one page (React, Babel and Tailwind are loaded from CDNs, so it needs a network connection). Run `node build-preview.mjs` to rebuild it after editing a component.

| # | Layout | Style | Interactive |
|---|---|---|---|
| 1 | 3 tiers, featured middle | minimal / professional | |
| 2 | 2 tiers | bold gradient | |
| 3 | 3 tiers + monthly/annual switch | dark | ✓ |
| 4 | comparison table with checkmarks | light professional | |
| 5 | single hero price + feature list | editorial | |
| 6 | usage sliders + cost calculator | dark indigo | ✓ |
| 7 | cards with per-feature limits | light-warm | |
| 8 | pricing + FAQ (`<details>`) | minimal monochrome | ✓ (FAQ) |
| 9 | text-only rows | editorial mono | |
| 10 | 4 cards with Popular / Best value badges | bold colourful | |
| 11 | self-serve vs contact sales | dark | |
| 12 | free-trial emphasis + timeline | light-warm | |
| 13 | per-seat with seat stepper | professional | ✓ |
| 14 | 4 tiers + billing and currency toggles | pastel colourful | ✓ |
| 15 | comparison table + billing toggle | dark | ✓ |
| 16 | magazine 3-column | editorial serif | |
| 17 | graduated volume table + calculator | light minimal | ✓ |
| 18 | brutalist cards | bold yellow/black | |
| 19 | per-seat slider + annual switch | dark gradient | ✓ |
| 20 | horizontal row cards + guarantees | soft warm | |
