{/* Echo: the pill fills teal on hover; the tree line carries the eucalyptus leaf, which lowers and fills on hover, 260ms */}
import { brand } from "../../brand";
import { Container, Leaf, PillButton } from "../../echo";

/* Minimal footer: one row of name, impact line and action, one row of legal. */
export default function Footer3() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="wc-heading text-[18px]">{brand.short}</p>
          <p className="wc-leaf-host relative mt-1 inline-block pr-12 text-[14px] text-muted">
            One tree planted for every clean since {brand.founded}.
            <Leaf bg="var(--color-paper)" className="right-0 top-[5px]" />
          </p>
        </div>
        <PillButton>Request a quote</PillButton>
      </Container>
      <Container className="flex flex-col gap-2 pb-8 text-[13px] text-muted sm:flex-row sm:justify-between">
        <p>© 2026 {brand.name} · {brand.phone}</p>
        <p>{brand.address}</p>
      </Container>
    </footer>
  );
}
