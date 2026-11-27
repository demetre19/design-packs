{/* Artifact: excursion permission slip | Echo: measure becomes the slip reference clipped at the paper edge | Interactions: consent clauses, return strip and signature rule shift laterally on hover/focus */}
import { BusFront, CheckSquare, PenTool } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Content11() {
  return (
    <section className="bg-paper px-5 py-24 text-ink md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-ink bg-ground">
        <EchoMeasure index="11" size="lg" surface="bg-ground" />
        <div className="absolute inset-y-0 right-0 hidden w-4 border-l border-dashed border-line md:block" />
        <div className="relative border-b border-ink px-5 py-5 md:px-10">
          <div className="type-micro flex flex-col gap-3 text-secondary md:flex-row md:items-center md:justify-between"><span className="flex items-center gap-2 text-accent"><BusFront size={14} /> Fieldwork consent</span><span>Urban systems / Year 8</span><span>Return by Friday</span></div>
        </div>
        <div className="relative px-5 py-10 md:px-10 md:py-14">
          <h2 className="type-editorial max-w-4xl text-5xl md:text-7xl">Even administration can respect intelligence.</h2>
          <p className="type-body mt-5 max-w-xl text-sm text-secondary">A Year 8 fieldwork slip explains purpose, supervision and return logistics without hiding behind bureaucratic fog.</p>
          <div className="mt-12 md:flex md:items-start">
            {[
              ['Purpose', 'Students test how public infrastructure shapes movement, access and safety.', 'md:flex-[1.15]'],
              ['Supervision', 'Three teaching staff, one first-aid officer, attendance checked at each transfer point.', 'md:flex-[0.95] md:mt-14'],
              ['Return', 'Students return to campus by 3:20 pm for normal dismissal.', 'md:flex-[0.8] md:mt-28']
            ].map((line) => (
              <article key={line[0]} className={`group relative mb-8 md:mb-0 md:px-5 ${line[2]}`}>
                <CheckSquare className="text-accent transition-transform duration-200 ease-crisp group-hover:translate-x-2" size={18} />
                <div className="type-micro mt-4">{line[0]}</div>
                <p className="type-body mt-3 text-sm text-secondary">{line[1]}</p>
                <div className="mt-5 h-px w-10 bg-accent transition-all duration-200 ease-crisp group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
        <div className="group relative border-t border-dashed border-ink bg-paper px-5 py-6 transition-transform duration-200 ease-crisp hover:translate-x-2 focus-within:translate-x-2 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end">
            <div className="type-micro flex items-center gap-2 text-accent"><PenTool size={14} /> Parent signature</div>
            <div className="h-px flex-1 bg-ink/45" />
            <div className="type-micro text-[9px] text-secondary">Signed / dated</div>
          </div>
        </div>
      </div>
    </section>
  );
}
