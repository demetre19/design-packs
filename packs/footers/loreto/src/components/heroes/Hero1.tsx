{/* Echo: the oversized 01 index is cropped at the hero edge and its baseline notch advances on CTA hover */}
import { ArrowRight, MapPin } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';
import { EchoCta } from '../../system/ui';

export default function Hero1() {
  return (
    <section className="group relative min-h-[92vh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 surface-archive opacity-[0.06]" />
      <div className="absolute bottom-0 right-0 top-0 hidden w-[34vw] bg-accent md:block" />
      <div className="absolute bottom-0 right-[8vw] top-[16vh] hidden w-[22vw] border border-white/25 md:block" />
      <EchoMeasure index="01" tone="dark" size="lg" surface="bg-ink" />
      <div className="relative z-10 flex min-h-[92vh] max-w-7xl flex-col justify-between px-5 py-8 md:px-10">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
          <span>Loreto College Marryatville</span>
          <span className="hidden md:inline">Reception–Year 12</span>
        </div>
        <div className="max-w-6xl pb-16">
          <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            <MapPin className="h-4 w-4" /> Adelaide’s eastern suburbs
          </div>
          <h1 className="type-display text-[clamp(3rem,14.5vw,10.5rem)] leading-[0.82]">
            Her ambition, properly heard.
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="type-body max-w-xl text-lg text-white/72 md:text-xl">
              An independent girls’ day and boarding school where scholarship, voice and belonging are treated as seriously as results.
            </p>
            <div className="flex flex-wrap gap-4">
              <EchoCta dark>Book a tour</EchoCta>
              <a href="#" className="focus-ring group/link inline-flex items-center gap-3 border-b border-white/40 px-1 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-200 ease-crisp hover:border-accent">
                Explore enrolment <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-crisp group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
