{/* Echo: media panel carries the cropped index while the ticket-style CTA measure moves on hover */}
import { Calendar, ArrowRight } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { ArtPlate } from '../../system/ui';

export default function Hero4() {
  return (
    <section className="relative bg-ink text-white">
      <div className="absolute inset-0 opacity-45"><ArtPlate variant={2} /></div>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="group relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end overflow-hidden px-5 py-14 md:px-10">
        <EchoMeasure index="04" tone="dark" size="lg" surface="bg-ink" />
        <div className="max-w-4xl">
          <div className="type-micro mb-5 text-accent">College tours now open</div>
          <h1 className="type-editorial text-6xl md:text-9xl">See what changes when every voice is expected.</h1>
        </div>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <a href="#" className="focus-ring group/tour relative inline-flex items-center gap-4 overflow-hidden border border-white/50 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:border-accent">
            <Calendar className="h-4 w-4" /> Reserve a tour place
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-crisp group-hover/tour:translate-x-2" />
          </a>
          <div className="text-sm text-white/70">Saturday morning and small-group tours available during term.</div>
        </div>
      </div>
    </section>
  );
}
