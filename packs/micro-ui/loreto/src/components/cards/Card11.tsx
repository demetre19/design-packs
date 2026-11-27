{/* Record type: debating motion slip | Echo: oversized cropped round number cuts into the motion line | Hover: counter-motion annotation slides in laterally */}
import { MessagesSquare } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card11() {
  return (
    <article className="group relative h-[165px] w-full max-w-3xl overflow-hidden border-y border-ink bg-paper px-6 py-5 text-ink">
      <EchoMeasure index="11" size="sm" surface="bg-paper" />
      <div className="type-micro flex items-center gap-2 text-accent"><MessagesSquare size={14} /> Round 03 / affirmative</div>
      <h3 className="type-editorial mt-5 max-w-2xl text-4xl">That public transport should be free for students.</h3>
      <div className="mt-5 h-[3px] w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-72" />
      <aside className="absolute inset-y-0 right-0 flex w-[42%] translate-x-full items-center border-l border-ink bg-ground px-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><p className="type-body text-xs text-secondary"><span className="type-micro block text-accent">Counter-note</span><span className="mt-2 block">Prepare the access argument before the funding argument.</span></p></aside>
    </article>
  );
}
