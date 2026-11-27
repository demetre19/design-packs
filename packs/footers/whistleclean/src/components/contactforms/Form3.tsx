{/* Echo: the contact card wears the edge glint, lapping its border on hover, 900ms; field hairlines turn teal on focus, 260ms */}
import { useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { brand } from "../../brand";
import { Container, Glint, PillButton, Section } from "../../echo";

/* Contact split: office details on the left half of the card, a short callback form on the right. */
export default function Form3() {
  const [sent, setSent] = useState(false);
  return (
    <Section className="bg-ground">
      <Container>
        <Glint radius={20} faceClassName="grid grid-cols-1 md:grid-cols-2">
          <div className="border-b border-line p-8 sm:p-10 md:border-b-0 md:border-r">
            <p className="wc-label text-muted">Contact</p>
            <h2 className="wc-display mt-5 text-[clamp(28px,3vw,38px)]">Prompt, personal responses.</h2>
            <ul className="mt-8 grid gap-5 text-[15px]">
              <li className="flex gap-3"><Phone size={18} strokeWidth={1.75} className="mt-0.5 text-teal" aria-hidden="true" /><span className="tabular-nums">{brand.phone}</span></li>
              <li className="flex gap-3"><MapPin size={18} strokeWidth={1.75} className="mt-0.5 text-teal" aria-hidden="true" />{brand.address}</li>
              <li className="flex gap-3"><Clock size={18} strokeWidth={1.75} className="mt-0.5 text-teal" aria-hidden="true" />Office hours Monday to Friday, 8:30am to 5:00pm</li>
            </ul>
          </div>
          <form className="grid content-start gap-8 p-8 sm:p-10" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <p className="wc-label text-muted">Request a call back</p>
            <label className="wc-draw-host relative block">
              <span className="wc-label text-muted">Phone</span>
              <input id="f3-phone" type="tel" required className="mt-2 block w-full border-b border-line bg-transparent pb-3 text-[16px] outline-none transition-colors duration-[260ms] ease-care focus:border-teal" />
              
            </label>
            <label className="wc-draw-host relative block">
              <span className="wc-label text-muted">Best time</span>
              <input id="f3-time" className="mt-2 block w-full border-b border-line bg-transparent pb-3 text-[16px] outline-none transition-colors duration-[260ms] ease-care focus:border-teal" placeholder="e.g. Tuesday after 2pm" />
              
            </label>
            {sent ? <p className="text-[15px] text-teal" role="status">Booked. We'll call at the time you gave.</p> : <div><PillButton type="submit">Call me back</PillButton></div>}
          </form>
        </Glint>
      </Container>
    </Section>
  );
}
