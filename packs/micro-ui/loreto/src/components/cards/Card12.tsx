{/* Record type: timetable period chip | Echo: cropped period number is clipped by the chip edge | Hover: room and teacher metadata slide in as a lateral annotation */}
import { Clock3 } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card12() {
  return (
    <article className="group relative h-[120px] w-full max-w-md overflow-hidden border border-line bg-ground text-ink">
      <EchoMeasure index="12" size="sm" surface="bg-ground" />
      <div className="flex h-full items-center">
        <div className="flex h-full w-24 flex-col justify-center border-r border-line px-4"><Clock3 className="text-accent" size={17} /><div className="type-micro mt-3 text-secondary">10:10</div></div>
        <div className="flex-1 px-5 transition-transform duration-200 ease-crisp group-hover:translate-x-2"><div className="type-micro text-[9px] text-secondary">Period 03</div><h3 className="type-editorial mt-1 text-2xl">Chemistry</h3></div>
        <div className="hidden w-20 border-l border-line px-3 text-right md:block"><span className="type-display text-5xl text-ink/10">L2</span></div>
      </div>
      <aside className="absolute inset-y-0 right-0 flex w-[46%] translate-x-full flex-col justify-center border-l border-ink bg-paper px-4 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Lab 2</div><p className="type-body mt-2 text-xs text-secondary">Titration practical · Dr Ellis</p></aside>
    </article>
  );
}
