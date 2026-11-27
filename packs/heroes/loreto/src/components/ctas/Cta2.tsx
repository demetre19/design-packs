{/* Echo: split CTA places the cropped type inside the dark action panel */}
import { ArrowRight } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Cta2() {
  return (
    <section className="grid bg-ink text-white md:grid-cols-2">
      <div className="p-8 md:p-14">
        <div className="type-micro text-accent">Prospectus</div>
        <h2 className="type-editorial mt-4 text-5xl md:text-7xl">A clearer picture before you visit.</h2>
      </div>
      <div className="group relative flex items-end overflow-hidden border-t border-white/15 p-8 md:border-l md:border-t-0 md:p-14">
        <EchoMeasure index="02" tone="dark" size="lg" surface="bg-ink" />
        <a href="#" className="focus-ring group/link relative z-10 inline-flex items-center gap-4 border border-white/50 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:border-accent">
          Request the prospectus <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-crisp group-hover/link:translate-x-2" />
        </a>
      </div>
    </section>
  );
}
