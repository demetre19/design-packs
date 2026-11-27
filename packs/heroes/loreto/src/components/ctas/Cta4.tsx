{/* Echo: application strip uses the measure as a progress-like decision point */}
import { ArrowRight } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Cta4() {
  return (
    <section className="bg-ink px-5 py-8 text-white md:px-10">
      <div className="group relative mx-auto flex max-w-7xl flex-col overflow-hidden border border-white/15 p-5 md:flex-row md:items-center md:justify-between">
        <EchoMeasure index="04" tone="dark" size="sm" surface="bg-ink" />
        <div>
          <div className="type-micro text-accent">Applications open</div>
          <div className="mt-1 text-2xl font-semibold tracking-[-0.035em]">Early application improves placement certainty.</div>
        </div>
        <a href="#" className="focus-ring group/link relative z-10 mt-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white md:mt-0">
          Apply now <ArrowRight className="h-4 w-4 text-accent transition-transform duration-200 ease-crisp group-hover/link:translate-x-2" />
        </a>
      </div>
    </section>
  );
}
