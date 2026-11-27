{/* Mechanism: a freshly wiped edge | Interaction: primary pills fill teal and nudge their arrow 3px along the line; secondary buttons are a dashed stitched pill over which a solid teal line wipes in from the left; disabled buttons fade and ignore the pointer | Duration: 260ms fill, 300ms wipe */}
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { PillButton } from "../../echo";

export function SecondaryButton({ children, ...rest }: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className="group relative inline-flex h-11 items-center gap-2 rounded-full border-[1.5px] border-dashed border-teal/60 px-6 text-[14px] font-semibold text-teal active:bg-mist disabled:pointer-events-none disabled:border-line disabled:text-muted"
    >
      <span className="pointer-events-none absolute -inset-[1.5px] rounded-full border-[1.5px] border-teal [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-[300ms] ease-care group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)]" aria-hidden="true" />
      {children}
    </button>
  );
}

/* Button families: primary (outline and solid) and secondary (stitched), each with rest, hover, active and disabled. */
export default function Ui3() {
  return (
    <div className="grid gap-10">
      <div>
        <p className="wc-label mb-5 text-muted">Primary</p>
        <div className="flex flex-wrap items-center gap-6">
          <PillButton>Request a quote</PillButton>
          <PillButton tone="solid">Book a site walk</PillButton>
          <PillButton size="lg" icon={false}>Start the form</PillButton>
          <PillButton disabled icon={false}>Sending</PillButton>
        </div>
      </div>
      <div>
        <p className="wc-label mb-5 text-muted">Secondary</p>
        <div className="flex flex-wrap items-center gap-6">
          <SecondaryButton>See pricing</SecondaryButton>
          <SecondaryButton>Download SDS <ArrowRight size={15} strokeWidth={1.75} aria-hidden="true" /></SecondaryButton>
          <SecondaryButton disabled>Unavailable</SecondaryButton>
        </div>
      </div>
    </div>
  );
}
