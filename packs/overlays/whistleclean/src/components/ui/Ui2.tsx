{/* Mechanism: sorting site folders into trays, one tray lifted at a time | Interaction: compact filter links; the current link sits on a mist chip with teal type; hovering another link tints its chip mist | Duration: 240ms */}
import type { ReactNode } from "react";

export function ChipLink({ href = "#", current, children }: { href?: string; current?: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-current={current ? "page" : undefined}
      className={`inline-block rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors duration-[240ms] ease-care ${current ? "bg-mist text-teal" : "text-muted hover:bg-mist/60 hover:text-ink focus-visible:bg-mist/60 focus-visible:text-ink"}`}
    >
      {children}
    </a>
  );
}

/* Navigation treatment B: chip filters for secondary navigation. Treatment A (Ui1) owns the underline. */
export default function Ui2() {
  return (
    <nav aria-label="Example" className="flex flex-wrap gap-2 py-2">
      <ChipLink>Offices</ChipLink>
      <ChipLink current>Medical</ChipLink>
      <ChipLink>Childcare</ChipLink>
      <ChipLink>End of lease</ChipLink>
    </nav>
  );
}
