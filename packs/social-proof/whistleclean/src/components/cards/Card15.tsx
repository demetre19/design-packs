{/* Record type: one rostered shift (site, start, finish, cleaner) | Echo: the shift is a mist bar on a night-long hairline | Hover: the bar fills teal from the left behind the cleaner's name, 300ms */}


const pct = (h: number) => (((h < 17 ? h + 24 : h) - 17) / 14) * 100;

/* Landscape timeline strip, about 520 × 110. No image. SAMPLE shift. */
export default function Card15({ site = "Harbour clinic, rooms 1 to 6", from = 19, to = 21.5, who = "Priya K." }: { site?: string; from?: number; to?: number; who?: string }) {
  const fmt = (h: number) => `${String(Math.floor(h)).padStart(2, "0")}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
  return (
    <article tabIndex={0} className="wc-draw-host w-full max-w-[520px] rounded-[14px] border border-line bg-paper p-5 outline-none">
      <div className="flex items-baseline justify-between gap-4">
        <p className="truncate text-[15px] font-semibold">{site}</p>
        <p className="wc-label shrink-0 text-muted">{fmt(from)} to {fmt(to)}</p>
      </div>
      <div className="relative mb-2 mt-9 h-px bg-line">
        <span className="wc-draw absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-[13px] flex h-[26px] items-center overflow-hidden rounded-full bg-mist px-2.5" style={{ left: `${pct(from)}%`, width: `${pct(to) - pct(from)}%` }}>
          <span className="absolute inset-0 bg-teal transition-[clip-path] duration-[300ms] ease-care [clip-path:inset(0_100%_0_0)] [.wc-draw-host:hover_&]:[clip-path:inset(0)] [.wc-draw-host:focus_&]:[clip-path:inset(0)]" aria-hidden="true" />
          <span className="wc-label relative truncate text-teal mix-blend-normal [.wc-draw-host:hover_&]:text-paper [.wc-draw-host:focus_&]:text-paper">{who}</span>
        </div>
      </div>
      <div className="wc-label mt-4 flex justify-between text-muted"><span>17:00</span><span>23:00</span><span>07:00</span></div>
    </article>
  );
}
