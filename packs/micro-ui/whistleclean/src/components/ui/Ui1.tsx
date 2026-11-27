{/* Mechanism: a cloth run along a skirting board | Interaction: the link's baseline hairline wipes teal from left to right on hover or focus; the current page keeps its line wiped | Duration: 300ms */}
import type { ReactNode } from "react";

export function WipeLink({ href = "#", current, children }: { href?: string; current?: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-current={current ? "page" : undefined}
      className={`wc-draw-host relative inline-flex pb-2 text-[15px] font-medium transition-colors duration-[260ms] ease-care hover:text-ink focus-visible:text-ink ${current ? "text-ink" : "text-muted"}`}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />
      <span className="wc-draw absolute inset-x-0 bottom-0" data-active={current ? "true" : undefined} aria-hidden="true" />
    </a>
  );
}

/* Navigation treatment A: baseline wipe. */
export default function Ui1() {
  return (
    <nav aria-label="Example" className="flex flex-wrap gap-x-8 gap-y-4">
      <WipeLink current>Services</WipeLink>
      <WipeLink>Pricing</WipeLink>
      <WipeLink>Our team</WipeLink>
      <WipeLink>Reviews</WipeLink>
    </nav>
  );
}
