{/* Record type: a fixed quote issued after a site walk | Echo: the quote is a call to action, so it wears the edge glint | Hover: the glint laps the border once, 900ms; a breakdown drawer opens along the total rule, 300ms */}
import { aud } from "../../brand";
import { Glint } from "../../echo";

const lines = [
  { k: "Three cleans a week", v: 2640 },
  { k: "Kitchenette deep clean, monthly", v: 180 },
  { k: "Consumables, managed", v: 240 },
];

/* Typographic quote record. No image. About 340 × 280 at rest. SAMPLE figures. */
export default function Card9() {
  const total = lines.reduce((a, l) => a + l.v, 0);
  return (
    <Glint radius={16} className="w-full max-w-[340px]" faceClassName="wc-draw-host group p-6">
      <div tabIndex={0} className="outline-none">
        <div className="flex items-baseline justify-between">
          <p className="wc-label text-muted">Quote Q-2611-04</p>
          <p className="wc-label text-teal">Valid 30 days</p>
        </div>
        <p className="mt-4 text-[15px] font-semibold">Studio floor, 12 Gwynne St</p>
        <p className="mt-6 flex items-baseline gap-2"><span className="wc-figure text-[40px]">{aud(total)}</span><span className="text-[14px] text-muted">/ mo + GST</span></p>
        <div className="relative mt-4 h-px bg-line"><span className="wc-draw absolute inset-0" /></div>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[300ms] ease-care group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
          <ul className="overflow-hidden">
            {lines.map((l) => (
              <li key={l.k} className="flex justify-between gap-4 pt-3 text-[13px]"><span className="text-muted">{l.k}</span><span className="tabular-nums">{aud(l.v)}</span></li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-[13px] text-muted">No lock-in. Cancel with notice.</p>
      </div>
    </Glint>
  );
}
