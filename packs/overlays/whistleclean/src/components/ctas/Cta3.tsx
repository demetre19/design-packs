{/* Echo: the email field's hairline turns teal on focus, 260ms; the send pill fills teal on hover */}
import { useState } from "react";
import { Container, PillButton, Section } from "../../echo";

/* Inline capture: a single field on a hairline, label voice above, confirmation stated in words. */
export default function Cta3() {
  const [sent, setSent] = useState(false);
  return (
    <Section className="bg-paper">
      <Container className="grid grid-cols-12 items-end gap-y-10 md:gap-x-8">
        <div className="col-span-12 md:col-span-5">
          <h2 className="wc-display text-[clamp(28px,3.4vw,42px)]">Get the office cleaning checklist.</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">The 42-point list our cleaners sign every night, as a one-page PDF.</p>
        </div>
        <form
          className="col-span-12 flex flex-col gap-6 sm:flex-row sm:items-end md:col-span-6 md:col-start-7"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <label className="wc-draw-host relative block flex-1">
            <span className="wc-label text-muted">Work email</span>
            <input
              id="cta3-email"
              type="email"
              required
              placeholder="you@company.com.au"
              className="mt-2 block w-full border-b border-line bg-transparent pb-3 text-[17px] outline-none transition-colors duration-[260ms] ease-care placeholder:text-muted/60 focus:border-teal"
            />
            
          </label>
          <PillButton type="submit">Send it</PillButton>
        </form>
        {sent && <p className="col-span-12 text-[15px] text-teal md:col-start-7" role="status">Sent. Check your inbox for the checklist.</p>}
      </Container>
    </Section>
  );
}
