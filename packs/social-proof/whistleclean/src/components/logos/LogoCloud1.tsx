{/* Echo: client names set as type on a ruled grid; deliberately still */}
import { clients } from "../../brand";
import { Container, Section, SectionLabel } from "../../echo";

/* Ruled grid: four columns of wordmarks set in the label voice, no third-party marks. Names as listed on the current site. */
export default function LogoCloud1() {
  return (
    <Section className="bg-paper py-16 sm:py-20">
      <Container>
        <SectionLabel>Trusted by teams at</SectionLabel>
        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {clients.map((c) => (
            <li key={c}>
              <div className="flex h-20 items-center justify-center px-4 text-center">
                <span className="text-[15px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-[240ms] ease-care">{c}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
