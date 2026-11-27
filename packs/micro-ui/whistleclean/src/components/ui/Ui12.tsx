{/* Mechanism: the cleaner running a cloth once around the edge before signing off the room | Interaction: press and hold to sign off; while held, the edge glint travels one full lap of the button's border; finish the lap and the border fills teal and the label reads Signed; release early and the glint returns to rest | Duration: 900ms lap */}
import { useRef, useState } from "react";


/* Wildcard: hold-to-sign-off. Keyboard users hold Space or Enter. */
export default function Ui12() {
  const [holding, setHolding] = useState(false);
  const [signed, setSigned] = useState(false);
  const timer = useRef<number | null>(null);
  const start = () => {
    if (signed) return;
    setHolding(true);
    timer.current = window.setTimeout(() => { setSigned(true); setHolding(false); }, 900);
  };
  const stop = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setHolding(false);
  };
  return (
    <div className="flex flex-col items-start gap-3">
      <div
        className="rounded-full p-[1.5px]"
        style={{
          background: signed
            ? "var(--color-teal)"
            : "conic-gradient(from var(--wc-a), var(--color-line) 0deg, var(--color-line) 292deg, var(--color-teal) 330deg, var(--color-line) 352deg)",
          animation: holding ? "wc-lap 900ms var(--ease-sweep) 1 both" : undefined,
        }}
      >
        <button
          onPointerDown={start}
          onPointerUp={stop}
          onPointerLeave={stop}
          onKeyDown={(e) => { if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); start(); } }}
          onKeyUp={stop}
          aria-pressed={signed}
          className="relative flex h-12 select-none items-center gap-3 rounded-full bg-paper px-7 text-[15px] font-semibold"
        >
          <span className={signed ? "text-teal" : ""}>{signed ? "Kitchenette signed 20:02" : "Hold to sign off"}</span>
        </button>
      </div>
      {signed && <button onClick={() => setSigned(false)} className="text-[13px] text-muted hover:text-teal">Undo</button>}
    </div>
  );
}
