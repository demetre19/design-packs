# Checkout1–20 — ecommerce flow components (React + Tailwind)

Each `src/CheckoutN.jsx` is self-contained: default export, `useState` only, inline SVG icons, no external images. Drop one into any React 18 + Tailwind 3 project.

| # | Flow | Topology | Style |
|---|------|----------|-------|
| 1 | Multi-step checkout | Split-pane, summary sidebar | Minimal |
| 2 | Multi-step checkout | Card-on-page, vertical stepper rail | Dark |
| 3 | Multi-step checkout | Split-pane, summary on left | Bold (neo-brutalist) |
| 4 | Multi-step checkout | Centered column, roman-numeral steps | Luxury-editorial |
| 5 | Single-page checkout | Split-pane, sticky summary + promo | Light-warm |
| 6 | Single-page checkout | Centered column, express pay | Minimal |
| 7 | Single-page checkout | Card-on-page, in-card 2 columns | Dark neon |
| 8 | Cart (+ empty state) | Table + summary sidebar | Minimal |
| 9 | Cart drawer (+ empty state) | Slide-over panel | Bold |
| 10 | Cart (+ empty state) | Centered column | Luxury-editorial |
| 11 | Payment: card form | Card-on-page, live card preview | Minimal |
| 12 | Payment: saved cards | Split-pane | Dark |
| 13 | Payment: wallets / card / pay later | Card-on-page, tabs | Light-warm |
| 14 | Order confirmation | Centered column, timeline | Minimal |
| 15 | Order confirmation | Split-pane hero + receipt | Bold |
| 16 | Order confirmation | Paper receipt card on dark page | Luxury-editorial (dark) |
| 17 | Product detail | Gallery + buy column | Minimal |
| 18 | Product detail | Vertical thumbs + sticky buy box | Dark |
| 19 | Product grid + filters | Sidebar filters | Light-warm |
| 20 | Product grid + filters | Collapsible filters, grid/list toggle | Dark luxury |

Demo promo codes: C5 `HEARTH15`, C8 `WELCOME10`/`SAVE20`, C9 `CRUNCH5`, C10 `LAURIER`.

## Preview
Open `preview/dist/index.html` directly in a browser (prebuilt), or rebuild:
    npm install
    npx esbuild preview/main.jsx --bundle --jsx=automatic --outfile=preview/dist/app.js
    npx tailwindcss -i preview/input.css -o preview/dist/app.css
