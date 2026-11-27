{/* Echo: the footer's top rule wipes teal when the footer is hovered, 300ms; each link's underline wipes in on hover, 300ms */}
import { brand, services } from "../../brand";
import { Container, Rule } from "../../echo";

const cols = [
  { title: "Services", links: services.map((s) => s.name) },
  { title: "Company", links: ["Our team", "Our values", "Careers", "Reviews"] },
  { title: "Legal", links: ["Privacy policy", "Terms of service", "Safety data sheets"] },
];

/* Four-column footer: contact block on 4 columns, three link columns on the remaining 8. */
export default function Footer1() {
  return (
    <footer className="bg-ground pt-16">
      <Container>
        <div className="wc-draw-host"><Rule /></div>
        <div className="grid grid-cols-12 gap-y-12 py-14 md:gap-x-8">
          <div className="col-span-12 md:col-span-4">
            <p className="wc-heading text-[22px]">{brand.short}</p>
            <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-muted">{brand.tagline}.</p>
            <p className="mt-6 text-[15px] tabular-nums">{brand.phone}</p>
            <p className="mt-1 max-w-[30ch] text-[14px] text-muted">{brand.address}</p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title} className="col-span-6 md:col-span-2 md:first-of-type:col-start-6">
              <p className="wc-label text-muted">{c.title}</p>
              <ul className="mt-5 grid gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="wc-draw-host relative inline-block pb-1 text-[15px] transition-colors duration-[260ms] ease-care hover:text-teal">
                      {l}
                      <span className="wc-draw absolute inset-x-0 bottom-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col gap-3 border-t border-line py-6 text-[13px] text-muted sm:flex-row sm:justify-between">
          <p>© 2026 {brand.name}. Est. {brand.founded}.</p>
          <p>{brand.certification} · Police-checked · Fully insured</p>
        </div>
      </Container>
    </footer>
  );
}
