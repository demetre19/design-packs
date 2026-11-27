/* Echo primitives. The signature is the Wipe: a teal hairline that draws itself left to right under anything
   clickable when it is hovered or focused. The Edge Glint marks call-to-action cards (never alongside a wipe on the same item); the eucalyptus
   Leaf is reserved for trees, checklist line ends, the certificate seal and the overnight timeline; Gumlines are
   the eucalyptus contour drawing used sparingly on teal plates. */
import type { CSSProperties, ElementType, ReactNode, ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";

const cx = (...c: Array<string | false | null | undefined>) => c.filter(Boolean).join(" ");
export { cx };

/* ---------- The Leaf (reserved: trees, certificate, timeline) ---------- */
/* A sickle-curved eucalyptus leaf with a short stem, 34 × 14. */
type LeafProps = {
  bg?: string;
  active?: boolean;
  /** Use on teal grounds. */
  reverse?: boolean;
  className?: string;
  style?: CSSProperties;
};
export function Leaf({ bg, active, reverse, className, style }: LeafProps) {
  return (
    <svg
      className={cx("wc-leaf", reverse && "wc-leaf-reverse", className)}
      data-active={active ? "true" : undefined}
      viewBox="0 0 34 14"
      aria-hidden="true"
      style={{ ...(bg ? ({ "--leaf-bg": bg } as CSSProperties) : null), ...style }}
    >
      <path className="rib" d="M0.5 9 L4 8.2" />
      <path className="blade" d="M4 8.2 C8 1.2, 21 -0.4, 33.4 3 C27 10.6, 13 14.2, 4 8.2 Z" />
      <path className="rib" d="M4.6 8.2 C13 6.6, 23 4.6, 32.4 3.3" />
    </svg>
  );
}

/* ---------- Pill button: rounded pill, crisp 1.5px line, fills teal on hover ---------- */
type PillButtonProps<T extends ElementType> = {
  as?: T;
  tone?: "outline" | "solid" | "onTeal";
  size?: "md" | "lg";
  icon?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function PillButton<T extends ElementType = "button">({
  as, tone = "outline", size = "md", icon = true, children, className, ...rest
}: PillButtonProps<T>) {
  const Tag = (as ?? "button") as ElementType;
  const tones = {
    outline: "border-ink text-ink bg-paper hover:bg-teal hover:border-teal hover:text-paper focus-visible:bg-teal focus-visible:border-teal focus-visible:text-paper",
    solid: "border-teal bg-teal text-paper hover:bg-paper hover:text-teal focus-visible:bg-paper focus-visible:text-teal",
    onTeal: "border-paper text-paper bg-transparent hover:bg-paper hover:text-teal focus-visible:bg-paper focus-visible:text-teal",
  }[tone];
  const sizes = size === "lg" ? "h-14 px-8 text-[16px]" : "h-12 px-7 text-[15px]";
  return (
    <Tag
      className={cx(
        "group relative inline-flex items-center gap-2.5 rounded-full border-[1.5px] font-semibold whitespace-nowrap",
        "transition-colors duration-[260ms] ease-care disabled:pointer-events-none disabled:opacity-45",
        tones, sizes, className,
      )}
      {...rest}
    >
      {children}
      {icon && <ArrowRight size={16} strokeWidth={1.75} className="transition-[translate] duration-[260ms] ease-care group-hover:[translate:3px_0]" aria-hidden="true" />}
    </Tag>
  );
}

/* ---------- Rule: a hairline. Inside a wc-draw-host it wipes teal left to right. ---------- */
export function Rule({ className, reverse }: { className?: string; reverse?: boolean }) {
  return (
    <div className={cx("relative h-px w-full", reverse ? "bg-paper/30" : "bg-line", className)} aria-hidden="true">
      <span className={cx("wc-draw absolute inset-0", reverse && "!bg-paper")} />
    </div>
  );
}

/* ---------- Line link: text on a hairline that wipes teal on hover or focus ---------- */
export function LineLink({ href = "#", children, className, reverse }: { href?: string; children: ReactNode; className?: string; reverse?: boolean }) {
  return (
    <a
      href={href}
      className={cx(
        "wc-draw-host relative inline-flex items-center gap-1.5 pb-1.5 font-semibold transition-colors duration-[260ms] ease-care",
        reverse ? "text-paper" : "text-ink hover:text-teal focus-visible:text-teal",
        className,
      )}
    >
      {children}
      <span className={cx("absolute inset-x-0 bottom-0 h-px", reverse ? "bg-paper/40" : "bg-line")} aria-hidden="true" />
      <span className={cx("wc-draw absolute inset-x-0 bottom-0", reverse && "!bg-paper")} aria-hidden="true" />
    </a>
  );
}

/* ---------- Section label: label voice over a hairline; the section wipes it when hovered ---------- */
export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cx("wc-draw-host grid gap-3", className)}>
      <span className="wc-label text-muted">{children}</span>
      <Rule />
    </div>
  );
}

/* ---------- Edge Glint: call-to-action cards only ---------- */
export function Glint({ children, radius = 16, className, faceClassName }: { children: ReactNode; radius?: number; className?: string; faceClassName?: string }) {
  return (
    <div className={cx("wc-glint", className)} style={{ "--wc-r": `${radius}px` } as CSSProperties}>
      <div className={cx("wc-glint-face", faceClassName)}>{children}</div>
    </div>
  );
}

/* ---------- Gumlines: eucalyptus contour drawing for teal plates (sparing: at most one per page section) ---------- */
export function Gumlines({ className, count = 9 }: { className?: string; count?: number }) {
  return (
    <svg viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={`M${20 + i * 6} 250 C ${60 + i * 8} ${170 - i * 6}, ${150 - i * 4} ${110 - i * 6}, ${190 - i * 2} ${20 + i * 4}`}
          fill="none"
          stroke="var(--color-mist)"
          strokeOpacity={0.18 + i * 0.05}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/* ---------- Layout ---------- */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={cx("py-20 sm:py-28", className)}>{children}</section>;
}
