{/* Mechanism: the sliding room-status sign on a door, 'Cleaning' to 'Clear' | Interaction: a hairline pill track whose knob slides sideways along it; switched on, the track fills teal behind the knob as if wiped | Duration: 260ms knob, 300ms fill */}
import { useId, useState } from "react";

export function StatusSwitch({ label, offText, onText, defaultOn = false }: { label: string; offText: string; onText: string; defaultOn?: boolean }) {
  const id = useId();
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center gap-4">
      <button
        id={id}
        role="switch"
        aria-checked={on}
        onClick={() => setOn(!on)}
        className="relative h-6 w-11 shrink-0 overflow-hidden rounded-full border-[1.5px] border-ink/70"
      >
        <span className={`absolute inset-0 bg-teal transition-[clip-path] duration-[300ms] ease-care ${on ? "[clip-path:inset(0)]" : "[clip-path:inset(0_100%_0_0)]"}`} aria-hidden="true" />
        <span className={`absolute top-[3px] h-[15px] w-[15px] rounded-full transition-[left,background-color] duration-[260ms] ease-care ${on ? "left-[23px] bg-paper" : "left-[3px] bg-ink"}`} aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </button>
      <label htmlFor={id} className="cursor-pointer text-[14px]">
        <span className={`font-semibold transition-colors duration-[260ms] ease-care ${on ? "text-teal" : "text-ink"}`}>{on ? onText : offText}</span>
        <span className="ml-2 text-muted">{label}</span>
      </label>
    </div>
  );
}

/* Toggle: the door sign. */
export default function Ui5() {
  return (
    <div className="grid gap-5">
      <StatusSwitch label="Meeting room 2" offText="Cleaning" onText="Clear" />
      <StatusSwitch label="Kitchenette" offText="Cleaning" onText="Clear" defaultOn />
      <StatusSwitch label="Use fragrance-free products" offText="Off" onText="On" />
    </div>
  );
}
