{/* Record type: instrument loan tag | Echo: cropped inventory number interrupts the punched tag edge | Hover: return rule and instrument code move laterally */}
import { Music2 } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card9() {
  return (
    <article className="group relative h-[360px] w-full max-w-[260px] overflow-hidden border border-ink bg-paper p-5 text-ink">
      <EchoMeasure index="09" size="sm" surface="bg-paper" />
      <div className="mx-auto h-4 w-4 rounded-full border border-ink bg-ground" />
      <div className="mt-8 flex justify-center"><Music2 className="text-accent" size={28} /></div>
      <div className="mt-10 text-center"><div className="type-micro text-secondary">Instrument loan</div><h3 className="type-editorial mt-3 text-3xl">Cello 04</h3></div>
      <div className="mt-10 space-y-4 border-t border-dashed border-line pt-5 text-center">
        <div><div className="type-micro text-[9px] text-secondary">Borrower</div><div className="type-editorial mt-1 text-xl">Year 9 ensemble</div></div>
        <div><div className="type-micro text-[9px] text-secondary">Return</div><div className="type-editorial mt-1 text-xl">Fri 15:40</div></div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 h-[3px] w-12 bg-accent transition-all duration-200 ease-crisp group-hover:w-40" />
    </article>
  );
}
