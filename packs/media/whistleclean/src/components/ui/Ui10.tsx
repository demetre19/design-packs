{/* Mechanism: the measuring line on a dilution bottle | Interaction: a round knob slides along a hairline track that is wiped teal up to the value; the knob fills teal while dragged or focused; marks snap to real ratios | Duration: 300ms on keyboard steps, 260ms knob fill */}
import { useId, useState } from "react";

const stops = [10, 20, 40, 80];

/* Slider: the dilution line. Native range input underneath for keyboard and screen readers. */
export default function Ui10() {
  const id = useId();
  const [i, setI] = useState(2);
  const [engaged, setEngaged] = useState(false);
  const pct = (i / (stops.length - 1)) * 100;
  const ml = Math.round(1000 / (stops[i] + 1));
  return (
    <div className="w-full max-w-[420px]">
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="wc-label text-muted">Dilution</label>
        <p className="text-[14px]"><span className="wc-figure text-[22px] text-teal">1:{stops[i]}</span><span className="ml-2 text-muted">{ml} mL per litre</span></p>
      </div>
      <div className="relative mt-6 h-10">
        <span className="absolute inset-x-[9px] top-[9px] h-px bg-line" aria-hidden="true" />
        <span className="absolute left-[9px] top-[9px] h-px bg-teal transition-[width] duration-[300ms] ease-care" style={{ width: `calc((100% - 18px) * ${pct / 100})` }} aria-hidden="true" />
        {stops.map((s, n) => (
          <span key={s} className="absolute top-[22px] -translate-x-1/2 text-[11px] tabular-nums text-muted" style={{ left: `calc(9px + (100% - 18px) * ${n / (stops.length - 1)})` }} aria-hidden="true">1:{s}</span>
        ))}
        <span
          className={`absolute top-0 h-[18px] w-[18px] rounded-full border-[1.5px] transition-[left,background-color,border-color] duration-[300ms] ease-care ${engaged ? "border-teal bg-teal" : "border-ink bg-paper"}`}
          style={{ left: `calc((100% - 18px) * ${pct / 100})` }}
          aria-hidden="true"
        />
        <input
          id={id}
          type="range"
          min={0}
          max={stops.length - 1}
          step={1}
          value={i}
          onChange={(e) => setI(Number(e.target.value))}
          onFocus={() => setEngaged(true)}
          onBlur={() => setEngaged(false)}
          onPointerEnter={() => setEngaged(true)}
          onPointerLeave={() => setEngaged(false)}
          aria-valuetext={`1 to ${stops[i]}, ${ml} millilitres per litre`}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>
    </div>
  );
}
