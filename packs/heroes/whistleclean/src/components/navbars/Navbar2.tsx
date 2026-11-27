{/* Echo: the services button opens a single menu panel; the quote pill fills teal on hover, 260ms */}
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { brand, services } from "../../brand";
import { Container, PillButton, Rule } from "../../echo";

/* Utility strip plus main bar with a services menu. The menu opens on click and stays keyboard reachable. */
export default function Navbar2() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative bg-paper">
      <Container className="flex h-10 items-center justify-between text-[13px] text-muted">
        <p className="flex items-center gap-2 tabular-nums"><Phone size={14} strokeWidth={1.75} aria-hidden="true" />{brand.phone}</p>
        <p className="hidden sm:block">No lock-in · One tree per clean</p>
      </Container>
      <div className="wc-draw-host"><Rule /></div>
      <Container className="flex h-[72px] items-center gap-8">
        <a href="#" className="wc-heading text-[19px]">{brand.short}</a>
        <button
          className="flex items-center gap-1.5 text-[15px] font-medium text-muted transition-colors duration-[260ms] ease-care hover:text-ink aria-expanded:text-teal"
          aria-expanded={open}
          aria-controls="nav2-menu"
          onClick={() => setOpen(!open)}
        >
          Services <ChevronDown size={16} strokeWidth={1.75} className={`transition-transform duration-[260ms] ease-care ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
        <a href="#" className="hidden text-[15px] font-medium text-muted hover:text-ink sm:block">Pricing</a>
        <a href="#" className="hidden text-[15px] font-medium text-muted hover:text-ink sm:block">Our team</a>
        <div className="ml-auto"><PillButton icon={false}>Get a quote</PillButton></div>
      </Container>
      {open && (
        <Container className="absolute inset-x-0 top-full z-20 pt-3">
          <div className="max-w-[720px]">
            <ul id="nav2-menu" className="wc-surface grid grid-cols-1 gap-1 p-3 sm:grid-cols-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.slug}>
                    <a href="#" className="flex gap-3 rounded-[10px] p-3 transition-colors duration-[260ms] ease-care hover:bg-mist">
                      <Icon size={18} strokeWidth={1.5} className="mt-0.5 text-teal" aria-hidden="true" />
                      <span><span className="block text-[15px] font-semibold">{s.name}</span><span className="block text-[13px] text-muted">{s.line}</span></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      )}
    </header>
  );
}
