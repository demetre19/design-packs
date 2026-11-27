{/* Echo: enrolment access panel uses a cropped step measure behind account creation */}
import { ArrowRight } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Auth2() {
  return (
    <section className="bg-ground px-5 py-20 text-ink md:px-10">
      <div className="group relative mx-auto max-w-3xl overflow-hidden border border-line bg-paper p-7 md:p-10">
        <EchoMeasure index="02" size="lg" surface="bg-paper" />
        <div className="type-micro text-accent">Admissions account</div>
        <h1 className="type-editorial mt-4 max-w-xl text-5xl md:text-7xl">Create access before you apply.</h1>
        <form className="relative z-10 mt-9 grid gap-4">
          <input className="focus-ring border border-line bg-white px-4 py-4 outline-none transition-colors duration-200 ease-crisp hover:border-secondary" placeholder="Parent email" />
          <input type="password" className="focus-ring border border-line bg-white px-4 py-4 outline-none transition-colors duration-200 ease-crisp hover:border-secondary" placeholder="Create password" />
          <button type="button" className="focus-ring group/btn inline-flex w-fit items-center gap-3 border border-ink px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ease-crisp hover:border-accent">Create account <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-crisp group-hover/btn:translate-x-2" /></button>
        </form>
      </div>
    </section>
  );
}
