{/* Record type: library borrowing record | Echo: cropped checkout number interrupts the card edge | Hover: previous loan history slides in from the right */}
import { BookOpen } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card3() {
  return (
    <article className="group relative h-[190px] w-full max-w-2xl overflow-hidden border border-line bg-ground text-ink">
      <EchoMeasure index="03" size="sm" surface="bg-ground" />
      <div className="flex h-full">
        <div className="flex w-24 flex-col justify-between border-r border-line p-4"><BookOpen className="text-accent" size={20} /><span className="type-display text-6xl text-ink/10">03</span></div>
        <div className="flex-1 p-5">
          <div className="type-micro text-secondary">Borrowing record / senior library</div>
          <h3 className="type-editorial mt-4 text-3xl">Hidden Figures</h3>
          <div className="type-body mt-2 text-sm text-secondary">Margot Lee Shetterly · STEM biography shelf</div>
          <div className="mt-6 h-px w-20 bg-accent transition-all duration-200 ease-crisp group-hover:w-64" />
        </div>
        <div className="hidden w-32 border-l border-line p-4 md:block"><div className="type-micro text-[9px] text-secondary">DUE</div><div className="type-editorial mt-3 text-2xl">04 APR</div></div>
      </div>
      <aside className="absolute inset-y-0 right-0 w-64 translate-x-full border-l border-ink bg-paper p-4 transition-transform duration-200 ease-crisp group-hover:translate-x-0">
        <div className="type-micro text-accent">Loan history</div>
        <div className="mt-4 space-y-3 text-xs text-secondary"><p>Renewed once before due date.</p><p>Returned with notes for the STEM reading circle.</p></div>
      </aside>
    </article>
  );
}
