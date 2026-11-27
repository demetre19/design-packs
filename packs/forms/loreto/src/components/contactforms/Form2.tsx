{/* Echo: tour booking form uses cropped numerals to mark the current step */}
import { Calendar } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Form2() {
  return (
    <section className="bg-ink px-5 py-20 text-white md:px-10">
      <div className="group relative mx-auto max-w-5xl overflow-hidden border border-white/15 p-7 md:p-10">
        <EchoMeasure index="02" tone="dark" size="lg" surface="bg-ink" />
        <div className="type-micro text-accent">College tour</div>
        <h2 className="type-editorial mt-4 max-w-2xl text-5xl md:text-7xl">Choose a time to see the school properly.</h2>
        <form className="relative z-10 mt-10 grid gap-4 md:grid-cols-4">
          {['Parent name', 'Email', 'Preferred term'].map((placeholder) => <input key={placeholder} className="focus-ring border border-white/20 bg-transparent px-4 py-4 text-white placeholder-white/45 outline-none transition-colors duration-200 ease-crisp hover:border-white/50" placeholder={placeholder} />)}
          <button type="button" className="focus-ring inline-flex items-center justify-center gap-3 border border-accent px-4 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-accent transition-colors duration-200 ease-crisp hover:bg-accent hover:text-ink"><Calendar className="h-4 w-4" />Reserve</button>
        </form>
      </div>
    </section>
  );
}
