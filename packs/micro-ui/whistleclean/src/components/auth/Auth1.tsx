{/* Echo: the sign-in card wears the edge glint, which laps its border once on hover, 900ms; each field's hairline turns teal on focus, 260ms; the pill fills teal on hover */}
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { brand } from "../../brand";
import { Glint, PillButton } from "../../echo";

/* Client portal sign-in: a single 440px card centred on the ground, two fields, one action. */
export default function Auth1() {
  const [show, setShow] = useState(false);
  const field = "mt-2 block w-full border-b border-line bg-transparent pb-3 text-[16px] outline-none transition-colors duration-[260ms] ease-care focus:border-teal";
  return (
    <div className="flex min-h-[640px] items-center justify-center bg-ground px-5 py-16">
      <Glint radius={20} className="w-full max-w-[440px]" faceClassName="p-8 sm:p-10">
        <p className="wc-label text-muted">{brand.short} client portal</p>
        <h1 className="wc-display mt-4 text-[32px]">Sign in</h1>
        <p className="mt-2 text-[15px] text-muted">See visit logs, checklists and invoices for your sites.</p>
        <form className="mt-10 grid gap-9" onSubmit={(e) => e.preventDefault()}>
          <label className="wc-draw-host relative block">
            <span className="wc-label text-muted">Email</span>
            <input id="auth1-email" type="email" autoComplete="email" required className={field} />
            
          </label>
          <label className="wc-draw-host relative block">
            <span className="wc-label text-muted">Password</span>
            <input id="auth1-password" type={show ? "text" : "password"} autoComplete="current-password" required className={field + " pr-16"} />
            <button
              type="button"
              onClick={() => setShow(!show)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute bottom-3 right-9 text-muted hover:text-teal"
            >
              {show ? <EyeOff size={18} strokeWidth={1.75} /> : <Eye size={18} strokeWidth={1.75} />}
            </button>
            
          </label>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <PillButton type="submit" tone="solid">Sign in</PillButton>
            <a href="#" className="text-[14px] font-medium text-muted hover:text-teal">Forgot password</a>
          </div>
        </form>
      </Glint>
    </div>
  );
}
