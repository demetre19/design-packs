{/* Mechanism: drawing a line under an entry on a paper worksheet | Interaction: on focus the field's hairline wipes teal from the left; a valid entry keeps it teal after blur; an invalid one shows the reason in words beneath, with no colour flash | Duration: 300ms */}
import { useId, useState } from "react";

export function LineField({ label, type = "text", hint, validate }: { label: string; type?: string; hint?: string; validate?: (v: string) => string | null }) {
  const id = useId();
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);
  const error = touched && validate ? validate(value) : null;
  const ok = touched && !error && value.length > 0;
  return (
    <div className="wc-draw-host relative w-full max-w-[360px]">
      <label htmlFor={id} className="wc-label text-muted">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${id}-msg`}
        className="mt-2 block w-full bg-transparent pb-3 text-[16px] outline-none"
      />
      <span className="absolute inset-x-0 bottom-[22px] h-px bg-line" aria-hidden="true" />
      <span className="wc-draw absolute inset-x-0 bottom-[22px]" data-active={ok ? "true" : undefined} aria-hidden="true" />
      <p id={`${id}-msg`} className={`h-[22px] pt-1.5 text-[12.5px] ${error ? "text-ink" : "text-muted"}`}>{error ?? hint ?? ""}</p>
    </div>
  );
}

/* Form field: the worksheet line. */
export default function Ui4() {
  return (
    <div className="grid gap-8">
      <LineField label="Work email" type="email" hint="We reply the same business day." validate={(v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Enter an email address like you@company.com.au")} />
      <LineField label="People on site" type="number" validate={(v) => (Number(v) > 0 ? null : "Enter how many people work on site")} />
    </div>
  );
}
