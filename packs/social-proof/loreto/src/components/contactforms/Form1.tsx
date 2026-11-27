{/* Echo: enquiry form uses a cropped step number behind the submit action */}
import { ArrowRight } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Form1() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="group relative mx-auto grid max-w-6xl overflow-hidden border border-line bg-paper md:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-line p-7 md:border-b-0 md:border-r md:p-10">
          <EchoMeasure index="01" size="md" surface="bg-paper" />
          <div className="type-micro text-accent">Enquiry</div>
          <h2 className="type-editorial mt-4 text-5xl">Start the conversation.</h2>
          <p className="type-body mt-5 text-secondary">Tell us what year level you are considering and the admissions team will respond with the right next step.</p>
        </div>
        <form className="grid gap-5 p-7 md:p-10">
          {[['Parent name', 'Jane Fraser'], ['Email', 'jane@example.com'], ['Year level', 'Year 7, 2029']].map(([label, placeholder]) => (
            <label key={label} className="grid gap-2 text-sm font-semibold">{label}<input className="focus-ring border border-line bg-white px-4 py-3 font-normal outline-none transition-colors duration-200 ease-crisp hover:border-secondary" placeholder={placeholder} /></label>
          ))}
          <label className="grid gap-2 text-sm font-semibold">Message<textarea rows={4} className="focus-ring border border-line bg-white px-4 py-3 font-normal outline-none transition-colors duration-200 ease-crisp hover:border-secondary" placeholder="We are considering boarding from Year 8." /></label>
          <button type="button" className="focus-ring group/btn relative inline-flex w-fit items-center gap-3 overflow-hidden border border-ink px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:border-accent">Send enquiry <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-crisp group-hover/btn:translate-x-2" /></button>
        </form>
      </div>
    </section>
  );
}
