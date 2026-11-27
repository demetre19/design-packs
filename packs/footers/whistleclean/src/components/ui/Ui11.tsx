{/* Mechanism: working down the zones of a nightly checklist | Interaction: progress is a row of hairline segments, one per zone; each finished zone's segment wipes teal from the left in turn; while loading, segments wipe in sequence and clear again | Duration: 300ms per segment, 900ms loading step */}
import { useEffect, useState } from "react";

export function ZoneProgress({ done, total, label }: { done: number; total: number; label: string }) {
  return (
    <div className="w-full max-w-[420px]">
      <div className="flex items-baseline justify-between">
        <p className="wc-label text-muted">{label}</p>
        <p className="text-[13px] tabular-nums"><span className="font-semibold text-teal">{done}</span><span className="text-muted"> of {total}</span></p>
      </div>
      <div className="mt-3 flex gap-1.5" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label={label}>
        {Array.from({ length: total }, (_, n) => (
          <span key={n} className="relative h-[3px] flex-1 bg-line">
            <span className="wc-draw absolute inset-0 !h-[3px]" data-active={n < done ? "true" : undefined} style={{ transitionDelay: `${n * 40}ms` }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* Progress and loading: the checklist row. The loading variant steps every 900ms. */
export default function Ui11() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setTick((x) => (x + 1) % 6), 900);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="grid gap-8">
      <ZoneProgress done={3} total={5} label="Zones signed tonight" />
      <ZoneProgress done={tick} total={5} label="Loading visit log" />
    </div>
  );
}
