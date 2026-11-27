{/* Record type: alumna correspondence card | Echo: cropped year becomes the postal archive index | Hover: catalogue annotation slides across the letter edge */}
import { MailOpen } from 'lucide-react';
import { EchoMeasure } from '../../system/echo';

export default function Card8() {
  return (
    <article className="group relative min-h-[230px] w-full max-w-2xl overflow-hidden border border-line bg-ground p-6 text-ink">
      <EchoMeasure index="88" size="sm" surface="bg-ground" />
      <div className="flex items-start justify-between border-b border-line pb-4"><div className="type-micro flex items-center gap-2 text-accent"><MailOpen size={14} /> Letter / 1988</div><span className="type-micro text-secondary">ARCHIVE 7-C</span></div>
      <blockquote className="type-editorial mt-7 max-w-xl text-3xl leading-tight">“Boarding made independence ordinary before it was impressive.”</blockquote>
      <div className="mt-8 flex items-end justify-between"><div><div className="type-editorial text-xl">Priya S.</div><div className="type-micro mt-1 text-[9px] text-secondary">Architect / Singapore</div></div><div className="h-[3px] w-14 bg-accent transition-all duration-200 ease-crisp group-hover:w-40" /></div>
      <aside className="absolute inset-y-0 right-0 flex w-[46%] translate-x-full flex-col justify-center border-l border-ink bg-paper p-5 transition-transform duration-200 ease-crisp group-hover:translate-x-0"><div className="type-micro text-accent">Catalogue note</div><p className="type-body mt-3 text-xs text-secondary">Useful evidence for boarding life, independence and the long arc of confidence.</p></aside>
    </article>
  );
}
