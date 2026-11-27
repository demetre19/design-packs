{/* Record type: uniform alteration ticket | Echo: cropped ticket number is cut by the perforated edge | Hover: alteration instruction slides in laterally */}
import { Scissors } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card15() {
  return (
    <article className="group relative h-[330px] w-full max-w-[280px] overflow-hidden border border-ink bg-ground p-5 text-ink">
      <EchoMeasure index="15" size="sm" surface="bg-ground" />
      <div className="flex items-center justify-between border-b border-line pb-4"><span className="type-micro flex items-center gap-2 text-accent"><Scissors size={14} /> Alteration</span><span className="type-micro text-secondary">No. 0274</span></div>
      <h3 className="type-editorial mt-10 text-3xl">Blazer sleeve release</h3>
      <div className="mt-8 space-y-5"><div><div className="type-micro text-[9px] text-secondary">Measure</div><div className="type-editorial mt-1 text-xl">+2 cm</div></div><div><div className="type-micro text-[9px] text-secondary">Collect</div><div className="type-editorial mt-1 text-xl">Thursday</div></div></div>
      <div className="absolute bottom-5 left-5 h-[3px] w-14 bg-accent transition-all duration-200 ease-crisp group-hover:w-36" />
      <aside className="absolute inset-y-0 right-0 flex w-[72%] translate-x-full flex-col justify-center border-l border-dashed border-ink bg-paper p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Instruction</div><p className="type-body mt-3 text-xs text-secondary">Check movement at shoulder before final hem. Do not press the academy braid flat.</p></aside>
    </article>
  );
}
