{/* Record type: boarding overnight leave chit | Echo: dark inverted measure reads as the chit’s control number | Hover: leave conditions slide in laterally and approval rule extends */}
import { MoonStar } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card4() {
  return (
    <article className="group relative h-[205px] w-full max-w-xl overflow-hidden border border-white/15 bg-ink text-white">
      <EchoMeasure index="04" tone="dark" size="sm" surface="bg-ink" />
      <div className="flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between"><div><div className="type-micro flex items-center gap-2 text-accent"><MoonStar size={14} /> Leave chit</div><h3 className="type-editorial mt-4 text-3xl">Weekend leave approved</h3></div><span className="type-micro border border-white/20 px-2 py-1 text-white/60">HOUSE 02</span></div>
        <div className="flex items-end justify-between border-t border-white/15 pt-4">
          <div className="type-body max-w-xs text-xs text-white/60">Depart Friday 16:30 · Return Sunday 18:00</div>
          <div className="h-[3px] w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-36" />
        </div>
      </div>
      <aside className="absolute inset-y-0 right-0 flex w-[48%] translate-x-full flex-col justify-center border-l border-white/20 bg-white/[0.06] p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0">
        <div className="type-micro text-accent">Conditions</div>
        <p className="type-body mt-3 text-xs text-white/62">Guardian sign-out required. Direct travel only. House notified on return.</p>
      </aside>
    </article>
  );
}
