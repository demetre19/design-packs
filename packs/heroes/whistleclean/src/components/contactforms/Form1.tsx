{/* Echo: each field is a hairline that turns teal on focus, 260ms; the submit pill fills teal on hover */}
import { useState, type ReactNode } from "react";
import { brand, services } from "../../brand";
import { Container, PillButton, Section } from "../../echo";

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="wc-draw-host relative">
      <label htmlFor={id} className="wc-label text-muted">{label}</label>
      {children}
      
    </div>
  );
}
const line = "mt-2 block w-full border-b border-line bg-transparent pb-3 text-[16px] outline-none transition-colors duration-[260ms] ease-care focus:border-teal";

/* Quote form: copy on 4 columns, the form on 7, fields on a two-column sub-grid. */
export default function Form1() {
  const [sent, setSent] = useState(false);
  return (
    <Section className="bg-ground" id="quote">
      <Container className="grid grid-cols-12 gap-y-12 md:gap-x-8">
        <div className="col-span-12 md:col-span-4">
          <p className="wc-label text-muted">Request a quote</p>
          <h2 className="wc-display mt-6 text-[clamp(32px,4vw,48px)]">Tell us about your space.</h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">{brand.noPitch}</p>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 wc-surface p-7 sm:p-10">
          {sent ? (
            <p className="text-[17px]" role="status">Thanks. Katrina will reply today with times for a discovery call.</p>
          ) : (
            <form className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field id="f1-name" label="Your name"><input id="f1-name" required className={line} autoComplete="name" /></Field>
              <Field id="f1-company" label="Company"><input id="f1-company" className={line} autoComplete="organization" /></Field>
              <Field id="f1-email" label="Work email"><input id="f1-email" type="email" required className={line} autoComplete="email" /></Field>
              <Field id="f1-people" label="People on site"><input id="f1-people" type="number" min={1} className={line} placeholder="e.g. 24" /></Field>
              <Field id="f1-service" label="Service">
                <select id="f1-service" className={line + " appearance-none"} defaultValue="office">
                  {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                </select>
              </Field>
              <Field id="f1-suburb" label="Suburb"><input id="f1-suburb" className={line} placeholder="e.g. Cremorne" /></Field>
              <div className="sm:col-span-2">
                <Field id="f1-notes" label="Anything we should know"><textarea id="f1-notes" rows={3} className={line + " resize-none"} /></Field>
              </div>
              <div className="sm:col-span-2"><PillButton type="submit">Send request</PillButton></div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
