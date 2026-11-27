{/* Record type: scholarship evidence tab | Echo: inverted cropped tab number sits beneath the evidence fold | Hover: selection note slides in laterally from the dossier edge */}
import { Stamp } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card7() {
  return (
    <article className="group relative h-[390px] w-full max-w-sm overflow-hidden border border-white/15 bg-ink p-6 text-white">
      <EchoMeasure index="07" tone="dark" size="lg" surface="bg-ink" />
      <div className="flex items-center justify-between"><span className="type-micro text-accent">TAB B</span><Stamp className="text-accent" size={19} /></div>
      <h3 className="type-editorial mt-24 text-4xl">Character evidence</h3>
      <p className="type-body mt-4 max-w-xs text-sm text-white/62">References describe persistence, generosity under pressure and initiative without prompting.</p>
      <div className="absolute bottom-6 left-6 right-6 border-t border-white/15 pt-4"><div className="type-micro flex justify-between text-white/42"><span>Panel read</span><span>Confidential</span></div><div className="mt-4 h-[3px] w-16 bg-accent transition-all duration-200 ease-crisp group-hover:w-40" /></div>
      <aside className="absolute inset-y-0 right-0 flex w-[76%] translate-x-full flex-col justify-center border-l border-white/20 bg-paper p-5 text-ink transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Selection note</div><p className="type-body mt-3 text-xs text-secondary">Evidence is weighted toward observable behaviour repeated across contexts, not eloquent reference prose.</p></aside>
    </article>
  );
}
