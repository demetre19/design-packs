{/* Record type: house point ledger slip | Echo: inverted cropped house number acts as the ledger control total | Hover: audit note slides in laterally */}
import { ClipboardCheck } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card14() {
  return (
    <article className="group relative h-[280px] w-full max-w-md overflow-hidden border border-white/15 bg-ink p-5 text-white">
      <EchoMeasure index="14" tone="dark" size="sm" surface="bg-ink" />
      <div className="flex items-center justify-between"><span className="type-micro flex items-center gap-2 text-accent"><ClipboardCheck size={14} /> House ledger</span><span className="type-micro text-white/40">WEEK 08</span></div>
      <div className="mt-10 flex items-end justify-between"><div><div className="type-micro text-white/45">Barry House</div><div className="type-display mt-2 text-7xl">128</div></div><div className="type-editorial pb-2 text-2xl text-accent">+18</div></div>
      <div className="mt-8 space-y-3 border-t border-white/15 pt-5 text-xs text-white/58"><div className="flex justify-between"><span>Service</span><span>+8</span></div><div className="flex justify-between"><span>Sport</span><span>+6</span></div><div className="flex justify-between"><span>Music</span><span>+4</span></div></div>
      <aside className="absolute inset-y-0 right-0 flex w-[62%] translate-x-full flex-col justify-center border-l border-white/20 bg-white/[0.06] p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Audit note</div><p className="type-body mt-3 text-xs text-white/62">Service points verified against the community partnership log before posting.</p></aside>
    </article>
  );
}
