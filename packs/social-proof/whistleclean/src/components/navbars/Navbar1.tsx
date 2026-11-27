{/* Echo: the active item's underline is wiped teal; hovering another item wipes its underline in, 300ms */}
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "../../brand";
import { Container, PillButton } from "../../echo";

const items = ["Services", "Pricing", "Our team", "Reviews", "Careers"];

/* Standard bar: wordmark left, items as tabs on the left of centre, action right. Mobile sheet below 768px. */
export default function Navbar1() {
  const [active, setActive] = useState("Services");
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-line bg-paper">
      <Container className="flex h-[76px] items-center gap-10">
        <a href="#" className="wc-heading text-[19px]">{brand.short}</a>
        <nav aria-label="Primary" className="hidden h-full items-stretch gap-7 md:flex">
          {items.map((i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => { e.preventDefault(); setActive(i); }}
              aria-current={active === i ? "page" : undefined}
              className={`wc-draw-host relative flex items-center text-[15px] font-medium transition-colors duration-[260ms] ease-care ${active === i ? "text-teal" : "text-muted hover:text-ink"}`}
            >
              {i}
              <span className="wc-draw absolute inset-x-0 -bottom-px" data-active={active === i ? "true" : undefined} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden md:block"><PillButton icon={false}>Request a quote</PillButton></div>
        <button className="ml-auto md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </Container>
      {open && (
        <nav aria-label="Mobile" className="border-t border-line md:hidden">
          <Container className="grid gap-1 py-4">
            {items.map((i) => <a key={i} href="#" className="py-2 text-[17px]">{i}</a>)}
            <div className="pt-4"><PillButton>Request a quote</PillButton></div>
          </Container>
        </nav>
      )}
    </header>
  );
}
