{/* Record type: interschool sports fixture slip | Echo: inverted cropped fixture number anchors the match slip | Hover: team sheet metadata slides in laterally */}
import { Trophy } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card10() {
  return (
    <article className="group relative h-[190px] w-full max-w-2xl overflow-hidden border border-white/15 bg-ink text-white">
      <EchoMeasure index="10" tone="dark" size="sm" surface="bg-ink" />
      <div className="flex h-full flex-col justify-between p-5">
        <div className="flex items-center justify-between"><div className="type-micro flex items-center gap-2 text-accent"><Trophy size={14} /> Fixture 18</div><span className="type-micro text-white/40">TERM 02</span></div>
        <div className="flex items-end justify-between gap-6">
          <div><h3 className="type-editorial text-4xl">First XI vs Pembroke</h3><div className="type-body mt-2 text-xs text-white/58">Hockey · Home ground · Saturday 08:30</div></div>
          <div className="hidden text-right md:block"><div className="type-display text-6xl text-white/10">H</div><div className="type-micro text-[9px] text-white/40">Home</div></div>
        </div>
      </div>
      <aside className="absolute inset-y-0 right-0 flex w-[44%] translate-x-full flex-col justify-center border-l border-white/20 bg-white/[0.06] p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Team sheet</div><p className="type-body mt-3 text-xs text-white/62">Captain: Year 12 midfielder. Two Year 9 students named in the extended squad.</p></aside>
    </article>
  );
}
