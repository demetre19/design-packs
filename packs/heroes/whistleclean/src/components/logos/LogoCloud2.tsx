{/* Echo: client names run on one line separated by quiet hairlines; the line's names turn teal on hover, 260ms */}
import { Fragment } from "react";
import { clients } from "../../brand";
import { Container } from "../../echo";

/* Running line: names wrap naturally; leaves replace bullets as separators. */
export default function LogoCloud2() {
  return (
    <section className="border-y border-line bg-ground py-10">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:gap-12">
        <p className="wc-label shrink-0 text-muted">Cleaning for</p>
        <p className="wc-draw-host flex flex-wrap items-center gap-x-5 gap-y-3 text-[17px] font-semibold text-ink">
          {clients.map((c, i) => (
            <Fragment key={c}>
              <span>{c}</span>
              {i < clients.length - 1 && (
                <span className="inline-block h-3 w-px bg-line" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </p>
      </Container>
    </section>
  );
}
