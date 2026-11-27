{/* Artifact: the dilution chart taped inside the cleaner's cupboard door | Echo: each ratio bar is a measured line from concentrate into water | Interactions: hovering or focusing a bar slides the millilitre measure in along it, 280ms */}
import { Droplets } from "lucide-react";
import { products } from "../../records";
import { Container, Section } from "../../echo";

const parts = (r: string) => Number(r.split(":")[1]);

/* THE DILUTION CHART — horizontal ratio bars in unequal flex: a fixed concentrate cell, then a water run proportional to the ratio. Rotated header tab like a taped label. */
export default function Content8() {
  const max = Math.max(...products.map((p) => parts(p.dilution)));
  return (
    <Section className="bg-paper">
      <Container>
        <div className="relative rounded-[6px] border border-line bg-ground px-5 pb-10 pt-14 sm:px-10">
          <span className="wc-label absolute -top-3 left-8 rotate-[-2deg] rounded-[3px] border border-teal bg-mist px-3 py-1 text-teal">Cupboard door · keep current</span>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="wc-display max-w-[16ch] text-[clamp(28px,3.2vw,40px)]">Measured into every bottle, never guessed.</h2>
            <p className="flex items-center gap-2 text-[13px] text-muted"><Droplets size={15} strokeWidth={1.75} className="text-teal" aria-hidden="true" />Content 08 · Dilution chart · per 1 L bottle</p>
          </div>
          <ul className="mt-12 grid gap-9">
            {products.map((p) => {
              const n = parts(p.dilution);
              const ml = Math.round(1000 / (n + 1));
              return (
                <li key={p.code} tabIndex={0} className="wc-draw-host group outline-none">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[15px] font-semibold">{p.name} <span className="wc-label ml-2 text-muted">{p.code}</span></p>
                    <p className="wc-figure text-[20px] text-teal">{p.dilution}</p>
                  </div>
                  <div className="mt-3">
                    <div className="relative flex h-6 items-stretch" style={{ width: `${24 + (n / max) * 46}%` }}>
                      <span className="w-6 shrink-0 rounded-l-full bg-teal" aria-hidden="true" />
                      <span className="flex-1 rounded-r-full bg-mist" aria-hidden="true" />
                      
                      <span className="wc-label absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap text-ink opacity-0 transition-[opacity,translate] duration-[280ms] ease-care [translate:-8px_0] group-hover:opacity-100 group-hover:[translate:0_0] group-focus:opacity-100 group-focus:[translate:0_0]">
                        {ml} mL in 1 L
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-[13px] text-muted">{p.use}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
