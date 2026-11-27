{/* Echo: the teal panel's rule wipes white when the panel is hovered, 300ms; field hairlines turn teal on focus, 260ms; the chosen account type is outlined teal */}
import { useState } from "react";
import { Check } from "lucide-react";
import { brand } from "../../brand";
import { Container, PillButton } from "../../echo";

/* Create a portal account: promises on 5 columns of teal, the form on 7 of white. */
export default function Auth2() {
  const [type, setType] = useState<"office" | "facility">("office");
  const field = "mt-2 block w-full border-b border-line bg-transparent pb-3 text-[16px] outline-none transition-colors duration-[260ms] ease-care focus:border-teal";
  return (
    <div className="grid min-h-[680px] grid-cols-1 md:grid-cols-12">
      <aside className="flex flex-col justify-between bg-teal p-8 text-paper sm:p-12 md:col-span-5">
        <p className="wc-heading text-[19px]">{brand.short}</p>
        <div className="wc-draw-host mt-16">
          <h2 className="wc-display text-[clamp(30px,3.4vw,44px)]">Every visit, on the record.</h2>
          <ul className="mt-8 grid gap-4 text-[15px] text-mist">
            {["Signed checklist after every clean", "Trees planted on your account", "Invoices and safety data sheets"].map((t) => (
              <li key={t} className="flex gap-3"><Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-paper" aria-hidden="true" />{t}</li>
            ))}
          </ul>
          <div className="relative mt-10 h-px bg-paper/30" aria-hidden="true"><span className="wc-draw absolute inset-0 !bg-paper" /></div>
        </div>
        <p className="mt-16 text-[13px] text-mist">{brand.certification} · Police-checked · Fully insured</p>
      </aside>
      <Container className="flex items-center py-16 md:col-span-7">
        <form className="mx-auto grid w-full max-w-[460px] gap-9" onSubmit={(e) => e.preventDefault()}>
          <div>
            <h1 className="wc-display text-[32px]">Create your portal account</h1>
            <p className="mt-2 text-[15px] text-muted">Use the email on your cleaning agreement.</p>
          </div>
          <fieldset>
            <legend className="wc-label text-muted">Account type</legend>
            <div className="mt-4 grid grid-cols-2 gap-5">
              {(["office", "facility"] as const).map((t) => (
                <label key={t} className="block cursor-pointer">
                  <input type="radio" name="auth2-type" checked={type === t} onChange={() => setType(t)} className="peer sr-only" />
                  <span className={`block rounded-[8px] border px-4 py-3 text-[15px] font-medium transition-colors duration-[240ms] ease-care peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-teal ${type === t ? "border-teal text-teal" : "border-line text-muted"}`}>
                    {t === "office" ? "Office" : "Clinic or centre"}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="wc-draw-host relative block">
            <span className="wc-label text-muted">Work email</span>
            <input id="auth2-email" type="email" autoComplete="email" required className={field} />
            
          </label>
          <label className="wc-draw-host relative block">
            <span className="wc-label text-muted">Create password</span>
            <input id="auth2-password" type="password" autoComplete="new-password" minLength={12} required className={field} />
            
            <span className="mt-2 block text-[13px] text-muted">At least 12 characters.</span>
          </label>
          <div><PillButton type="submit" tone="solid">Create account</PillButton></div>
        </form>
      </Container>
    </div>
  );
}
